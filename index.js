const btnYes = document.querySelector('#btn-yes');
const btnNo = document.querySelector('#btn-no');
const container = document.querySelector('#container');
const img = document.querySelector('#img');

btnNo.addEventListener('mouseover', optionNo)

function optionNo (){
    btnNo.style.position = 'absolute';
    btnNo.style.top = (Math.random() * 300) + 'px';
    btnNo.style.left = (Math.random() * 300) + 'px';
    img.classList.add('imgR')
};

// <span>
                // <img src="heart.webp" alt="">
             // </span>
btnYes.addEventListener('click', optionYes);

function optionYes() {
    const sabia = document.querySelector('.sabia');
    sabia.style.transform = 'translateY(25px)'
}
