import {formatPrice} from "@scripts/base/helpers.js";

// TODO: сделать отправку формы на бек
// TODO: добавить заглушку "нет товаров" при пустом списке
class CheckoutPage {
    constructor(elem) {
        this.page           = elem
        this.productsList   = elem.querySelector('.us-page-checkout__form__list')
        this.summaryValue   = elem.querySelector('.us-page-checkout__form__summary__label__value')
        this.totalValue     = elem.querySelector('.us-page-checkout__form__summary__total__value')

        this.productsList.addEventListener('click', this.removeProductHandler.bind(this))
        this.productsList.addEventListener('change', this.changeQuantityHandler.bind(this))

        this.updateValues()
    }

    removeProductHandler(e) {
        const target = e.target.closest('.us-product-item__close')
        if (!target) return;

        const productItem = target.closest('.us-page-checkout__form__list__item')
        if (!productItem) return;

        productItem.remove()
        // TODO: удалять с корзины
        // TODO: обновлять счетчик корзины

        this.updateValues()
    }

    changeQuantityHandler(e) {
        const target = e.target.closest('.us-quantity__input')
        if (!target) return;

        // TODO: обновлять значения в корзине
        this.updateValues()
    }

    updateValues() {
        const productsData = this.getProductsData()

        this.summaryValue.innerHTML = productsData.length
        this.totalValue.innerHTML   = formatPrice(productsData.reduce((acc, item) => acc + item.price * item.quantity, 0))
    }

    getProductsData() {
        const products = this.productsList.querySelectorAll('.us-page-checkout__form__list__item')
        if (!products) return [];

        return Array.from(products).map(item => {
            const id = item.getAttribute('data-us-product-item-id')
            const price = item.getAttribute('data-us-product-item-price')
            const quantity = item.querySelector('.us-quantity__input').value
            return {id, price, quantity}
        })
    }

    static init() {
        const page = document.querySelector('.us-page-checkout')
        if (page) new this(page)
    }
}

export default CheckoutPage
