// Predefined pricing table for specific contact tiers
// NOTE: 500 is for Launch plan only, 2.5k is for Growth plan only
// Ultra pricing starts at 5k+
const PREDEFINED_PRICES = {
  launch: {
    500: {
      monthly: {
        USD: 4.99,
        EUR: 4.99,
        GBP: 3.99,
        INR: 449,
        CAD: 6.99,
        AUD: 7.99,
        BRL: 29.99,
        JPY: 749,
        MXN: 99.99,
        SGD: 6.99,
      },
      yearly: {
        USD: 3.99,
        EUR: 3.99,
        GBP: 3.19,
        INR: 349,
        CAD: 5.49,
        AUD: 6.49,
        BRL: 24.99,
        JPY: 599,
        MXN: 79.99,
        SGD: 5.49,
      },
    },
  },
  growth: {
    500: {
      monthly: {
        USD: 15.99,
        EUR: 14.99,
        GBP: 12.49,
        INR: 1349,
        CAD: 21.99,
        AUD: 24.99,
        BRL: 99.99,
        JPY: 2499,
        MXN: 299,
        SGD: 20.99,
      },
      yearly: {
        USD: 12.79,
        EUR: 12.49,
        GBP: 9.99,
        INR: 1099,
        CAD: 17.99,
        AUD: 19.99,
        BRL: 79.99,
        JPY: 1999,
        MXN: 249,
        SGD: 16.99,
      },
    },
    2500: {
      monthly: {
        USD: 15.99,
        EUR: 14.99,
        GBP: 12.49,
        INR: 1349,
        CAD: 21.99,
        AUD: 24.99,
        BRL: 99.99,
        JPY: 2499,
        MXN: 299,
        SGD: 20.99,
      },
      yearly: {
        USD: 12.79,
        EUR: 12.49,
        GBP: 9.99,
        INR: 1099,
        CAD: 17.99,
        AUD: 19.99,
        BRL: 79.99,
        JPY: 1999,
        MXN: 249,
        SGD: 16.99,
      },
    },
  },
  ultra: {
    5000: {
      monthly: {
        USD: 29.99,
        EUR: 29.99,
        GBP: 24.99,
        INR: 2499,
        CAD: 41.99,
        AUD: 46.99,
        BRL: 179.99,
        JPY: 4499,
        MXN: 599,
        SGD: 39.99,
      },
      yearly: {
        USD: 23.99,
        EUR: 23.99,
        GBP: 18.99,
        INR: 1999,
        CAD: 33.99,
        AUD: 37.99,
        BRL: 149.99,
        JPY: 3599,
        MXN: 499,
        SGD: 31.99,
      },
    },
    10000: {
      monthly: {
        USD: 29.99,
        EUR: 29.99,
        GBP: 24.99,
        INR: 2499,
        CAD: 41.99,
        AUD: 46.99,
        BRL: 179.99,
        JPY: 4499,
        MXN: 599,
        SGD: 39.99,
      },
      yearly: {
        USD: 23.99,
        EUR: 23.99,
        GBP: 18.99,
        INR: 1999,
        CAD: 33.99,
        AUD: 37.99,
        BRL: 149.99,
        JPY: 3599,
        MXN: 499,
        SGD: 31.99,
      },
    },
    20000: {
      monthly: {
        USD: 49.99,
        EUR: 49.99,
        GBP: 39.99,
        INR: 4199,
        CAD: 69.99,
        AUD: 77.99,
        BRL: 299.99,
        JPY: 7499,
        MXN: 999,
        SGD: 66.99,
      },
      yearly: {
        USD: 39.99,
        EUR: 39.99,
        GBP: 31.99,
        INR: 3399,
        CAD: 56.99,
        AUD: 62.99,
        BRL: 249.99,
        JPY: 5999,
        MXN: 799,
        SGD: 53.99,
      },
    },
    30000: {
      monthly: {
        USD: 69.99,
        EUR: 69.99,
        GBP: 54.99,
        INR: 5899,
        CAD: 99.99,
        AUD: 109.99,
        BRL: 429.99,
        JPY: 10499,
        MXN: 1399,
        SGD: 93.99,
      },
      yearly: {
        USD: 55.99,
        EUR: 55.99,
        GBP: 43.99,
        INR: 4699,
        CAD: 79.99,
        AUD: 87.99,
        BRL: 349.99,
        JPY: 8499,
        MXN: 1099,
        SGD: 74.99,
      },
    },
    40000: {
      monthly: {
        USD: 89.99,
        EUR: 89.99,
        GBP: 70.99,
        INR: 7599,
        CAD: 127.99,
        AUD: 140.99,
        BRL: 549.99,
        JPY: 13499,
        MXN: 1799,
        SGD: 120.99,
      },
      yearly: {
        USD: 71.99,
        EUR: 71.99,
        GBP: 56.99,
        INR: 6099,
        CAD: 102.99,
        AUD: 112.99,
        BRL: 449.99,
        JPY: 10999,
        MXN: 1449,
        SGD: 96.99,
      },
    },
    50000: {
      monthly: {
        USD: 109.99,
        EUR: 109.99,
        GBP: 86.99,
        INR: 9299,
        CAD: 156.99,
        AUD: 172.99,
        BRL: 669.99,
        JPY: 16499,
        MXN: 2199,
        SGD: 147.99,
      },
      yearly: {
        USD: 87.99,
        EUR: 87.99,
        GBP: 69.99,
        INR: 7499,
        CAD: 125.99,
        AUD: 138.99,
        BRL: 549.99,
        JPY: 13499,
        MXN: 1799,
        SGD: 118.99,
      },
    },
    100000: {
      monthly: {
        USD: 209.99,
        EUR: 209.99,
        GBP: 164.99,
        INR: 17699,
        CAD: 299.99,
        AUD: 329.99,
        BRL: 1279,
        JPY: 31499,
        MXN: 4199,
        SGD: 280.99,
      },
      yearly: {
        USD: 167.99,
        EUR: 167.99,
        GBP: 132.99,
        INR: 14199,
        CAD: 239.99,
        AUD: 263.99,
        BRL: 1019,
        JPY: 25499,
        MXN: 3399,
        SGD: 224.99,
      },
    },
  },
};

