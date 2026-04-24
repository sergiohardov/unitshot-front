import Alpine from 'alpinejs'

export default function ModalCallComponent() {
    Alpine.data('ModalCallComponent', (restUrl) => ({
        restUrl: restUrl,
        isSended: false,
        isLoading: false,
        errors: {}, // Храним ошибки полей
        formData: {
            phone: '',
            username: '',
            comment: ''
        },

        async submit() {
            if (this.isSended) {
                this.$store.ModalStore.close();
                return;
            }

            // Простая валидация
            this.errors = {};
            if (!this.formData.phone.trim()) this.errors.phone = true;
            if (!this.formData.username.trim()) this.errors.username = true;

            if (Object.keys(this.errors).length > 0) return;

            this.isLoading = true;

            try {
                /*
                const response = await fetch(this.restUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.formData),
                });
                if (!response.ok) throw new Error('Network response was not ok');
                */

                // TODO: Имитация задержки, удалить
                await new Promise(resolve => setTimeout(resolve, 1000));

                this.isSended = true;
            } catch (error) {
                console.error('Ошибка:', error);
            } finally {
                this.isLoading = false;
            }
        }
    }));
}
