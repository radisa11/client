import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

const AllProducts = (props) => {
    const history = useHistory();
    const [productList, setProductList] = useState([]);

    const onClickHandler = (event, _id) => {
        event.preventDefault();
        history.push(`/products/${_id}`);
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/all")
            .then(res => setProductList(res.data.results))
            .catch(err => console.log(err))
    }, [productList])

    return (
        <div>
            {
                productList.map((item, i) => {
                    return (
                        <li key={i}>
                            <span onClick={event => onClickHandler(event, item._id)} id={item._id}>{item.title}</span>
                        </li>
                    )
                })
            }
        </div>
    )
}
export default AllProducts;