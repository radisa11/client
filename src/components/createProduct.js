import React, { useState } from "react";
import axios from "axios";

const CreateProduct = (props) => {
    const [form,setForm] = useState({
        title:"",
        price:"",
        description:""
    })
    const onChangeHandler = (event) =>{
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/products/new",form)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler} className="form-group">
                <input name="title" className="form-control" type="text" placeholder="title" onChange={onChangeHandler}></input>
                <input name="price" className="form-control" type="number" placeholder="price" onChange={onChangeHandler}></input>
                <input name="description" className="form-control" type="text" placeholder="description" onChange={onChangeHandler}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default CreateProduct