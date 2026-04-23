import {formatPrice} from "@scripts/base/helpers.js";

// TODO: сделать отправку формы на бек
// TODO: добавить заглушку "нет товаров" при пустом списке
export default function CheckoutPage() {
    Alpine.data('CheckoutPage', () => ({
        items: {}, // Здесь будет структура: { 'ID': { price: 500, qty: 1 }, ... }

        // 1. Добавляем объект для данных формы
        customer: {
            phone: '',
            name: '',
            post: '',
            comment: ''
        },

        // Флаг загрузки
        isSubmitting: false,
        isSend: false,

        // Метод для регистрации товара (вызывается из x-init в product-item)
        registerItem(id, price, qty) {
            this.items[id] = {price: Number(price), qty: Number(qty)};
        },

        // Принимаем ID и сам DOM-элемент карточки товара
        removeItem(id, element) {
            element.remove();

            // Без settimeout имеем ошибку
            setTimeout(() => delete this.items[id], 0);
        },

        // Метод отправки заказа
        async submitOrder() {
            if (!this.customer.phone || !this.customer.name) {
                alert("Будь ласка, заповніть обов'язкові поля (Ім'я та Телефон)");
                return;
            }

            // Формируем итоговый пакет данных для бэкенда
            const orderPayload = {
                customer: this.customer,
                products: this.items,
                // total: this.totalPrice // пересчитать на беке
            };

            this.isSubmitting = true;

            try {
                // TODO: настроить под бек
                /*
                const response = await fetch('/api/checkout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(orderPayload)
                });

                const result = await response.json();

                if (result.success) {
                    window.location.href = '/success-page'; // Редирект на страницу "Спасибо"
                } else {
                    alert('Помилка: ' + result.message);
                }
                */

                // TODO: Имитация загрузки для проверки (удалить)
                await new Promise(resolve => setTimeout(resolve, 1000));
                this.isSend = true;
                this.items = {}
                this.customer = {
                    phone: '',
                    name: '',
                    post: '',
                    comment: ''
                }

            } catch (error) {
                console.error('Помилка відправки:', error);
                alert('Сталася помилка. Спробуйте пізніше.');
            } finally {
                this.isSubmitting = false;
            }
        },

        get totalCount() {
            return Object.keys(this.items).length;
        },

        get totalPrice() {
            const total = Object.values(this.items).reduce((acc, item) => acc + (item.price * item.qty), 0);
            return formatPrice(total);
        }
    }));
}
