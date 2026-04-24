import Alpine from 'alpinejs'

export default function HeaderBlock() {
    Alpine.data('HeaderBlock', () => ({
        isMenuOpen: false,
        isSearchOpen: false,
        isNumberOpen: false,

        searchQuery: '',     // Для поиска (> 3 символов)
        activeMenuIndex: 0,  // Активный пункт меню (по дефолту первый)

        // оверлей, если открыто хоть что-то
        get isOverlayActive() {
            return this.isMenuOpen || this.isSearchOpen || this.isNumberOpen;
        },

        init() {
            // следим за геттером isOverlayActive, rак только он меняется, блокируем/разблокируем скролл у body
            this.$watch('isOverlayActive', (value) => {
                document.body.classList.toggle('scroll-lock', value);
            });
        },

        closeAll() {
            this.isMenuOpen = false;
            this.isSearchOpen = false;
            this.isNumberOpen = false;
        },

        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;

            if (this.isMenuOpen) {
                this.isSearchOpen = false;
                this.isNumberOpen = false;
            }
        },

        toggleSearch() {
            this.isSearchOpen = !this.isSearchOpen;

            if (this.isSearchOpen) {
                this.isMenuOpen = false;
                this.isNumberOpen = false;
            }
        },

        toggleNumber() {
            this.isNumberOpen = !this.isNumberOpen;

            if (this.isNumberOpen) {
                this.isMenuOpen = false;
                this.isSearchOpen = false;
            }
        },

        // Логика меню (Ховер на десктопе, Клик по стрелке на мобилке)
        hoverMenu(index) {
            if (window.innerWidth >= 768) {
                this.activeMenuIndex = index;
            }
        },

        clickMenuArrow(index, event) {
            if (window.innerWidth < 768) {
                event.preventDefault();
                event.stopPropagation();
                // Если кликаем по уже активному — закрываем его, иначе открываем новый
                this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
            }
        }
    }));
}
