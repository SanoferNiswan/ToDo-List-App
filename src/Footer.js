import React from "react";
const Footer=({length})=>{

    const year=new Date();
    return(
        <footer>
            <h5>Copyright &copy; {year.getFullYear()} Owner : Sanofer Niswan S</h5>
           {/* <b>{length} List {length>1? "Items": "Item"}</b>  */}
           {/* <marquee behavior="scroll" direction="left" scrollamount="15" loop="2"></marquee> */}
        </footer>
    );
}

export default Footer