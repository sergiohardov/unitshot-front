import ModalLayout from '@scripts/layouts/modal'

class ModalAddCartComponent extends ModalLayout {
    constructor(elem) {
        super(elem)
    }

   static getId() {
        return 'us-modal-add-cart'
   }
}

export default ModalAddCartComponent
