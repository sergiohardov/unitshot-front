import ModalLayout from '@scripts/layouts/modal'

class ModalCallComponent extends ModalLayout {
    constructor(elem) {
        super(elem)

        this.restUrl = elem.getAttribute('data-us-modal-call-rest-url')
        this.form = elem.querySelector('#us-modal-call-form')
        this.message = elem.querySelector('#us-modal-call-message')
        this.acceptBtn = elem.querySelector('#us-modal-call-accept-btn')
        this.sended = false

        if (!this.form || !this.message || !this.acceptBtn || !this.restUrl) {
            return undefined;
            // throw new Error(`Modal Call - Ошибка: отсутствует один из елементов формы`)
        }

        this.form.addEventListener('submit', e => e.preventDefault())
        this.acceptBtn.addEventListener('click', this.acceptBtnHandler.bind(this))
    }

    static getId() {
        return 'us-modal-call'
    }

    acceptBtnHandler(e) {
        e.preventDefault()

        if (this.sended) this.close()

        const formData = new FormData(this.form)
        const isFormValid = this.validateForm(formData)

        if (!isFormValid) return

        this.sendForm(formData)
            .then(response => {
                this.message.classList.remove('us-modal-call__message--hidden')
                this.form.classList.add('us-modal-call__message--hidden')
                this.acceptBtn.innerHTML = 'Зрозумiло'
            })
            .catch(error => {
                console.error('Ошибка:', error)
                // TODO: логика ошибки
            }).finally(() => {
            this.sended = true
        })
    }

    validateForm(formData) {
        const rules = {
            phone: value => value.trim().length > 0,
            username: value => value.trim().length > 0,
            comment: value => true, // не обязательное
        }

        let isValid = true

        for (const [fieldName, validate] of Object.entries(rules)) {
            const value = formData.get(fieldName) ?? ''
            const field = this.form.querySelector(`[name="${fieldName}"]`)

            if (!field) continue

            if (!validate(value)) {
                field.classList.add('us-modal-call__input--error')
                isValid = false
            } else {
                field.classList.remove('us-modal-call__input--error')
            }
        }

        return isValid
    }

    async sendForm(formData) {
        const body = Object.fromEntries(formData.entries())

        const response = await fetch(this.restUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        if (!response.ok) throw new Error(`HTTP error: ${response.status}`)

        return await response.json()
    }
}

export default ModalCallComponent
