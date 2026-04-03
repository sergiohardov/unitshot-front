import ModalLayout from '@scripts/layouts/modal'

class ModalRemoveCartComponent extends ModalLayout {
    constructor(elem) {
        super(elem)
    }

   static getId() {
        return 'us-modal-remove-cart'
   }
}

export default ModalRemoveCartComponent
