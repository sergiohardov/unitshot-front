class HeaderBlock {
    constructor(elem) {
        this.component = elem
        this.overlay    = elem.querySelector('.us-header__overlay')
        this.number     = {
            container:  elem.querySelector('.us-header__line__number'),
            arrow:      elem.querySelector('.us-header__line__number__arrow'),
            menu:       elem.querySelector('.us-header__line__number__menu'),
            isActive:     false,
        }
        this.burger     = elem.querySelector('.us-header__line__nav__burger')
        this.menu       = elem.querySelector('.us-header__menu')

        this.isOverlayActive    = false
        this.isMenuActive       = false

        document.addEventListener('click', this.numberMenuHandler.bind(this))
        this.overlay?.addEventListener('click', this.overlayHandler.bind(this))
        this.burger?.addEventListener('click', this.burgerToggle.bind(this))
    }

    numberMenuHandler(e) {
        const target = e.target;

        const isArrow       = target.closest('.us-header__line__number__arrow') === this.number.arrow;
        const isMenu        = target.closest('.us-header__line__number__menu')  === this.number.menu;

        if (isArrow) {
            this.number.isActive = !this.number.isActive;
            this.number.menu.classList.toggle('us-header__line__number__menu--visible', this.number.isActive)
            this.overlayToggle()
            return;
        }

        if (!isMenu && this.number.isActive) {
            this.number.menu.classList.remove('us-header__line__number__menu--visible')
            this.number.isActive = false;
            this.overlayToggle()
            return;
        }
    }

    overlayToggle() {
        const shouldShowOverlay = this.number.isActive || this.isMenuActive;
        this.overlay.classList.toggle('us-header__overlay--visible', shouldShowOverlay)
    }

    burgerToggle(e) {
        this.isMenuActive = !this.isMenuActive;

        this.menu.classList.toggle('us-header__menu--visible', this.isMenuActive)
        this.burger.classList.toggle('us-header__line__nav__burger--active', this.isMenuActive)
        this.overlayToggle()
    }

    overlayHandler() {
        this.isOverlayActive    = false;
        this.isMenuActive       = false;
        this.number.isActive    = false;

        this.overlay?.classList.remove('us-header__overlay--visible')
        this.number.menu?.classList.remove('us-header__line__number__menu--visible')
        this.menu?.classList.remove('us-header__menu--visible')
        this.burger?.classList.remove('us-header__line__nav__burger--active')
    }

    static init() {
        const component = document.querySelector('.us-header')
        if (component) new this(component);
    }
}

export default HeaderBlock
