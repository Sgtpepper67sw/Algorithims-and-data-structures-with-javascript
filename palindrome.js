function palindrome(str) {
    // Remove caracteres não alfanuméricos e transforma em minúsculas
    const alphanumericStr = str.toLowerCase().replace(/[\W_]/g, '');
  
    // Inverte a string
    const reversedStr = alphanumericStr.split('').reverse().join('');
  
    // Verifica se a string original é igual à string invertida
    return alphanumericStr === reversedStr;
  }