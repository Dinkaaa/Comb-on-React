const initialState = []
export default function CollList(state = initialState, action){

    switch(action.type) {
        case 'FETCH_COLLECTION_SUCCESS':
            return action.payload;
        case 'ADD_COLLECTION': 
            return [
                ...state,
                action.payload
            ]

        case 'REMOVE_COLLECTION':  
            return state.filter(element => element.CollectionID !== action.payload);

        default:
            return state;
        }
        
}