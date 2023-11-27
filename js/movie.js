// url for the movie api webiste
const baseURL = "https://www.omdbapi.com/?i=tt3896198&apikey=";

//api key
const key = "b18be9de";

let url;

// selecters
const title = document.querySelector(".title");
const year = document.querySelector("#year");
const submitButton = document.querySelector(".submit");
const results = document.querySelector("section");

submitButton.addEventListener("click", fetchResults);


// fetch results function that returns the response from the url in json format.

function fetchResults(event)
{
    event.preventDefault();
    let titleString = title.value;
    let titleStringReplace = titleString.replace(" ", "%20");
    let yearValue = year.value;
    
    // manipulating the url to contain information we need in order to work with the api
    url = `${baseURL}${key}&t=${titleStringReplace}&y=${yearValue}`
    console.log(url);

 
    fetch(url).then(response => {
        return response.json();
    }).then(json => displayResults(json))
};

    // function responsible for displaying info from the api.

    function displayResults(json){
        

    while (results.firstChild) {
            results.removeChild(results.firstChild);
        };

        console.log(json);

        // if there are no responses from the api, create a p tag and inform the user
        if (json.Response === "False")
        {
            const p = document.createElement("p");
            p.textContent = json.Error;
            results.appendChild(p);
        }
            // Create elements for the api response
        else{
            const titleTag = document.createElement("h2");
            titleTag.textContent = json.Title;
            const plot = document.createElement("p")
            plot.textContent = `Plot: ${json.Plot}`;
            const genre = document.createElement("p");
            genre.textContent = `Genre: ${json.Genre}`;
            const writer = document.createElement("p");
            writer.textContent = `Writers: ${json.Writer}`;
            const studentInfo = document.createElement("p")
            studentInfo.textContent = "Made by Nathan Marino 200527317";

          
            const img = document.createElement('img');
            img.src = json.Poster;
            results.appendChild(titleTag)
            results.appendChild(plot)
            results.append(genre);
            results.appendChild(writer);

              
            for (let i = 0; i < json.Ratings.length;i++)
            {
                const ratings = document.createElement("p");
                ratings.textContent = `${json.Ratings[i].Source}, Value: ${json.Ratings[i].Value}`;
                results.appendChild(ratings);
            }
            results.appendChild(img);
            results.appendChild(studentInfo);

        }


     
        
    }




