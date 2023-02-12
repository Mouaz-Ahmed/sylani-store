import { async } from "@firebase/util";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { additemToDb, uploadImage } from "../../config/firebase.js";
import "./addItemForm.css";

export default function AddProductForm() {
    let [fileSelect, setFileSelect] = useState({});
    let [itemName, setItemName] = useState("")
    const [category, setCategory] = useState("Fruit");
    let [itemDes, setItemDes] = useState("");
    let [itemUnitName, setItemUnitName] = useState("")
    let [itemUnitPrice, setItemUnitPrice] = useState("")

    const navigate = useNavigate();

    let categoryList = ["Fruits", "Meats", "Vagetable", "Groceries"];
    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    console.log(fileSelect, itemName, category, itemDes)

    async function addItemToFirebaseDB() {
        try {

            const imgUrl = await uploadImage(fileSelect);
            let obj = { imgUrl, itemName, category, itemDes, itemUnitName, itemUnitPrice }
            await additemToDb(obj);
            swal("Product Added", "Product Added Successfully", "success")
            navigate('/')


        } catch (error) {
            alert('error' + error)
        }

    }
    return (
        <div className="container add_item_cont">
            <div className="mb-3">
                <label for="formFile" className="form-label">
                    Item Image
                </label>
                <input onChange={(e) => {
                    setFileSelect(e.target.files[0])
                }} className="form-control" type="file" id="formFile" />
            </div>

            <div className="mb-3">
                <label for="exampleInputText1" className="form-label">
                    Item Name
                </label>
                <input
                    onChange={(e) => {
                        setItemName(e.target.value)
                    }}
                    type="text"
                    className="form-control"
                    id="exampleInputText1"
                    aria-describedby="emailHelp"
                />
            </div>

            {/* item category */}
            <div className="mb-3">
                {/* <select value={myCar} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
        </select> */}
                <label id="exampleInputEmail1">Select Category</label> <br />
                <select
                    value={category}
                    id="exampleInputEmail1"
                    onChange={handleChange}
                >
                    {categoryList.map((item) => {
                        return <option value={item}>{item}</option>;
                    })}
                </select>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                    Describe The Item
                </label>
                <textarea
                    onChange={(e) => {
                        setItemDes(e.target.value);
                    }}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
            </div>

            <div className="mb-3">
                <label for="exampleInputUnit1" className="form-label">
                    Unit Name
                </label>
                <input
                    onChange={(e) => {
                        setItemUnitName(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    id="exampleInputText1"
                    aria-describedby="emailHelp"
                    placeholder="kg/dozen/per"
                />
            </div>

            <div className="mb-3">
                <label for="exampleInputUnit1" className="form-label">
                    Unit Price
                </label>
                <input
                    onChange={(e) => {
                        setItemUnitPrice(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    id="exampleInputText1"
                    aria-describedby="emailHelp"
                    placeholder="Rs 1200"
                />
            </div>
            <div className="add_btn_div">
                <button type="submit" className="btn btn-success add_product_btn" onClick={() => { addItemToFirebaseDB() }}>
                    Add Product
                </button>
            </div>
        </div>
    );
}