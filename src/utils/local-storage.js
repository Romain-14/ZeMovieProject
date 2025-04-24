function getLocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

function setToLocalStorage(key, data){
    return localStorage.setItem(key, JSON.stringify(data))
}

export { getLocalStorage, setToLocalStorage };
