export const fetchBarangayList = async (muni_code) => {
    
    const response = await fetch(`https://psgc.cloud/api/cities-municipalities/${muni_code}/barangays`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
    })

    return response.json();

}