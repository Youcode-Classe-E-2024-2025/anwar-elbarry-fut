console.log("rrrrrrrrr");
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
    display(listPlayers);
}}
)
.catch(error =>  console.error(error))

function display(list){
    list.forEach(player => {
        console.log(player.name);
    });
}