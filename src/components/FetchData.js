import React, { Component } from 'react';
import { BUDGET_CATEGORIES } from '../constants/budget-categories';
import { BUDGET_TYPES } from '../constants/budget-types';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = { budgets: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(budgets) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Type</th>
                        <th>% of Income</th>
                        {/*<th>Summary</th>*/}
                    </tr>
                </thead>
                <tbody>
                    {budgets.map((budget, key) =>
                        <tr key={key}>
                            <td>{BUDGET_CATEGORIES[budget.category]}</td>
                            <td>{BUDGET_TYPES[budget.type]}</td>
                            <td>{`${budget.percentOfIncome * 100}%`}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.budgets);

        return (
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('budget');
        const data = await response.json();
        this.setState({ budgets: data, loading: false });
    }
}
