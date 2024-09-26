export const formatCountries = (data) => {
    return data.map((e) => {
        return { label: e.label, value: e.label };
    });
};

export const formatProvinces = (data) => {
    return data.map((e) => {
        return { label: e.name, value: e.name, ...e };
    });
};

export const formatCities = (data) => {
    return data.map((e) => {
        return { label: e.name, value: e.name, ...e };
    });
};


export const formatBarangay = (data) => {
    return data.map((e) => {
        return { label: e.name, value: e.name, ...e };
    });
};
