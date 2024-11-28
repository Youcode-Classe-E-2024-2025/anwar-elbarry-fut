document.addEventListener('DOMContentLoaded', function() {
    
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
}}
)
.catch(error =>  console.error(error))


function ceratCard(player){
        let nameSize = null;
        if(player.name.length >= 18){
            nameSize=0.4;
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
       return playerCard;
}
const stadium = document.querySelector(".stad");
function studiCards(){
      stadium.innerHTML = `
      <div class="card row-start-1 flex justify-center col-start-2 col-span-2"> <!-- *** fut-player-card ***-->
                    <div data-position="LW" class="fut-player-card cursor-pointer flex">
                        <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                    </div>
                </div>
                <div  class="card row-start-1 flex justify-center col-start-4 col-span-2"> <!-- *** fut-player-card ***-->
                    <div data-position="ST" class="fut-player-card cursor-pointer flex">
                         <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                    </div>
                </div>
                <div  class="card row-start-1 flex justify-center col-start-6 col-span-2 "> <!-- *** fut-player-card ***-->
                    <div data-position="RW" class="fut-player-card cursor-pointer flex">
                      <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                    </div>
                </div>
                <div  class="card row-start-3 col-start-2 col-span-2 flex justify-center"> <!-- *** fut-player-card ***-->
                    <div data-position="CM" class="fut-player-card cursor-pointer flex">
                <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                    </div>
                </div>
                <div  class="card row-start-3 col-start-4 col-span-2 flex justify-center"> <!-- *** fut-player-card ***-->
                    <div data-position="CM" class="fut-player-card cursor-pointer flex">
                      <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                    </div>
                </div>
                <div  class="card row-start-3 col-start-6 col-span-2 flex justify-center"> <!-- *** fut-player-card ***-->
                    <div data-position="CM" class="fut-player-card cursor-pointer flex">
                    <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                    </div>
                </div>
                <div  class="card row-start-5  col-span-2 flex justify-center"> <!-- *** fut-player-card ***-->
                    <div data-position="RB" class="fut-player-card cursor-pointer flex">
                        <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                    </div>
                </div>
                <div  class="card row-start-5 col-start-3 col-span-2 flex justify-center "> <!-- *** fut-player-card ***-->
                    <div data-position="CB" class="fut-player-card cursor-pointer flex">
              <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                    </div>
                </div>
                <div  class="card row-start-5 col-start-5 col-span-2 flex justify-center bg-red"> <!-- *** fut-player-card ***-->
                    <div data-position="CB" class="fut-player-card cursor-pointer flex">
            <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                    </div>
                </div>
                <div  class="card  row-start-5 col-start-7 col-span-2 flex justify-center"> <!-- *** fut-player-card ***-->
                    <div data-position="LB" class="fut-player-card cursor-pointer flex">
              <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                    </div>
                </div>
                <div  class="card col-start-4 col-span-2 row-start-7 flex justify-center"> <!-- *** fut-player-card ***-->
                    <div data-position="GK" class="fut-player-card cursor-pointer flex">
              <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                    </div>
                </div>`
                return stadium;
}
studiCards()

const playersBox = document.querySelectorAll(".fut-player-card");
const modalBox = document.querySelector(".modalPlayer");
const modalContainer = document.querySelector(".modal_players");
playersBox.forEach(box => {
   const plus= box.querySelector(".fa-plus");
    box.addEventListener('click',(event) =>{
      
    //   select the parent of the card
      const cardContainer = event.target.closest('.card');
    //   get the data position of the card
      const positionSelected = box.getAttribute('data-position');
    //   get nodes list of the cards that contains the seem position
      const playerPosition = listPlayers.filter(player => player.position === positionSelected);
      playerPosition.forEach(player => {
        // append the cards in the modal
        modalBox.append(ceratCard(player));
      })
    //    desplay the modal
        box.classList.remove("flex");
        modalContainer.classList.add("flex");
        modalContainer.classList.remove("hidden");
        plus.classList.add("hidden");
        // append the card 
        const cardsSelected = modalBox.querySelectorAll(".fut-player-card");
        cardsSelected.forEach(card => {
        card.addEventListener('click',()=>{
            modalBox.innerHTML="";
            // hidde modal
            box.classList.add("hidden");
            modalContainer.classList.remove("flex");
            modalContainer.classList.add("hidden");
            plus.classList.remove("hidden");
            // remove old  card
            cardContainer.innerHTML = "";
            // append the card 
            cardContainer.append(card);
    })
})
    })
    // hidde the modal when clicked outside
    modalContainer.addEventListener("click",() => {
        modalBox.innerHTML="";
        box.classList.add("flex");
        modalContainer.classList.remove("flex");
        modalContainer.classList.add("hidden");
        plus.classList.remove("hidden");
    })
})


  });


  // add New player

  const addNewPlayerBtn = document.getElementById("addPlayerBtn");
  const cancelBtn = document.getElementById("cancel");
  const submitlBtn = document.getElementById("submit");
  const addNewplayerModal = document.querySelector(".addNewplayer-modal");
  addNewPlayerBtn.addEventListener('click', ()=> {
         addNewplayerModal.classList.add('flex');
         addNewplayerModal.classList.remove('hidden');
  })
  cancelBtn.addEventListener('click', ()=> {
         addNewplayerModal.classList.remove('flex');
         addNewplayerModal.classList.add('hidden');
  })

  // get informations from the form modal

  submitlBtn.addEventListener('submit',  (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve form values
    const playerDataForm = {
        name: this.elements[0].value,
        photo: this.elements[1].value,
        position: this.elements[2].value,
        nationality: this.elements[3].value,
        flag: this.elements[4].value,
        club: this.elements[5].value,
        logo: this.elements[6].value,
        rating: parseInt(this.elements[7].value),
        pace: parseInt(this.elements[8].value),
        shooting: parseInt(this.elements[9].value),
        passing: parseInt(this.elements[10].value),
        dribbling: parseInt(this.elements[11].value),
        defending: parseInt(this.elements[12].value),
        physical: parseInt(this.elements[13].value),
    };

    playerDataForm.push(playerData);



    // Optional: Hide the form after submission
    document.getElementById('playerFormContainer').classList.add('hidden');
    rightSidePlayers();
});