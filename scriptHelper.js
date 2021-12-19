// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let target=document.getElementById("missionTarget")
        target.innerHTML=`
           <h2>Mission Destination</h2>
           <ol>
               <li>Name:${name} </li>
               <li>Diameter:${diameter} </li>
               <li>Star: ${star}</li>
               <li>Distance from Earth: ${distance} </li>
               <li>Number of Moons: ${moons} </li>
           </ol>
           <img src="${imageUrl}">
           `;
}



//User Input Validation Function
function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    } else if (isNaN(testInput)===true) {
        return "Not a Number";
    } else if (isNaN(testInput)===false){
        return "Is a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let form = document.querySelector("form");
    //userTextInputs.push(pilotInput.value)
    //userTextInputs.push(copilotInput.value)
    //userNumInputs.push(fuelLevelInput.value)
    //userNumInputs.push(cargoMassInput.value)
    console.log(validateInput(pilot.value))
    //User Input Validation
    if (validateInput(pilot.value)==="Empty"||validateInput(copilot.value)==="Empty"||validateInput(fuelLevel.value)==="Empty"||validateInput(cargoLevel.value)==="Empty"){
            alert("All fields required!");
            list.style.visibility="hidden";
            launchStatus.innerHTML="Awaiting Information Before Launch"
            launchStatus.style.color="black"
            //break;
        }
    else if(validateInput(pilot.value)==="Is a Number"||validateInput(copilot.value)==="Is a Number"||validateInput(fuelLevel.value)==="Not a Number"||validateInput(cargoLevel.value)==="Not a Number"){
            alert("Make sure to enter valid information for each field.");
            list.style.visibility="hidden"
            //break;
        } else{
            pilotStatus.innerHTML=`Pilot ${pilot.value} is ready for launch`
            copilotStatus.innerHTML=`Copilot ${copilot.value} is ready for launch`
            if (fuelLevel.value<10000){
                list.style.visibility="visible";
                fuelStatus.innerHTML="Fuel level too low for launch";
                launchStatus.innerHTML="Shuttle not ready for launch";
                launchStatus.style.color="red";
            }
            if(cargoLevel.value>10000){
                list.style.visibility="visible";
                cargoStatus.innerHTML="Cargo Mass too heavy for launch";
                launchStatus.innerHTML="Shuttle not ready for launch";
                launchStatus.style.color="red";
            }
            if(cargoLevel.value<10000&&fuelLevel.value>10000){
                list.style.visibility="visible";
                launchStatus.innerHTML="Suttle is ready for launch";
                launchStatus.style.color="green"
            }


        }  



}


async function myFetch() {
    let planetsReturned;
    planetsReturned =await fetch("https://handlers.education.launchcode.org/static/planets.json")
    return planetsReturned.json();
}


//Picking Planet
function pickPlanet(planetArray){
    planetIndex=Math.floor(Math.random() * planetArray.length)
    return planetArray[planetIndex]
}




module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;