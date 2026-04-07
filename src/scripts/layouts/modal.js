// TODO: общий стак всех открытых модалок
// TODO: единый оверлей
// TODO: возможно сделать единую логику через делегирование событий в синглтон паттерне, с возможностью вызова open/close методов внутри скриптов компонента
/**
 * Modal Layout
 * Открытие: клик по элементу с data-us-modal-id="<id modal>"
 * Закрытие: data-modal-close (внутри модалки)
 */
class ModalLayout {
    constructor(elem) {
        this.modal      = elem;
        this.id         = elem.id;
        this.isOpen     = false;
        this._scrollY   = 0;

        document.addEventListener('click', this.openTriggers.bind(this));
        this.modal.addEventListener('click', this.closeTriggers.bind(this));
    }

    open() {
        if (this.isOpen) return;

        this._scrollY = window.scrollY;
        document.body.classList.add('scroll-lock');
        document.body.style.top = `-${this._scrollY}px`;
        this.modal.classList.add('us-modal--active');

        const focusable = this.modal.querySelector(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable) setTimeout(() => focusable.focus(), 50);

        this.isOpen = true;
    }

    close() {
        if (!this.isOpen) return;

        this.modal.classList.remove('us-modal--active');

        document.body.classList.remove('scroll-lock');
        document.body.style.top = '';
        window.scrollTo(0, this._scrollY);

        this.isOpen = false;
    }

    openTriggers(e) {
        const opener = e.target.closest('[data-us-modal-id]');
        if (!opener || opener.getAttribute('data-us-modal-id') !== this.id) return null;

        this.open();
    }

    closeTriggers(e) {
        const close = e.target.closest('[data-modal-close]');
        if (!close) return null;

        const modal = close.closest('.us-modal');
        if (!modal || modal.id !== this.id) return null;

        this.close()
    }

    static getId() {
        throw new Error(`${this.name} method getId() must be overridden, and must return only a string id of the modal`);
    }

    static init() {
        const elem = document.getElementById(this.getId())
        if (elem) new this(elem)
    }
}

export default ModalLayout
