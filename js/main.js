/**
 * Created by Дмитрий on 04.07.2016.
 */

function Carusel(option) {
  this._element = option.element;
  this._leftButton = this._element.querySelector(".carusel_left");
  this._rightButton = this._element.querySelector(".carusel_right");
  this._content = this._element.querySelector(".carusel_content");
  this._backgroundMaxWidth = parseInt(window.getComputedStyle(this._content).backgroundSize.split(',')[0]);
  this.minPositionX = -this._backgroundMaxWidth + this._content.clientWidth;
  this.maxPositionX = 0;
  this.stepTurn = this._content.clientWidth;
  this._currentPositionX = +this._content.style.backgroundPositionX;
  this._rightButton.onclick = this.turnRight.bind(this);
  this._leftButton.onclick = this.turnLeft.bind(this);
}
Carusel.prototype.turnRight = function (event) {
  if (this._currentPositionX > this.minPositionX) {
    this._currentPositionX -= this.stepTurn;
    this._content.style.backgroundPositionX = (this._currentPositionX) + 'px';
  }
}

Carusel.prototype.turnLeft = function (event) {
  if (this._currentPositionX < 0) {
    this._currentPositionX += this.stepTurn;
    this._content.style.backgroundPositionX = (this._currentPositionX) + 'px';
  }
}

var carusel = new Carusel({
  element: document.querySelector(".carusel")
});