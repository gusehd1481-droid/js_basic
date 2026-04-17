const topA = document.querySelector('.popup .top');
const cateTitle = document.querySelectorAll('.category_title a');
const cateContent = document.querySelectorAll('.category_contents section'); 
console.log(topA,cateTitle,cateContent);

topA.addEventListener('click', function(e){
    e.preventDefault(); //href 막기
    //객체.함수();
    //window.scrollTo(X좌표, Y좌표);
    window.scrollTo(0, 100);
});

//반품 안내 클릭 시 반품 위치 이동
/* cateTitle[3].addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo(0, cateContent[3].offsetTop-200);
    //scrollTo y좌표 수치값은 최상단(0) 또는 헤더의 header의 높이 위치 정도일 때 숫자로 작성한다. 그 이상의 큰 값은 객체.속성을 활용해야한다.
    console.log(cateContent[3].offsetTop);
    activeFunc(cateTitle[3]);
}); */
/* cateTitle[0].addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0, cateContent[0].offsetTop-200);
    activeFunc(cateTitle[0]);
});
cateTitle[1].addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0, cateContent[1].offsetTop-200);
    activeFunc(cateTitle[1]);
});
cateTitle[2].addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0, cateContent[2].offsetTop-200);
    activeFunc(cateTitle[2]);
}); */

for(let title of cateTitle){
    title.addEventListener('click',function(e){
        console.log(title); //노드리스트가 아닌 개별출력 확인
        e.preventDefault();
        //console.log('클릭확인');
        activeFunc(title);
        /* 클릭한 제목에 관련한 내용 스크롤 이동하기 */
        //window.scrollTo(0, 0);
        //객체속성매개변수.currentTarget.dataset.데이터속성이름
        console.log(e.currentTarget.dataset.index); //html의 data속성은 JS에서 dataset으로 읽고, 뒤에는 data-이름 data에 붙인 이름을 읽는다
        const i = e.currentTarget.dataset.index; //콘솔에 찍힌 index번호가 i 변수에 대입되고 
        window.scrollTo(0, cateContent[i].offsetTop-200); //인덱스번호에 매개변수로 들어간다.
    });
}



//active 적용/해제 함수

function activeFunc(target){
    for(let i of cateTitle) i.classList.remove('active');
    target.classList.add('active');
    return;
};