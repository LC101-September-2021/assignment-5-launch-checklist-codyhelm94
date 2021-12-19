// Write your JavaScript code here!


/* window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});*/





//Picking Planet
let pickPlanet=function(planetArray){
    return Math.floor(Math.random() * planetArray.length)
}

//Fetching panets

async function myFetch() {
    let planetsReturned;
    planetsReturned =fetch("https://handlers.education.launchcode.org/static/planets.json")
    return planetsReturned;
}


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
   

 }

//User Input Validation Function
let validateInput=function(testInput) {
    if (testInput === ""){
        return "Empty";
    } else if (isNaN(testInput)===true) {
        return "Not a Number";
    } else if (isNaN(testInput)===false){
        return "Is a Number";
    }
}


window.addEventListener("load", function(){
    //HTML Objects
    //list
    let list=document.getElementById("faultyItems")
    let fuelStatus=document.getElementById("fuelStatus")
    let launchForm=document.getElementById("launchForm")
    //h2
    let launchStatus=document.getElementById("launchStatus")
    let cargoStatus=document.getElementById("cargoStatus")
    let pilotStatus=document.getElementById("pilotStatus")
    let copilotStatus=document.getElementById("copilotStatus")
    let doument=document
    //let userTextInputs = [];
    //let userNumInputs = [];
    list.style.visibility="hidden"
    //missionTarget
    let target=document.getElementById("missionTarget")
    
    //Geting Planetary Data.
    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse=myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(typeof listedPlanets);
       listedPlanets.json().then(function(json){
           console.log(json[pickPlanet(json)])
           let desination = json[pickPlanet(json)]
           target.innerHTML=`
           <h2>Mission Destination</h2>
           <ol>
               <li>Name:${desination.name} </li>
               <li>Diameter:${desination.diameter} </li>
               <li>Star: ${desination.star}</li>
               <li>Distance from Earth: ${desination.distance} </li>
               <li>Number of Moons: ${desination.moons} </li>
           </ol>
           <img src="${desination.image}">
           `;
           
       })
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       
   })


    //Form Submission

    let form= document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let pilotInput=document.querySelector("input[name=pilotName]");
        let copilotInput=document.querySelector("input[name=copilotName]");
        let fuelLevelInput=document.querySelector("input[name=fuelLevel]");
        let cargoMassInput=document.querySelector("input[name=cargoMass]");
        //userTextInputs.push(pilotInput.value)
        //userTextInputs.push(copilotInput.value)
        //userNumInputs.push(fuelLevelInput.value)
        //userNumInputs.push(cargoMassInput.value)
        console.log(validateInput(pilotInput.value))

        
        //User Input Validation
        
        if (validateInput(pilotInput.value)==="Empty"||validateInput(copilotInput.value)==="Empty"||validateInput(fuelLevelInput.value)==="Empty"||validateInput(cargoMassInput.value)==="Empty"){
                alert("All fields required!");
                //break;
            }
        if(validateInput(pilotInput.value)==="Is a Number"||validateInput(copilotInput.value)==="Is a Number"||validateInput(fuelLevelInput.value)==="Not a Number"||validateInput(cargoMassInput.value)==="Not a Number"){
                alert("Make sure to enter valid information for each field.");
                //break;
            }
        
        
        //Updating HTML Objects
        pilotStatus.innerHTML=`Pilot ${pilotInput.value} is ready for launch`
        copilotStatus.innerHTML=`Copilot ${copilotInput.value} is ready for launch`

        if (fuelLevelInput.value<10000){
            list.style.visibility="visible";
            fuelStatus.innerHTML="Fuel level too low for launch";
            launchStatus.innerHTML="Shuttle not ready for launch";
            launchStatus.style.color="red";
        } 

        if(cargoMassInput.value>10000){
            list.style.visibility="visible";
            cargoStatus.innerHTML="Cargo Mass too heavy for launch";
            launchStatus.innerHTML="Shuttle not ready for launch";
            launchStatus.style.color="red";
        }

        if(cargoMassInput.value<10000&&fuelLevelInput.value>10000){
            list.style.visibility="visible";
            launchStatus.innerHTML="Suttle is ready for launch";
            launchStatus.style.color="green"
        }

    })
})

