class QuantityComponent {
    constructor(elem) {
        this.component  = elem
        this.minusBtn   = elem.querySelector('.us-quantity__minus')
        this.plusBtn    = elem.querySelector('.us-quantity__plus')
        this.input      = elem.querySelector('.us-quantity__input')

        this.minusBtn.addEventListener('click', this.decrement.bind(this))
        this.plusBtn.addEventListener('click', this.increment.bind(this))
        this.input.addEventListener('input', this.inputHandler.bind(this))
    }

    increment() {
        this.input.value++
    }

    decrement() {
        if(this.input.value <= 0) return
        this.input.value--
    }

    inputHandler(e) {
        if(e.target.value <= 0) e.target.value = 0
    }

    static init() {
        const elems = document.querySelectorAll('.us-quantity')
        if(!elems) return null;

        elems.forEach(elem => new this(elem))
    }
}

export default QuantityComponent
