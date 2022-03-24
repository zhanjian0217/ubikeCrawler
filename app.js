const API = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

const ul = document.querySelector(".siteList")


document.querySelector("#searchForm").addEventListener("submit" , (e) =>{
  const textInput = document.querySelector("#searchKeyword")
  e.preventDefault()
  if(textInput.value.trim() !== ""){
    getData(textInput.value)
  }else
    return alert("請輸入文字")
  ul.textContent = ""    
})

async function getData(value) {
  const rawData = await fetch(API)
  const bikes = await rawData.json()


  const data = bikes.filter((ele)=> {
    if((ele.ar).includes(value)){
      return ele
    }
  })

  data.forEach((x) => {
    const a =  createdData(x)
    ul.insertAdjacentHTML("afterbegin" ,a)
  });  
}


function createdData(x)  {  
  const bike =`<li class="list-group-item fs-5">
  <i class="fas fa-bicycle"></i>
  ${x.sna.replace("YouBike2.0_","")} (${x.sbi})<br>
  <small class="text-muted">${x.ar})</small>
  </li>` 
  return bike
}