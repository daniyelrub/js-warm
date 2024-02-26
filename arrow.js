



const printOddNumbers = (arr) => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  printOddNumbers(numbers);




  const convertToTitleCaps = (arr) => {
    return arr.map(str => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  };
  
  // Example usage:
  const strings = ["hello", "world", "javascript"];
  const titleCapsStrings = convertToTitleCaps(strings);
  console.log(titleCapsStrings);
  


  const sumOfNumbers = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
  };
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const sum = sumOfNumbers(numbers);
  console.log(sum);

  



const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPrimeNumbers = (arr) => {
  return arr.filter(num => isPrime(num));
};

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = getPrimeNumbers(numbers);
console.log(primeNumbers);




const isPalindrome = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  
  const getPalindromes = (arr) => {
    return arr.filter(str => isPalindrome(str));
  };
  
  // Example usage:
  const words = ["level", "hello", "radar", "world"];
  const palindromes = getPalindromes(words);
  console.log(palindromes);
  






