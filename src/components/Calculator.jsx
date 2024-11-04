// src/components/Calculator.jsx
import React from 'react';
import { NumericFormat } from 'react-number-format';

const Calculator = ({
  gross,
  net,
  period,
  setPeriod,
  stateCode,
  setStateCode,
  handleGrossChange,
  formatCurrency,
  taxBreakdown = [],
}) => {
  const totalTaxes = Array.isArray(taxBreakdown)
    ? taxBreakdown.reduce((acc, item) => acc + item.tax, 0)
    : 0;

  const roundedTotalTaxes = Math.round(totalTaxes * 100) / 100;

  // Calculate adjusted gross amount based on the selected period
  const periodFactor = {
    daily: 365,
    weekly: 52,
    'bi-weekly': 26,
    monthly: 12,
    yearly: 1,
  }[period];
  const adjustedGross = gross / periodFactor;

  const groupedTaxes = taxBreakdown.reduce((groups, item) => {
    if (!groups[item.type]) {
      groups[item.type] = [];
    }
    groups[item.type].push(item);
    return groups;
  }, {});

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto text-gray-900 dark:text-gray-200">
      <h1 className="text-center text-3xl font-bold mb-6">Net Calculator</h1>

      <div className="mb-5">
        <label
          htmlFor="gross-input"
          className="block text-sm font-semibold mb-2"
        >
          Gross Amount (Annually):
        </label>
        <NumericFormat
          id="gross-input"
          value={gross}
          onValueChange={handleGrossChange}
          thousandSeparator={true}
          prefix={'$'}
          decimalScale={2}
          fixedDecimalScale={true}
          allowNegative={false}
          placeholder="$0.00"
          className="w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="input-group mb-4">
        <label
          htmlFor="period-select"
          className="block text-sm font-semibold mb-2"
        >
          Select Period:
        </label>
        <select
          id="period-select"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="input-group mb-4">
        <label
          htmlFor="state-select"
          className="block text-sm font-semibold mb-2"
        >
          Select State:
        </label>
        <select
          id="state-select"
          value={stateCode}
          onChange={(e) => setStateCode(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="SS">Select State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>

      <div className="result mt-6">
        <h3 className="font-semibold mb-4 text-xl">Results</h3>

        {/* Display Gross Amount entered in the input field (Annual) */}
        <div className="flex justify-between mt-2 py-2 border-b border-gray-300 dark:border-gray-700">
          <span className="font-medium">Gross Amount (Annually):</span>
          <span className="font-medium">{formatCurrency(gross)}</span>
        </div>

        {/* Tax breakdown grouped by type */}
        <div className="flex flex-col space-y-2 text-sm mt-4">
          <div className="flex justify-between font-bold border-b border-gray-300 dark:border-gray-700 pb-2">
            <span>Description</span>
            <span>Amount</span>
          </div>
          {Object.keys(groupedTaxes).map((type, idx) => (
            <div key={idx} className="mt-2">
              <h4 className="font-semibold">{type}</h4>
              {groupedTaxes[type].map((item, index) => (
                <div key={index} className="flex justify-between py-1">
                  <span>
                    {item.rate}% on {formatCurrency(item.amount)}
                  </span>
                  <span>{formatCurrency(item.tax)}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Display Adjusted Gross, Total Taxes, and Net Amount in order below breakdown */}
        <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
          <div className="flex justify-between mt-2 py-2">
            <span className="font-medium">
              Gross ({period.charAt(0).toUpperCase() + period.slice(1)}):
            </span>
            <span className="font-medium">{formatCurrency(adjustedGross)}</span>
          </div>
          <div className="flex justify-between mt-2 py-2">
            <span className="font-medium">Total Taxes:</span>
            <span className="font-medium">
              {formatCurrency(roundedTotalTaxes)}
            </span>
          </div>
          <div className="flex justify-between mt-2 py-2 font-bold text-lg">
            <span>
              Net Amount ({period.charAt(0).toUpperCase() + period.slice(1)}):
            </span>
            <span>{formatCurrency(net)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
