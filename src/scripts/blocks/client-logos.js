class ClientLogosBlock {
    constructor(elem) {
        this.block      = elem
        this.list       = elem.querySelector('.us-client-logos__list')
        this.btnMore    = elem.querySelector('.us-client-logos__more-btn')

        this.btnMore.addEventListener('click', this.btnMoreHandler.bind(this))
    }

    btnMoreHandler() {
        this.list.classList.remove('us-client-logos__list--collapsed')
        this.btnMore.remove()
    }

    static init() {
        console.log('init')
        const blocks = document.querySelectorAll('.us-client-logos')
        if(blocks) blocks.forEach(block => new this(block))
    }
}

export default ClientLogosBlock
