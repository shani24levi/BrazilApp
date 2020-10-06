import {} from "./manager.js";

class Slider {
  constructor(_parent, _pic, _title, _info, _firstIndex) {
    this.parent = _parent;
    this.pic = _pic;
    this.title = _title;
    this.info = _info;
    this.firstIndex = _firstIndex;
  }

  render() {
    let sliderDiv = document.createElement('div');
    if(this.firstIndex == 0)
        sliderDiv.className = "carousel-item active";
    else
        sliderDiv.className = "carousel-item";

    sliderDiv.innerHTML += `
    <div class="box" style="background-image:url(${this.pic})">
       <div class="boxInfo text-center">
          <h5 style="text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF; font-size: 2em;">${this.title}</h5>
         <br>
         <p>${this.info}</p>
       </div>
     </div>
    `
    document.querySelector(this.parent).append(sliderDiv);
  }
}


export default Slider;
