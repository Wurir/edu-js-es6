document.addEventListener('DOMContentLoaded', () => {

    const btnEl = document.querySelector('.cart__btn-calculate')
    btnEl.addEventListener('click', () => {
        const cartItemsElements = document.getElementsByClassName('cart__quantity')
        const cartItemsList = [...cartItemsElements]

        const totalPriceEl = document.querySelector('.cart__total-price')
        let sum = 0

        cartItemsList.forEach(element => {
            const { value, dataset: { price } } = element

            sum += Number(value) * Number(price)
        })
        totalPriceEl.textContent = sum
    })
})