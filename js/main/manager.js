import Slider from "./sliderClass.js";

export const createSlider = (_ar) => {
    document.querySelector("#id_car").innerHTML = "";
    _ar.map((item,i) => {
      let slide = new Slider("#id_car",item.pic , item.title,item.info,i);
      slide.render();
    })
}




