import '@styles/main.scss'

import ModalCallComponent from "@scripts/components/modal-call.js";
import ModalAddCartComponent from "@scripts/components/modal-add-cart.js";
import ModalLangComponent from "@scripts/components/modal-lang.js";
import ModalRemoveCartComponent from "@scripts/components/modal-remove-cart.js";
import SliderProductCardsComponent from "@scripts/components/slider-product-cards.js";
import SliderLogoImagesComponent from "@scripts/components/slider-logo-images.js";
import SliderCategoriesComponent from "@scripts/components/slider-categories.js";
import SliderReviewsBlock from "@scripts/blocks/slider-reviews.js";
import SliderPostsBlock from "@scripts/blocks/slider-posts.js";
import HeaderBlock from "@scripts/blocks/header.js";
import ModalFilterComponent from "@scripts/components/modal-filter.js";
import RangeComponent from "@scripts/components/range.js";
import QuantityComponent from "@scripts/components/quantity.js";
import ProductGalleryComponent from "@scripts/components/product-gallery.js";
import ProductPage from "@scripts/pages/product.js";
import ModalCartComponent from "@scripts/components/modal-cart.js";
import CheckoutPage from "@scripts/pages/checkout.js";

import Alpine from 'alpinejs'
import ProductSetComponent from "@scripts/components/product-set.js";

window.Alpine = Alpine

/* Components */
ProductSetComponent()

Alpine.start()

document.addEventListener('DOMContentLoaded', () => {
    ModalAddCartComponent.init()
    ModalRemoveCartComponent.init()
    ModalFilterComponent.init()
    ModalCallComponent.init();
    ModalLangComponent.init()
    SliderProductCardsComponent.init()
    SliderLogoImagesComponent.init()
    SliderCategoriesComponent.init()
    SliderReviewsBlock.init()
    SliderPostsBlock.init()
    HeaderBlock.init()
    RangeComponent.init()
    QuantityComponent.init()
    ProductGalleryComponent.init()
    ProductPage.init()
    ModalCartComponent.init()
    CheckoutPage.init()
})
