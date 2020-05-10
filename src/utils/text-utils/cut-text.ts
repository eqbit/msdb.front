export const cutText = (text: string, maxLength: number, byWord?: boolean) => {
  if (byWord) {
    const words = text.split(' ');
    let result = '';
    let i = 0;
    
    while (result.length < maxLength) {
      result += ` ${words[i++]}`
    }
    
    if (result !== text) {
      if (result.substr(-1) !== '.') {
        return `${result}...`;
      } else {
        return result;
      }
    }
  } else if (text.length > maxLength) {
    return `${text.slice(0, maxLength - 3)}...`;
  }
  
  return text;
};
