// write js code here corresponding to matches.html

var data=JSON.parse(localStorage.getItem("details"))


var fabdata=JSON.parse(localStorage.getItem("fab")) || []



function filven(){
    var selcted= document.querySelector("#filterVenue").value;
     var filtrlist=data.filter(function(ele){
          return ele.ven==selcted
     })
     display(filtrlist)
    
}
display(data)

function display(data){

    document.querySelector("tbody").innerHTML=" "
    data.forEach(function(ele){

      var dibba=document.createElement("tr")

      var bx1=document.createElement("td")
      bx1.innerText=ele.num

      
      var bx2=document.createElement("td")
      bx2.innerText=ele.tema

      
      var bx3=document.createElement("td")
      bx3.innerText=ele.temb

      
      var bx4=document.createElement("td")
      bx4.innerText=ele.dat

      
      var bx5=document.createElement("td")
      bx5.innerText=ele.ven

      var bx6=document.createElement("td")
      bx6.innerText="Add to Fab"
      bx6.style.color="green"
      bx6.style.cursor="pointer"
      bx6.addEventListener("click",function(){
          adfab(ele)
      })

     

      dibba.append(bx1,bx2,bx3,bx4,bx5,bx6)

      document.querySelector("tbody").append(dibba)

    })

    function adfab(ele){
        fabdata.push(ele)
        localStorage.setItem("fab",JSON.stringify(fabdata))
        window.location.href="favourites.html"
    }
}