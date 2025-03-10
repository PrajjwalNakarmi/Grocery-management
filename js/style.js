 //slider ko lai javascript
 var images = [
    "../images/healthy1.jpg",
    "../images/healthy.png",
    "../images/drink.jpg",
  ];

  var x = 0;
  var imgs = document.getElementById("img");
  setInterval(slider, 2500);

  function slider() {
    if (x < images.length) {
      x = x + 1;
    } else {
      x = 1;
    }

    imgs.style.backgroundImage = "url(" + images[x - 1] + ")";
  }