import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect(){
    let cookies = document.getElementById("cookiebar")
    if (document.cookie != "cookie=consent") {
      cookies.style.display = "flex";
    }
  }
  disappear(e) {
    let cookies = document.getElementById("cookiebar")
    cookies.animate({"opacity":"0%"}, 500)
    setTimeout(() => {
      cookies.style.display = "none";
    },500)
    document.cookie = "cookie=consent"
  }

}