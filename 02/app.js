document.addEventListener('DOMContentLoaded', init)

function init(){
    const btnEl = document.querySelector('.cart__btn-calculate')
    btnEl.addEventListener('click', handleClick)
}

function handleClick(){
    const cartItemsList = document.getElementsByClassName('cart__item')
    console.log(cartItemsList);
    
}