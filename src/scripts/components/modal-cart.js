import ModalLayout from '@scripts/layouts/modal'

class ModalCartComponent extends ModalLayout {
    constructor(elem) {
        super(elem)
    }

   static getId() {
        return 'us-modal-cart'
   }
}

export default ModalCartComponent
