import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  connect() {
    window.addEventListener('scroll', this.onScroll.bind(this), true);

    // let observer = new IntersectionObserver(function (entries) {
    //   entries.forEach(function (entry) {
    //     entry.target.classList.toggle('in-viewport', entry.isIntersecting);
    //   });
    // });

    // // The elements to observe
    // let elements = document.querySelectorAll('.has-scroll-in-effect');

    // elements.forEach(function (element) {
    //   observer.observe(element);
    // });
  }

  onScroll(e) {
    var layer1 = document.getElementById('layer1');
    var layer2 = document.getElementById('layer2');
    var layer3 = document.getElementById('layer3');
    var layer3_container = document.getElementById('layer3_container');
    var content = document.getElementById('content');

    var scroll = window.scrollY;
    var speed = 0.5;

    console.log(e.target);

    layer1.style.top = -scroll * 0.25 + 'px';
    // layer2.style.opacity = 1 - scroll / 750;
    layer2.style.top = -scroll * speed + 'px';
    layer3_container.style.top = -scroll + 'px';
  }

}
