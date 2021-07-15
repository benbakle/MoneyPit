export const onChange = ({ target }, setValue) => {
	const property = target.name.split('__')[1].split('--')[0];
	const value = target.value;
	
	const {  handleChange, isValid } = setValue[property];
	const _isValid = isValid ? isValid(value) : true;

	_isValid
		? handleChange(value)
		: console.log("NOPE")
}