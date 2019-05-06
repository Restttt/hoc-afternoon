import React, {Component} from 'react';

import CurrencyDisplay from './CurrencyDisplay';

const withCurrency = (BaseComponent)  => (
    class Currency extends Component {
        state = {
            currencyChosen: false,
            selectedCurrency: 'Select Currency',
            amount:0
        }

        handleAmountIncrease = () => {
            this.setState((prevState) => {
                return {
                    amount: (prevState.amount += 1)
                }
            })
        }

        handleAmountDecrease = () => {
            this.setState((prevState) => {
                return {
                    amount: (prevState.amount -= 1)
                }
            })
        }

        handleOptionSelect = (evt) => {
            const userValue = evt.target.value
            this.setState(() => {
                return {
                    selectedCurrency: userValue,
                    currencyChosen: userValue === 'Select Currency' ? false : true
                }
            })
        }

        render() {
            const currencyData = [
                { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
                { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
                { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
                { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
                { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
            ]
            const currencyOptions = currencyData.map((currency, index) => (
                <option value={index} key={index}>
                    {currency.name}
                </option>
            ))
            return(
                <div>
                    <select onChange={this.handleOptionSelect} value="Select Country">
                        {currencyOptions}
                    </select>
                    <button onClick={this.handleAmountIncrease} className="add">+</button>
                    <button onClick={this.handleAmountDecrease} className="minus">-</button>

                    {this.state.currencyChosen ? (
						<BaseComponent
							currency={currencyData[this.state.selectedCurrency]}
							amount={this.state.amount}
						/>
					) : (
						<p>Please Select Currency</p>
                    )}
                    
                </div>
            );
        };
    }
);

const ExchangedCurrency = withCurrency(CurrencyDisplay);

export default ExchangedCurrency;