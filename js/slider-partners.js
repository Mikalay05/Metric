let arrImgPartners = [
    { pathIMG: "images/footer-icons/IMAGE.png" },
    { pathIMG: "images/footer-icons/IMAGE-1.png" },
    { pathIMG: "images/footer-icons/IMAGE-2.png" },
    { pathIMG: "images/footer-icons/IMAGE-3.png" },
    { pathIMG: "images/footer-icons/IMAGE-4.png" },
    { pathIMG: "images/footer-icons/IMAGE-5.png" }
];

console.log('Старт футер!');
let indexImgIconc = 0;//первый элемент
let btPrev = document.querySelector('.slider-partners-prev');
let btnNext = document.querySelector('.slider-partners-next');

btnNext.addEventListener('click', swapNextIcon);
btPrev.addEventListener('click', swapPrevIcon);

function swapNextIcon() {
    console.log('На next footer!');
    indexImgIconc++;
    if (indexImgIconc >= arrImgPartners.length) {
        indexImgIconc = 0;
    }
    updateSliderContentFromArr();
  }
  
  function swapPrevIcon() {
    console.log('Назад footer!');
    indexImgIconc--;
    if (indexImgIconc < 0) {
        indexImgIconc = arrImgPartners.length - 1;
    }
    updateSliderContentFromArr();
  }
  
  function updateSliderContentFromArr() {
    console.log(indexImgIconc);
    let img1 = document.querySelector('#img1-partners');
    let img2 = document.querySelector('#img2-partners');
    let img3 = document.querySelector('#img4-partners');
    let img4 = document.querySelector('#img3-partners');
    let img5 = document.querySelector('#img5-partners');
    let img6 = document.querySelector('#img5-partners');

    img1.src = arrImgPartners[(indexImgIconc) % arrImgPartners.length].pathIMG;
    img2.src = arrImgPartners[(indexImgIconc + 1) % arrImgPartners.length].pathIMG;
    img3.src = arrImgPartners[(indexImgIconc + 2) % arrImgPartners.length].pathIMG;
    img4.src = arrImgPartners[(indexImgIconc + 3) % arrImgPartners.length].pathIMG;
    img5.src = arrImgPartners[(indexImgIconc + 4) % arrImgPartners.length].pathIMG;
    img6.src = arrImgPartners[(indexImgIconc + 5) % arrImgPartners.length].pathIMG;
}