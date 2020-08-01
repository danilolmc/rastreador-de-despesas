export default function (state, action) {

    switch (action.type) {

        case "DELETE_TANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case "ADD_TANSACTION":
            return{
                ...state,
                transactions: [...state.transactions,action.payload]
            }
        default:
            return state;
    }
}