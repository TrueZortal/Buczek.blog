import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
  document.querySelectorAll('summary')
  .forEach(element => element.addEventListener('click', (event) => {
    const detailsElement = event.target.parentElement;
    const contentElement = event.target.nextElementSibling;

    if (contentElement.classList.contains('animation')) {
      contentElement.classList.remove('animation', 'collapsing');
      void element.offsetWidth;
      return;
    }

    const onAnimationEnd = cb => contentElement.addEventListener(
      "animationend", cb, {once: true}
    );

    requestAnimationFrame(() => contentElement.classList.add('animation'));
    onAnimationEnd(() => contentElement.classList.remove('animation'));

    const isDetailsOpen = detailsElement.getAttribute('open') !== null;
    if (isDetailsOpen) {
      event.preventDefault();
      contentElement.classList.add('collapsing');
      onAnimationEnd(() => {
        detailsElement.removeAttribute('open');
        contentElement.classList.remove('collapsing');

        var timelineElement = document.getElementById('body_wrapper');
        timelineElement.scrollTo( { top: event.target.parentElement.parentElement.parentElement.offsetTop - 200, behavior: 'smooth' } );
      });
    } else {

      detailsElement.scrollIntoView( { alignToTop: true, behavior: 'smooth', inline: 'start' } );
    }
  }));
}
  scrollDown() {
    var timelineElement = document.getElementById('body_wrapper');
    timelineElement.scrollTo( { top: timelineElement.scrollHeight, behavior: 'smooth' } );
  }
}
