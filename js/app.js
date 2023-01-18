let navl = document.querySelector("#navbar__list")
let sections = document.querySelectorAll("section")
let sectionArr = Array.from(sections)



//function to make and append section links
let  addtolist  = ()=>{
    for(item of sectionArr){
    li = document.createElement("li"); //  creating container element  (<li>)
    li.innerHTML = `<li><a href = "#${item.id}" data-nav="${item.id}" class="menu__link" id="${item.id}b">${item.getAttribute("data-nav")}</a></li>` //set the class to (menu__link to apply the pre made css stylings)
    navl.appendChild(li)//adding the new element to navbar__list
}
}
function yourActiveList(){// activating sections 
   
    
    function checkSection(sec){ // function to return true if the section is in the view of the client screen
        let pos = sec.getBoundingClientRect()
        let exist = false; // this is an initial value for (exist) variable
        if(pos.top >= -400 && pos.top<=150){
            exist = true;
        }else{
            exist = false;
        }
        
        return exist;
    }
    
     for(sec of sectionArr){
         // getting the button responsible for the section in the view
         let bt = document.getElementById(`${sec.id}b`)
        
        if(checkSection(sec) == true){ //applying the previous function (checkSection) 
            sec.classList.add("your-active-class")   
            
            // setting style setting for the button to work as an indicator for the active section
            bt.style.background = "#333" 
            bt.style.color = "#fff"
        }else{
            sec.classList.remove("your-active-class")
            bt.style.color = "#000"
            bt.style.background = "white"
           
        }
    }
   
}



// smooth scrolling behavior
navl.addEventListener("click",function(sec){
    sec.preventDefault();
    
    let tar = sec.target.dataset.nav;
    if(tar){
        document.getElementById(tar).scrollIntoView({behavior:"smooth"}) // setting the behavior to smooth to get smooth scrolling behavior
    }
    
})





window.addEventListener('scroll',yourActiveList)  // calling the yourActiveList function whenever the user scroll 
addtolist() // calling the addtoList function to create the navigation bar buttons in the form of <li> elements
