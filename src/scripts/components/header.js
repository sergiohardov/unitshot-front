import OverlayComponent from "@scripts/components/overlay.js";

class HeaderComponent {
    constructor(elem) {
        this.component = elem
        this.overlay    = OverlayComponent.getInstance()
        this.number     = {
            container:  elem.querySelector('.us-header__line__number'),
            arrow:      elem.querySelector('.us-header__line__number__arrow'),
            menu:       elem.querySelector('.us-header__line__number__menu'),
            isOpen:     false,
        }
        this.burger     = elem.querySelector('.us-header__line__nav__burger')
        this.menu       = elem.querySelector('.us-header__menu')

        document.addEventListener('click', this.numberHandler.bind(this))
        this.overlay.component?.addEventListener('click', this.overlayHandler.bind(this))
        this.burger?.addEventListener('click', this.burgerToggle.bind(this))
    }

    overlayHandler() {
        this.overlay.hide();
        this.number.menu?.classList.remove('us-header__line__number__menu--visible')
        this.menu?.classList.remove('us-header__menu--visible')
        this.burger?.classList.remove('us-header__line__nav__burger--active')
    }

    numberHandler(e) {
        const target                 = e.target;
        const isArrow       = target.closest('.us-header__line__number__arrow')    === this.number.arrow;
        const isMenu        = target.closest('.us-header__line__number__menu')     === this.number.menu;
        const isOverlay     = target.closest('.us-overlay')                        === this.overlay.component;

        if (isArrow) {
            this.number.isOpen = !this.number.isOpen;
            this.overlay.toggle();
            this.number.menu.classList.toggle('us-header__line__number__menu--visible')
            return null;
        }

        if (!isMenu || isOverlay) {
            if(!this.number.isOpen) return null;

            this.overlay.hide();
            this.number.menu.classList.remove('us-header__line__number__menu--visible')
            return null;
        }
    }

    burgerToggle(e) {
        this.overlay.toggle();
        this.menu.classList.toggle('us-header__menu--visible')
        this.burger.classList.toggle('us-header__line__nav__burger--active')
    }

    static init() {
        const component = document.querySelector('.us-header')
        if (component) new this(component);
    }
}

export default HeaderComponent
