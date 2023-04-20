import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  myNavbar() {
    var x = document.getElementsByClassName("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  rollout(e) {
    var menu = document.getElementsByClassName("menu")[0]
    if (menu.className === "menu") {
      menu.className += "-rolledout"
    } else {
      // menu.className = "menu"
    }
    console.log("boom")
  }

  rollup() {
    var menu = document.getElementsByClassName("menu-rolledout")[0]
    if (menu.className === "menu-rolledout") {
      // menu.className = "menu"
    } else {
      menu.className += "-rolledout"
    }
    console.log("winding")
  }
}
