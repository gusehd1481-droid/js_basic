// 위로
// 1. 초기 숨기기
// 3. 위로 클릭 시 위로 이동하기
// 4. 위로 이동하고 나면 다시 숨겨지기
const fixedTop = document.querySelector('#fixed_group .top');
const header = document.querySelector('header');
console.log(fixedTop,header,header.children[0],header.children[1]);
fixedTop.style.display = 'none';

// 2. 스크롤 특정 위치만큼 내리면 나타나기
//객체.addEventListener
window.addEventListener('scroll',function(){
    //console.log('스크롤중');
    //스크롤 이벤트 1개에 원하는 여러개 동작 삽입하기
    //특정 위치만큼 내리면 '위로'나타나기
    //scrollY속성 : 얼만큼 스크롤을 움직이고 있는지 px로 보여주는 속성
    console.log(window.scrollY);
    //100 위치만큼 내리면 '위로' 나타나기
    if(window.scrollY >= 100){fixedTop.style.display = 'block';}
    else
        fixedTop.style.display = 'none';
    //====================================header
    // 1. 특정 위치까지 스크롤을 내리면 header 고정시키고 디자인 변경하기
    // 2. 스크롤을 올리면 header 디자인 복구, 고정 해제하기
    if(window.scrollY >= 200){
        //console.log('200보다 큰 위치');
        //header.style.position = 'fixed'; 고정(body 기준으로 기존 디자인이 해제됨)
        //header.style.position = 'sticky'; // 고정(태그 구조상 부모 기준 고정 top = 0때문에 번거로울 수 있지만 디자인이 풀리지 않아 훨씬 편리함)
        //header.style.top = '0';
        header.classList.add('scroll');
    }
    else{
        header.classList.remove('scroll');
        //header.style.position = 'relative';
    }
});

//3. 위로 클릭 시 위로 이동하기
fixedTop.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0,0);
});
