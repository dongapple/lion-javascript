/* ---------------------------------------------------------------------- */
/* String Type                                                      

replace의 알규먼트 1(대체될 문자)은 아래와 같고
/     : 정규표현식으로
\s     : 스페이스를
*//*g      :전체에서 찾는다            /  *  이거 지우기
replace의 알규먼트 2(대체할 문자)는 아래와 같다
,''      : 빈문자

*/
/* ---------------------------------------------------------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength;

// 특정 인덱스의 글자 추출
let extractCharacter;

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// 부분 문자열 추출
let slice;
let subString;
let subStr;

// 문자열 포함 여부 확인
let indexOf;
let lastIndexOf;
let includes;
let startsWith;
let endsWith;

// 공백 잘라내기
let trimLeft;
let trimRight;
let trim;

// 텍스트 반복
let repeat;

// 대소문자 변환
let toLowerCase;
let toUpperCase;

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
