var wrapEle = document.createElement("div");

// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT

var products = [
  {
    id: 0,
    name: "Apples",
    price: "2.99",
    image:
      "https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color: "red"
  },
  {
    id: 1,
    name: "Bananas",
    price: "2.50",
    image:
      "https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color: "gold"
  },
  {
    id: 2,
    name: "Oranges",
    price: "3.50",
    image:
      "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color: "orange"
  }
];

var elements = [];

// Create a div and give it a class of "popUp". Append that div to the body

// createFruit.prototype.popUp = function () {
//     wrapEle.appendChild(that.ele);
//   document.body.appendChild(wrapEle);
// };

// If I click on the popUp div, it should hide it

// Create a div for each item in the array above

function createFruit(frt) {
  var that = this;
  this.ele = document.createElement("div");
  this.ele.classList.add("product");
  this.nameEle = document.createElement("div");
  this.priceEle = document.createElement("div");
  this.imageEle = document.createElement("IMG");
  this.imageEle.src = frt.image;
  this.ele.appendChild(this.imageEle);
  this.nameEle.innerHTML = "Name: " + frt.name;
  this.priceEle.innerHTML = "Price: $" + frt.price;
  this.ele.appendChild(this.nameEle);
  this.ele.appendChild(this.priceEle);
  this.ele.addEventListener("mouseover", function () {
    that.ele.style.borderColor = frt.color;
  });
  this.ele.addEventListener("mouseout", function () {
    that.ele.style.borderColor = "black";
  });
  this.ele.addEventListener("click", function () {
    that.popUp();
  });
  wrapEle.appendChild(this.ele);
  document.body.appendChild(wrapEle);
}

for (var ii = 0; ii < products.length; ii++) {
  elements.push(new createFruit(products[ii]));
}

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

createFruit.prototype.popUp = function () {
  var that = this;
  this.popUpEle = document.createElement("div");
  this.popUpEle.classList.add("popUp");
  this.popUpEle.addEventListener("click", function () {
    that.hidePopUp();
  });
  this.popUpEle.appendChild(this.imageEle);
  this.popUpEle.appendChild(this.nameEle);
  this.popUpEle.appendChild(this.priceEle);
  document.body.appendChild(this.popUpEle);
};

createFruit.prototype.hidePopUp = function () {
  var that = this;
  that.popUpEle.classList.remove("popUp");
  this.ele.appendChild(this.imageEle);
  this.ele.appendChild(this.nameEle);
  this.ele.appendChild(this.priceEle);
};

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.