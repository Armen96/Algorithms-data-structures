let cityList = [];

export const initializeCityDatabase = () => {
    cityList.push('erevan');
    cityList.push('parise');
    cityList.push('lion');
    cityList.push('moscow');
}

export const clearCityDatabase = () => {
    cityList = [];
}

export const isCity = (city) => {
    return cityList.includes(city);
}

export const initializeCityDatabaseOnce = () => {
    cityList.push('jest');
}

export const clearCityDatabaseOnce = () => {
    cityList = [];
}
