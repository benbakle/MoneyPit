import React, { Fragment } from 'react';
import { BUDGET_CATEGORIES } from 'constants/budget-categories';
import { BUDGET_TYPES } from 'constants/budget-types';
import Grid, { GridCellHeader, GridCell } from 'layout/Grid';
import { Currency, Percent } from 'controls';

const BudgetCategoriesGrid = ({ budgetCategories, income }) =>
    <Grid {...{ name: 'budget-categories', columns: 4 }}>
        <GridCellHeader>Category</GridCellHeader>
        <GridCellHeader>Type</GridCellHeader>
        <GridCellHeader>%</GridCellHeader>
        <GridCellHeader>Allocated</GridCellHeader>

        {budgetCategories.map(({ category, type, percentOfIncome }, key) =>
            <Fragment {...{ key }}>
                <GridCell>{BUDGET_CATEGORIES[category]}</GridCell>
                <GridCell>{BUDGET_TYPES[type]}</GridCell>
                <GridCell><Percent {...{ value: percentOfIncome }} /></GridCell>
                <GridCell><Currency {...{ value: income * percentOfIncome }} /></GridCell>
            </Fragment>
        )}
    </Grid>

export default BudgetCategoriesGrid;