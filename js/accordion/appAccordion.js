import {createFqa} from "./managerAccordion.js";
import {fqa_ar} from "../data.js";
import {} from "../burrger.js";

window.onload = ()=>{
    init();  
}

const init = () =>{
    console.log(fqa_ar);
   createFqa(fqa_ar);
}