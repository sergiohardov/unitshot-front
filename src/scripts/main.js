import '@styles/main.scss'

import PhoneNumberComponent from "@scripts/components/phone-number.js";
import ModalCallComponent from "@scripts/components/modal-call.js";
import ModalAddCartComponent from "@scripts/components/modal-add-cart.js";
import ModalLangComponent from "@scripts/components/modal-lang.js";
import ModalRemoveCartComponent from "@scripts/components/modal-remove-cart.js";
import BrandLogosBlock from "@scripts/blocks/brand-logos.js";
import SliderProductCardsComponent from "@scripts/components/slider-product-cards.js";
import SliderLogoImagesComponent from "@scripts/components/slider-logo-images.js";
import SliderCategoriesComponent from "@scripts/components/slider-categories.js";
import TextImageBlock from "@scripts/blocks/text-image.js";
import ClientLogosBlock from "@scripts/blocks/client-logos.js";
import SliderReviewsBlock from "@scripts/blocks/slider-reviews.js";
import SliderPostsBlock from "@scripts/blocks/slider-posts.js";
import HeaderBlock from "@scripts/blocks/header.js";
import ModalFilterComponent from "@scripts/components/modal-filter.js";
import RangeComponent from "@scripts/components/range.js";
import QuantityComponent from "@scripts/components/quantity.js";
import ProductGalleryComponent from "@scripts/components/product-gallery.js";

document.addEventListener('DOMContentLoaded', () => {
    PhoneNumberComponent.init();
    ModalAddCartComponent.init()
    ModalRemoveCartComponent.init()
    ModalFilterComponent.init()
    ModalCallComponent.init();
    ModalLangComponent.init()
    BrandLogosBlock.init()
    SliderProductCardsComponent.init()
    SliderLogoImagesComponent.init()
    SliderCategoriesComponent.init()
    TextImageBlock.init()
    ClientLogosBlock.init()
    SliderReviewsBlock.init()
    SliderPostsBlock.init()
    HeaderBlock.init()
    RangeComponent.init()
    QuantityComponent.init()
    ProductGalleryComponent.init()
})
