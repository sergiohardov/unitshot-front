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
        this.openBtns   = document.querySelectorAll(`[data-us-modal-id="${this.id}"]`);

        this.openBtns.forEach(btn => btn.addEventListener('click', this.open.bind(this)));
        this.modal.addEventListener('click', this.closeTriggers.bind(this));
    }

    open() {
        if (this.isOpen) return;

        document.body.classList.add('scroll-lock');
        this.modal.classList.add('us-modal--active');
        this.isOpen = true;
    }

    close() {
        if (!this.isOpen) return;

        document.body.classList.remove('scroll-lock');
        this.modal.classList.remove('us-modal--active');
        this.isOpen = false;
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
