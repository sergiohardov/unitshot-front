class PhoneNumberComponent {
    constructor(elem) {
        this.elem           = elem
        this.fullNumber     = elem.getAttribute('data-us-phone-number')
        this.showNumberBtn  = elem.querySelector('.us-phone-number__show-btn')

        this.showNumberBtn.addEventListener('click', this.showLink.bind(this))
    }

    showLink() {
        const a = document.createElement('a')
        a.classList.add('us-phone-number')
        a.href = `tel:${this.fullNumber}`
        a.textContent = this.fullNumber
        this.elem.replaceWith(a)
    }

    static init() {
        const elems = document.querySelectorAll('.us-phone-number')
        if(!elems) return null;

        elems.forEach(elem => new this(elem))
    }
}

export default PhoneNumberComponent
