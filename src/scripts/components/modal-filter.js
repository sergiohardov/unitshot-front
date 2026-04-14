import ModalLayout from '@scripts/layouts/modal'

class ModalFilterComponent extends ModalLayout {
    constructor(elem) {
        super(elem)

        elem.addEventListener('click', this.accordionTriggers.bind(this))
    }

    accordionTriggers(e) {
        const target = e.target.closest('.us-modal-filter__item__title')
        if (!target) return

        const container = e.target.closest('.us-modal-filter__item')
        if (!target) return

        container.classList.toggle('us-modal-filter__item--active')
    }

   static getId() {
        return 'us-modal-filter'
   }
}

export default ModalFilterComponent
