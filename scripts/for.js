// 반복문 for
// for(초기변수생성(i, j, k, m, n)과초기값대입; 증감식){반복실행문}

// 자바스크립트 10번 반복 출력(반복문 이용)
// DOM요소(li[index]) 20개 1~20개라면 기준으로 생각해서 숫자데이터로 생각해야함.
for(let i=0; i<10; i++){
    console.log('자바스크립트');
}

// css 5번 반복 출력
for(let i=0; i<5; i++){
    console.log('css');
}

// html 20번 반복 출력
for(let i=0; i<20; i++){ //for 중괄호 안에서만 i를 반복하지만 않으면 됨
    console.log(`html${i+1}`); //i는 0부터 시작하지만 +1을 한 후 출력할 수 있다
}

// 구구단 2단 반복 출력 "2x1=2"
function dan2 (){
    let num = 2;
    let result = '';
    result += `${num}x1=${num*1}`;
    result += `${num}x1=${num*2}`;
    result += `${num}x1=${num*3}`;
    return result;
}

//반복문 활용 2단
// 0으로 시작
const danResult = document.querySelectorAll('.dan .result');
console.log(danResult);
for(let i=0; i<9; i++){
    let result = `2x${i+1}=${2*(i+1)}<br>`
    //danResult.textContent += result; textContent가 <br>을 문자로 인식함
    danResult[0].innerHTML += result;   // innerHTML이 <br>을 태그로 인식하여 실제 html에 br을 쓰지않았지만 js에서 적용 시킬 수 있음
    result = `3x${i+1}=${3*(i+1)}<br>`
    danResult[1].innerHTML += result;
    result = `4x${i+1}=${4*(i+1)}<br>`
    danResult[2].innerHTML += result;
}

console.log('-----------------------------------');
//자바스크립트 10번 반복 출력 (반복문 없을 때)
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('-----------------------------------');

// 자바슼립트를 이용한 태그생성
const target = document.querySelector('.target');
// 태그 생성 목적의 변수(저장소) 생성
const ul = document.createElement('ul');
console.log(ul);
ul.innerHTML = '<li>목록1</li>'
//target.innerHTML = ul;
target.appendChild(ul); // createElement로 생성한 태그삽입방법
/* console.log(target);
target.innerHTML = '<ul>'
target.innerHTML += '<li>목록1</li>'
target.innerHTML += '<li>목록2</li>'
target.innerHTML += '</ul>' */


