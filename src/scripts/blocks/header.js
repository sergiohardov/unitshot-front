class Menu {
    constructor(headerCtx) {
        this.headerCtx          = headerCtx;
        this.headerBurgerBtn    = headerCtx.component.querySelector('.us-header__line__buttons__item--burger')
        this.navBurgerBtn       = headerCtx.component.querySelector('.us-header__line__nav__burger')
        this.menuContainer      = headerCtx.component.querySelector('.us-header__menu')
        this.menuItems          = headerCtx.component.querySelectorAll('.us-header__menu__list__item')

        this.isActive           = false;
        this.DESKTOP_BREAKPOINT = 768;

        this.navBurgerBtn?.addEventListener('click', this.burgerBtnHandler.bind(this))
        this.headerBurgerBtn?.addEventListener('click', this.burgerBtnHandler.bind(this))
        this.menuItems.forEach(item => item?.addEventListener('mouseenter', this.menuItemHandler.bind(this)))
        this.menuContainer?.addEventListener('click', this.menuArrowHandler.bind(this))
    }

    burgerBtnHandler(e) {
        this.isActive = !this.isActive;

        this.menuContainer?.classList.toggle('us-header__menu--visible', this.isActive)
        this.navBurgerBtn?.classList.toggle('us-header__line__nav__burger--active', this.isActive)
        this.headerBurgerBtn?.classList.toggle('us-header__line__buttons__item--burger--active', this.isActive)

        this.headerCtx.overlayToggle()
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

    close() {
        this.isActive = false;
        this.menuContainer?.classList.remove('us-header__search--active')
        this.menuContainer?.classList.remove('us-header__menu--visible')
        this.navBurgerBtn?.classList.remove('us-header__line__nav__burger--active')
        this.headerCtx.overlayToggle()
    }

    open() {
        this.isActive = true;
        this.menuContainer?.classList.add('us-header__search--active')
        this.menuContainer?.classList.add('us-header__menu--visible')
        this.navBurgerBtn?.classList.add('us-header__line__nav__burger--active')
        this.headerCtx.overlayToggle()
    }
}

class Search {
    constructor(headerCtx) {
        this.headerCtx          = headerCtx;
        this.searchBtn          = headerCtx.component.querySelector('.us-header__line__buttons__item--search')
        this.closeBtn           = headerCtx.component.querySelector('.us-header__search__close')
        this.searchContainer    = headerCtx.component.querySelector('.us-header__search')
        this.resultsContainer   = headerCtx.component.querySelector('.us-header__search__results')
        this.inputField         = headerCtx.component.querySelector('.us-header__search__input__field')
        this.inputClearBtn      = headerCtx.component.querySelector('.us-header__search__input__buttons__clear')

        this.isActive           = false;
        this.isResultsActive    = false;

        this.searchBtn?.addEventListener('click', this.searchBtnHandler.bind(this))
        this.closeBtn?.addEventListener('click', this.closeBtnHandler.bind(this))
        this.inputField?.addEventListener('input', this.inputFieldHandler.bind(this))
        this.inputClearBtn?.addEventListener('click', this.inputClearBtnHandler.bind(this))
    }

    searchBtnHandler() {
        this.isActive = !this.isActive;
        this.searchContainer?.classList.toggle('us-header__search--active', this.isActive)
        this.headerCtx.overlayToggle()
    }

    closeBtnHandler() {
        this.close();
    }

    inputFieldHandler(e) {
        const value = e.target.value;
        if(value.length > 3) {
            this.isResultsActive = true;
            this.resultsContainer?.classList.add('us-header__search__results--active')
            this.searchContainer?.classList.add('us-header__search--results')
        } else {
            this.isResultsActive = false;
            this.resultsContainer?.classList.remove('us-header__search__results--active')
            this.searchContainer?.classList.remove('us-header__search--results')
        }
    }

    inputClearBtnHandler(e) {
        this.inputField.value = '';
        this.resultsContainer?.classList.remove('us-header__search__results--active')
        this.searchContainer?.classList.remove('us-header__search--results')
    }

    close() {
        this.isActive = false;
        this.isResultsActive = false;

        this.searchContainer?.classList.remove('us-header__search--active')
        this.headerCtx.overlayToggle()
    }

    open() {
        this.isActive = true;
        this.searchContainer?.classList.add('us-header__search--active')
        this.headerCtx.overlayToggle()
    }
}

class HeaderBlock {
    constructor(elem) {
        this.component          = elem
        this.overlay            = elem.querySelector('.us-header__overlay')
        this.searchComponent    = new Search(this)
        this.menuComponent      = new Menu(this)

        this.number     = {
            container:  elem.querySelector('.us-header__line__number'),
            arrow:      elem.querySelector('.us-header__line__number__arrow'),
            menu:       elem.querySelector('.us-header__line__number__menu'),
            isActive:   false,
        }

        this.isOverlayActive    = false

        this.overlay?.addEventListener('click', this.overlayHandler.bind(this))
        document.addEventListener('click', this.numberMenuHandler.bind(this))
    }

    overlayHandler() {
        this.number.isActive    = false;

        this.menuComponent.close()
        this.searchComponent.close()

        this.overlay?.classList.remove('us-header__overlay--visible')
        this.isOverlayActive = false;
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
        this.isOverlayActive = this.number.isActive || this.menuComponent.isActive || this.searchComponent.isActive;
        this.overlay.classList.toggle('us-header__overlay--visible', this.isOverlayActive)
        document.body.classList.toggle('scroll-lock', this.isOverlayActive)
    }

    static init() {
        const component = document.querySelector('.us-header')
        if (component) new this(component);
    }
}

export default HeaderBlock
