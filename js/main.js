/**
 * Created by Дмитрий on 04.07.2016.
 */

function Carusel(option) {
  this._element = option.element;
  this._leftButton = this._element.querySelector(".carusel_left");
  this._rightButton = this._element.querySelector(".carusel_right");
  this._content =this._element.querySelector(".carusel_content");

  this._rightButton.onclick=this.turnRight.bind(this);
  this._leftButton.onclick=this.turnLeft.bind(this);


}
Carusel.prototype.turnRight=function(event){
  console.log(this._content.style.backgroundPositionX.toString());
  var position =parseInt(this._content.style.backgroundPositionX)|| 0;
  console.log(position);
  if (position>-1474){
    position = (position-737)+ "px";
    this._content.style.backgroundPositionX=position;
  }
}

Carusel.prototype.turnLeft=function(event){
  console.log(this._content.style.backgroundPositionX.toString());
  var position =parseInt(this._content.style.backgroundPositionX)|| 0;
  console.log(position);
  if (position<0){
    position = (position+737)+ "px";
    this._content.style.backgroundPositionX=position;
  }
}

var carusel =new Carusel({
  element: document.querySelector(".carusel")
});