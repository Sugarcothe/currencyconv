let btn = document.getElementById("btn")


btn.addEventListener("click", function (e){
  e.preventDefault()
 let naira = document.getElementById("naira").value
 let dollars = document.getElementById("dollars")

 dollars.value = Math.round(naira / 700)
})