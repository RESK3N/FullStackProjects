// const base="https://latest.currency-api.pages.dev/v1/currencies/eur.json";
const base="https://latest.currency-api.pages.dev/v1/currencies/";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCode = document.querySelector(".from select");
const toCode = document.querySelector(".to select");
let msg=document.querySelector("#msg");

for (let select of dropdowns) {
    for(currcode in countryList){
        let newoption = document.createElement("option");
        newoption.value = currcode;
        newoption.innerText = currcode;
        if(select.name==="from" && currcode==="USD"){
            newoption.selected = "selected";
        }
        if(select.name==="to" && currcode==="INR"){
            newoption.selected = "selected";
        }
        select.appendChild(newoption);
    }
    select.addEventListener("change", (evt)=> {updateFlag(evt.target)});
}
const updateFlag = (element)=>{
    let currencyCode=element.value;
    // console.log(currencyCode);
    let countryCode = countryList[currencyCode];
    // console.log(countryCode);
    let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    element.parentElement.querySelector("img").setAttribute("src",newsrc);
}
btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    amt=document.querySelector("#amount");
    amount=amt.value;
    if(amount===""||amount<1){
        amount=1;
        amt.value=1;
    }
    //console.log(fromCode.value,toCode.value,amount);
    let url=`${base}/${fromCode.value.toLowerCase()}.json`;

    let  response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let rate = data[fromCode.value.toLowerCase()][toCode.value.toLowerCase()];
    let finalamt= amount * rate;
     msg.innerText=`${amount} ${fromCode.value} = ${finalamt} ${toCode.value}`;
})