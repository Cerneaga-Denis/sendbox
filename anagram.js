function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // разбиваем слово на буквы, сортируем и объединяем снова в строку
    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

// const aclean = (arr) => {
//   let set = new Set();

//   return arr.filter((item) => {
//     let sortedItem = Array.from(item.toLowerCase()).sort().join("");

//     if (!set.has(sortedItem)) {
//       set.add(sortedItem);
//       return item;
//     }
//   });
// };

let arr = [
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
];

function fnSpeedTest(fn, repeat, ...args) {
  if (typeof fn === "object")
    return "Функции getFnTime необходим аргумент в виде функции. ";

  let start = Date.now();

  while (repeat > 0) {
    fn(...args);
    repeat--;
  }

  let end = Date.now();

  console.log(fn(...args) === undefined ? "" : fn(...args));
  console.log("*****************************************");
  return `Функция отработала за ${(end - start) / 1000} секунд, (${
    end - start
  } м/сек)`;
}
console.log(fnSpeedTest(aclean, 1000000, arr));
