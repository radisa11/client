import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useHistory } from "react-router";
const UpdateProduct = (props) => {
    const history = useHistory();
    const{_id} = useParams();
    const[form, setForm] = useState({
        title:"",
        price:"",
        description:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
        .then(res=>{
            console.log(res);
            setForm(res.data.results);
        })
        .catch(err=>console.log(err))
    },[_id])

    const onChangeHandler = (event) =>{
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(_id)
        axios.patch(`http://localhost:8000/api/products/${_id}/update`,form)
        .then(res=>{
            console.log(res);
            history.push(`/products/${_id}`)
        })
        .catch(err=>console.log(err))
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}className="form-group">
                <input name="title" className="form-control" type="text" value={form.title}  onChange={onChangeHandler}></input>
                <input name="price" className="form-control" type="number" value={form.price} onChange={onChangeHandler}></input>
                <input name="description" className="form-control" type="text" value={form.description}  onChange={onChangeHandler}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default UpdateProduct