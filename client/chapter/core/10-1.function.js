/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

let b = 10;
let a = 1;

const func1 = (a) => a + b;
const func2 = (a) => a + b;
const func3 = (a) => {
  a + b;
};
const func4 = (a) => ({ result: a + b });

console.log(func1);
console.log(func2);
console.log(func3);
console.log(func4);

/* 
console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);
 */
// 함수 선언
//방법1
// function calcSumPrice(priceA, priceB, priceC){
//   // priceC ??= 0;
//   // priceC ||= 0;

//   // if(!priceC) priceC = 0;

//   // if(typeof priceC==='undefined'){
//   //   priceC = 0
//   // }

//   return priceA + priceB + priceC;
// }
// const result = calcSumPrice(10000, 3500)// 함수 호출
// console.log(result);

//방법2
/* function calcSumPrice(priceA, priceB, priceC = 0, priceD = 0) {
  return priceA + priceB + priceC;
}
const result = calcSumPrice(10000, 3500); // 함수 호출
console.log(result);

function rem(pxValue, base) {
  
  
  if(typeof pxValue === 'string'){
    pxValue = parseInt(pxValue,10);
  }

  re
} */

//rem(32, 16);

// 함수 호출

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
let rem;

// css(node: string, prop: string, value: number|strung) : string;
let css;

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
