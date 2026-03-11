//function 함수명(전달인자){반복실행내용;}


function story1(){ //반복 함수 준비
    let a = '조약돌 수집';
    a += '조약돌 떨어뜨리기'  //기존이야기에 더하기 +=
    a += '조약돌 따라 집 찾아오기'
    console.log(a);
}
function story2(){
    let b ='부모는 먹을 것이 없어.'
    b += '계모가 아이들을 숲에 버리자고 제안한다'
    console.log(b)
;}
//반복 함수 실행(함수 밖)
story1();
story1();

// 키오스크 함수
function kiosk(){
    let cf = '주문하기';
    cf += '커피 선택창 실행';
    cf += '커피 옵션 선택하기';
    cf += '장바구니에 커피담기';
    cf += '적립 하기';
    cf += '결제 방식 선택 창 실행';
    cf += '결제 하기';
    cf += '영수증 출력 여부 묻기';
    cf += '주문완료';
    console.log(cf);
}
kiosk();