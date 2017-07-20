import * as DataService from '.././DataService';
import {token, url, version} from '../.././index.js';



export const getCollections = () => {
    return dispatch => {
        console.log('I GET COLLECTIONS');
        let CollectionList = [];

        let GetCollectionList = new DataService.Request("GET", 
                                url + version + "/UserCollectionsV4", 
                                { Authorization: token });

        let CollectionListData = GetCollectionList.Execute((response)=>{
            
            let data = response.Data;
                dispatch({type:'FETCH_COLLECTION_SUCCESS', payload:data});
        });
    }
}