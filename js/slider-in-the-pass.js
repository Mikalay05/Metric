let arrImgInThePass = [
    { pathIMG: "images/in-the-pass-logos/Fastompany.png" },
    { pathIMG: "images/in-the-pass-logos/forbes.png" },
    { pathIMG: "images/in-the-pass-logos/TechCrinch.png" },
    { pathIMG: "images/in-the-pass-logos/wired.png" },
    { pathIMG: "images/in-the-pass-logos/ZDNet.png" }
];

console.log('Старт!');
let indexImg = 0;//первый элемент
let btnP = document.querySelector('.slider-prev');
let btnN = document.querySelector('.slider-next');

btnN.addEventListener('click', swapNext);
btnP.addEventListener('click', swapPrev);

function swapNext() {
    console.log('На next!');
    indexImg++;
    if (indexImg >= arrImgInThePass.length) {
        indexImg = 0;
    }
    updateSliderContentFromArr();
  }
  
  function swapPrev() {
    console.log('Назад!');
    indexImg--;
    if (indexImg < 0) {
        indexImg = arrImgInThePass.length - 1;
    }
    updateSliderContentFromArr();
  }
  
  function updateSliderContentFromArr() {
    console.log(indexImg);
    let img1 = document.querySelector('#img1-in-the-pass');
    let img2 = document.querySelector('#img2-in-the-pass');
    let img3 = document.querySelector('#img4-in-the-pass');
    let img4 = document.querySelector('#img3-in-the-pass');
    let img5 = document.querySelector('#img5-in-the-pass');
    img1.src = arrImgInThePass[(indexImg) % arrImgInThePass.length].pathIMG;
    img2.src = arrImgInThePass[(indexImg + 1) % arrImgInThePass.length].pathIMG;
    img3.src = arrImgInThePass[(indexImg + 2) % arrImgInThePass.length].pathIMG;
    img4.src = arrImgInThePass[(indexImg + 3) % arrImgInThePass.length].pathIMG;
    img5.src = arrImgInThePass[(indexImg + 4) % arrImgInThePass.length].pathIMG;
}