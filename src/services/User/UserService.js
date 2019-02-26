
export const getItem = (item) => {
    // const storageItem =
    return localStorage.getItem(item);
    // return storageItem ? atob(storageItem) : null;
}

export const setItem = (key, value) => {
    if (key != null && value != null) {
        // localStorage.setItem(key, btoa(value));
        localStorage.setItem(key, value);
    }
    return;
}

