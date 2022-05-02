// write js code here corresponding to favourites.html

var fabdata=JSON.parse(localStorage.getItem("fab"))


display(fabdata)

function display(fabdata){
    fabdata.forEach(function(ele,index){
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
      bx6.innerText="Delete"
      bx6.style.color="green"
      bx6.style.cursor="pointer"
      bx6.addEventListener("click",function(){
          delrow(ele,index)
      })

     

      dibba.append(bx1,bx2,bx3,bx4,bx5,bx6)

      document.querySelector("tbody").append(dibba)

    })
   
    function delrow(ele,index){
     fabdata.splice(index,1)
     localStorage.setItem("fab",JSON.stringify(fabdata))
     window.location.reload()
    }
}