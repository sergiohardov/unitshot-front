import '@styles/main.scss'

import SliderProductCardsComponent from "@scripts/components/slider-product-cards.js";
import SliderLogoImagesComponent from "@scripts/components/slider-logo-images.js";
import SliderCategoriesComponent from "@scripts/components/slider-categories.js";
import SliderReviewsBlock from "@scripts/blocks/slider-reviews.js";
import SliderPostsBlock from "@scripts/blocks/slider-posts.js";

import Alpine from 'alpinejs'
import ModalStore from "@scripts/stores/modal.js";
import ProductSetComponent from "@scripts/components/product-set.js";
import ProductGalleryComponent from "@scripts/components/product-gallery.js";
import RangeComponent from "@scripts/components/range.js";
import HeaderBlock from "@scripts/blocks/header.js";
import CheckoutPage from "@scripts/pages/checkout.js";
import ModalCallComponent from "@scripts/components/modal-call.js";

window.Alpine = Alpine

/* Stores */
ModalStore()

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

document.addEventListener('DOMContentLoaded', () => {
    SliderProductCardsComponent.init()
    SliderLogoImagesComponent.init()
    SliderCategoriesComponent.init()
    SliderReviewsBlock.init()
    SliderPostsBlock.init()
})
