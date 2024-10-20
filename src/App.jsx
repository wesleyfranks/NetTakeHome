// App.jsx
import React, { useEffect, useState } from 'react';
import Calculator from './components/Calculator';

const App = () => {
  const [gross, setGross] = useState('');
  const [net, setNet] = useState(0);
  const [period, setPeriod] = useState('yearly');
  const [taxBreakdown, setTaxBreakdown] = useState([]);
  const [theme, setTheme] = useState('light');

  // Define the sun and moon SVG icons
  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.0}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591
        1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12
        18.75V21m-4.773-4.227l-1.591
        1.591M5.25 12H3m4.227-4.773L5.636
        5.636M15.75 12a3.75 3.75 0 11-7.5
        0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.0}
      stroke="white"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752
        15.002A9.718 9.718 0 0118 15.75c-5.385
        0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753
        9.753 0 003 11.25C3 16.635 7.365 21
        12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleGrossChange = (values) => {
    const { value } = values;
    setGross(value);
  };

  const formatCurrency = (value) => {
    const number = parseFloat(value);
    if (isNaN(number) || number === 0) {
      return '$0.00';
    }

    return (
      '$' +
      number.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  const calculateTax = (annualIncome) => {
    if (isNaN(annualIncome) || annualIncome <= 0) {
      return { totalTax: 0, breakdown: [] };
    }

    const brackets = [
      { rate: 0.1, threshold: 11000 },
      { rate: 0.12, threshold: 44725 },
      { rate: 0.22, threshold: 95375 },
      { rate: 0.24, threshold: 182100 },
      { rate: 0.32, threshold: 231250 },
      { rate: 0.35, threshold: 578125 },
      { rate: 0.37, threshold: Infinity },
    ];

    let tax = 0;
    let previousThreshold = 0;
    const breakdown = [];

    for (const { rate, threshold } of brackets) {
      if (annualIncome > threshold) {
        const taxableAmount = threshold - previousThreshold;
        tax += taxableAmount * rate;
        breakdown.push({
          rate: (rate * 100).toFixed(2),
          amount: taxableAmount,
          tax: taxableAmount * rate,
        });
        previousThreshold = threshold;
      } else {
        const taxableAmount = annualIncome - previousThreshold;
        tax += taxableAmount * rate;
        breakdown.push({
          rate: (rate * 100).toFixed(2),
          amount: taxableAmount,
          tax: taxableAmount * rate,
        });
        break;
      }
    }

    return { totalTax: tax, breakdown };
  };

  const calculateNet = () => {
    const grossValue = parseFloat(gross);
    if (isNaN(grossValue) || grossValue <= 0) {
      setNet(0);
      setTaxBreakdown([]);
      return;
    }

    const { totalTax, breakdown } = calculateTax(grossValue);

    let periodFactor;
    switch (period) {
      case 'daily':
        periodFactor = 365;
        break;
      case 'weekly':
        periodFactor = 52;
        break;
      case 'bi-weekly':
        periodFactor = 26;
        break;
      case 'monthly':
        periodFactor = 12;
        break;
      case 'yearly':
      default:
        periodFactor = 1;
    }

    const periodTax = totalTax / periodFactor;
    const periodGross = grossValue / periodFactor;
    const netIncome = periodGross - periodTax;

    // Round values to two decimal places
    const roundedNetIncome = Math.round(netIncome * 100) / 100;

    setTaxBreakdown(
      breakdown.map((item) => ({
        ...item,
        amount: Math.round((item.amount / periodFactor) * 100) / 100,
        tax: Math.round((item.tax / periodFactor) * 100) / 100,
      }))
    );
    setNet(roundedNetIncome);
  };

  useEffect(() => {
    calculateNet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gross, period]);

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-4 top-4 bg-black dark:bg-white text-lg rounded-md"
      >
        {theme === 'dark' ? sun : moon}
      </button>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-all duration-500 flex justify-center items-center">
        <Calculator
          gross={gross}
          net={net}
          period={period}
          setPeriod={setPeriod}
          handleGrossChange={handleGrossChange}
          formatCurrency={formatCurrency}
          taxBreakdown={taxBreakdown}
        />
      </div>
    </>
  );
};

export default App;
