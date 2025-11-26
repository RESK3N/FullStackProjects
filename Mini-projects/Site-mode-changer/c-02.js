let btn=document.querySelector("#btn");
let mode = "light";
let body=document.querySelector("body");
let div=document.querySelector("div");
let p=document.createElement('p');
p.innerHTML=`Current mode is ${mode} mode`;
div.append(p);

btn.addEventListener("click",()=>{
    if(mode === "light"){
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    p.innerHTML=`Current mode is ${mode} mode`;
    div.append(p);
})

