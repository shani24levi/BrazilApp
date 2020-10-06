import {createSlider} from "./manager.js";
import {pic_ar} from "../data.js";
import {} from "../burrger.js";
import {} from "./viewEvents.js";


$(() => {
    init(); 
})


const init = () =>{
    console.log(pic_ar);
    createSlider(pic_ar);
}

//written in js//