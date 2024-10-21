const stateTaxBrackets = {
  AL: [
    { rate: 0.02, threshold: 500 },
    { rate: 0.04, threshold: 3000 },
    { rate: 0.05, threshold: 6000 },
    { rate: 0.05, threshold: Infinity }, // Flat rate after threshold
  ],
  AK: [], // No state income tax
  AZ: [
    { rate: 0.0259, threshold: 26500 },
    { rate: 0.0359, threshold: 53000 },
    { rate: 0.0459, threshold: 159000 },
    { rate: 0.0599, threshold: Infinity },
  ],
  AR: [
    { rate: 0.02, threshold: 4300 },
    { rate: 0.04, threshold: 8100 },
    { rate: 0.059, threshold: 12900 },
    { rate: 0.069, threshold: Infinity },
  ],
  CA: [
    { rate: 0.01, threshold: 8932 },
    { rate: 0.02, threshold: 21175 },
    { rate: 0.04, threshold: 33421 },
    { rate: 0.06, threshold: 46394 },
    { rate: 0.08, threshold: 58634 },
    { rate: 0.093, threshold: 299508 },
    { rate: 0.103, threshold: 359407 },
    { rate: 0.113, threshold: 599012 },
    { rate: 0.123, threshold: 1000000 },
    { rate: 0.133, threshold: Infinity },
  ],
  CO: [
    { rate: 0.0463, threshold: Infinity }, // Flat tax rate
  ],
  CT: [
    { rate: 0.03, threshold: 1000 },
    { rate: 0.05, threshold: 5000 },
    { rate: 0.05, threshold: 10000 },
    { rate: 0.05, threshold: Infinity }, // Flat rate after threshold
  ],
  DE: [
    { rate: 0.02, threshold: 2000 },
    { rate: 0.04, threshold: 5000 },
    { rate: 0.06, threshold: 10000 },
    { rate: 0.06, threshold: Infinity }, // Flat rate after threshold
  ],
  FL: [], // No state income tax
  GA: [
    { rate: 0.01, threshold: 750 },
    { rate: 0.02, threshold: 2250 },
    { rate: 0.03, threshold: 3750 },
    { rate: 0.04, threshold: 5250 },
    { rate: 0.05, threshold: 7000 },
    { rate: 0.0575, threshold: Infinity },
  ],
  HI: [
    { rate: 0.014, threshold: 2400 },
    { rate: 0.032, threshold: 4800 },
    { rate: 0.055, threshold: 9600 },
    { rate: 0.064, threshold: 14400 },
    { rate: 0.068, threshold: 19200 },
    { rate: 0.072, threshold: 24000 },
    { rate: 0.076, threshold: 28800 },
    { rate: 0.079, threshold: Infinity },
  ],
  ID: [
    { rate: 0.01, threshold: 1550 },
    { rate: 0.03, threshold: 3875 },
    { rate: 0.05, threshold: 7750 },
    { rate: 0.06, threshold: 15500 },
    { rate: 0.07, threshold: 38750 },
    { rate: 0.09, threshold: Infinity },
  ],
  IL: [
    { rate: 0.0495, threshold: Infinity }, // Flat tax rate
  ],
  IN: [
    { rate: 0.0323, threshold: Infinity }, // Flat tax rate
  ],
  IA: [
    { rate: 0.0045, threshold: 1690 },
    { rate: 0.006, threshold: 4230 },
    { rate: 0.008, threshold: 8440 },
    { rate: 0.0098, threshold: 16880 },
    { rate: 0.0116, threshold: Infinity },
  ],
  KS: [
    { rate: 0.03, threshold: 1500 },
    { rate: 0.05, threshold: 3000 },
    { rate: 0.0525, threshold: 4500 },
    { rate: 0.057, threshold: 6000 },
    { rate: 0.06, threshold: Infinity },
  ],
  KY: [
    { rate: 0.02, threshold: 3000 },
    { rate: 0.04, threshold: 5000 },
    { rate: 0.04, threshold: Infinity }, // Flat rate after threshold
  ],
  LA: [
    { rate: 0.015, threshold: 1250 },
    { rate: 0.02, threshold: 5000 },
    { rate: 0.025, threshold: 10000 },
    { rate: 0.03, threshold: 12500 },
    { rate: 0.035, threshold: 17500 },
    { rate: 0.04, threshold: Infinity },
  ],
  ME: [
    { rate: 0.05, threshold: 5450 },
    { rate: 0.07, threshold: 16300 },
    { rate: 0.0715, threshold: 24350 },
    { rate: 0.0715, threshold: Infinity }, // Flat rate after threshold
  ],
  MD: [
    { rate: 0.02, threshold: 1000 },
    { rate: 0.03, threshold: 2000 },
    { rate: 0.04, threshold: 3000 },
    { rate: 0.0475, threshold: 100000 },
    { rate: 0.0525, threshold: 125000 },
    { rate: 0.0575, threshold: Infinity },
  ],
  MA: [
    { rate: 0.05, threshold: Infinity }, // Flat tax rate
  ],
  MI: [
    { rate: 0.0425, threshold: Infinity }, // Flat tax rate
  ],
  MN: [
    { rate: 0.0535, threshold: 27920 },
    { rate: 0.0635, threshold: 107760 },
    { rate: 0.0685, threshold: 171960 },
    { rate: 0.0785, threshold: Infinity },
  ],
  MS: [
    { rate: 0.03, threshold: 500 },
    { rate: 0.04, threshold: 3000 },
    { rate: 0.05, threshold: 7000 },
    { rate: 0.05, threshold: Infinity }, // Flat rate after threshold
  ],
  MO: [
    { rate: 0.015, threshold: 1000 },
    { rate: 0.02, threshold: 2000 },
    { rate: 0.025, threshold: 3000 },
    { rate: 0.035, threshold: 4000 },
    { rate: 0.04, threshold: 5000 },
    { rate: 0.0475, threshold: Infinity },
  ],
  MT: [
    { rate: 0.01, threshold: 3100 },
    { rate: 0.02, threshold: 6200 },
    { rate: 0.03, threshold: 9300 },
    { rate: 0.04, threshold: 12400 },
    { rate: 0.05, threshold: 15500 },
    { rate: 0.06, threshold: 18600 },
    { rate: 0.0675, threshold: Infinity },
  ],
  NE: [
    { rate: 0.0351, threshold: 3100 },
    { rate: 0.0521, threshold: 12500 },
    { rate: 0.0684, threshold: 35000 },
    { rate: 0.0792, threshold: 100000 },
    { rate: 0.0897, threshold: Infinity },
  ],
  NV: [], // No state income tax
  NH: [], // No state income tax on wages (only on dividends and interest)
  NJ: [
    { rate: 0.014, threshold: 2000 },
    { rate: 0.0175, threshold: 3500 },
    { rate: 0.035, threshold: 4000 },
    { rate: 0.05525, threshold: 7500 },
    { rate: 0.0637, threshold: 50000 },
    { rate: 0.0897, threshold: Infinity },
  ],
  NM: [
    { rate: 0.017, threshold: 500 },
    { rate: 0.032, threshold: 1000 },
    { rate: 0.047, threshold: 5000 },
    { rate: 0.057, threshold: Infinity },
  ],
  NY: [
    { rate: 0.04, threshold: 8500 },
    { rate: 0.045, threshold: 11700 },
    { rate: 0.0525, threshold: 13900 },
    { rate: 0.0585, threshold: 21400 },
    { rate: 0.0625, threshold: 80650 },
    { rate: 0.0641, threshold: 215400 },
    { rate: 0.0685, threshold: 1077550 },
    { rate: 0.0965, threshold: 5000000 },
    { rate: 0.103, threshold: 25000000 },
    { rate: 0.109, threshold: Infinity },
  ],
  NC: [
    { rate: 0.05, threshold: Infinity }, // Flat tax rate
  ],
  ND: [
    { rate: 0.01, threshold: 4350 },
    { rate: 0.02, threshold: 8700 },
    { rate: 0.03, threshold: 13050 },
    { rate: 0.04, threshold: 17400 },
    { rate: 0.05, threshold: Infinity },
  ],
  OH: [
    { rate: 0.005, threshold: 2200 },
    { rate: 0.01, threshold: 4400 },
    { rate: 0.0225, threshold: 6600 },
    { rate: 0.0275, threshold: 8800 },
    { rate: 0.0325, threshold: 11000 },
    { rate: 0.035, threshold: Infinity },
  ],
  OK: [
    { rate: 0.005, threshold: 1000 },
    { rate: 0.01, threshold: 2500 },
    { rate: 0.02, threshold: 3750 },
    { rate: 0.03, threshold: 5000 },
    { rate: 0.04, threshold: 6250 },
    { rate: 0.05, threshold: 7500 },
    { rate: 0.05, threshold: Infinity }, // Flat rate after threshold
  ],
  OR: [
    { rate: 0.04, threshold: 3600 },
    { rate: 0.06, threshold: 9000 },
    { rate: 0.08, threshold: 12500 },
    { rate: 0.09, threshold: 20000 },
    { rate: 0.099, threshold: Infinity },
  ],
  PA: [
    { rate: 0.03, threshold: Infinity }, // Flat tax rate
  ],
  RI: [
    { rate: 0.0375, threshold: 0 },
    { rate: 0.0475, threshold: 65000 },
    { rate: 0.05, threshold: Infinity },
  ],
  SC: [
    { rate: 0.0, threshold: 3000 }, // No tax up to threshold
    { rate: 0.03, threshold: 6000 },
    { rate: 0.04, threshold: 9000 },
    { rate: 0.05, threshold: 12000 },
    { rate: 0.06, threshold: 15000 },
    { rate: 0.07, threshold: Infinity },
  ],
  SD: [
    { rate: 0.0, threshold: Infinity }, // No state income tax
  ],
  TN: [], // No state income tax on wages (only on dividends and interest)
  TX: [], // No state income tax
  UT: [
    { rate: 0.05, threshold: Infinity }, // Flat tax rate
  ],
  VT: [
    { rate: 0.03, threshold: 4000 },
    { rate: 0.06, threshold: 18000 },
    { rate: 0.08, threshold: 30000 },
    { rate: 0.0875, threshold: Infinity },
  ],
  VA: [
    { rate: 0.02, threshold: 3000 },
    { rate: 0.03, threshold: 5000 },
    { rate: 0.05, threshold: 17000 },
    { rate: 0.0575, threshold: Infinity },
  ],
  WA: [], // No state income tax
  WV: [
    { rate: 0.03, threshold: 1000 },
    { rate: 0.035, threshold: 2500 },
    { rate: 0.04, threshold: 5000 },
    { rate: 0.045, threshold: 10000 },
    { rate: 0.065, threshold: Infinity },
  ],
  WI: [
    { rate: 0.03, threshold: 12720 },
    { rate: 0.04, threshold: 25440 },
    { rate: 0.055, threshold: 38160 },
    { rate: 0.06, threshold: Infinity },
  ],
  WY: [], // No state income tax
};

export default stateTaxBrackets;
