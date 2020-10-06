import Gallery from "./galleryClass.js";
import {} from "../data.js";


//gallery managment:
export const createGallery = (_ar) => { 
  _ar.map((item,i) => {
    let gallery = new Gallery("#id_gallery",item.src , item.imgName, item.address);
    gallery.render();
  })
}






