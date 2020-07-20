import axios from 'axios';
import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from "action/product_action"

export function fetchProducts(){
    
    return dispatch  =>{ //using redux-thunk here... do check it out 
        dispatch(fetchProductsPending())
        return getData("http://127.0.0.1:9000/core/products/")
        .then(function (response) {
            dispatch(fetchProductsSuccess({payload: response.data}));
        })
        .catch(function (error) {
            dispatch(fetchProductsSuccess({error: error}));
        });
    }
  }


function getData(url) {
    axios.defaults.headers.post['X-CSRF-Token']  = document.querySelector('input[name="csrftoken"]').value
    return axios.get(url, {credentials: 'same-origin'})
}

function postData(url, data) {
    axios.defaults.headers.post['X-CSRF-Token']  = document.querySelector('input[name="csrftoken"]').value
    return axios.post(url, {
        body: JSON.stringify(data),
        credentials: 'same-origin'
    })
}