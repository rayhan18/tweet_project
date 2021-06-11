const inputText =document.querySelector('#inputText')
const tweetList = document.querySelector('#tweetList')
const submitbtn =document.querySelector('#submitBtn')
const serchItem = document.querySelector('#serchItem')
const msgList = document.querySelector('#msgList')
const deleteBtn = document.querySelector('.deleteBtn')
const msg = document.querySelector('#msg')
const time= dayjs().format('MMM-DD-YYYY hh.mm a')
//const time = new Date().toString("HH:mm MMMM dS, yyyy")
//const time = new Date().toString(dayjs().format(' HH:mm MMM/DD/YYYY').dayjs().format('LT').dayjs().fromNow())
//const time = datejs().format(' HH:mm MMM/DD/YYYY').datejs().format('LT').datejs().fromNow()
// var n = new Date().toString("HH:mm MMMM dS, yyyy");
// n.fromNow()

//input data
let tweetDatas= []
function getinputData(dataLists){
    
     let li =''
     dataLists.forEach(dataList => {
         ol=document.createElement('ol')
         li =document.createElement('li')
        li.className ='border-bottom mb-1 list-group-item bg-info'
        li.id=`tweetData${dataList.id}`
        li.innerHTML =`<span>${dataList.msg}</span><br/><span style="font-size:8px">tw:${time} </span><br/> 
        <button class="btn btn-danger btn-sm deleteBtn" style="float:right;">Delete
     
        </button>`
      
        
        tweetList.appendChild(li)

    });
    //Date.parse("10PM")
   
}

getinputData(tweetDatas)

//add data
submitbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const name =inputText.value
    const msg =inputText.value
    let id
   // let time= dayjs().format('MMM-DD-YYYY hh.mm a')
    if(tweetDatas === 0){
        id=0
    }else{
        id =tweetDatas[tweetDatas.length-1]
        id +=1
    }
   // data.time = dayjs().format('MMM-DD-YYYY hh.mm a')

    if(msg === ''){
        alert('plase enter your massage')
    }else{
        tweetDatas.push({
            id ,
           name,
            msg,
           time
           
        })
       
        inputText.innerHTML =''
        tweetList.innerHTML =''
        getinputData(tweetDatas)
        inputText.value =''
    }

})

//delete data

tweetList.addEventListener('click',(e)=>{

   
  if(e.target.classList.contains('deleteBtn')){
   
      const target = e.target.parentElement
      e.target.parentElement.remove(target)
      const id =parseInt(target.id.split('-')[1])
      let result =  tweetDatas.filter(tweetData=>{
          return tweetData.id !==id
      })
      tweetData = result
      console.log(tweetData)
  }
})
// serch item
serchItem.addEventListener('keyup', (e)=>{
    const text=e.target.value

     document.querySelectorAll('#tweetList .bg-info').forEach(item=>{
       const productName=
       item.firstElementChild.textContent.toLocaleLowerCase()
       if(productName.indexOf(text) === -1){
        msg.innerHTML ="No item show"
         msg.style.color ="danger"
         item.style.display ="none"
    
   }else{
        msg.innerHTML =" "
        item.style.display ="block"
      }
    })
  })

  //localstorege

//   if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem("name", e.terget.value);
//     // Retrieve
//     document.getElementById("result").innerHTML = localStorage.getItem("name");
//   } else {
//     document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
//   }
//   localStorage.removeItem("neme");