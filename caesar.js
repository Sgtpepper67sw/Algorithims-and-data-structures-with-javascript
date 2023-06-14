function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Função auxiliar para obter o índice de uma letra no alfabeto
    function getIndex(char) {
      return alphabet.indexOf(char);
    }
    
    let decodedStr = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      
      // Verifica se o caractere é uma letra maiúscula
      if (/[A-Z]/.test(char)) {
        const charIndex = getIndex(char);
        const decodedIndex = (charIndex + 13) % 26;
        const decodedChar = alphabet[decodedIndex];
        decodedStr += decodedChar;
      } else {
        decodedStr += char; // Caractere não alfabético, mantém inalterado
      }
    }
  
    return decodedStr;
  }