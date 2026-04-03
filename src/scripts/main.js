import '@styles/main.scss'
import PhoneNumberComponent from "@scripts/components/phone-number.js";
import ModalCallComponent from "@scripts/components/modal-call.js";
import ModalAddCartComponent from "@scripts/components/modal-add-cart.js";
import ModalLangComponent from "@scripts/components/modal-lang.js";
import ModalRemoveCartComponent from "@scripts/components/modal-remove-cart.js";


document.addEventListener('DOMContentLoaded', () => {
    PhoneNumberComponent.init();
    ModalAddCartComponent.init()
    ModalRemoveCartComponent.init()
    ModalCallComponent.init();
    ModalLangComponent.init()
})
