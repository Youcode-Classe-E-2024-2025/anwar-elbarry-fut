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

// variables
const stBox = document.querySelector("#st");
const rwBox = document.querySelector("#rw");
const rbBox = document.querySelector("#rb");
const lwBox = document.querySelector("#lw");
const cmBox = document.querySelector("#cm");
const cdmBox = document.querySelector("#cdm");
const cbBox = document.querySelector("#cb");
const lbBox = document.querySelector("#lb");
const gkBox = document.querySelector("#gk");
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
        let nameSize = 10;
        if(player.name.length >= 14){
            nameSize=2;
        }
        const playerCard = document.createElement("div");
        if(player.position === "GK"){
            playerCard.innerHTML = `
            <div class="fut-player-card">
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
            <div class="player-name"><span  style="font-size:0.6rem ;">${player.name}</span></div>
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
            <div class="fut-player-card">
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
            <div class="player-name"><span  style="font-size:0.6rem ;">${player.name}</span></div>
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