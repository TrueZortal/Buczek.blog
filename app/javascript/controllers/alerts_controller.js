import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    let alerts = document.getElementById("alerts")
    alerts.animate({"opacity":"0%"}, 5000)
    setTimeout(() => {
      alerts.style.display = "none";
    },5000)
  }

}