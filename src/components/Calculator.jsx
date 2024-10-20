// Calculator.jsx
import React from 'react';
import { NumericFormat } from 'react-number-format';

const Calculator = ({
  gross,
  net,
  period,
  setPeriod,
  handleGrossChange,
  formatCurrency,
  taxBreakdown = [],
}) => {
  // Calculate the total taxes safely
  const totalTaxes = Array.isArray(taxBreakdown)
    ? taxBreakdown.reduce((acc, item) => acc + item.tax, 0)
    : 0;

  // Round totalTaxes to two decimal places
  const roundedTotalTaxes = Math.round(totalTaxes * 100) / 100;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-gray-900 dark:text-gray-200">
      <h1 className="text-center text-2xl mb-5 font-bold">Net Calculator</h1>

      <div className="input-group mb-4">
        <label htmlFor="gross-input" className="block text-sm mb-2">
          Gross Amount:
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
          className="w-full p-3 border rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div className="input-group mb-4">
        <label htmlFor="period-select" className="block text-sm mb-2">
          Select Period:
        </label>
        <select
          id="period-select"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="w-full p-3 border rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="result mt-5">
        <h3 className="font-semibold mb-4 text-lg">Results</h3>
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex justify-between font-bold border-b border-gray-300 pb-1">
            <span>Description</span>
            <span>Amount</span>
          </div>
          <div className="flex justify-between mt-2 py-2 border-b border-gray-300">
            <span className="font-medium">Gross Amount:</span>
            <span className="font-medium">{formatCurrency(gross)}</span>
          </div>
          {taxBreakdown.map((item, index) => (
            <div key={index} className="flex justify-between py-2">
              <span>
                {item.rate}% on {formatCurrency(item.amount)}
              </span>
              <span>{formatCurrency(item.tax)}</span>
            </div>
          ))}
        </div>

        {/* Display Gross, Total Taxes, and Net Amount in order */}
        <div className="mt-6 pt-4 border-t border-gray-300">
          <div className="flex justify-between mt-2 py-2">
            <span className="font-medium">Gross:</span>
            <span className="font-medium">{formatCurrency(gross)}</span>
          </div>
          <div className="flex justify-between mt-2 py-2">
            <span className="font-medium">Total Taxes:</span>
            <span className="font-medium">
              {formatCurrency(roundedTotalTaxes)}
            </span>
          </div>
          <div className="flex justify-between mt-2 py-2 font-bold text-lg">
            <span>Net Amount:</span>
            <span>{formatCurrency(net)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
