// const arr = doubleValues([5,1,2,3,10]);
// const even = onlyEvenvalues([5,1,2,3,10]);
// const str = showFirstAndLast(['colt','matt', 'tim', 'test']);
// const keyAndValue = addKeyAndValue(
//   [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
//   ],
//     'title',
//     'instructor'
//   );
// const vCount = vowelCount('I Am awesome and so are you');
// const mapDouble = doubleValuesWithMap([1,-2,-3]);
// const valXIndex = valTimesIndex([1,-2,-3]);
// const extractedKeys = extractKey(
//   [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
//   ],
//   'name'
// );

// const fullNames = extractFullName([
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Tim', last:"Garcia"},
//   {first: 'Matt', last:"Lane"},
//   {first: 'Colt', last:"Steele"}
// ]);

// const filterBV = filterByValue(
//   [
//     {first: 'Elie', last:"Schoppik"},
//     {first: 'Tim', last:"Garcia", isCatOwner: true},
//     {first: 'Matt', last:"Lane", isCatOwner: false},
//     {first: 'Colt', last:"Steele", isCatOwner: true}
//   ],
//   'isCatOwner'
//   );

// const find1 = find([1,2,3,4,5], 3);
// const find2 = find([1,2,3,4,5], 10);

// const find1stObject = findInObj(
//   [
//     {first: 'Elie', last:"Schoppik"},
//     {first: 'Tim', last:"Garcia", isCatOwner: true},
//     {first: 'att', last:"Lane"},
//     {first: 'Colt', last:"Steele", isCatOwner: true}
//   ],
//   'isCatOwner',
//   true
// );

// const rv = removeVowels('Elie'); // ('l')
// const rv2 = removeVowels('TIM'); // ('tm')
// const rv3 = removeVowels('ZZZZZZ'); // ('zzzzzz')

// const doubleOdd = doubleOddNumbers([1,2,3,4,5]); // [2,6,10]
// const doubleOdd2 = doubleOddNumbers([4,4,4,4,4]); // []

function doubleValues(arr) {
  let result = [];
  arr.forEach(function(value) {
    result.push(value*2);
  });
  return result;
}

function onlyEvenvalues(arr) {
  let result = [];
  arr.forEach(function(value) {
    if (value % 2 === 0) {
      result.push(value);
    }
  });
  return result;
}

function showFirstAndLast(arr) {
  let result = [];
  arr.forEach(function(value) {
    result.push(`${value[0]}${value[value.length - 1]}`)
  })
  return result
}
function addKeyAndValue(arr, key, keyValue) {
  arr.forEach(function(value, index, array) {
    array[index][key] = keyValue;
  });
  return arr;
}

function vowelCount(str) {
  let result = {};
  const vowels = 'aeiou'
  Array.from(str).forEach(function(value) {
    value = value.toLowerCase();
    if (vowels.includes(value)) {
      if (result.hasOwnProperty(value)) result[value]++;
      else result[value] = 1;
    }
  });
  return result;
}

function doubleValuesWithMap(arr) {
  return arr.map(function(value, index, array) {
    return value * 2;
  });
}

function valTimesIndex(arr) {
  return arr.map(function(value, index, array) {
    return value * index;
  })
}

function extractKey(arr, key) {
  return arr.map(function(value, index, array) {
    return value[key];
  });
}

function extractFullName(arr) {
  return arr.map(function(value, index, array) {
    return `${value['first']} ${value['last']}`;
  })
}

function filterByValue(arr, key) {
  return arr.filter((o) => { return o[key]; });
}

function find(arr, val) {
  const result = arr.filter((a) => { return a === val; });
  if (result) return result[0];
  return result;
}

function findInObj(arr, key, val) {
  const result = arr.filter((a) => { return a[key] === val});
  if (result) return result[0];
  return result;
}

function removeVowels(string) {
  const str = Array.from(string);
  const vowels = 'aeiou';
  let result = '';
  str.filter((c) => {
    if (!vowels.includes(c.toLowerCase())) {
      result += c.toLowerCase();
    }
  });
  return result;
}

function doubleOddNumbers(arr) {
  const odd =  arr.filter((a) => {
    if (a % 2 !== 0) return a;
  });
  return odd.map((value) => { return value * 2 })
}
