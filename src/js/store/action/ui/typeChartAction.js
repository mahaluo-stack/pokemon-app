import 'regenerator-runtime/runtime.js';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export const typeChartAction = {
    getPokemonTypes,
} 

function getPokemonTypes(firebase) {

    return async dispatch => { 

        dispatch({ type: 'typeListFetch', value: true });

        try {

            const db = getFirestore(firebase);
            const typingCollection = collection(db, 'typings');

            const typeSnapshot = await getDocs(typingCollection);
            const typeList = typeSnapshot.docs.map(doc => doc.data());

            dispatch({ type: 'typeListFetchResult', value: typeList });

        } catch (error) {

            dispatch({ type: 'typeListFetchError', value: error });
        }
       
        dispatch({ type: 'typeListFetch', value: false });
    }
}
