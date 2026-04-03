import ModalLayout from '@scripts/layouts/modal'

class ModalLangComponent extends ModalLayout {
    constructor(elem) {
        super(elem)
    }

   static getId() {
        return 'us-modal-lang'
   }
}

export default ModalLangComponent
