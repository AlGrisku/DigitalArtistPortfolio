let img = document.querySelector('.chapter-image-wrapper img');

//Buttons
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

btn1.addEventListener('click', ()=>{
    img.src = "/Assets/Media/Images/School Series/003/1.jpg";

    btn1.classList.add('active');

    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
})

btn2.addEventListener('click', ()=>{
    img.src = "/Assets/Media/Images/School Series/003/2.jpg";

    btn2.classList.add('active');

    btn1.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
})

btn3.addEventListener('click', ()=>{
    img.src = "/Assets/Media/Images/School Series/003/3.jpg";

    btn3.classList.add('active');

    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn4.classList.remove('active');
})

btn4.addEventListener('click', ()=>{
    img.src = "/Assets/Media/Images/School Series/003/4.jpg";

    btn4.classList.add('active');

    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
})

document.getElementById('continue').onclick = function () {
    location.href = "school_series_003.html";
};