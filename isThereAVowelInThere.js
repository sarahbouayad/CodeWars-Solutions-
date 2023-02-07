function isVow(a){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return a.map(num => {
      const char = String.fromCharCode(num);
      return vowels.includes(char) ? char : num;
    });
  }