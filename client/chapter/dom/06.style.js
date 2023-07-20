/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// console.log (first.className = 'box second'); //setter
console.log(first.className); //getter
// console.log (first.className = 'second'); //setter

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// add;
// remove;
// toggle;
// conrains;

first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is-active');

console.log(first.classList.contains('is-active'));

/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.backgroundColor = 'orange'; // setter
// console.log( first.style.backgroundColor ); // getter

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log(getComputedStyle(first).fontSize);
console.log(getComputedStyle(first).getPropertyValue('font-size'));

// 객체의 속성에 접근할떄 . 표기법은 없다

function setCss(node, prop, value) {
  if (typeof node === 'string') node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError('유효한 속성이 아님');
  }
  if (!value) throw new SyntaxError('ㄴㄴ 세번째는 필수값임');

  node.style[prop] = value;
}

console.log(Css('.first', 'color', 'red'));
