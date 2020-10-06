import {createGallery} from "./manager.js";
import {images_ar} from "../data.js";
import {} from "../burrger.js";


$(() => {
    init();
    $(document).lightBox();
   // $("#nav_btn").burger("#id_nav")
})


const init = () =>{
    console.log(images_ar);
    createGallery(images_ar);
}