const EXCHANGE_RATES = {
  USD: 1,
  INR: 83.50,
  GBP: 0.79,
  EUR: 0.92,
  CAD: 1.36,
  AUD: 1.52,
  SGD: 1.34,
  AED: 3.67,
  JPY: 149.50,
  CNY: 7.24,
  BRL: 4.97,
  MXN: 17.12,
};

// Currency symbols
const CURRENCY_SYMBOLS = {
  USD: '$',
  INR: '₹',
  GBP: '£',
  EUR: '€',
  CAD: 'C$',
  AUD: 'A$',
  SGD: 'S$',
  AED: 'د.إ',
  JPY: '¥',
  CNY: '¥',
  BRL: 'R$',
  MXN: 'MX$',
};

/**
 * Floor price to nearest 100 and subtract 0.01 (for non-USD currencies)
 * Examples: 2567.89 -> 2499.99, 1234 -> 1199.99, 45.67 -> 45.67 (under 100)
 */
function floorToNearestHundred(price, currency) {
  if (currency === 'USD') {
    return Math.round(price * 100) / 100;
  }
  
  // For prices less than 100, don't floor (keep original rounding)
  if (price < 100) {
    if (currency === 'INR' || currency === 'JPY' || currency === 'CNY') {
      return Math.round(price);
    }
    return Math.round(price * 100) / 100;
  }
  
  // Floor to nearest 100 and subtract 0.01
  const floored = Math.floor(price / 100) * 100 - 0.01;
  
  // For currencies without decimals (INR, JPY, CNY), return as integer
  if (currency === 'INR' || currency === 'JPY' || currency === 'CNY') {
    return Math.floor(floored);
  }
  
  return Math.round(floored * 100) / 100;
}

