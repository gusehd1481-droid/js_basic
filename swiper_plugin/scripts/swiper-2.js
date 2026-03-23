const heroBnr = document.querySelector('.hero_bnr');
const barBg = document.querySelector('.bar_bg');
const bestItem = document.querySelector('.best_swiper');
const newItem = document.querySelector('.nike');
console.log(heroBnr, barBg, bestItem, newItem);

const heroSwiper = new Swiper(heroBnr,{
    autoplay:{delay:3000,},
    loop:true,
    on:{//슬라이드 변경 시 실행 함수
        init:function(){//처음 시작할 때 실행 함수
            //부모요소에 active클래스 적용하는 법
            barBg.classList.add('active');
        },
        slideChangeTransitionStart:function(){//슬라이드 전환 시 시작함수
            barBg.classList.remove('active');
        },
        slideChangeTransitionEnd:function(){//슬라이드 전환 종료 후 시작함수
            barBg.classList.add('active');
        },
    },
    //페이지번호 사용자 함수
    pagination:{
        el:'.hero_bnr .pg',
        type:'fraction',
        // swiper-pagination-current
        // swiper-pagination-total
        // 위 고유 클래스명 활용 custom javascript - renderFraction
        // swiper고유옵션:function(매개변수){return}
        renderFraction:function(current, total){
            console.log(current,total)
            let customPg = `<span class=${current}></span>`;
            //customPg += `<span>.💕</span>`;
            customPg += `<span class=${total}></span>`;
            return customPg
        }
    },
});
const bestSwiper = new Swiper(bestItem, {
    //하나의 화면 기준 보이는 슬라이드 개수(총 슬라이드 개수보단 작아야 함)
    slidesPerView:3.5,
    //슬라이드 한 번에 전환되는 개수(기본 1개)
    slidesPerGroup:2,//하나의 화면 기준 보이는 개수보다 많을 수 없음.
    spaceBetween:20,
    loop:true,
    speed:2000,
    autoplay:{delay:2000,},
    centeredSlides:true,
    on:{//슬라이드 변경 시 실행 함수
        init:function(){//처음 시작할 때 실행 함수
            //부모요소에 active클래스 적용하는 법
            barBg.classList.add('active');
        },
        slideChangeTransitionStart:function(){//슬라이드 전환 시 시작함수
            barBg.classList.remove('active');
        },
        slideChangeTransitionEnd:function(){//슬라이드 전환 종료 후 시작함수
            barBg.classList.add('active');
        },
    },
});
const newSwiper = new Swiper(newItem, {
    loop:true,
    autoplay:{delay:2000,},
    slidesPerView:5.5,
});