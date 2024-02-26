'use strict';
(function() {

  window.addEventListener("load", init);

  function init() {
    let btns = document.querySelectorAll(".unclicked");
    for(let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", switchView);
    }
    let firstBtn = document.querySelector(".clicked");
    console.log(firstBtn);
    firstBtn.addEventListener("click", switchView);
  }

  function switchView() {
    //disableBtns(true);

    let oldBtn = document.querySelector(".clicked");
    oldBtn.classList.remove("clicked");
    oldBtn.classList.add("unclicked");

    let id = this.id.substring(2);
    this.classList.remove("unclicked");
    this.classList.add("clicked");

    let oldSection = document.querySelector(".unhidden");
    oldSection.classList.add("hidden");
    oldSection.classList.remove("unhidden");

    let section = document.getElementById(id);
    section.classList.remove("hidden");
    section.classList.add("unhidden");

    /**setTimeout(function() {
      disableBtns(false);
    }, 2000);*/
  }

  function disableBtns(turnOff) {
    let btns = document.querySelectorAll("button");
    for(let i = 0; i < btns.length; i++) {
      btns[i].disabled = turnOff;
    }
  }

})();