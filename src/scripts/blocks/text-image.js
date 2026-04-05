class TextImageBlock {
    constructor(elem) {
        this.block = elem
        this.description = elem.querySelector('.us-text-image__description')
        this.showMoreBtn = elem.querySelector('.us-text-image__more-btn')

        this.showMoreBtn?.addEventListener('click', this.showMoreHandler.bind(this))
    }

    showMoreHandler() {
        this.description.classList.remove('us-text-image__description--hidden')
        this.showMoreBtn.remove()
    }

    static init() {
        const blocks = document.querySelectorAll('.us-text-image')
        if (blocks) blocks.forEach(block => new this(block))
    }
}

export default TextImageBlock
