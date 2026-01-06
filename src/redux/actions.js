// Определите действие `setFilter`.
// Действие должно возвращать объект с типом действия и полезной нагрузкой (payload).

export const setFilter = (text) => ({
    type: 'SET_FILTER',
    payload: text
})