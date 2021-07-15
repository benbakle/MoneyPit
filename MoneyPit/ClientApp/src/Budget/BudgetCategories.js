import React, { useEffect, useState } from 'react';
import { Loading } from 'controls';
import BudgetCategoriesGrid from './BudgetCategoriesGrid';

const BudgetCategories = () => {
    const [budgetCategories, setBudgetCategories] = useState();
    const [loading, setLoading] = useState(true);
    const [income, setIncome] = useState(4000.00);

    const populateBudgetCategories = async () => {
        const response = await fetch('budget');
        const data = await response.json();

        setBudgetCategories(data);
        setLoading(false);
    }

    useEffect(() => { populateBudgetCategories() }, [])

    return loading
        ? <Loading />
        : <BudgetCategoriesGrid {...{ budgetCategories, income }} />
}

export default BudgetCategories;