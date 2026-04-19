class ProductPage   {
    constructor(elem) {
        this.page = elem
        document.addEventListener('click', this.showDescription.bind(this))
    }

    showDescription(e) {
        const target = e.target;

        const btn = target.closest('.us-button-show-more')
        if(!btn) return;

        const container = target.closest('.us-page-product__info__item');
        if (!container) return;

        const description = container.querySelector('.us-page-product__info__content-description');
        if (!description) return;

        description.classList.toggle('us-page-product__info__content-description--active')
        btn.classList.toggle('us-button-show-more--active')
    }

    static init() {
        const page = document.querySelector('.us-page-product')
        if(page) new this(page)
    }
}

export default ProductPage