/**
 * Calculate the price for a plan based on contacts, currency, and billing cycle
 */
export function calculatePlanPrice(plan, selectedContacts, currency = 'USD', billingCycle = 'monthly') {
  // Check if plan is available for selected contacts
  if (!isPlanAvailable(plan, selectedContacts)) {
    return null;
  }

  // If contacts exceed max, return null (custom pricing)
  if (selectedContacts > plan.maxContacts) {
    return null;
  }

  // Handle Enterprise plan (custom pricing)
  if (plan.basePrice === null) {
    return null;
  }

  // Special handling for Ultra plan with new pricing model
  if (plan.id === 'ultra') {
    return calculateUltraPrice(selectedContacts, currency, billingCycle);
  }

  // Check for predefined prices first (Launch and Growth plans)
  if (PREDEFINED_PRICES[plan.id] && PREDEFINED_PRICES[plan.id][selectedContacts]) {
    const billing = billingCycle === 'yearly' ? 'yearly' : 'monthly';
    
    if (PREDEFINED_PRICES[plan.id][selectedContacts][billing] && 
        PREDEFINED_PRICES[plan.id][selectedContacts][billing][currency]) {
      return PREDEFINED_PRICES[plan.id][selectedContacts][billing][currency];
    }
  }

  // Fallback: calculate price from base prices
  let price;

  if (currency === 'INR') {
    if (billingCycle === 'yearly' && plan.basePriceINRYearly) {
      price = plan.basePriceINRYearly;
    } else {
      price = plan.basePriceINR;
    }
  } else {
    // For all other currencies, convert from USD
    let usdPrice = plan.basePrice;
    
    // Apply yearly discount (20% off)
    if (billingCycle === 'yearly') {
      usdPrice = usdPrice * 0.8;
    }

    // Convert to target currency
    const rate = EXCHANGE_RATES[currency] || 1;
    price = usdPrice * rate;
  }

  // Apply contact-based pricing multipliers (for Launch and Growth plans)
  const multiplier = getContactMultiplier(selectedContacts, plan);
  price = price * multiplier;

  // Floor to nearest 100 and subtract 0.01 for non-USD currencies
  return floorToNearestHundred(price, currency);
}

/**
 * Calculate Ultra plan pricing with new model:
 * Uses predefined prices for 5k, 10k, 20k, 30k, 40k, 50k, 100k
 * Falls back to calculation for other tiers
 * Also ensure Ultra is never cheaper than Growth for the same contact tier
 */
function calculateUltraPrice(selectedContacts, currency, billingCycle) {
  let ultraPrice;
  
  // Check for predefined prices (5k and above)
  if (PREDEFINED_PRICES.ultra && PREDEFINED_PRICES.ultra[selectedContacts]) {
    const billing = billingCycle === 'yearly' ? 'yearly' : 'monthly';
    
    if (PREDEFINED_PRICES.ultra[selectedContacts][billing] && 
        PREDEFINED_PRICES.ultra[selectedContacts][billing][currency]) {
      return PREDEFINED_PRICES.ultra[selectedContacts][billing][currency];
    }
  }
  
  // Use calculated pricing for contacts not in predefined table
  const BASE_CONTACTS = 10000;
  const USD_BASE_PRICE = 29.99;
  const USD_INCREMENT_PER_10K = 20;

  if (currency === 'USD') {
    // USD pricing: $29.99 for 10K, +$20 per additional 10K
    ultraPrice = USD_BASE_PRICE;
    
    if (selectedContacts > BASE_CONTACTS) {
      const additionalContacts = selectedContacts - BASE_CONTACTS;
      const additional10KBlocks = Math.floor(additionalContacts / 10000);
      ultraPrice = USD_BASE_PRICE + (additional10KBlocks * USD_INCREMENT_PER_10K);
    }
    
    // Apply yearly discount
    if (billingCycle === 'yearly') {
      ultraPrice = ultraPrice * 0.8;
    }
    
    ultraPrice = Math.round(ultraPrice * 100) / 100;
  } else {
    // Other currencies: Convert base price, then add 2/3 of base price per 10K
    const rate = EXCHANGE_RATES[currency] || 1;
    const basePrice = USD_BASE_PRICE * rate;
    ultraPrice = basePrice;
    
    if (selectedContacts > BASE_CONTACTS) {
      const additionalContacts = selectedContacts - BASE_CONTACTS;
      const additional10KBlocks = Math.floor(additionalContacts / 10000);
      const incrementPerBlock = (basePrice * 2) / 3; // 2/3 of base price
      ultraPrice = basePrice + (additional10KBlocks * incrementPerBlock);
    }
    
    // Apply yearly discount
    if (billingCycle === 'yearly') {
      ultraPrice = ultraPrice * 0.8;
    }
    
    // Floor to nearest 100 and subtract 0.01
    ultraPrice = floorToNearestHundred(ultraPrice, currency);
  }
  
  // Get Growth plan price for comparison
  const growthPlan = { id: 'growth', basePrice: 15.99, basePriceINR: 1299, basePriceINRYearly: 999, maxContacts: 2500 };
  const growthPrice = calculateGrowthPrice(growthPlan, selectedContacts, currency, billingCycle);
  
  // If Ultra is cheaper than Growth, use Growth price
  if (growthPrice !== null && ultraPrice < growthPrice) {
    return growthPrice;
  }
  
  return ultraPrice;
}

