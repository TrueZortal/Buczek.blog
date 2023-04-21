import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    var boxes = document.getElementsByClassName('link_box')
    setTimeout(() => {
      for (let box of boxes) {
        box.className += '_inplace';
      }
    }, 3000)
  }

  removeAnimation(e) {
    if (e.currentTarget.className != 'link_box_inplace') {
      e.currentTarget.className += '_inplace';
      e.currentTarget.dataset.action = 'mouseover->menu#freezeFrame'
    }
  }

  freezeFrame(e) {
    console.log(e.currentTarget)
    var box = e.currentTarget
    var box_pox = box.getBoundingClientRect()
    console.log(box_pox)

  }
}
