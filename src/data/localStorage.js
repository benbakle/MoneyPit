

export const putLocal = (key, data) =>
	localStorage.setItem(key, JSON.stringify(data));

export const getLocal = (key) =>
	JSON.parse(localStorage.getItem(key));