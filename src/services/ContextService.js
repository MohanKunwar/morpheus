
export function getItem(item) {
    // localStorage.getItem(item);
    return atob(localStorage.getItem(item));
}

export function setItem(key, value) {
    localStorage.setItem(key, btoa(value));
    return;
}


