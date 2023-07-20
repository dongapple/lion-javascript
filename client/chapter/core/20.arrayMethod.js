/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

function isArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

const isArray2 = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';

const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

const arr = [10, 100, 1000, 10000];

const people = [
  {
    id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
    id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
    id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
    id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
    id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

arr.forEach((item, index) => {
  // console.log(item);
});

people.forEach((item) => {
  console.log(item.name);
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse

// arr.reverse();
console.log(arr);

// splice : 맥가이버칼
arr.splice(1, 2, 5, 13);
console.log(arr);
// sort
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);

/* 새로운 배열 반환 ------------------------ */

const user = ['a', 'b', 'c'];

// concat
const newArray = arr.concat(user);
const newArray2 = [...arr, ...user];
console.log(newArray);

// slice
const slice = arr.slice(2, 5);
console.log(slice);

// toSorted
const toSorted = arr.toSorted((a, b) => {
  return b - a;
});
console.log(toSorted);

// toReversed

const toReversed = arr.toReversed();
console.log(toReversed);

// toSpliced
const toSpliced = arr.toSpliced(2, 0, 'a', 'b', 'c');
console.log(toSpliced);

// map
/* const job = people.map((item, index) => {
  return `<div>${item.profession}</div>`;
});

job.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});
 */

const job = people.map((item, index) => {
  return /* html */ `
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `;
});

job.forEach((item) => {
  // document.body.insertAdjacentHTML('beforeend', item);
});
/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex
const findIndex = people.findIndex((item) => {
  return item.id === 3;
});

console.log(findIndex);

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce'

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`,
  ''
);

// document.body.insertAdjacentHTML('beforeend', template);
// reduceRight

// 반대 순서로 돈다

/* string ←→ array 변환 ------------------ */

// split
// join
