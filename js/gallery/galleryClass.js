//images gallery:

class Gallery{
    constructor(_parent,_img,_name, _address){
      this.parent =_parent;
      this.img = _img;
      this.name =_name;
      this.address =_address;
    }
  
    render(){
      let newDiv = $(`<div class="col-lg-3 col-md-4 col-6 d-block mb-4 h-100 gallery"></div>`);
      $(this.parent).append(newDiv);
  
      let indsideDiv = $(`<img class="img-fluid img-thumbnail" src="${this.img}" alt="${this.name}" data-light="light" data-address=${this.address}>`);
      $(newDiv).append(indsideDiv);
    }
}

export default Gallery;
