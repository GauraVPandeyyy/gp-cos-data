'use client';
import { useEffect, useState } from 'react';
import { useGeolocation } from './useGeolocation';

export function useCurrency(defaultCurrency = 'USD') {
  const { country, currency: detectedCurrency, isLoading } = useGeolocation();
  const [currency, setCurrency] = useState(defaultCurrency);
  const [isAutoSet, setIsAutoSet] = useState(false);

  useEffect(() => {
    if (!isLoading && detectedCurrency && !isAutoSet) {
      setCurrency(detectedCurrency);
      setIsAutoSet(true);
    }
  }, [detectedCurrency, isLoading, isAutoSet]);

  return {
    currency,
    setCurrency,
    country,
    isLoading,
  };
}
