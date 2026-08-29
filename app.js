let hireMe = document.querySelector(".btn");
let contact = document.querySelector(".contact");
hireMe.addEventListener("click",()=>{
    contact.scrollIntoView({
        behavior:"smooth"
    });
});
let links = document.querySelectorAll(".links a");
let sections = [document.querySelector(".hero-section"),
               document.querySelector(".about"),
               document.querySelector(".skills"),
               document.querySelector(".projects"),
               document.querySelector(".contact")]
links.forEach((a,index)=>{
    a.addEventListener("click",(event)=>{
        event.preventDefault();
        sections[index].scrollIntoView({
            behavior:"smooth",
            block:"start"
        });
    });
});

let form = document.querySelector("form");
let input = document.querySelector("#name");
let email = document.querySelector("#email");
let textarea = document.querySelector("textarea");
form.addEventListener("submit",function(event){
    event.preventDefault();
    if(input.value === "" || email.value === "" || textarea.value === ""){
          alert("GIVE YOUR RESPONSE");
    }
    else{
        alert("Message sent successfully!");
    }
    form.reset();
});
