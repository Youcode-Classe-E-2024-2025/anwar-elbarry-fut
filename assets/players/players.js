
document.addEventListener('DOMContentLoaded', function() {
 let listPlayers=[];
 // Retrieve the players data from localStorage
 const storedPlayers = localStorage.getItem('players');
 
 if (storedPlayers) {
   // Parse the JSON string back into an array
   listPlayers = JSON.parse(storedPlayers);
 } else {
   console.log("No players data found in local storage");
 }
// variables
const stBox = document.querySelector(".st");
const rwBox = document.querySelector(".rw");
const rbBox = document.querySelector(".rb");
const lwBox = document.querySelector(".lw");
const cmBox = document.querySelector(".cm");
const cdmBox = document.querySelector(".cdm");
const cbBox = document.querySelector(".cb");
const lbBox = document.querySelector(".lb");
const gkBox = document.querySelector(".gk");
const ALLbox = {
    "ST": stBox,
    "RW": rwBox,
    "RB": rbBox,
    "CM": cmBox,
    "CDM": cdmBox,
    "CB": cbBox,
    "LW": lwBox,
    "LB": lbBox,
    "GK": gkBox,
}; 

function display(list){
    list.forEach(player => {
        let nameSize = null;
        if(player.name.length >= 18){
            nameSize=0.4;
        }
        const playerCard = document.createElement("div");
        playerCard.classList.add('cardContainer');
        if(player.position === "GK"){
            playerCard.innerHTML = `
           
            <div class="fut-player-card hover:scale-95 cursor-pointer" data-id="${player.id}">
            <i class="fa-regular fa-pen-to-square absolute right-0 z-50 "></i>
             <i class="fa-solid fa-trash absolute left-0 z-50  "></i>
        <!-- Player Card Top-->
        <div class="player-card-top">
          <div class="player-master-info">
            <div class="player-rating"><span>${player.rating}</span></div>
            <div class="player-position"><span>${player.position}</span></div>
            <div class="player-nation"><img src="${player.flag}" alt="${player.nationality}" draggable="false"/></div>
            <div class="player-club"><img src="${player.logo}" alt="Barcelona" draggable="false"/></div>
          </div>
          <div class="player-picture"><img src="${player.photo}" alt="${player.name}" draggable="false"/>
            
          </div>
        </div>
        <!-- Player Card Bottom-->
        <div class="player-card-bottom">
          <div class="player-info">
            <!-- Player Name-->
            <div class="player-name"><span>${player.name}</span></div>
            <!-- Player Features-->
            <div class="player-features">
              <div class="player-features-col"><span>
                  <div class="player-feature-value">${player.diving}</div>
                  <div class="player-feature-title">DIV</div></span><span>
                  <div class="player-feature-value">${player.handling}</div>
                  <div class="player-feature-title">HAN</div></span><span>
                  <div class="player-feature-value">${player.kicking}</div>
                  <div class="player-feature-title">KIC</div></span></div>
              <div class="player-features-col"><span>
                  <div class="player-feature-value">${player.reflexes}</div>
                  <div class="player-feature-title">REF</div></span><span>
                  <div class="player-feature-value">${player.speed}</div>
                  <div class="player-feature-title">SPD</div></span>
                  <span>
                  <div class="player-feature-value">${player.positioning}</div>
                  <div class="player-feature-title">POS</div>
                  </span>
                  </div>
            </div>
          </div>
        </div>
      </div>
            `;
        }
        else{
            playerCard.innerHTML = `
            <div class="fut-player-card hover:scale-95  cursor-pointer" data-id="${player.id}">
             <i class="fa-regular fa-pen-to-square absolute right-0 z-50 "></i>
             <i class="fa-solid fa-trash absolute left-0 z-50  "></i>
        <!-- Player Card Top-->
        <div class="player-card-top">
          <div class="player-master-info">
            <div class="player-rating"><span>${player.rating}</span></div>
            <div class="player-position"><span>${player.position}</span></div>
            <div class="player-nation"><img src="${player.flag}" alt="${player.nationality}" draggable="false"/></div>
            <div class="player-club"><img src="${player.logo}" alt="Barcelona" draggable="false"/></div>
          </div>
          <div class="player-picture"><img src="${player.photo}" alt="${player.name}" draggable="false"/>
            
          </div>
        </div>
        <!-- Player Card Bottom-->
        <div class="player-card-bottom">
          <div class="player-info">
            <!-- Player Name-->
            <div class="player-name"><span  style="font-size:${nameSize}rem ;">${player.name}</span></div>
            <!-- Player Features-->
            <div class="player-features">
              <div class="player-features-col"><span>
                  <div class="player-feature-value">${player.pace}</div>
                  <div class="player-feature-title">PAC</div></span><span>
                  <div class="player-feature-value">${player.shooting}</div>
                  <div class="player-feature-title">SHO</div></span><span>
                  <div class="player-feature-value">${player.passing}</div>
                  <div class="player-feature-title">PAS</div></span></div>
              <div class="player-features-col"><span>
                  <div class="player-feature-value">${player.dribbling}</div>
                  <div class="player-feature-title">DRI</div></span><span>
                  <div class="player-feature-value">${player.defending}</div>
                  <div class="player-feature-title">DEF</div></span>
                  <span>
                  <div class="player-feature-value">${player.physical}</div>
                  <div class="player-feature-title">PHY</div>
                  </span>
                  </div>
            </div>
          </div>
        </div>
      </div>
            `;
        }
    
       if (ALLbox[player.position]) {
        ALLbox[player.position].append(playerCard);
    } else {
        console.error(`Position ${player.position} not found in ALLbox.`);
    }
    });
}

// function to delet all players

function deletAll(){

stBox.innerHTML="";
rwBox.innerHTML="";
rbBox.innerHTML="";
lwBox.innerHTML="";
cmBox.innerHTML="";
cdmBox.innerHTML="";
cbBox.innerHTML="";
lbBox.innerHTML="";
gkBox.innerHTML="";

}


// delet player

const container = document.querySelector(".conTainer");
container.addEventListener('click', (event)=>{
if(event.target.classList.contains('fa-trash')){
  const cardContainer = event.target.closest('.fut-player-card');
  const playerId = cardContainer.getAttribute('data-id');

  list = JSON.parse(localStorage.getItem('players')) || []; 

  const playerIndex = list.findIndex(player=>player.id===playerId);

  list.splice(playerIndex,1);
  localStorage.setItem('players',JSON.stringify(list));
  deletAll();
  display(list)
}
     
});

// function to get value from the list

function getDataValue(player){
       document.getElementById('selectedId1').value = player.id;
       document.getElementById('Playername').value = player.name;
       document.getElementById('photo').value = player.photo;
       document.getElementById('positions').value = player.position;
       document.getElementById('nationality').value = player.nationality;
       document.getElementById('flag').value = player.flag;
       document.getElementById('club').value = player.club;
       document.getElementById('logo').value = player.logo;
       document.getElementById('rating').value = player.rating;
       document.getElementById('pace').value = player.pace;
       document.getElementById('shooting').value = player.shooting;
       document.getElementById('passing').value = player.passing;
       document.getElementById('dribbling').value = player.dribbling;
       document.getElementById('defending').value = player.defending;
       document.getElementById('physical').value = player.physical;
}
function getDataGKValue(player){
       document.getElementById('selectedId2').value = player.id;
       document.getElementById('Playername2').value = player.name;
       document.getElementById('photo2').value = player.photo;
       document.getElementById('positions2').value = player.position;
       document.getElementById('nationality2').value = player.nationality;
       document.getElementById('flag2').value = player.flag;
       document.getElementById('club2').value = player.club;
       document.getElementById('logo2').value = player.logo;
       document.getElementById('rating2').value = player.rating;
       document.getElementById('diving').value = player.diving;
       document.getElementById('handling').value = player.handling;
       document.getElementById('kicking').value = player.kicking;
       document.getElementById('reflexes').value = player.reflexes;
       document.getElementById('speed').value = player.speed;
       document.getElementById('positioning').value = player.positioning;
}
// desplay modal
const editModal = document.querySelector(".edit-modal");
const editModalGK = document.querySelector(".edit-modalGK");

container.addEventListener('click', (event)=>{
          event.preventDefault()
if(event.target.classList.contains('fa-pen-to-square')){

  const cardContainer = event.target.closest('.fut-player-card');
  const playerId = cardContainer.getAttribute('data-id');
  
  
 const playerSelected= listPlayers.find(player => player.id === playerId);
 console.log(playerSelected);

 if(playerSelected){
  if(playerSelected.position === "GK"){
    getDataGKValue(playerSelected);
     
    editModalGK.classList.remove("hidden");
    editModalGK.classList.add("flex");
  }
  else{
    getDataValue(playerSelected);
     
    editModal.classList.remove("hidden");
    editModal.classList.add("flex");
  }
 }


}
     
});

// hidde the modal
const cancelBtn = document.getElementById("cancel");
const cancelGKBtn = document.getElementById("cancelGK");
cancelBtn.addEventListener('click', ()=>{
     
     editModal.classList.add("hidden");
     editModal.classList.remove("flex");
    
});
cancelGKBtn.addEventListener('click', ()=>{
     
     editModalGK.classList.add("hidden");
     editModalGK.classList.remove("flex");
    
});

  // Retrieve form values
  function getDataForm1value(){
    const name = document.getElementById('Playername').value;
    const id = document.getElementById('selectedId1').value;
    const photo = document.getElementById('photo').value;
    const position = document.getElementById('positions').value;
    const nationality = document.getElementById('nationality').value;
    const flag = document.getElementById('flag').value;
    const club = document.getElementById('club').value;
    const logo = document.getElementById('logo').value;
    const rating = document.getElementById('rating').value;
    const pace = document.getElementById('pace').value;
    const shooting = document.getElementById('shooting').value;
    const passing = document.getElementById('passing').value;
    const dribbling = document.getElementById('dribbling').value;
    const defending = document.getElementById('defending').value;
    const physical = document.getElementById('physical').value;
  
  
    const newData = {
  name,
  id,
  photo,
  position,
  nationality,
  flag,
  club,
  logo,
  rating,
  pace,
  shooting,
  passing,
  dribbling,
  defending,
  physical,
    }
    return newData}

document.getElementById('submitData').addEventListener('click', function (event) {
          event.preventDefault();
          console.log("newData");
        


  const newData = getDataForm1value();
// Add the new player data to the list
console.log(newData);


// Save the updated list back into localStorage
list = JSON.parse(localStorage.getItem('players')) || []; 
const index = list.findIndex(playerD=>playerD.id===newData.id);
list.splice(index,1,newData);

localStorage.setItem('players',JSON.stringify(list));
deletAll();
 display(list)
editModal.classList.remove('flex');
editModal.classList.add('hidden');

});
document.getElementById('submitDataGK').addEventListener('click', function (event) {
          event.preventDefault();
          console.log("newData");
  // Retrieve form values
  const id = document.getElementById('selectedId2').value;
  const name = document.getElementById('Playername2').value ;
  const photo = document.getElementById('photo2').value ;
  const position = document.getElementById('positions2').value ;
  const nationality = document.getElementById('nationality2').value ;
  const flag = document.getElementById('flag2').value ;
  const club = document.getElementById('club2').value ;
  const logo = document.getElementById('logo2').value ;
  const rating = document.getElementById('rating2').value ;
  const diving = document.getElementById('diving').value ;
  const handling = document.getElementById('handling').value ;
  const kicking = document.getElementById('kicking').value ;
  const reflexes = document.getElementById('reflexes').value ;
  const speed = document.getElementById('speed').value ;
  const positioning = document.getElementById('positioning').value ;


  const newDataGK = {
name,
id,
photo,
position,
nationality,
flag,
club,
logo,
rating,
diving,
handling,
kicking,
reflexes,
speed,
positioning,
  }
// Add the new player data to the list
console.log(newDataGK);


// Save the updated list back into localStorage
list = JSON.parse(localStorage.getItem('players')) || []; 
const index = list.findIndex(playerD=>playerD.id===newDataGK.id);
list.splice(index,1,newDataGK);

localStorage.setItem('players',JSON.stringify(list));
deletAll();
 display(list)
editModalGK.classList.remove('flex');
editModalGK.classList.add('hidden');

});

display(listPlayers);
});