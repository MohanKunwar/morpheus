
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


export const getSessionItem = (item) => {
    // const storageItem =
    return sessionStorage.getItem(item);
    // return storageItem ? atob(storageItem) : null;
}

export const setSessionItem = (key, value) => {
    if (key != null && value != null) {
        // localStorage.setItem(key, btoa(value));
        sessionStorage.setItem(key, value);
    }
    return;
}
