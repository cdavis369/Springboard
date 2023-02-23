// function filterOutOdds() {
//   const nums = [...arguments];
//   return nums.filter((num) => num % 2 === 0);
// }

const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0);

// function findMin() {
//   var nums = [...arguments];
//   return Math.min(...nums);
// }

const findMin = (...arguments) => Math.min(...arguments);

// const first = {a:1, b:2};
// const second = {c:3, d:4};
// mergeObjects(first, second);

const mergeObjects = (o1, o2) => ({...o1, ...o2});

// function doubleAndReturnArgs(arr, ...rest) {
//   return ([...arr, ...rest.map(num => num * 2)])
// }

// doubleAndReturnArgs([0,1,2], 3, 4, 5)

const doubleAndReturnArgs = (arr, ...rest) => ([...arr, ...rest.map(num => num * 2)]);

// ================================= SLICE AND DICE

// function removeRandom(items) {
//   const index = Math.floor(Math.random() * items.length);
//   return [...items.slice(0, index), ...items.slice(index + 1)];
// }

// removeRandom(0,1,2,3,4,5,6,7,8,9);

const removeRandom = (items) => {
  const index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

// extend([0,1,2], [3,4,5]);

const extend = (arr1, arr2) => ([...arr1, ...arr2]);

// removeKey({a:1, b:2}, 'b');

const removeKey = (obj, key) => { 
  const result = {...obj};
  delete result.key;
  return result;
}

// combine({a:1, b:2}, {c:3, d:4})

const combine = (obj1, obj2) => ({...obj1, ...obj2})

//update({a:1, b:2}, 'a', 4);

const update = (obj, key, val) => ({...obj, [key]: val})