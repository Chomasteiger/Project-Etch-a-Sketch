let container=document.querySelector("#big-container");
const body=document.querySelector("body");
function box(size=16){
    for(let i=0;i<size;i++){
        const row=document.createElement("div");
        row.className="row";
        for(let j=0;j<size;j++){
            const box=document.createElement("div");
            box.className="box";
            box.opacity=0;
            row.appendChild(box);
            
            box.addEventListener("mouseover",(event)=>{
                switch(randomColorNum()){
                    case 0:
                        event.target.style.backgroundColor="black";
                        console.log("f");
                        break;
                    case 1:
                        event.target.style.backgroundColor="red";
                        break;
                    case 2:
                        event.target.style.backgroundColor="orange";
                        break;
                    case 3:
                        event.target.style.backgroundColor="yellow";
                        break;
                    case 4:
                        event.target.style.backgroundColor="green";
                        break;
                    case 5:
                        event.target.style.backgroundColor="blue";
                        break;
                    case 6:
                        event.target.style.backgroundColor="indigo";
                        break;
                    case 7:
                        event.target.style.backgroundColor="violet";
                        break;
                }
                console.log(randomColorNum());
            })
        }
        container.appendChild(row);
    }
}
box();
const button=document.querySelector("button");
button.addEventListener("click",()=>{
   let size= prompt("How many squares wide and long should it be?");
   if(isNaN(size*1)){
    alert("Invalid input");
    return;
   }
   container.remove();
   container=document.createElement("div");
   container.id="big-container";
   body.appendChild(container);
    box(size);
});
function randomColorNum(){
    let value= Math.floor(Math.random()*8);
    console.log(value);
    return value;
}