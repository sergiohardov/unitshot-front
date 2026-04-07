// TODO: Переместить в папку parts
class OverlayComponent {
    constructor() {
        this.component = document.querySelector('.us-overlay');
        this.isVisible = false;
    }

    toggle() {
        this.isVisible = !this.isVisible;
        this.component?.classList.toggle('us-overlay--visible', this.isVisible);
    }

    show() {
        if (this.isVisible) return;

        this.component?.classList.add('us-overlay--visible');
        this.isVisible = true;
    }

    hide() {
        if (!this.isVisible) return;

        this.component?.classList.remove('us-overlay--visible');
        this.isVisible = false;
    }

    static getInstance() {
        if (!OverlayComponent.instance) OverlayComponent.instance = new OverlayComponent();
        return OverlayComponent.instance;
    }
}

export default OverlayComponent;
