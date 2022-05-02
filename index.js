// write js code here corresponding to index.html
// You should add submit event on the form

var data=JSON.parse(localStorage.getItem("details")) || []


document.querySelector("#masaiForm").addEventListener("submit",myfunction)

function myfunction(){
  event.preventDefault()
  var dairy={
    num:masaiForm.matchNum.value,
    tema:masaiForm.teamA.value,
    temb:masaiForm.teamB.value,
    dat:masaiForm.date.value,
    ven:masaiForm.venue.value,
}
    data.push(dairy)
    localStorage.setItem("details",JSON.stringify(data))
    window.location.href="matches.html"
}
