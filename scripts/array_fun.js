//여러개의 값을 변수에 저장할 수 있는 배열
//특정 동일 주제에 묶여있는 2개 이상의 값 배열로 묶음.

//배열 사용안한 경우
const mon = '월'
const tue = '화'
console.log(mon,tue);
//배열 사용한 경우
const yoil = ['월','화','수','목','금','토','일'];
console.log(yoil); //모든 배열 출력
console.log(yoil['0']);
console.log(yoil['6']);
console.log(yoil['2']); //배열 값 중 원하는 인덱스 출력
console.log(yoil.length); //요일 객체의 길이속성

//-------------------------------------배열 기초 1.
//원하는 색상을 자유롭게 6개 배열로 저장하고
//그 중 좋아하는 색상만 인덱스로 골라 콘솔로그로 출력하기
const color = ['빨강','검정','하양','보라','초록','베이지']
console.log(color.length);
console.log(`내가 좋아하는 색상은 ${color[2]}색 입니다.`)

//배열 생성법 2.
//new Array() 내장함수 선언법

let wh = new Array(2);  //숫자2대입(x). 빈배열위치2자리삽입(o)
console.log(wh);

wh[0] = 100;
wh[1] = 50;
console.log(wh);

//-----------------신발 쇼핑몰 색상/사이즈 배열
let colorSize = new Array(2); //빈 배열 2개 준비
//colorSize[0] = prompt('pink, white 중 하나를 선택하세요.')
//colorSize[1] = prompt('220, 230, 240 중 하나를 선택하세요.')
colorSize[0] = 'pink';
colorSize[1] = 220;
let order = `주문옵션 : 색상;${colorSize[0]} , 사이즈:${Number(colorSize[1])}`;
console.log(order);

//-----------------------------의류 쇼핑몰 선택옵션 배열로 만들기
//사이즈 : S , M ,L
//색상 : 화이트, 블랙, 그레이
//추가 상품 : 양말, 손수건

let option = new Array(3); // optionArr |  Arr이 배열이란 뜻으로 자주 사용됨.
//option[0] = prompt('사이즈는 S, M, L이 있습니다.');
//option[1] = prompt('색상은 화이트, 블랙, 그레이가 있습니다.');
//option[2] = prompt('추가 상품은 양말, 손수건, 선택 안함이 있습니다.');
option[0] = 'S';
option[1] = '화이트';
option[2] = '양말';
let orderoption = `주문옵션 : 사이즈:${option[0]}, 색상:${option[1]}, 추가 상품:${option[2]}`;
console.log(orderoption);

// ---------------------------------------배열과 사용자정의함수
// 날씨, 소식 앱
// 출력예시 1) 오늘은 맑음, 내일은 비 소식이 있습니다.
// 출력예시 2) 오늘은 흐림, 내일은 눈 소식이 있습니다.
// 출력예시 3) 오늘은 눈, 내일은 맑음 소식이 있습니다.
// 날씨 상태를 저장한 배열
let weatherArr = new Array('맑음','비','눈','흐림');
// 함수 실행 시마다 다른 데이터를 전달하는 매개변수
weatherFunc(weatherArr[0],weatherArr[1]);
weatherFunc(weatherArr[3],weatherArr[2]);
weatherFunc(weatherArr[2],weatherArr[0]);
function weatherFunc(today,tomorrow){       //()안은 매개를 생성하는 역할, 값을 대입받는 역할.
    let msg = `오늘은 ${today}. 내일은 ${tomorrow} 소식이 있습니다.`;
    console.log(msg);
}

//------------------------ 영화 좌석 예매 배열+함수
// 일반 2명 좌석 선택 기준
// 일반 1명당 표 가격은 10,000원 -> 2명 20,000원
const price = 10000;
let cgvSeat = new Array(2);
cgvSeat[0] ='D5';
cgvSeat[1] ='D6';
//let people = Number(prompt('인원수를 입력하세요'));
//함수 호출
cgvFunc(cgvSeat[0],cgvSeat[1],price*cgvSeat.length);
function cgvFunc(seat1,seat2,won){
    let movie = `일반 ${cgvSeat.length}명 예약한 좌석은 ${seat1},${seat2}이고,`;
    movie += `결제가격은 ${won.toLocaleString('ko-kr')}원입니다.`
    console.log(movie);
}

//---------------------------------------------구구단 함수
//아래 함수 활용 매개변수 추가와 함께 2단~9단 까지 모두 출력할 수 있는 함수 만들기
let num = Number(prompt('몇 단 ?'));
dan99(num); //()안에 생성된 매개변수 자리에 대입해야 하는 값 위치
function dan99(ber){ //ber매개변수를 생성(호출 시 대입받는 값을 받는 위치)
    let dan = `${ber}단은 ~?  `; //ber호출 시 대입받은 값을 최종 전달받는 위치
    dan += `${ber}x1=${ber*1}   `;
    dan += `${ber}x2=${ber*2}   `;
    dan += `${ber}x3=${ber*3}   `;
    dan += `${ber}x4=${ber*4}   `;
    dan += `${ber}x5=${ber*5}   `;
    dan += `${ber}x6=${ber*6}   `;
    dan += `${ber}x7=${ber*7}   `;
    dan += `${ber}x8=${ber*8}   `;
    dan += `${ber}x9=${ber*9}   `;
    console.log(dan);
}
