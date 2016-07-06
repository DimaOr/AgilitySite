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
  this.msSlide = option.slideInterval || 5000;
  this.slideInterval(this.msSlide);


}
Carusel.prototype.turnRight = function (event) {
  if (this._currentPositionX > this.minPositionX) {
    this._currentPositionX -= this.stepTurn;
    this._content.style.backgroundPositionX = (this._currentPositionX) + 'px';
  }
}

Carusel.prototype.turnLeft = function (event) {
  if (this._currentPositionX < this.maxPositionX) {
    this._currentPositionX += this.stepTurn;
    this._content.style.backgroundPositionX = (this._currentPositionX) + 'px';
  }
}
Carusel.prototype.slide = function () {


  if (this._currentPositionX > this.minPositionX) {
    this._currentPositionX -= this.stepTurn;
    this._content.style.backgroundPositionX = (this._currentPositionX) + 'px';
  }
  else {
    this._currentPositionX = 0;
    this._content.style.backgroundPositionX = (this._currentPositionX) + 'px';
  }

}
Carusel.prototype.slideInterval = function (ms) {


  var self = this;
  setInterval(function () {
    self.slide();
  }, ms);

}



function Number() {
  this.elemCountry = document.getElementById("country");
  this.elemEmployee = document.getElementById("employee");
  this.elemIntegration = document.getElementById("integrations");

  this.elemCountryNumber = +document.getElementById("country").innerText;
  this.elemEmployeeNumber = document.getElementById("employee").innerText;
  this.elemIntegrationNumber = document.getElementById("integrations").innerText;


  this.itemCoordsY = getCoords(document.querySelector(".info_item"));
  var self = this;

  window.onscroll = function () {

    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    console.log(scrolled < this.itemCoordsY);
    if (scrolled <= self.itemCoordsY) {
      var multiplier = scrolled / self.itemCoordsY;
      self.elemCountry.innerText = Math.ceil(self.elemCountryNumber * multiplier);
      self.elemEmployee.innerText = Math.ceil(self.elemEmployeeNumber * multiplier);
      self.elemIntegration.innerText = Math.ceil(self.elemIntegrationNumber * multiplier);
    }
    else {
      self.elemCountry.innerText = Math.ceil(self.elemCountryNumber);
      self.elemEmployee.innerText = Math.ceil(self.elemEmployeeNumber);
      self.elemIntegration.innerText = Math.ceil(self.elemIntegrationNumber);
    }
  }
  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return box.top + pageYOffset;
  }
}

var num = new Number();

var carusel = new Carusel({
  element: document.querySelector(".carusel"),
  slideInterval: 3500

});
