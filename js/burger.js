console.log("Запуск!");

var burgerMenu = document.querySelector('.burger-menu');
var line2 = document.querySelector('#burger-line-2');
var line3 = document.querySelector('#burger-line-3');
var nav = document.querySelector('#nav');
line2.style.width = "40px";
line3.style.width = "40px";

burgerMenu.addEventListener('click', function () {
    console.log("Нажатие на кнопку!");
    nav.classList.toggle('is-visible');
    if(line2.style.width === "40px")
        {
            line2.style.width = "30px";
        }
        else{
            line2.style.width = "40px";
        }
    if(line3.style.width === "40px")
            {
                line3.style.width = "20px";
            }
            else{
                line3.style.width = "40px";
            }
});    
