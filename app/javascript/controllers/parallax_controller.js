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
    var layer3_container = document.getElementById('layer3_container');

    var scroll = window.scrollY;
    var speed = 0.25;

    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight,
      document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

    if (scroll > limit - layer3_container.offsetHeight/2) {
      return;
    } else {
      layer1.style.top = scroll * 0.25 + 'px';
      layer2.style.top = scroll * speed + 'px';
      // layer3_container.style.top = -scroll + 'px';
    }
  }

}
