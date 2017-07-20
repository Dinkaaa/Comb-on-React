export default function filterCollections(state = [], action){

    switch(action.type) {
        case 'FIND_COLLECTION': 
            return [
                action.payload
            ]

        default:
            return state;
        }
        
}