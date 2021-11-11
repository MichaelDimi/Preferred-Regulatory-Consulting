function noScroll() {
  window.scrollTo(0, 0);
}

// Header Menu Button

function onHamburgerClick() {
    document.getElementById('hamburger').classList.toggle("change");

    if (document.getElementById("myDropdown").classList.contains('show')) {
      document.getElementById("myDropdown").classList.remove("show");
    } else if (!document.getElementById("myDropdown").classList.contains('show')) {
      document.getElementById("myDropdown").classList.add("show");
    }
    console.log("called");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu-icon') && !event.target.matches('.bar1') && !event.target.matches('.bar2') && !event.target.matches('.bar3')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
        document.getElementById('hamburger').classList.remove("change");
        console.log("called2");
      } //else if (openDropdown.style.display != block) {
        
      //}
    }
  }
}



function on() {
  document.getElementById("myOverlay").style.display = "block";
  document.getElementById("myOverlay-2").style.display = "block";
  window.addEventListener('scroll', noScroll);

}

function off() {
  document.getElementById("myOverlay").style.display = "none";
  document.getElementById("myOverlay-2").style.display = "none";
  window.removeEventListener('scroll', noScroll);
}

function on2() {
  document.getElementById("myOverlay2").style.display = "block";
  document.getElementById("myOverlay-3").style.display = "block";
  window.addEventListener('scroll', noScroll);

}

function off2() {
  document.getElementById("myOverlay2").style.display = "none";
  document.getElementById("myOverlay-3").style.display = "none";
  window.removeEventListener('scroll', noScroll);
}

// window.onclick = function(event) {
//   if (!event.target.matches('.top-link-text')) {
//     var dropdowns = document.getElementsByClassName("overlay");
    
//     if (dropdowns.classList.contains('show2')) {
//       dropdowns.classList.remove('show2');
//     }
//   }
// }

// footer dropdowns


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