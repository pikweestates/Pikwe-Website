import React from 'react';

const NumberFormatter = (number: number) => {
  // Format number with commas
  const formatNumber = (num: st) => {
    // Convert to number if it's a string
    const numValue = typeof num === 'string' ? parseFloat(num) : num;
    
    // Return as-is if not a valid number
    if (isNaN(numValue)) return num;
    
    // Use toLocaleString for comma formatting
    return numValue.toLocaleString();
  };

  return (
    <span>
      {formatNumber(number)}
    </span>
  );
};

export default NumberFormatter;