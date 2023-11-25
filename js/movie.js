const baseURL = "https://www.omdbapi.com/?i=tt3896198&apikey=";

const key = "b18be9de";

let url;

const title = document.querySelector(".title");
const year = document.querySelector("#year");
const submitButton = document.querySelector(".submit");
const results = document.querySelector("section");

submitButton.addEventListener("click", fetchResults);

function fetchResults(event)
{
    event.preventDefault();
    let titleString = title.value;
    let titleStringReplace = titleString.replace(" ", "%20");
    let yearValue = year.value;
    
    url = `${baseURL}${key}&t=${titleStringReplace}&y=${yearValue}`
    console.log(url);

 
    fetch(url).then(response => {
        return response.json();
    }).then(json => displayResults(json))
};


    function displayResults(json){
        

    while (results.firstChild) {
            results.removeChild(results.firstChild);
        };

        console.log(json);


        if (json.Response === "False")
        {
            const p = document.createElement("p");
            p.textContent = json.Error;
            results.appendChild(p);
        }

        else{
            const titleTag = document.createElement("h2");
            titleTag.textContent = json.Title;
            results.appendChild(titleTag)
            const plot = document.createElement("p")
            plot.textContent = `Plot: ${json.Plot}`;
            results.appendChild(plot)
            const genre = document.createElement("p");
            genre.textContent = `Genre: ${json.Genre}`;
            results.append(genre);
            const writer = document.createElement("p");
            writer.textContent = `Writers: ${json.Writer}`;
            results.appendChild(writer);
            const studentInfo = document.createElement("p")
            studentInfo.textContent = "Made by Nathan Marino 200527317";

            
            for (let i = 0; i < json.Ratings.length;i++)
            {
                const ratings = document.createElement("p");
                ratings.textContent = `${json.Ratings[i].Source}, Value: ${json.Ratings[i].Value}`;
                results.appendChild(ratings);
            }
            const img = document.createElement('img');
            img.src = json.Poster;
            results.appendChild(img);
            results.appendChild(studentInfo);

        }


     
        
    }




