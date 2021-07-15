import { getLocal, putLocal } from "data/localStorage";
import { useState } from "react";
import { onChange } from 'utilities/actions'
import { PAYEE_DEFAULTS } from "./__.constants";

export default function Value() {
	const [amount, setAmount] = useState(PAYEE_DEFAULTS.amount);
	const [budgetCategory, setBudgetCategory] = useState(PAYEE_DEFAULTS.budgetCategory);
	const [payeeName, setPayeeName] = useState(PAYEE_DEFAULTS.payeeName);
	const [transactionType, setTransactionType] = useState(PAYEE_DEFAULTS.transactionType);
	const [payees, setPayees] = useState(null);

	const payee = ({
		amount,
		budgetCategory,
		payeeName,
		transactionType,
	});

	const getPayees = () => { setPayees([...getLocal('payees') || [{ ...PAYEE_DEFAULTS }]]) };
	const addPayee = () => {
		putLocal('payees', [...payees, { ...payee }]);
		getPayees();
	}

	const amountIsValid = amount => amount > 0;
	const nameIsValid = name => payees.some(p => p.payeeName !== name)



	const setPayee = ({
		'amount': { handleChange: setAmount, isValid: amountIsValid },
		// 'budgetCategory': setBudgetCategory,
		'payeeName': { handleChange: setPayeeName, isValid: nameIsValid },
		// 'transactionType': setTransactionType,
	})


	return {
		amount,
		budgetCategory,
		payee,
		payeeName,
		payees,
		onChange: e => onChange(e, setPayee),
		transactionType,
		getPayees,
		addPayee,
	}
};