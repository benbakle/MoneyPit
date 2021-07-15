export const objectToLabelValueArray = obj => {
	const objIndexes = Object.keys(obj);
	let valueArray = [];

	objIndexes.map(index =>
		valueArray.push({ value: index, label: obj[index] }));
	
		return valueArray;
};