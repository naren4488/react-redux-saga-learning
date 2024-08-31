export const addToCart = (data) => {
    console.log('helllo', data)
    return {
        type: 'ADD_TO_CART',
        data: data
    }
}