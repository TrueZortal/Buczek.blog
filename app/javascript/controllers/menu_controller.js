import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    var boxes = document.getElementsByClassName('link_box')
    setTimeout(() => {
      for (let box of boxes) {
        box.className += '_inplace';
      }
    }, 2000)
  }

  rollup(e) {
    let box = document.getElementsByClassName('menu')[0]
    let banner = document.getElementsByClassName('banner')[0]
    let static_menu = document.getElementById('menu_static')
    box.className += '_floatingoff'
    banner.className += '_floatingoff'

    setTimeout(() => {
      box.style.display = 'none';
      banner.style.display = 'none';
      static_menu.style.display = 'flex'
    }, 2000)
  }
}
