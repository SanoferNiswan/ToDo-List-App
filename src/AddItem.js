import React , {useState} from "react";
import { FaPlus } from "react-icons/fa";

const AddItem=({newItem,setNewItem,hanldleSubmit})=>{

    return(
        <form className="addForm" onSubmit={hanldleSubmit}>
            {/* <label htmlFor="addItem">Add Item</label> */}
            <input
             type="text"
             autoFocus
             id="addItem"
             placeholder="Add Item"
             required
             value={newItem}
             onChange={(e) => setNewItem(e.target.value)} />
             <button
             type="submit" aria-label="Add Item"> <FaPlus /> </button>
        </form>
    );
}


export default AddItem