const best = document.querySelector('.best_swiper');
const nike = document.querySelector('.nike_swiper');
const converse = document.querySelector('.converse_swiper');
const season = document.querySelectorAll('.season_wrap .swiper');
const season_title = document.querySelectorAll('.season_wrap .tab_title a');
console.log(best, nike, converse, season, season_title);
const bestSwiper = new Swiper(best, {
    // 반응형 Swiper 제작 시 모바일부터 계산
    slidesPerView:2, //모바일에서 보이는 개수
    spaceBetween:20,
    navigation:{
        prevEl:'.best_wrap .contents .prev',
        nextEl:'.best_wrap .contents .next',
    },
    //반응형 옵션 breakpoints (사용자의 디바이스 너비 기준)
    //반응형 너비 640 / 768 /1024 (디자인에 따라 수정,추가가능)
    breakpoints:{
        640:{}, //640 이상일 때
        768:{
            slidesPerView:3,
        }, //768 이상일 때
        1024:{
            slidesPerView:4,
        }, //1024 이상일 때 숫자는 점점 커지게 
    },
})
const nikeSwiper = new Swiper(season[0], {
    slidesPerView:2,
    spaceBerween:20,
    breakpoints:{
        640:{},
        768:{
            slidesPerView:3,
        },
        1024:{
            slidesPerView:4, spaceBetween:30,
        },
    },
});
const converseSwiper = new Swiper(season[1],{
    slidesPerView:2,
    spaceBetween:20,
    breakpoints:{
        640:{},
        768:{
            slidesPerView:3,
        },
        1024:{
            slidesPerView:4, spaceBetween:30,
        },
    },
});

//tab 제목 클릭 시 관련 내용 JS
//1. 컨버스 숨기기
season[1].style.display = 'none';
//2. 컨버스 클릭 (active변경) 시 컨버스 보임, 나이키 숨김
season_title[1].addEventListener('click', function(event){
    event.preventDefault();
    season_title[1].classList.add('active');
    season_title[0].classList.remove('active');
    season[0].style.display = 'none';
    season[1].style.display = 'block';
});
season_title[0].addEventListener('click', function(event){
    event.preventDefault();
    season_title[1].classList.remove('active');
    season_title[0].classList.add('active');
    season[1].style.display = 'none';
    season[0].style.display = 'block';
});
//3. 나이키 클릭 (active 변경) 시 컨버스 숨김, 나이키 보임 

//a변수를 클릭이벤트함수로 사용 시 a의 다른 페이지 이동속성(href="#") 때문에 스크롤이 위로 올라가는 문제 해결법
// html 해결법) <a href="javascript:void(0)"> 태그가 많으면 불편할 수 있음.
// JS 해결법) a태그.addEventListener('click', function(){}); 명령기준
// 1. 위 명령 function(매개변수) 입력
// 2. 매개변수.preventDefault(); //a의 기본기능 막기를 막기를 의미함.