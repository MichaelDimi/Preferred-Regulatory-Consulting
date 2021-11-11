// back up stuff :
// function onHamburgerClick() {
//     document.getElementById('hamburger').classList.toggle("change");
//     document.getElementById('main-link-container').classList.toggle("change");

// }

function onHamburgerClick() {
  document.getElementById('hamburger').classList.toggle("change");
  // document.getElementById('main-link-container').classList.toggle("change");

  if (document.getElementById("main-link-container").classList.contains('change')) {
    document.getElementById('main-link-container').classList.remove("change");
  } else if (!document.getElementById("main-link-container").classList.contains('change')) {
    document.getElementById('main-link-container').classList.add("change");
  }

}


window.onclick = function(event) {
  if (!event.target.matches('.menu-icon') && !event.target.matches('.bar1') && !event.target.matches('.bar2') && !event.target.matches('.bar3')) {
    var slide = document.getElementsByClassName("main-link-container");
    var i;
    for (i = 0; i < slide.length; i++) {
      var openSlider = slide[i];
      if (openSlider.classList.contains('change')) {
        openSlider.classList.remove('change')
        document.getElementById('hamburger').classList.remove("change");
        console.log("called2");
      } //else if (openDropdown.style.display != block) {
        
      //}
    }
  }
}


var changed1 = false;

function footerdrop() {
  document.getElementById("nlc").classList.toggle("shown");

  const element = document.querySelector('.footer-header')
  var elm = window.getComputedStyle(element, "after");

    // console.log(elm.getPropertyValue("transform"));

  if (changed1 == false) {
    element.style.setProperty('--rotated1', '-45deg');
    element.style.setProperty('--rotated2', '45deg');
    changed1 = true;
  }else{
    element.style.setProperty('--rotated1', '45deg');
    element.style.setProperty('--rotated2','-45deg');
    changed1 = false;
  }
}

var changed2 = false;

function footerdrop2() {
  document.getElementById("nlc2").classList.toggle("shown");

  const element = document.querySelector('.footer-header-two');
  var elm = window.getComputedStyle(element, "after");

    // console.log(elm.getPropertyValue("transform"));

  if (changed2 == false) {
    element.style.setProperty('--rotated1', '-45deg');
    element.style.setProperty('--rotated2', '45deg');
    changed2 = true;
  }else{
    element.style.setProperty('--rotated1', '45deg');
    element.style.setProperty('--rotated2','-45deg');
    changed2 = false;
  }
}

var changed3 = false;

function footerdrop3() {
  document.getElementById("nlc3").classList.toggle("shown");

  const element = document.querySelector('.footer-header-three');
  var elm = window.getComputedStyle(element, "after");

    // console.log(elm.getPropertyValue("transform"));

  if (changed3 == false) {
    element.style.setProperty('--rotated1', '-45deg');
    element.style.setProperty('--rotated2', '45deg');
    changed3 = true;
  }else{
    element.style.setProperty('--rotated1', '45deg');
    element.style.setProperty('--rotated2','-45deg');
    changed3 = false;
  }
}



