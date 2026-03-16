//함수기초연습
function calc(num2) {
    let num1 = 2;
    let total = num1 + num2;
    console.log(`total=>${total}`)
}
calc(1000);
calc(4);
calc('1');

// 1400px / 4 - 20px
// 1024px / 3 - 20px
// 420px / 2 - 20px
// 결과 예시) width:?px
function wcalc(width, num){
    let calc = (width - 20) / num;
    let wtotal = `width : ${calc.toFixed(3)}px`
    //반올림해서 소수점을 ()괄호안자리까지 표시하라는 함수 toFixed() 주의: 문자열로 처리됨.
    console.log(wtotal)
}
wcalc(1400, 4);
wcalc(1024, 3);
wcalc(420, 2);

// BOM 내장함수 종류
// window.함수(); // window는 최상위 객체라 생략가능
//let bom1 = alert(`경고 메시지`);

document.write('안녕하세요');
document.write('안녕<br>하십니까');
document.write('<h2>안녕하십니까</h2>');

//DOM(document object model)
//변수생성 -> 변수활용 연산자 또는 함수 진행
//DOM변수생성 -> 나머지 순서 동일
const h1Tag = document.getElementsByTagName('h1');
console.log(h1Tag);
// js에 의해 동적으로 변경되는 결과에 따라 스타일변동을 위해 자바스크립트 안에서도 css를 작성할 수 있다.
// DOM객체.style.속성 = '값';   js방식
// DOM객체.style = '속성:값';   css방식
h1Tag[0].style.backgroundColor = '#ff0';
//h1Tag[0].style = 'border:1px solid #000'; 작성한 방식이 css방식이기 때문에 단 하나의 스타일을 사용할 때에는 상관없지만 여러개를 겹칠 경우에는 js방식으로 써줘야 style중첩이 가능하다.
h1Tag[0].style.border = '1px solid #000'

//클래스 DOM 선택
const titleCls = document.getElementsByClassName('title');
console.log(titleCls);
titleCls[1].style.borderBottom = '1px dashed red';
titleCls[0].style.fontSize = '3.0rem';
titleCls[0].style.background = 'linear-gradient(red, blue)';
titleCls[0].style.lineHeight = '2.5';
titleCls[0].style.textAlign = 'center';
titleCls[0].style.fontStyle = 'italic';
titleCls[0].style.fontWeight = '300';

//아이디 DOM 선택
const txtId = document.getElementById('text');
console.log(txtId);
txtId.style.fontSize = '2.0rem';
txtId.style.background = 'linear-gradient(yellow, purple)';
txtId.style.fontStyle = 'italic';
txtId.style.padding = '10px 30px';
txtId.style.textAlign = 'right';

//ES6 DOM
const titleQ = document.querySelector('.title');
console.log(titleQ);

// h1 태그 잡기
const h1TagQ = document.querySelector('.box h1');
console.log(h1TagQ);

//아이디 잡기
const idQ = document.querySelector('#text');
console.log(idQ);
idQ.style.fontSize = '4.5rem';
idQ.style.fontWeight = '600';

// All 키워드 활용 클래스 여러개 잡기
const titleAll = document.querySelectorAll('.box .title');
console.log(titleAll);
titleAll[1].style.backgroundColor = 'red';


//스타벅스 카테고리/테마 메뉴 JS 만들기
//특정 목표 달성을 위한 절차적 순서 흐름 계획
//초기모습 -> 사용자의 동적 움직임에 따라 변화되는 모습
//HTLM, css 준비된 걸 기준으로 작성
// 1. 테마 내용 숨기기
// 2. 테마 제목 클릭
// 3. 카테고리 내용 숨기기, 테마 내용 보이기
// 4. 카테고리 제목 클릭
// 5. 카테고리 내용 보이기, 테마 내용 숨기기
// 6. 테마내용, 테마버튼(배경색) 숨기기

//1. 테마 내용 숨기기
//숨기기(동작) 실행하려면 테마내용(요소) 필요
const theme = document.querySelector('.theme');
const themeTitle = document.querySelector('.tab_title a:nth-child(2)');
const category = document.querySelector('.category');
const categoryTitle = document.querySelector('.tab_title a:nth-child(1)');
//변수 테스트 (에러 조기 확인)
console.log(theme,themeTitle,category,categoryTitle);
// 실행
theme.style.display = 'none';
// 2. 테마 제목 클릭
themeTitle.addEventListener('click', themeShow)
// 3. 카테고리 내용 숨기기, 테마 내용 보이기
function themeShow(){
    category.style.display = 'none';
    theme.style.display = 'block';
}
// 4. 카테고리 제목 클릭
categoryTitle.addEventListener('click', categoryShow)
// 5. 카테고리 내용 보이기, 테마 내용 숨기기
function categoryShow(){
    category.style.display = 'block';
    theme.style.display = 'none';
}