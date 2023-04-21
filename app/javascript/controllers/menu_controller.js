import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    var boxes = document.getElementsByClassName('link_box')
    setTimeout(() => {
      for (let box of boxes) {
        box.className += '_inplace';
        box.dataset.action = 'click->menu#rollup'
      }
    }, 3000)
  }

  removeAnimation(e) {
    if (e.currentTarget.className != 'link_box_inplace') {
      e.currentTarget.className += '_inplace';
      e.currentTarget.dataset.action = 'click->menu#rollup'
    }
  }

  rollup(e) {
    var box = document.getElementsByClassName('menu')[0]
    var banner = document.getElementsByClassName('banner')[0]
    box.className += '_floatingoff'
    banner.className += '_floatingoff'

    setTimeout(() => {
      box.className = 'menu_static'
      banner.style.opacity = '0%'
    }, 2000)
  }
}
