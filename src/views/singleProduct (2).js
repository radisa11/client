import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';

const SingleProduct = (props) => {
    const[singleProduct,setSingleProduct] = useState({});
    const{_id} = useParams();
    const[loaded,setLoaded] = useState(true);
    const history = useHistory();

const onDeleteHandler = (_id) => {
    console.log(_id)
    axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
    .then(res=>{
        console.log(res);
        history.push("/")
    })
    .catch(err=>console.log(err))
}

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products/" + _id)
        .then(res=>{
            setSingleProduct(res.data.results);
            setLoaded(false)})
        .catch(err => console.log(err))
    },[loaded, _id])
    return(
        <div>
            <h2>{singleProduct.title}</h2>
            <p>$ {singleProduct.price}</p>
            <p>{singleProduct.description}</p>
            <button onClick={()=>onDeleteHandler(_id)}>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default SingleProduct;