/**
 * Helper function to calculate Growth plan price (used for comparison)
 */
function calculateGrowthPrice(plan, selectedContacts, currency, billingCycle) {
  // Check for predefined prices first
  if (PREDEFINED_PRICES.growth && PREDEFINED_PRICES.growth[selectedContacts]) {
    const billing = billingCycle === 'yearly' ? 'yearly' : 'monthly';
    
    if (PREDEFINED_PRICES.growth[selectedContacts][billing] && 
        PREDEFINED_PRICES.growth[selectedContacts][billing][currency]) {
      return PREDEFINED_PRICES.growth[selectedContacts][billing][currency];
    }
  }

  let price;
  
  // Calculate price based on currency and billing cycle
  if (currency === 'INR') {
    if (billingCycle === 'yearly' && plan.basePriceINRYearly) {
      price = plan.basePriceINRYearly;
    } else {
      price = plan.basePriceINR;
    }
  } else {
    // For all other currencies, convert from USD
    let usdPrice = plan.basePrice;
    
    // Apply yearly discount (20% off)
    if (billingCycle === 'yearly') {
      usdPrice = usdPrice * 0.8;
    }

    // Convert to target currency
    const rate = EXCHANGE_RATES[currency] || 1;
    price = usdPrice * rate;
  }

  // Apply contact-based pricing multipliers
  const multiplier = getContactMultiplier(selectedContacts, plan);
  price = price * multiplier;

  // Floor to nearest 100 and subtract 0.01 for non-USD currencies
  return floorToNearestHundred(price, currency);
}

/**
 * Get pricing multiplier based on contact count (for Launch and Growth plans)
 */
function getContactMultiplier(selectedContacts, plan) {
  // Base contacts for each plan
  const baseContacts = {
    launch: 500,
    growth: 2500,
    ultra: 10000,
  };

  const planBase = baseContacts[plan.id] || 500;

  // If within base contacts, no multiplier
  if (selectedContacts <= planBase) {
    return 1;
  }

  // Calculate multiplier based on tiers
  if (selectedContacts <= 5000) {
    return 1.5;
  } else if (selectedContacts <= 10000) {
    return 2;
  } else if (selectedContacts <= 25000) {
    return 3;
  } else if (selectedContacts <= 50000) {
    return 4.5;
  } else if (selectedContacts <= 100000) {
    return 6;
  } else {
    return 8;
  }
}

/**
 * Format currency value for display
 */
