const pfWrap = document.querySelector('#wrap');
const webWrap = document.querySelector('.web');
const graphicWrap = document.querySelector('.graphic');
const pfSlide = new Swiper(pfWrap, {
    //옵션:값, 옵션:{옵션:값,},
    mousewheel:true,
    loop:false,
    speed:1000,
    direction:'horizontal',

});
console.log(pfWrap);
//---------------------------------------------------------------------------------------------

console.log(webWrap);
const webSlide = new Swiper(webWrap,{
    direction:'horizontal',
    //effect:'fade',
    loop:true,
    speed:8000,
    autoplay:{
        delay:2000,
    },
    pagination:{
        /* 페이지 대상 html연결, 모양, 동적옵션  */
        el:'.web + .web_page',
        type:'fraction' , //bullets(기본값) fraction
        dynamicBulltes:true, // type type이 기본값(bullets)  일때만 가능
    },
});
// ------------------------------------------------------------------------------

console.log(graphicWrap);
const graphicSlide = new Swiper(graphicWrap, {
    loop:true,
    pagination:{
        el:'.graphic + .graphic_page',
        type:'bullets',
    },
});