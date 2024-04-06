const getChartColorsArray = (colors) => {
    if (typeof colors === 'string') {
      colors = colors.split(',').map(value => value.trim());
      return colors.map(value => {
        const cleanedValue = value.replace(/#/g, ''); // Remove '#' character
        if (cleanedValue.match(/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
          // Valid HEX color code
          return `#${cleanedValue}`;
        } else if (cleanedValue.match(/^rgba\(\d+,\d+,\d+,\d+(\.\d+)?\)$/)) {
          // Valid RGBA color
          return cleanedValue;
        } else {
          // Handle other cases
          return value;
        }
      });
    } else {
      return []; // Handle invalid input
    }
  };

export default getChartColorsArray;