function telephoneCheck(str) {
    // Remove todos os caracteres que não sejam dígitos, espaços, hifens ou parênteses
    str = str.replace(/[^\d\s\-()]/g, '');
  
    // Verifica se o número começa com 1 seguido por 10 dígitos, ou se possui 10 dígitos sem o código do país
    if (/^1?\d{10}$/.test(str)) {
      // Verifica se os parênteses estão corretamente emparelhados
      if (/\([^\)]*\)/.test(str)) {
        return true;
      }
    }
  
    // Verifica se o número está no formato correto usando expressões regulares
    return /^1?\s?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/.test(str);
  }