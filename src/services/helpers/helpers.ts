const retriveLocalStorageData = <T, > (key: string): T => {
    const pairJSON = localStorage.getItem(key) || '';
    const pair = JSON.parse(pairJSON);
    if(!pairJSON) {
        return {} as T;
    }

    return pair as T;
}

export {
    retriveLocalStorageData
}