const stateTaxBrackets = {
  AL: [
    { rate: 0.02, threshold: 500 },
    { rate: 0.04, threshold: 3000 },
    { rate: 0.05, threshold: Infinity },
  ],
  AK: [], // No state income tax
  AZ: [
    { rate: 0.0259, threshold: 27808 },
    { rate: 0.0334, threshold: 55615 },
    { rate: 0.0417, threshold: 166843 },
    { rate: 0.045, threshold: Infinity },
  ],
  AR: [
    { rate: 0.02, threshold: 4299 },
    { rate: 0.04, threshold: 8500 },
    { rate: 0.059, threshold: 12699 },
    { rate: 0.069, threshold: Infinity },
  ],
  CA: [
    { rate: 0.01, threshold: 9325 },
    { rate: 0.02, threshold: 22107 },
    { rate: 0.04, threshold: 34892 },
    { rate: 0.06, threshold: 48435 },
    { rate: 0.08, threshold: 61214 },
    { rate: 0.093, threshold: 312686 },
    { rate: 0.103, threshold: 375221 },
    { rate: 0.113, threshold: 625369 },
    { rate: 0.123, threshold: 1000000 },
    { rate: 0.133, threshold: Infinity },
  ],
  CO: [
    { rate: 0.0455, threshold: Infinity }, // Flat tax rate
  ],
  CT: [
    { rate: 0.03, threshold: 10000 },
    { rate: 0.05, threshold: 50000 },
    { rate: 0.055, threshold: 100000 },
    { rate: 0.06, threshold: 200000 },
    { rate: 0.065, threshold: 250000 },
    { rate: 0.069, threshold: 500000 },
    { rate: 0.0699, threshold: Infinity },
  ],
  DE: [
    { rate: 0.022, threshold: 2000 },
    { rate: 0.039, threshold: 5000 },
    { rate: 0.048, threshold: 10000 },
    { rate: 0.052, threshold: 20000 },
    { rate: 0.0555, threshold: 25000 },
    { rate: 0.066, threshold: 60000 },
    { rate: 0.0685, threshold: Infinity },
  ],
  DC: [
    { rate: 0.04, threshold: 10000 },
    { rate: 0.06, threshold: 40000 },
    { rate: 0.065, threshold: 60000 },
    { rate: 0.085, threshold: 250000 },
    { rate: 0.0875, threshold: 500000 },
    { rate: 0.0895, threshold: Infinity },
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
    { rate: 0.076, threshold: 36000 },
    { rate: 0.079, threshold: 48000 },
    { rate: 0.0825, threshold: 150000 },
    { rate: 0.09, threshold: 175000 },
    { rate: 0.1, threshold: 200000 },
    { rate: 0.11, threshold: Infinity },
  ],
  ID: [
    { rate: 0.01125, threshold: 1548 },
    { rate: 0.0325, threshold: 3096 },
    { rate: 0.0525, threshold: 4644 },
    { rate: 0.065, threshold: 6192 },
    { rate: 0.074, threshold: 7740 },
    { rate: 0.074, threshold: Infinity }, // Flat rate after threshold
  ],
  IL: [
    { rate: 0.0495, threshold: Infinity }, // Flat tax rate
  ],
  IN: [
    { rate: 0.0323, threshold: Infinity }, // Flat tax rate
  ],
  IA: [
    { rate: 0.0033, threshold: 1638 },
    { rate: 0.0067, threshold: 3276 },
    { rate: 0.0225, threshold: 16380 },
    { rate: 0.0414, threshold: 24570 },
    { rate: 0.0563, threshold: 32760 },
    { rate: 0.0625, threshold: 40950 },
    { rate: 0.0744, threshold: 49140 },
    { rate: 0.0853, threshold: 57330 },
    { rate: 0.0898, threshold: Infinity },
  ],
  KS: [
    { rate: 0.031, threshold: 15000 },
    { rate: 0.0525, threshold: 30000 },
    { rate: 0.057, threshold: Infinity },
  ],
  KY: [
    { rate: 0.05, threshold: Infinity }, // Flat tax rate
  ],
  LA: [
    { rate: 0.0185, threshold: 12500 },
    { rate: 0.035, threshold: 50000 },
    { rate: 0.0425, threshold: Infinity },
  ],
  ME: [
    { rate: 0.058, threshold: 23000 },
    { rate: 0.0675, threshold: 54450 },
    { rate: 0.0715, threshold: Infinity },
  ],
  MD: [
    { rate: 0.02, threshold: 1000 },
    { rate: 0.03, threshold: 2000 },
    { rate: 0.04, threshold: 3000 },
    { rate: 0.0475, threshold: 100000 },
    { rate: 0.05, threshold: 125000 },
    { rate: 0.0525, threshold: 150000 },
    { rate: 0.055, threshold: 250000 },
    { rate: 0.0575, threshold: Infinity },
  ],
  MA: [
    { rate: 0.05, threshold: Infinity }, // Flat tax rate
  ],
  MI: [
    { rate: 0.0425, threshold: Infinity }, // Flat tax rate
  ],
  MN: [
    { rate: 0.0535, threshold: 27820 },
    { rate: 0.068, threshold: 91730 },
    { rate: 0.0785, threshold: 171220 },
    { rate: 0.0985, threshold: Infinity },
  ],
  MS: [
    { rate: 0.0, threshold: 4000 }, // No tax up to threshold
    { rate: 0.04, threshold: 5000 },
    { rate: 0.05, threshold: Infinity },
  ],
  MO: [
    { rate: 0.015, threshold: 108 },
    { rate: 0.02, threshold: 1088 },
    { rate: 0.025, threshold: 2176 },
    { rate: 0.03, threshold: 3264 },
    { rate: 0.035, threshold: 4352 },
    { rate: 0.04, threshold: 5440 },
    { rate: 0.045, threshold: 6528 },
    { rate: 0.05, threshold: 7616 },
    { rate: 0.054, threshold: 8704 },
    { rate: 0.059, threshold: Infinity },
  ],
  MT: [
    { rate: 0.01, threshold: 3200 },
    { rate: 0.02, threshold: 6400 },
    { rate: 0.03, threshold: 9600 },
    { rate: 0.04, threshold: 12800 },
    { rate: 0.05, threshold: 16000 },
    { rate: 0.06, threshold: 19200 },
    { rate: 0.069, threshold: Infinity },
  ],
  NE: [
    { rate: 0.0246, threshold: 3420 },
    { rate: 0.0351, threshold: 20490 },
    { rate: 0.0501, threshold: 32960 },
    { rate: 0.0684, threshold: Infinity },
  ],
  NV: [], // No state income tax
  NH: [], // No state income tax on wages
  NJ: [
    { rate: 0.014, threshold: 20000 },
    { rate: 0.0175, threshold: 35000 },
    { rate: 0.035, threshold: 40000 },
    { rate: 0.05525, threshold: 75000 },
    { rate: 0.0637, threshold: 500000 },
    { rate: 0.0897, threshold: 5000000 },
    { rate: 0.1075, threshold: Infinity },
  ],
  NM: [
    { rate: 0.017, threshold: 5500 },
    { rate: 0.032, threshold: 11000 },
    { rate: 0.047, threshold: 16000 },
    { rate: 0.049, threshold: Infinity },
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
    { rate: 0.0499, threshold: Infinity }, // Flat tax rate
  ],
  ND: [
    { rate: 0.011, threshold: 40425 },
    { rate: 0.0204, threshold: 97900 },
    { rate: 0.0227, threshold: 203350 },
    { rate: 0.0264, threshold: 445000 },
    { rate: 0.029, threshold: Infinity },
  ],
  OH: [
    { rate: 0.0, threshold: 25000 }, // No tax up to threshold
    { rate: 0.0285, threshold: 44250 },
    { rate: 0.033, threshold: 88450 },
    { rate: 0.0375, threshold: 110650 },
    { rate: 0.042, threshold: Infinity },
  ],
  OK: [
    { rate: 0.005, threshold: 1000 },
    { rate: 0.01, threshold: 2500 },
    { rate: 0.02, threshold: 3750 },
    { rate: 0.03, threshold: 4900 },
    { rate: 0.04, threshold: 7200 },
    { rate: 0.05, threshold: Infinity },
  ],
  OR: [
    { rate: 0.0475, threshold: 3650 },
    { rate: 0.0675, threshold: 9200 },
    { rate: 0.0875, threshold: 125000 },
    { rate: 0.099, threshold: Infinity },
  ],
  PA: [
    { rate: 0.0307, threshold: Infinity }, // Flat tax rate
  ],
  RI: [
    { rate: 0.0375, threshold: 68200 },
    { rate: 0.0475, threshold: 155050 },
    { rate: 0.0599, threshold: Infinity },
  ],
  SC: [
    { rate: 0.0, threshold: 3200 }, // No tax up to threshold
    { rate: 0.03, threshold: 6410 },
    { rate: 0.04, threshold: 9620 },
    { rate: 0.05, threshold: 12820 },
    { rate: 0.06, threshold: 16040 },
    { rate: 0.07, threshold: Infinity },
  ],
  SD: [], // No state income tax
  TN: [], // No state income tax on wages
  TX: [], // No state income tax
  UT: [
    { rate: 0.0495, threshold: Infinity }, // Flat tax rate
  ],
  VT: [
    { rate: 0.0355, threshold: 40099 },
    { rate: 0.068, threshold: 98200 },
    { rate: 0.078, threshold: 204000 },
    { rate: 0.0895, threshold: Infinity },
  ],
  VA: [
    { rate: 0.02, threshold: 3000 },
    { rate: 0.03, threshold: 5000 },
    { rate: 0.05, threshold: 17000 },
    { rate: 0.0575, threshold: Infinity },
  ],
  WA: [], // No state income tax
  WV: [
    { rate: 0.03, threshold: 10000 },
    { rate: 0.04, threshold: 25000 },
    { rate: 0.045, threshold: 40000 },
    { rate: 0.06, threshold: 60000 },
    { rate: 0.065, threshold: Infinity },
  ],
  WI: [
    { rate: 0.0354, threshold: 12760 },
    { rate: 0.0465, threshold: 25520 },
    { rate: 0.0627, threshold: 280950 },
    { rate: 0.0765, threshold: Infinity },
  ],
  WY: [], // No state income tax
};

export default stateTaxBrackets;
