import '@styles/main.scss'

import Alpine from 'alpinejs'
import ModalStore from "@scripts/stores/modal.js";
import ProductSetComponent from "@scripts/components/product-set.js";
import ProductGalleryComponent from "@scripts/components/product-gallery.js";
import RangeComponent from "@scripts/components/range.js";
import HeaderBlock from "@scripts/blocks/header.js";
import CheckoutPage from "@scripts/pages/checkout.js";
import ModalCallComponent from "@scripts/components/modal-call.js";
import SliderLayout from "@scripts/layouts/slider.js";

window.Alpine = Alpine

/* Stores */
ModalStore()

/* Layouts */
SliderLayout()

/* Components */
ProductSetComponent()
ProductGalleryComponent()
RangeComponent()
ModalCallComponent();

/* Blocks */
HeaderBlock()

/* Pages */
CheckoutPage()

Alpine.start()
