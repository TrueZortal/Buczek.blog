import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    this.scrollLeft()
  }

  scrollRight(e) {
    let carousel = document.getElementById("posts_car");
    let post = document.getElementsByClassName("post_box")[0];
    let current_right = Number(window.getComputedStyle(carousel).getPropertyValue("right").match(/\d+/)[0]);
    let movement_amount = Number(window.getComputedStyle(post).getPropertyValue("width").match(/\d+/)[0]);
    let car_width = carousel.scrollWidth;
    let move = current_right + movement_amount;
    if (move < car_width/2)
     carousel.style.right = `${move}px`;
    }

  scrollLeft(e) {
    let carousel = document.getElementById("posts_car");
    let post = document.getElementsByClassName("post_box")[0];
    let movement = Number(window.getComputedStyle(post).getPropertyValue("width").match(/\d+/)[0]);
    let current_right = Number(window.getComputedStyle(carousel).getPropertyValue("right").match(/\d+/)[0]);
    if (current_right - movement > 0) {
      carousel.style.right = `${current_right - movement}px`;
    } else {
      carousel.style.right = `0px`;
    }
  }
}