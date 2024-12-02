document.addEventListener('DOMContentLoaded', function() {
  // localStorage.clear();
  if(!localStorage.getItem('players')){
    
    fetch("FUT-Champ/players.json")
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

// forms
const globalForm = document.getElementById("addPlayerForm");
const formRatingGK = document.getElementById("addPlayerForm-RatingGK");
const formRating = document.getElementById("addPlayerForm-Rating");


// buttens
// const submitBtn1 = document.getElementById('submit1');
// const submitBtn2 = document.getElementById('submit2');
// const submitBtn3 = document.getElementById('submit3');
const cancelBtn1 = document.getElementById("cancel1");
const cancelBtn2 = document.getElementById("cancel2");
const cancelBtn3 = document.getElementById("cancel3");


// functions to get values from the forms

function getDataForm1(){
  const name = document.getElementById('Playername').value.trim();
  const photo = document.getElementById('photo').value;
  const position = document.getElementById('positions').value;
  const nationality = document.getElementById('nationality').value;
  const flag = document.getElementById('flag').value;
  const club = document.getElementById('club').value.trim();
  const logo = document.getElementById('logo').value;

  let globalData = {
    id:Date.now(),
    name,
    photo,
    position,
    nationality,
    flag,
    club,
    logo
}
return globalData;
}


function getDataForm2(){
  const rating = document.getElementById('rating').value;
  const pace = document.getElementById('pace').value;
  const shooting = document.getElementById('shooting').value;
  const passing = document.getElementById('passing').value;
  const dribbling = document.getElementById('dribbling').value;
  const defending = document.getElementById('defending').value;
  const physical = document.getElementById('physical').value;

  let OtherRatingData = {
      rating,
      pace,
      shooting,
      passing,
      dribbling,
      defending,
      physical
  };

  return OtherRatingData;
}


function getDataFormGK(){
  const rating = document.getElementById('rating2').value;
  const diving = document.getElementById('diving').value;
  const handling = document.getElementById('handling').value;
  const kicking = document.getElementById('kicking').value;
  const reflexes = document.getElementById('reflexes').value;
  const speed = document.getElementById('speed').value;
  const positioning = document.getElementById('positioning').value; 

  let gkRatingData = {
         rating,
         diving,
         handling,
         kicking,
         reflexes,
         speed,
         positioning
  };  

  return gkRatingData;
}

// select inputs
function getinputsForm1(){
  const name = document.getElementById('Playername');
  const photo = document.getElementById('photo');
  const position = document.getElementById('positions');
  const nationality = document.getElementById('nationality');
  const flag = document.getElementById('flag');
  const club = document.getElementById('club');
  const logo = document.getElementById('logo');

  let globalinputs = {
    name,
    photo,
    position,
    nationality,
    flag,
    club,
    logo
}
return globalinputs;
}


function getinputsForm2(){
  const rating = document.getElementById('rating');
  const pace = document.getElementById('pace');
  const shooting = document.getElementById('shooting');
  const passing = document.getElementById('passing');
  const dribbling = document.getElementById('dribbling');
  const defending = document.getElementById('defending');
  const physical = document.getElementById('physical');

  let OtherRatinginputs = {
      rating,
      pace,
      shooting,
      passing,
      dribbling,
      defending,
      physical
  };

  return OtherRatinginputs;
}


function getinputsFormGK(){
  const rating = document.getElementById('rating2');
  const diving = document.getElementById('diving');
  const handling = document.getElementById('handling');
  const kicking = document.getElementById('kicking');
  const reflexes = document.getElementById('reflexes');
  const speed = document.getElementById('speed');
  const positioning = document.getElementById('positioning'); 

  let gkRatinginputs = {
         rating,
         diving,
         handling,
         kicking,
         reflexes,
         speed,
         positioning
  };  

  return gkRatinginputs;
}
 
// VALIDATION FUNCTIONS

// set error
function setError(element,message){
  const inputControl = element.parentElement;
  const erroeDesplay = inputControl.querySelector(".error");

  erroeDesplay.innerHTML = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

// set success
function setSuccess(element){

  const inputControl = element.parentElement;
  const erroeDesplay = inputControl.querySelector(".error");

  erroeDesplay.innerHTML = "";
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
  
}




// validate global form 
function isvalidateForm1(counter){

  const globalData = getDataForm1();
  const globalinputs = getinputsForm1();
  // name
  if(globalData.name === ''){
    setError(globalinputs.name,'player name is required');
  }
  else if(!/^[A-Za-z]+([\'-]?[A-Za-z]+)*(\s[A-Za-z]+([\'-]?[A-Za-z]+)*)*$/.test(globalData.name)){
    setError(globalinputs.name,'Player name should only contain letters, hyphens, apostrophes, and spaces (e.g., John O\'Connor or Mary-Jane).');
  }
  else{
    setSuccess(globalinputs.name);
    counter++;
  }

  // position

  if(globalData.position === 'Choose a position'){
    setError(globalinputs.position,'player position is required');
  }
  else{
    setSuccess(globalinputs.position);
    counter++;
  }
  // club
  if(globalData.club === ''){
    setError(globalinputs.club,'club name is required');
  }
  else if(!/^[A-Za-z]+([\'-]?[A-Za-z]+)*(\s[A-Za-z]+([\'-]?[A-Za-z]+)*)*$/.test(globalData.name)){
    setError(globalinputs.name,'club name should only contain letters, hyphens, apostrophes, and spaces.');
  }
  else{
    setSuccess(globalinputs.club);
    counter++;
  }
  // flag
  if(globalData.flag === ''){
    setError(globalinputs.flag,'flag url is required');
  }
  else{
    setSuccess(globalinputs.flag);
    counter++;
  }

  // logo

  if(globalData.logo === ''){
    setError(globalinputs.logo,'club logo url is required');
  }
  else{
    setSuccess(globalinputs.logo);
    counter++;
  }

  // nationality

  if(globalData.nationality === ''){
    setError(globalinputs.nationality,'player nationality is required');
  }
  else if(!/^[A-Za-z]+([\'-]?[A-Za-z]+)*(\s[A-Za-z]+([\'-]?[A-Za-z]+)*)*$/.test(globalData.name)){
    setError(globalinputs.name,'nationality should only contain letters, hyphens, apostrophes, and spaces.');
  }
  else{
    setSuccess(globalinputs.nationality);
    counter++;
  }

  // photo

  if(globalData.photo === ''){
    setError(globalinputs.photo,'player photo is required');
  }
  else{
    setSuccess(globalinputs.photo);
    counter++;
  }

  return counter;
}
// validate  form2 
function isvalidateForm2(counter){

  const data2 = getDataForm2();
  const inputs2 = getinputsForm2();

  // rating
  if(data2.rating == 0){
    setError(inputs2.rating,'rating is required');
  }
  else if(data2.rating < 1 || data2.rating > 100){
    setError(inputs2.rating,'rating should be between 1 and 100.');
  }
  else{
    setSuccess(inputs2.rating);
    counter++;
  }

  // physical

  if(data2.physical == 0){
    setError(inputs2.physical,'physical is required');
  }
  else if(data2.physical < 1 || data2.physical > 100){
    setError(inputs2.physical,'physical should be between 1 and 100.');
  }
  else{
    setSuccess(inputs2.physical);
    counter++;
  }

    // defending

  if(data2.defending == 0){
    setError(inputs2.defending,'defending is required');
  }
  else if(data2.defending < 1 || data2.defending > 100){
    setError(inputs2.defending,'defending should be between 1 and 100.');
  }
  else{
    setSuccess(inputs2.defending);
    counter++;
  }

  // dribbling

  if(data2.dribbling == 0){
    setError(inputs2.dribbling,'dribbling is required');
  }
  else if(data2.dribbling < 1 || data2.dribbling > 100){
    setError(inputs2.dribbling,'dribbling should be between 1 and 100.');
  }
  else{
    setSuccess(inputs2.dribbling);
    counter++;
  }

 // passing

 if(data2.passing == 0){
  setError(inputs2.passing,'passing is required');
}
else if(data2.passing < 1 || data2.passing > 100){
  setError(inputs2.passing,'passing should be between 1 and 100.');
}
else{
  setSuccess(inputs2.passing);
  counter++;
}

// shooting

if(data2.shooting == 0){
  setError(inputs2.shooting,'shooting is required');
}
else if(data2.shooting < 1 || data2.shooting > 100){
  setError(inputs2.shooting,'shooting should be between 1 and 100.');
}
else{
  setSuccess(inputs2.shooting);
  counter++;
}
// pace

if(data2.pace == 0){
  setError(inputs2.pace,'pace is required');
}
else if(data2.shopaceoting < 1 || data2.shooting > 100){
  setError(inputs2.pace,'pace should be between 1 and 100.');
}
else{
  setSuccess(inputs2.pace);
  counter++;
}
return counter;
}

  const addNewPlayerBtn = document.getElementById("addPlayerBtn");
  const addNewplayerModal = document.querySelector(".addNewplayer-modal");
  
// add New player
  addNewPlayerBtn.addEventListener('click', ()=> {
         addNewplayerModal.classList.toggle('flex');
         addNewplayerModal.classList.toggle('hidden');
  })

  
  let globalData;
  // get informations from the form modal

 globalForm.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  let counter =0;
  globalData = getDataForm1();
  counter = isvalidateForm1(counter);
  if(counter < 7){
    return;
  }
  else{
    if(globalData.position === "GK"){
      formRatingGK.classList.toggle("hidden");
     
    }
   else{
    formRating.classList.toggle("hidden");
    
   }
   globalForm.classList.toggle("hidden");
   const inputControl= document.querySelectorAll('.inputControl');
   inputControl.forEach(control => {
  
    control.classList.remove('error');
    control.classList.remove('success');
    
   })
   globalForm.reset();
  }
 
    });
    

// cancelBtns

    cancelBtn1.addEventListener("click",(event)=> {
          event.preventDefault();
          globalForm.reset();

          const inputControl= document.querySelectorAll('.inputControl');
          inputControl.forEach(control => {
            const error = control.querySelector(".error");
            error.innerHTML  = "";
           control.classList.remove('error');
           control.classList.remove('success');
          })
         
          addNewplayerModal.classList.toggle('flex');
          addNewplayerModal.classList.toggle('hidden');

    })
    cancelBtn2.addEventListener("click",(event)=> {
          event.preventDefault();
          formRating.reset();
          globalForm.classList.toggle("hidden");
          formRating.classList.toggle("hidden");
addNewplayerModal.classList.toggle('flex');
addNewplayerModal.classList.toggle('hidden');

    })
    cancelBtn3.addEventListener("click",(event)=> {
          event.preventDefault();
          formRating.reset();

          globalForm.classList.toggle("hidden");
          formRatingGK.classList.toggle("hidden");

addNewplayerModal.classList.toggle('flex');
addNewplayerModal.classList.toggle('hidden');

    })


    formRating.addEventListener('submit', (e)=> {
      e.preventDefault()
    
      let counter =0;
      globalData = getDataForm1();
      counter = isvalidateForm2(counter);
      if(counter < 7){
        return
      }
      else{
        const  OtherRatingData =  getDataForm2();
          
        Object.assign(globalData, OtherRatingData);
      
    
      // Add the new player data to the list
      listPlayers.push(globalData);
    
      // Save the updated list back into localStorage
      localStorage.setItem('players', JSON.stringify(listPlayers));
      addNewplayerModal.classList.toggle('flex');
      addNewplayerModal.classList.toggle('hidden');
      globalForm.classList.toggle("hidden");
      formRating.classList.toggle("hidden");
      // Optionally, log to confirm the update
      console.log("Player added:", globalData);
      console.log("Updated players list:", listPlayers);

      formRating.reset();
    
      }
       
    })

formRatingGK.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
   const gkRatingData =  getDataFormGK();
        
        Object.assign(globalData, gkRatingData);
    
  // Add the new player data to the list
  listPlayers.push(globalData);

  // Save the updated list back into localStorage
  localStorage.setItem('players', JSON.stringify(listPlayers));
  addNewplayerModal.classList.toggle('flex');
  addNewplayerModal.classList.toggle('hidden');
  globalForm.classList.toggle("hidden");
  formRatingGK.classList.toggle("hidden");
  // Optionally, log to confirm the update
  console.log("Player added:", globalData);
  console.log("Updated players list:", listPlayers);

  formRatingGK.reset();

    });


});