export function formatCurrency(amount, currency = 'USD') {
  if (amount === null) {
    return null;
  }

  // Currencies without decimals
  const noDecimalCurrencies = ['INR', 'JPY', 'CNY'];
  const maxDecimals = noDecimalCurrencies.includes(currency) ? 0 : 2;
  const minDecimals = noDecimalCurrencies.includes(currency) ? 0 : 2;

  if (currency === 'INR') {
    // Indian numbering system (lakhs and crores)
    return amount.toLocaleString('en-IN', {
      maximumFractionDigits: maxDecimals,
      minimumFractionDigits: minDecimals,
    });
  } else {
    // International numbering system
    return amount.toLocaleString('en-US', {
      maximumFractionDigits: maxDecimals,
      minimumFractionDigits: minDecimals,
    });
  }
}

/**
 * Get currency symbol
 */
export function getCurrencySymbol(currency = 'USD') {
  return CURRENCY_SYMBOLS[currency] || '$';
}

/**
 * Check if a plan is available for the selected contact count
 */
export function isPlanAvailable(plan, selectedContacts) {
  // Enterprise is always available
  if (plan.id === 'enterprise') {
    return true;
  }

  // Check if contacts are within plan limits
  return selectedContacts <= plan.maxContacts;
}

/**
 * Get the appropriate plan recommendation based on contacts
 */
export function getRecommendedPlan(plans, selectedContacts) {
  // Find the most suitable plan
  const availablePlans = plans.filter((plan) => isPlanAvailable(plan, selectedContacts));
  
  if (availablePlans.length === 0) {
    return null;
  }

  // Return the highlighted plan (Growth) or fallback
  return availablePlans.find((plan) => plan.highlight) || availablePlans[1] || availablePlans[0];
}

/**
 * Fetch live exchange rates (optional - call this on page load)
 */
export async function fetchExchangeRates() {
  try {
    // Using a free API - exchangerate-api.com (free tier: 1,500 requests/month)
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    
    const data = await response.json();
    
    return {
      USD: 1,
      INR: data.rates.INR || EXCHANGE_RATES.INR,
      GBP: data.rates.GBP || EXCHANGE_RATES.GBP,
      EUR: data.rates.EUR || EXCHANGE_RATES.EUR,
      CAD: data.rates.CAD || EXCHANGE_RATES.CAD,
      AUD: data.rates.AUD || EXCHANGE_RATES.AUD,
      SGD: data.rates.SGD || EXCHANGE_RATES.SGD,
      AED: data.rates.AED || EXCHANGE_RATES.AED,
      JPY: data.rates.JPY || EXCHANGE_RATES.JPY,
      CNY: data.rates.CNY || EXCHANGE_RATES.CNY,
      BRL: data.rates.BRL || EXCHANGE_RATES.BRL,
      MXN: data.rates.MXN || EXCHANGE_RATES.MXN,
    };
  } catch (error) {
    console.error('Failed to fetch exchange rates:', error);
    // Return default rates if API fails
    return EXCHANGE_RATES;
  }
}

/**
 * Update exchange rates in memory (call this to refresh rates)
 */
export function updateExchangeRates(rates) {
  if (rates) {
    Object.keys(rates).forEach(currency => {
      if (EXCHANGE_RATES[currency] !== undefined) {
        EXCHANGE_RATES[currency] = rates[currency];
      }
    });
  }
}

/**
 * Get all supported currencies
 */
export function getSupportedCurrencies() {
  return Object.keys(CURRENCY_SYMBOLS);
}

/**
 * Get currency name for display
 */
export function getCurrencyName(currency) {
  const currencyNames = {
    USD: 'US Dollar',
    INR: 'Indian Rupee',
    GBP: 'British Pound',
    EUR: 'Euro',
    CAD: 'Canadian Dollar',
    AUD: 'Australian Dollar',
    SGD: 'Singapore Dollar',
    AED: 'UAE Dirham',
    JPY: 'Japanese Yen',
    CNY: 'Chinese Yuan',
    BRL: 'Brazilian Real',
    MXN: 'Mexican Peso',
  };
  
  return currencyNames[currency] || currency;
}