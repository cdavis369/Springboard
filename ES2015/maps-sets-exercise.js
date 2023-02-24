new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}

const ref = [...new Set("referee")].join("") // ref

let m = new Map();
m.set([1,2,3], true); // Array(3) => true
m.set([1,2,3], false); // Array(3) => false

function hasDuplicate(arr) {
  const dupes = new Set(arr);
  if (dupes.size !== arr.length)
    return true;
  return false;
}

function vowelCount(str) {
  const stringLowered = str.toLowerCase();
  const result = new Map();
  const vowels = 'aeiou';
  for (let char of stringLowered) {
    if (vowels.includes(char)) {
      if (result.has(char)) 
        result.set(char, result.get(char) + 1);
      else
        result.set(char, 1)
    }
  }
  return result;
}