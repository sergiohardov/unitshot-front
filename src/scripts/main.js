import '@styles/main.scss'
import PhoneNumberComponent from "@scripts/components/phone-number.js";
import ModalAddCartComponent from "@scripts/components/modal-add-cart.js";


document.addEventListener('DOMContentLoaded', () => {
    PhoneNumberComponent.init();
    ModalAddCartComponent.init()
})
