const initionState = {
    products: [],
    product: null,
    loading: false
}

export const Product_red = (state = initionState, action) => {
    switch (action.type) {

        case 'Loading':
            return{
                ...state,
                loading: true
                
            }

        case 'Alldata':
            return{
                ...state,
                products: action.payload,
                loading: false,
                product: null
                
            }

        case "Single_data":
            return{
                ...state,
                product: action.payload,
                loading: false
            }
    
        default:
            return state;
    }
}