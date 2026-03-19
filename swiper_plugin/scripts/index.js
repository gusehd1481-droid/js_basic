
const heroBnr = document.querySelector('.hero_bnr');
console.log(heroBnr);
const heroSlide = new Swiper(heroBnr,{
    //옵션:값,
    //옵션:{옵션:값, 옵션:값,},
    loop:true, /* 슬라이드 끝-> 시작 반복 true, flase */  
    //direction:'vertical', /* 슬라이드 : 수평(기본값) */
    //제자리 나타나기/사라지기 할때는 direction 적용해제
    effect:'fade', //fade, cube, flip
    //mousewheel:true, //마우스 휠 가능 옵션
    //자동재생
    autoplay:{
        delay:2000,
        pauseOnMouseEnter:true,//마우스가 올라오면 일시정지
        disableOnInteraction:true,
        //마우스 상호작용 후에 멈출건지 움직일 건지(false) 옵션
    },
});
const mainBnr = document.querySelector('.main_bnr');
console.log(mainBnr);
const mainSlide = new Swiper(mainBnr,{
    loop:true,
    //direction:'vertical',
    effect:'fade',
    mousewheel:true,
    autoplay:{
        deley:3000,
        pauseOnMouseEnter:true,
        disableOnInteraction:false,
    },
});
const subBnr = document.querySelector('.sub_bnr');
console.log(subBnr);
const subSlide = new Swiper(subBnr,{
    loop:true,
    effect:'fade',
    autoplay:{
        delay:4000,
    },
})