// TODO: add code here
//window.addEventListener("load", function() {


//}};

//function init() {

//}

    window.onload = () => {
let url = "https://handlers.education.launchcode.org/static/astronauts.json";
fetch(url).then(function(response){
console.log(response);
const jsonPromise = response.json() 
jsonPromise.then(function(json){
    console.log(json)
    for (let i=0; i < json.length; i++) {
        ontainer.innerHTML += `
          <div class="astronaut" id=${astronaut.id}>
          <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
              <li>Hours in space: ${astronaut.hoursInSpace}</li>
              <li style="color:${activeColor};">Active: ${astronaut.active}</li>
              <li>Skills: ${astronaut.skills}</li>
            </ul>
          </div>
          <img class="avatar" src="${astronaut.picture}">
        </div>`;
        
        
        
    }

});
});
}