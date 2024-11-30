document.addEventListener('DOMContentLoaded', function() {
  // localStorage.clear();
  if(!localStorage.getItem('players')){
    
    fetch("FUT-Champ-Ultimate-Team-Assets/players.json")
    .then(Response =>{ 
        if(!Response.ok){
            console.log("error");
            return;
        }
        
        return Response.json()}
    )
    .then(data => 
      
      {
        if(data){
        localStorage.setItem('players', JSON.stringify(data.players));
    }}
    
    )
    .catch(error =>  console.error(error))
    
  }

function removeChild(card){
       
}

const listPlayers = JSON.parse(localStorage.getItem('players'))

function ceratCard(player){
        let nameSize = null;
        if(player.name.length >= 19){
            nameSize=0.3;
        }
        const playerCard = document.createElement("div");
        if(player.position === "GK"){
            playerCard.innerHTML = `
            <div class="fut-player-card hover:scale-105 cursor-pointer" data-id="${player.id}">
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
            <div class="fut-player-card hover:scale-105 cursor-pointer" data-id="${player.id}">
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
                    <div data-position="LW" class="fut-player-card cursor-pointer flex hover:scale-105">
                        <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                        <h3 class="text-white text-center bg-black p-1 h-fit rounded font-semibold">LW</h3>
                    </div>
                </div>
                <div  class="card row-start-1 flex justify-center col-start-4 col-span-2"> <!-- *** fut-player-card ***-->
                    <div data-position="ST" class="fut-player-card cursor-pointer flex hover:scale-105">
                         <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                         <h3 class="text-white text-center bg-black p-1 h-fit rounded font-semibold">ST</h3>
                    </div>
                </div>
                <div  class="card row-start-1 flex justify-center col-start-6 col-span-2 "> <!-- *** fut-player-card ***-->
                    <div data-position="RW" class="fut-player-card cursor-pointer flex hover:scale-105">
                      <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                      <h3 class="text-white text-center bg-black p-1 h-fit rounded font-semibold">RW</h3>
                    </div>
                </div>
                <div  class="card row-start-3 col-start-2 col-span-2 flex justify-center"> <!-- *** fut-player-card ***-->
                    <div data-position="CM" class="fut-player-card cursor-pointer flex hover:scale-105">
                <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                <h3 class="text-white text-center bg-black p-1 h-fit rounded font-semibold">CM</h3>
                    </div>
                </div>
                <div  class="card row-start-3 col-start-4 col-span-2 flex justify-center"> <!-- *** fut-player-card ***-->
                    <div data-position="CM" class="fut-player-card cursor-pointer flex hover:scale-105">
                      <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                      <h3 class="text-white text-center bg-black p-1 h-fit rounded font-semibold">CM</h3>
                    </div>
                </div>
                <div  class="card row-start-3 col-start-6 col-span-2 flex justify-center"> <!-- *** fut-player-card ***-->
                    <div data-position="CM" class="fut-player-card cursor-pointer flex hover:scale-105">
                    <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                    <h3 class="text-white text-center bg-black p-1 h-fit rounded font-semibold">CM</h3>
                    </div>
                </div>
                <div  class="card row-start-5  col-span-2 flex justify-center"> <!-- *** fut-player-card ***-->
                    <div data-position="RB" class="fut-player-card cursor-pointer flex hover:scale-105">
                        <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
                        <h3 class="text-white text-center bg-black p-1 h-fit rounded font-semibold">RB</h3>
                    </div>
                </div>
                <div  class="card row-start-5 col-start-3 col-span-2 flex justify-center "> <!-- *** fut-player-card ***-->
                    <div data-position="CB" class="fut-player-card cursor-pointer flex hover:scale-105">
              <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
              <h3 class="text-white text-center bg-black p-1 h-fit rounded font-semibold">CB</h3>
                    </div>
                </div>
                <div  class="card row-start-5 col-start-5 col-span-2 flex justify-center bg-red"> <!-- *** fut-player-card ***-->
                    <div data-position="CB" class="fut-player-card cursor-pointer flex hover:scale-105">
            <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
             <h3 class="text-white text-center bg-black p-1 h-fit rounded font-semibold">CB</h3>
                    </div>
                </div>
                <div  class="card  row-start-5 col-start-7 col-span-2 flex justify-center"> <!-- *** fut-player-card ***-->
                    <div data-position="LB" class="fut-player-card cursor-pointer flex hover:scale-105">
              <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
               <h3 class="text-white text-center bg-black p-1 h-fit rounded font-semibold">LB</h3>
                    </div>
                </div>
                <div  class="card col-start-4 col-span-2 row-start-7 flex justify-center"> <!-- *** fut-player-card ***-->
                    <div data-position="GK" class="fut-player-card cursor-pointer flex hover:scale-105">
              <i class="fa-solid fa-plus fa-xl" style="color: #cccccc;"></i>
               <h3 class="text-white text-center bg-black p-1 h-fit rounded font-semibold">GK</h3>
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

function removeValue(){
  const name = document.getElementById('Playername').value;
  const photo = document.getElementById('photo').value;
        position = document.getElementById('positions').value;
  const nationality = document.getElementById('nationality').value;
  const flag = document.getElementById('flag').value;
  const club = document.getElementById('club').value;
  const logo = document.getElementById('logo').value;
  const rating = document.getElementById('rating').value;
  const diving = document.getElementById('diving').value;
  const handling = document.getElementById('handling').value;
  const kicking = document.getElementById('kicking').value;
  const reflexes = document.getElementById('reflexes').value;
  const speed = document.getElementById('speed').value;
  const positioning = document.getElementById('positioning').value; 
  const pace = document.getElementById('pace').value;
  const shooting = document.getElementById('shooting').value;
  const passing = document.getElementById('passing').value;
  const dribbling = document.getElementById('dribbling').value;
  const defending = document.getElementById('defending').value;
  const physical = document.getElementById('physical').value;

name = "";
photo = "";
position = "";
nationality = "";
flag = "";
club = "";
logo = "";
rating = "";
diving = "";
handling = "";
kicking = "";
reflexes = "";
speed = "";
positioning = "";
pace = "";
shooting = "";
passing = "";
dribbling = "";
defending = "";
physical = "";

}

const buttons1 = document.querySelector(".buttons1");
const buttons2 = document.querySelector(".buttons2");

  // add New player

  const addNewPlayerBtn = document.getElementById("addPlayerBtn");
  const cancelBtn1 = document.getElementById("cancel1");
  const cancelBtn2 = document.getElementById("cancel2");
  const addNewplayerModal = document.querySelector(".addNewplayer-modal");

  addNewPlayerBtn.addEventListener('click', ()=> {
         addNewplayerModal.classList.add('flex');
         addNewplayerModal.classList.remove('hidden');
  })
  let newData = {};
  // get informations from the form modal
  let position ;
  document.getElementById('submit1').addEventListener('click', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve form values
    position = document.getElementById('positions').value;
    if(position === "GK"){
      
      document.getElementById("addPlayerForm-RatingGK").classList.remove("hidden");
    }
   else{
    document.getElementById("addPlayerForm-Rating").classList.remove("hidden");
   }

   buttons1.classList.add('hidden');
   buttons1.classList.remove('flex');
   buttons2.classList.remove('hidden');
   buttons2.classList.add('flex');
    });

// cancelBtn1

    cancelBtn1.addEventListener("click",(event)=> {
          event.preventDefault();
      const name = document.getElementById('Playername').value;
      const photo = document.getElementById('photo').value;
            position = document.getElementById('positions').value;
      const nationality = document.getElementById('nationality').value;
      const flag = document.getElementById('flag').value;
      const club = document.getElementById('club').value;
      const logo = document.getElementById('logo').value;

      // make the imputs empty

name.innerHTML = "";
photo.innerHTML = "";
position.innerHTML = "";
nationality.innerHTML = "";
flag.innerHTML = "";
club.innerHTML = "";
logo.innerHTML = "";

addNewplayerModal.classList.remove('flex');
addNewplayerModal.classList.add('hidden');
buttons1.classList.remove('hidden');
buttons1.classList.add('flex');

buttons2.classList.add('hidden');
buttons2.classList.remove('flex');
    })


function getDataForm1(){
  const name = document.getElementById('Playername').value;
  const photo = document.getElementById('photo').value;
  position = document.getElementById('positions').value;
  const nationality = document.getElementById('nationality').value;
  const flag = document.getElementById('flag').value;
  const club = document.getElementById('club').value;
  const logo = document.getElementById('logo').value;
}
function getDataForm2(){
  const rating = document.getElementById('rating').value;
  const pace = document.getElementById('pace').value;
  const shooting = document.getElementById('shooting').value;
  const passing = document.getElementById('passing').value;
  const dribbling = document.getElementById('dribbling').value;
  const defending = document.getElementById('defending').value;
  const physical = document.getElementById('physical').value;
}
function getDataFormGK(){
  const rating = document.getElementById('rating').value;
  const diving = document.getElementById('diving').value;
  const handling = document.getElementById('handling').value;
  const kicking = document.getElementById('kicking').value;
  const reflexes = document.getElementById('reflexes').value;
  const speed = document.getElementById('speed').value;
  const positioning = document.getElementById('positioning').value; 
}




 document.getElementById('submit3').addEventListener('click', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
        getDataFormGK();
        
        gkData = {
       
        rating,
        diving,
        handling,
        kicking,
        reflexes,
        speed,
        positioning,
          }

    
  // Add the new player data to the list
  listPlayers.push(newData);

  // Save the updated list back into localStorage
  localStorage.setItem('players', JSON.stringify(listPlayers));
  addNewplayerModal.classList.remove('flex');
  addNewplayerModal.classList.add('hidden');
  // Optionally, log to confirm the update
  console.log("Player added:", newData);
  console.log("Updated players list:", listPlayers);

  buttons1.classList.remove('hidden');
  buttons1.classList.add('flex');
  
  buttons2.classList.add('hidden');
  buttons2.classList.remove('flex');

  removeValue()

    });


// cancel btn
cancelBtn2.addEventListener('click', (e)=> {
  e.preventDefault()
  addNewplayerModal.classList.remove('flex');
  addNewplayerModal.classList.add('hidden');
  removeValue()

})


});