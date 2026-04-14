class RangeComponent {
    constructor(elem) {
        this.elem           = elem
        this.rangeInput     = elem.querySelectorAll(".us-range__range-input input");
        this.priceInput     = elem.querySelectorAll(".us-range__price-input input");
        this.range          = elem.querySelector(".us-range__progress");
        this.priceGap       = 100;

        this.priceInput?.forEach(input => input?.addEventListener("input", this.priceInputHandler.bind(this)));
        this.rangeInput?.forEach(input => input?.addEventListener("input", this.rangeInputHandler.bind(this)));
    }

    priceInputHandler(e) {
        let minPrice = parseInt(this.priceInput[0].value),
            maxPrice = parseInt(this.priceInput[1].value);

        if ((maxPrice - minPrice >= this.priceGap) && maxPrice <= this.rangeInput[1].max) {
            if (e.target.className === "us-range__input-min") {
                this.rangeInput[0].value = minPrice;
                this.range.style.left = ((minPrice / this.rangeInput[0].max) * 100) + "%";
            } else {
                this.rangeInput[1].value = maxPrice;
                this.range.style.right = 100 - (maxPrice / this.rangeInput[1].max) * 100 + "%";
            }
        }
    }

    rangeInputHandler(e) {
        let minVal = parseInt(this.rangeInput[0].value),
            maxVal = parseInt(this.rangeInput[1].value);
        if ((maxVal - minVal) < this.priceGap) {
            if (e.target.className === "us-range__range-min") {
                this.rangeInput[0].value = maxVal - this.priceGap
            } else {
                this.rangeInput[1].value = minVal + this.priceGap;
            }
        } else {
            this.priceInput[0].value = minVal;
            this.priceInput[1].value = maxVal;
            this.range.style.left = ((minVal / this.rangeInput[0].max) * 100) + "%";
            this.range.style.right = 100 - (maxVal / this.rangeInput[1].max) * 100 + "%";
        }
    }

    static init() {
        const elems = document.querySelectorAll('.us-range')
        if(!elems) return null;

        elems.forEach(elem => new this(elem))
    }
}

export default RangeComponent
