import axios, { Axios } from "axios"
import { base_url } from '../../api/product_api'
import { db } from "../../Firebase"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"

export const Product_add_Async = (data) => {
    return async dispatch => {

        dispatch(loading());


        // Firebase

        //  await setDoc(doc(db, "students", "2"), data); // setDoc manually id
        // await addDoc(collection(db, "products"), data); // AddDoc Auto generated id
        // dispatch(get_data_Async(data));


        // Axios APi

        axios.post(base_url + 'Products', data).then((res)=>{
            // console.log(res.data,"res");
            dispatch(get_data_Async(res.data));
        }).catch((err)=>{
            console.log(err,"err");
        })
    }
}


export const get_data_Async = () => {
    return async dispatch => {

        // Firebase

        // let al_data = [];
        // let firebase_data = await getDocs(collection(db, "products"));

        // firebase_data.forEach((doc) => {
        //     // console.log(doc.id, " => ", doc.data());
        //     let fb_data = { ...doc.data(), id: doc.id };
        //     al_data = [...al_data, fb_data];

        //     dispatch(allData(al_data));
        // })


        // Axios APi

        axios.get(base_url + 'Products').then((res)=>{
            // console.log(res.data,"res");
            dispatch(allData(res.data));
        }).catch((err)=>{
            console.log(err,"err");
        })
    }
}

export const Product_edit_Async = (id) => {
    return async dispatch => {

        // Firebase

        // const docRef = doc(db, "products", `${id}`);
        // const docSnap = await getDoc(docRef);
        // // console.log("docsnap", docSnap.data());
        // let d = {...docSnap.data(), id};
        // // console.log("d>>>>>",d);
        // dispatch(singleData(d));


        // Axios Api
        await axios.get(base_url + `Products/${id}`).then((res)=>{
            // console.log(res.data,"<<<res");
            dispatch(singleData(res.data));

        }).catch((err)=>{
            console.log("ERR",err);
        })
    }
}

export const Product_update_Async = (id, data) => {
    // console.log(data,"da<<<<");
    return async dispatch => {

        // Firebase

        // await updateDoc(doc(db, "products", `${id}`), data);
        // dispatch(get_data_Async());
        

        // Axios Api
        await axios.patch(base_url +`Products/${id}`, data).then((res)=>{
            // console.log(res.data,"res>>>>");
            dispatch(get_data_Async());
        }).catch((err)=>{
            console.log(err,"ERR");
        })

    }
}

export const Product_delete_Async = (id) => {
    return async dispatch => {

        // Firebase

        // await deleteDoc(doc(db, "products", `${id}`));
        // dispatch(get_data_Async());


        // Axios APi
        await axios.delete(base_url + `Products/${id}`).then((res)=>{
            // console.log("RES",res.data);
            dispatch(get_data_Async());
        }).catch((err)=>{
            console.log("<<<<ERR",err);
        })
    }
} 


const allData = (data) => {
    return {
        type: "Alldata",
        payload: data
    }
}

const singleData = (data) => {
    return{
        type: "Single_data",
        payload: data
    }
}

const loading = () => {
    return {
        type: "Loading"
    }
}


// const Product_add = (data) =>{
//     return{
//         type: 'add',
//         payload: data
//     }
// }

// return dispatch => {

//     dispatch(loading());
//     axios.request(base_url).then((res)=>{
//         // console.log(res.data,"res");
//         dispatch(alldata(res.data));

//     }).catch((err)=>{
//         console.log(err,"err");
//     })

// }