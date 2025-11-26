let uscore=0;
let cscore=0;
let color="#2b2b2b"
let textcolor= "white";
let choices=document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

//results
 lost= (u,c) =>{
    msg.textContent=`You Lost! Your ${u} was beaten by ${c}`;
    color="red";
    cscore++;
    msg.style.backgroundColor=color;
    msg.style.color=textcolor;
}
won = (u,c) =>{
    msg.textContent=`You Won! Your ${u} beats ${c}`;
    color = "green";
    uscore++;
    msg.style.backgroundColor=color;
    msg.style.color=textcolor;
}
draw = () =>{
    msg.textContent="Draw";
    color="yellow";
    textcolor= "black";
    msg.style.backgroundColor=color;
    msg.style.color=textcolor;
}


const game = (userChoice)=>{
    let cChoice= genChoice();

    if(userChoice===cChoice){ //draw
        draw();
    }else if(userChoice==="rock"){      //user chooses rock and
        if(cChoice==="paper"){          //computer chooses paper
            lost(userChoice,cChoice);
        }else{                          //computer chooses scissors
            won(userChoice,cChoice);
        }
    }else if(userChoice==="paper"){     //user chooses paper and
        if(cChoice==="scissors"){       //computer chooses scissors
            lost(userChoice,cChoice);
        }else{                          //computer chooses rock
            won(userChoice,cChoice);
        }
    }else if(userChoice==="scissors"){   //user chooses scissor and
        if(cChoice==="rock"){            //computer chooses rock
            lost(userChoice,cChoice);
        }else{                           //computer chooses paper
            won(userChoice,cChoice);
        }
    }
}

const genChoice = ()=>{
    const options=['rock','paper','scissors'];
    let a = Math.floor(Math.random() * 3);
    return options[a];
}

choices.forEach(ch=>{
    console.log(ch);
    ch.addEventListener("click", ()=> {
        let id=ch.getAttribute("id");
        game(id);
        let userscore=document.querySelector("#uscore");
       let compscore=document.querySelector("#cscore");
       userscore.textContent=`${uscore}`;
       compscore.textContent=`${cscore}`;
    })
})

