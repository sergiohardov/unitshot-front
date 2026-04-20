class HeaderBlock {
    constructor(elem) {
        this.component  = elem
        this.overlay    = elem.querySelector('.us-header__overlay')
        this.number     = {
            container:  elem.querySelector('.us-header__line__number'),
            arrow:      elem.querySelector('.us-header__line__number__arrow'),
            menu:       elem.querySelector('.us-header__line__number__menu'),
            isActive:   false,
        }
        this.burger     = elem.querySelector('.us-header__line__nav__burger')
        this.burgerMob  = elem.querySelector('.us-header__line__buttons__item--burger')
        this.menu       = elem.querySelector('.us-header__menu')
        this.menuItems  = elem.querySelectorAll('.us-header__menu__list__item')
        this.DESKTOP_BREAKPOINT = 768;

        this.isOverlayActive    = false
        this.isMenuActive       = false

        this.component?.addEventListener('click', this.burgerHandler.bind(this))
        this.overlay?.addEventListener('click', this.overlayHandler.bind(this))
        this.menu?.addEventListener('click', this.menuArrowHandler.bind(this))
        this.menuItems.forEach(item => item?.addEventListener('mouseenter', this.menuItemHandler.bind(this)))
        document.addEventListener('click', this.numberMenuHandler.bind(this))
    }

    burgerHandler(e) {
        const target = e.target;

        const isBurger      = target.closest('.us-header__line__nav__burger') === this.burger;
        const isMobBurger   = target.closest('.us-header__line__buttons__item--burger') === this.burgerMob;
        if (!isBurger && !isMobBurger) return;

        this.isMenuActive = !this.isMenuActive;

        document.body.classList.toggle('scroll-lock', this.isMenuActive)
        this.menu?.classList.toggle('us-header__menu--visible', this.isMenuActive)
        this.burger?.classList.toggle('us-header__line__nav__burger--active', this.isMenuActive)
        this.burgerMob?.classList.toggle('us-header__line__buttons__item--burger--active', this.isMenuActive)

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
        this.burgerMob?.classList.remove('us-header__line__buttons__item--burger--active')
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

    menuArrowHandler(e) {
        const target    = e.target;
        const arrow     = target.closest('.us-header__menu__list__arrow');

        if (!arrow) return;

        e.preventDefault();
        e.stopPropagation();

        if (window.innerWidth < this.DESKTOP_BREAKPOINT) {
            const parentItem = arrow.closest('.us-header__menu__list__item');
            const isActive = parentItem.classList.contains('us-header__menu__list__item--active');

            this.menuItems.forEach(el => el.classList.remove('us-header__menu__list__item--active'));

            if (!isActive) parentItem.classList.add('us-header__menu__list__item--active');
        }
    }

    menuItemHandler(e) {
        const target = e.target;
        const item = target.closest('.us-header__menu__list__item');
        if(!item) return;

        if (window.innerWidth >= this.DESKTOP_BREAKPOINT) {
            this.menuItems.forEach(el => el.classList.remove('us-header__menu__list__item--active'));
            item.classList.add('us-header__menu__list__item--active');
        }
    }

    overlayToggle() {
        const shouldShowOverlay = this.number.isActive || this.isMenuActive;
        this.overlay.classList.toggle('us-header__overlay--visible', shouldShowOverlay)
    }

    static init() {
        const component = document.querySelector('.us-header')
        if (component) new this(component);
    }
}

export default HeaderBlock
