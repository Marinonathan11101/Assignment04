const baseURL =  "https://api.mobygames.com/v1/games?";

const key = "moby_RXmAO3ONKpVKEY6ZlcgwnhxT165";

let url;
let platformValue = "6";

const title = document.querySelector(".title");
const platform = document.querySelector("#platform");
const submitButton = document.querySelector(".submit");
const results = document.querySelector(".results");

submitButton.addEventListener("click", fetchResults);

function fetchResults(event)
{
    event.preventDefault();
    let titleString = title.value;
    let titleStringReplace = titleString.replace(" ", "%20");
    

    if (platform.value === "playstation")
    {
         platformValue = "6";
    }

    if (platform.value === "macintosh")
    {
         platformValue = "74";
    }

    if (platform.value === "windows")
    {
        platformValue = "3";
    }

    url = `${baseURL}api_key=${key}&title=${titleStringReplace}&platform=${platformValue}`
    console.log(url);

    
    fetch(url).then(response => {
        return response.json();
    }).then(json => displayResults(json))

};


    function displayResults(json){
        console.log(json)
        
    }




