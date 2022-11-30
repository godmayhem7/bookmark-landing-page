let switcher = document.querySelectorAll(".switcher")

switcher.forEach((swap) => {
    swap.addEventListener("click",function(){
        
        if(this===switcher[0]){
            document.querySelector(".tabs").innerHTML=`
            <img class="tab1 increase" src="images/illustration-features-tab-1.svg" alt="">
            <div class="tab-info">
              <h3>Bookmark in one click</h3>
              
            <p class="pp">
              Organize your bookmarks however you like. Our <br> simple drag-and-drop interface 
              gives you complete <br> control over how you manage your favourite sites.
            </p>
              
            <button class="more-info">
              More Info
            </button>
              
            </div>
            `
           switcher[0].style.borderBottom = "3px solid hsl(0, 94%, 66%)"
           switcher[1].style.borderBottom = "none"
           switcher[2].style.borderBottom = "none"

           switcher[0].style.color = "hsl(229, 31%, 21%)"
           switcher[1].style.color = "hsl(229, 8%, 60%)"
           switcher[2].style.color= "hsl(229, 8%, 60%)"
        }
           else if(this===switcher[1]){
            document.querySelector(".tabs").innerHTML=`
            <img src="images/illustration-features-tab-2.svg" class="tab1" alt="">
            <div class="tab-info">
            <h3>Intelligent search</h3>
            
            <p class="pp">
            Our powerful search feature will help you find saved <br> sites in no time at all. 
            No need to trawl through all of <br> your bookmarks.
            </p>
            
            <button class="more-info">
            More Info
            </button>
            
            </div>
            `
            switcher[1].style.borderBottom = "3px solid hsl(0, 94%, 66%)"
           switcher[0].style.borderBottom = "none"
           switcher[2].style.borderBottom = "none"

           switcher[1].style.color = "hsl(229, 31%, 21%)"
           switcher[0].style.color = "hsl(229, 8%, 60%)"
           switcher[2].style.color= "hsl(229, 8%, 60%)"
            
      } else if(this===switcher[2]){
        document.querySelector(".tabs").innerHTML=`
        <img src="images/illustration-features-tab-3.svg" class="tab1" alt="">
        <div class="tab-info">
          <h3>Share your bookmarks</h3>
          
        <p class="pp">
        Easily share your bookmarks and collections with <br> others. Create a shareable 
        link that you can send at <br> the click of a button. 
        </p>
          
        <button class="more-info">
          More Info
        </button>
          
        </div>
        `

        switcher[2].style.borderBottom = "3px solid hsl(0, 94%, 66%)"
           switcher[1].style.borderBottom = "none"
           switcher[0].style.borderBottom = "none"

           switcher[2].style.color = "hsl(229, 31%, 21%)"
           switcher[1].style.color = "hsl(229, 8%, 60%)"
           switcher[0].style.color= "hsl(229, 8%, 60%)"
        
      }
    })
});






let answers = document.querySelectorAll(".quest")

answers.forEach((answer)=>{
    answer.addEventListener("click",function(){
        if (this===answers[0]){
            document.querySelectorAll(".writeups")[0].classList.toggle("append")
            document.querySelectorAll(".arr")[0].classList.toggle("arrow")
        }else if(this===answers[1]){
            document.querySelectorAll(".writeups")[1].classList.toggle("append")
            document.querySelectorAll(".arr")[1].classList.toggle("arrow")  
        }else if(this===answers[2]){
            document.querySelectorAll(".writeups")[2].classList.toggle("append")
            document.querySelectorAll(".arr")[2].classList.toggle("arrow")  
        }else if(this===answers[3]){
            document.querySelectorAll(".writeups")[3].classList.toggle("append")
            document.querySelectorAll(".arr")[3].classList.toggle("arrow")  
        }
    })
})


document.querySelector(".contact").addEventListener("click",()=>{
    if (document.querySelector(".email").value.slice(-10)==="@gmail.com"){
        document.querySelector(".email").value = null
        document.querySelector(".error").style.display="none"
        document.querySelector("em").style.display="none"
    }else{
        document.querySelector(".error").style.display="flex"
        document.querySelector("em").style.display="flex"
    }
})



document.querySelector(".hamburger").addEventListener("click",()=>{
  document.querySelector("nav").style.display="flex"
  document.querySelector(".hamburger").style.display="none"
})

document.querySelector(".close").addEventListener("click",()=>{
  document.querySelector(".hamburger").style.display="flex"
  document.querySelector("nav").style.display="none"
})