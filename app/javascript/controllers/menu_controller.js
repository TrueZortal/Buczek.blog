import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  myNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
}
