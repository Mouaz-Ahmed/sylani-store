import React, { useEffect, useState } from "react";

import { getItemsFromDb } from "../../config/firebase";
import Card from "../card";
import "./GetProduct.css";


export default function GetProducts() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // real time
        async function getAllItemsFromDB() {
            try {
                const items = await getItemsFromDb();
                setItems(items);
                console.log(items);
            } catch (error) {
                console.log("items getting error--> ", error);
            }
        }
        getAllItemsFromDB();
    }, []);
    return (
        <div className="container-fluid get_product_cont">
            <h3>All Products</h3>
            <div className="row">
                {items.map((item) => {
                    console.log('hello ', item)
                    return (
                        <div className="col-md-3">
                            <Card item={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}