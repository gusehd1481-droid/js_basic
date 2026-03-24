const heroBnr = document.querySelector('.ssf_hero');
const brandProduct = document.querySelector('.brand');
console.log(heroBnr, brandProduct);
const heroSlide = new Swiper(heroBnr,{
    slidesPerView:3, //한번에 보이는 슬라이드 개수
    spaceBetween:0,
    autoplay:{
        delay:3000,
    },
    navigation:{
        nextEl:'.ssf_hero .next',
        prevEl:'.ssf_hero .prev',
    },
});
const brandSlide = new Swiper(brandProduct, {
    slidesPerView:3,
    spaceBetween:10,
    navigation:{
        prevEl:'.brand ~ .prev', //.brand 에 형제들 중에 .prev가 있다. ~ : 형제들 중 화살표가 swiper 밖에 있기 때문에 다른 swiper와 겹치지 않도록 안전하게 swiper의 이름과 ~ 표시를 해준다. 
        nextEl:'.brand ~ .next',
    },
});