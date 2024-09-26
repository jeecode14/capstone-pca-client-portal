import { pickBy, get } from 'lodash';

export const leadingZero = (input) => {
    if (!isNaN(input.value) && input.value.length === 1) {
        input.value = '0' + input.value;
    }
};

export const getError = (error) => {
    if (typeof error === 'string') {
        return error;
    } else {
        for (let property in error) {
            if (get(error[property], '0') === 'validation.unique') {
                return 'This email address has already been used, please sign in using existing details';
            }
            return error[property];
        }
    }
};

export const getToken = () => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    return auth.access_token;
};

export const getTokenMaxAge = () => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    return auth.expires_in;
};

export const isArray = (obj) => Object.prototype.toString.call(obj) === '[object Array]';

export const getLocationID = (loc) => {
    const getId = loc.map((x) => x.id);
    return { locations: getId };
};

export const formatCheckedItems = (data) => {
    const format = Object.keys(data).map((keys) => {
        const cleaned = pickBy(data[keys], (value) => {
            return value === true;
        });
        return {
            [`${keys}`]: Object.keys(cleaned)
        };
    });
    let obj = {};
    for (let val in format) {
        Object.assign(obj, format[val]);
    }
    return obj;
};

export const kFormatter = (num) => {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
};
// export const kFormatter = (num) => {
//     return Math.abs(num) > 999
//         ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
//         : Math.sign(num) * Math.abs(num);
// };

export const formatMoney = (amount, decimalCount = 2, decimal = '.', thousands = ',') => {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
        (decimalCount
            ? decimal +
              Math.abs(amount - i)
                  .toFixed(decimalCount)
                  .slice(2)
            : '')
    );
};

export const getColorVal = (data) => {
    if (data >= 85 && data <= 89) {
        return '#7a9af9';
    } else if (data >= 90 && data <= 94) {
        return '#6919D4';
    } else if (data >= 95 && data <= 100) {
        return '#04325e';
    }
};

export const getMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return 'Windows Phone';
    }

    if (/android/i.test(userAgent)) {
        return 'Android';
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS';
    }

    return 'unknown';
};

export const parseJSON = (inputString) => {
    if (inputString) {
        try {
            return JSON.parse(inputString);
        } catch (e) {
            throw new Error('Error occured: ', e);
        }
    }
};
