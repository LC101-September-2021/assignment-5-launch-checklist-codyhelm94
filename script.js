// Write your JavaScript code here!


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
    
    
    //Geting Planetary Data.
    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse=myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       //console.log(listedPlanets);
   }).then(function () {
      console.log(listedPlanets)
      let selectedPlanet=pickPlanet(listedPlanets);
      console.log(selectedPlanet)
      addDestinationInfo(document,selectedPlanet.name,selectedPlanet.diameter,selectedPlanet.star,selectedPlanet.distance,selectedPlanet.moons,selectedPlanet.image)           
           
       })
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let form= document.querySelector("form");
       let pilotInput=document.querySelector("input[name=pilotName]");
       let copilotInput=document.querySelector("input[name=copilotName]");
       let fuelLevelInput=document.querySelector("input[name=fuelLevel]");
       let cargoMassInput=document.querySelector("input[name=cargoMass]");
       form.addEventListener("submit", function(event){
           event.preventDefault();
           formSubmission(document, list, pilotInput,copilotInput,fuelLevelInput,cargoMassInput);

   
   })
})


  




