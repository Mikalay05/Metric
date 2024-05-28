let arr = [
    {
        name: "Kyle Killit",
        whatSay: "“Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.”",
        pathIMG: "images/people-who-say/Kyle.png",
        position: "Designer at Tiempo Labs"
    },
    {
        name: "Sergie Kalashnikov",
        whatSay: "“Ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna”",
        pathIMG: "images/people-who-say/Sergie.png",
        position: "CEO at BentoBox"
    },
    {
        name: "Bryant Chou",
        whatSay: "“Nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.”",
        pathIMG: "images/people-who-say/Bryant.png",
        position: "CTO at Slapper Labs"
    }
]

let index = 0;
let btnB = document.querySelector('.button-pagination-back');
let btnF = document.querySelector('.button-pagination-front');

btnF.addEventListener('click', swapFront);
btnB.addEventListener('click', swapBack);

function swapFront() {
    console.log('На фронт!');
    index++;
    if (index >= arr.length) {
      index = 0;
    }
    updateSliderContent();
  }
  
  function swapBack() {
    console.log('Назад!');
    index--;
    if (index < 0) {
      index = arr.length - 1;
    }
    updateSliderContent();
  }
  
  function updateSliderContent() {
    console.log(index);
    let whatSay = document.querySelector('#id-what-say');
    let img = document.querySelector('#id-img-who-say');
    let name = document.querySelector('#id-who-say');
    let position = document.querySelector('#id-position-who-say');

    whatSay.textContent = arr[index].whatSay;
    img.src = arr[index].pathIMG;
    name.textContent = arr[index].name;
    position.textContent = arr[index].position;
}