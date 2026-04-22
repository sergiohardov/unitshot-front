// TODO: сделать валюту динамической
// TODO: учесть случай когда попадает не число (строкой/числом)
export function formatPrice(price) {
    return price.toLocaleString('ru-RU') + ' грн.'
}
