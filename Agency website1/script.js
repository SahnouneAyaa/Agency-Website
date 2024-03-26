

let  cartitem = document.querySelector('.cart-items-container');

document.querySelectorAll('.cart')[0].onclick = () => {
    cartitem.classList.toggle('active');
}

document.querySelectorAll('.cart')[1].onclick = () => {
  cartitem.classList.toggle('active');
}


let bar = document.getElementsByClassName('bar');
let nav = document.getElementById('nav');
let close = document.getElementById('close')


    bar[0].addEventListener('click', () => {
      nav.style.right=0;
    })


    close.addEventListener('click', () => {
       nav.style.right="-300px";
    })


