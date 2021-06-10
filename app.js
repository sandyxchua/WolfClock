const submit = document.getElementById("submit")
const settings = document.getElementById("settings")
const header = document.getElementById("header")
const txt = document.getElementById('txt')
const page = document.getElementsByClassName("page")

submit.addEventListener('click', ()=>{
  alert("PARTY")
})

const img = document.querySelector("img")
img.addEventListener('mousemove', ()=>{
  document.body.style.backgroundColor = "white"
  document.body.style.transitionDuration = "0.5s"
  settings.style.visibility = "hidden"
  header.style.visibility = "hidden"
  txt.style.visibility = "hidden"
})

img.addEventListener('mouseout', ()=>{
  document.body.style.backgroundColor = "black"
  document.body.style.transitionDuration = "0.5s"
  settings.style.visibility = "visible"
  header.style.visibility = "visible"
  txt.style.visibility = "visible"
})