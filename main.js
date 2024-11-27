
let listPlayers=[];
fetch("FUT-Champ-Ultimate-Team-Assets/players.json")
.then(Response =>{ 
    if(!Response.ok){
        console.log("error");
        return;
    }
    
    return Response.json()}
)
.then(data => 
   { if(data){
    listPlayers = data.players;
    console.log(listPlayers);
}}
)
.catch(error =>  console.error(error))


const playersBox = document.querySelectorAll(".fut-player-card");
playersBox.forEach(box => {
   const plus= box.querySelector(".fa-plus");
    box.addEventListener('click',() =>{
        const positionSelected = box.getAttribute('data-position');
        console.log(box);
        console.log(positionSelected);
        plus.classList.add("hidden");
    })
})