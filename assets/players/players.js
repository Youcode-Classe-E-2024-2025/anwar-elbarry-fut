
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
console.log(ALLbox);

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
           
            <div class="fut-player-card hover:scale-105 cursor-pointer" data-id="${player.id}">
             <i class="fa-regular fa-pen-to-square absolute right-0 z-50" style="color: #ffffff;"></i>
             <i class="fa-solid fa-trash absolute left-0 z-50 "  style="color: #ffffff;"></i>
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
            <div class="fut-player-card  hover:scale-105 cursor-pointer" data-id="${player.id}">
             <i class="fa-regular fa-pen-to-square absolute right-0 z-50 " style="color: #ffffff;"></i>
             <i class="fa-solid fa-trash absolute left-0 z-50"  style="color: #ffffff;"></i>
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
       console.log(playerCard);
       console.log(player.position);
       
       if (ALLbox[player.position]) {
        ALLbox[player.position].append(playerCard);
    } else {
        console.error(`Position ${player.position} not found in ALLbox.`);
    }
    });
}

// delet player
const container = document.querySelector(".container");
container.addEventListener('click', (event)=>{
if(event.target.classList.contains('fa-trash')){
     event.target.closest('.cardContainer').remove();
}
     
});
// edit player
const editModal = document.querySelector(".edit-modal");
container.addEventListener('click', (event)=>{
if(event.target.classList.contains('fa-pen-to-square')){
    
     editModal.classList.remove("hidden");
     editModal.classList.add("flex");
}
     
});



// document.querySelector('.edit-modal').addEventListener('submit', function (event) {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   // Retrieve form values
//   const playerData = {
//       id: `player-${Date.now()}`,
//       name: this.elements[0].value,
//       photo: this.elements[1].value,
//       position: this.elements[2].value,
//       nationality: this.elements[3].value,
//       flag: this.elements[4].value,
//       club: this.elements[5].value,
//       logo: this.elements[6].value,
//       rating: parseInt(this.elements[7].value),
//       pace: parseInt(this.elements[8].value),
//       shooting: parseInt(this.elements[9].value),
//       passing: parseInt(this.elements[10].value),
//       dribbling: parseInt(this.elements[11].value),
//       defending: parseInt(this.elements[12].value),
//       physical: parseInt(this.elements[13].value),
//   };


// // Add the new player data to the list
// listPlayers.push(playerData);

// // Save the updated list back into localStorage
// localStorage.setItem('players', JSON.stringify(listPlayers));
// addNewplayerModal.classList.remove('flex');
// addNewplayerModal.classList.add('hidden');
// // Optionally, log to confirm the update
// console.log("Player added:", playerData);
// console.log("Updated players list:", listPlayers);
// this.reset();
// });

display(listPlayers);
});