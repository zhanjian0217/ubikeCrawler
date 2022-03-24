const API = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

const ul = document.querySelector(".siteList")


document.querySelector("#searchForm").addEventListener("submit" , (e) =>{
  e.preventDefault()
  const textInput = document.querySelector("#searchKeyword")


  if(textInput.value.trim() !== ""){
    getData(textInput.value)
  }else
    return alert("請輸入文字")

  ul.textContent = ""    
  textInput.focus()
})

async function getData(value) {
  const rawData = await fetch(API)
  const bikes = await rawData.json()
  const datas = bikes.filter((element) => element.ar.includes(value))

  addLi(datas)
}


function createdLi(station)  {  
  const newLi =`<li class="list-group-item fs-5">
  <i class="fas fa-bicycle"></i>
  ${station.sna.replace("YouBike2.0_","")} (${station.sbi})<br>
  <small class="text-muted">${station.ar})</small>
  </li>` 

  return newLi
}

function addLi(datas) {
  datas.forEach((data) => {
    const selectData =  createdLi(data)
    ul.insertAdjacentHTML("afterbegin", selectData)
  });  
}
