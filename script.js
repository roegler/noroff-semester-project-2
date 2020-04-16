/*fetch("./characters.json")
.then (response=> {
    return response.json()
})
.then (data => {
    for (var i = 0; i < data.lenght; i++) {
        addCard (data[i])
    }
})*/

var characters = [
    { "Id": 148, "Name": "Arya Stark", "IsFemale": true, "Culture": "Northmen", "Titles": ["Princess"], "Aliases": ["Arya Horseface", "Arya Underfoot", "Arry", "Lumpyface", "Lumpyhead", "Stickboy", "Weasel", "Nymeria", "Squan", "Saltb", "Cat of the Canaly", "Bets", "The Blind Girh", "The Ugly Little Girl", "Mercedenl", "Mercye"], "Born": "In 289 AC, at Winterfell", "Died": "", "Father": null, "Mother": null, "Spouse": null, "Children": [], "Allegiances": [362], "Books": [], "PovBooks": [1, 2, 3, 5, 8], "PlayedBy": ["Maisie Williams"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6"] },
    { "Id": 271, "Name": "Daenerys Targaryen", "IsFemale": true, "Culture": "", "Titles": ["Princess"], "Aliases": [], "Born": "In 172 AC", "Died": "", "Father": null, "Mother": null, "Spouse": 719, "Children": [], "Allegiances": [378, 285], "Books": [11, 6, 8], "PovBooks": [], "PlayedBy": [""], "TvSeries": [] },
    { "Id": 867, "Name": "Rhaegar Targaryen", "IsFemale": false, "Culture": "Valyrian", "Titles": ["Prince of Dragonstone", "Ser"], "Aliases": ["Silver Prince", "The Dragon Prince", "The Last Dragon"], "Born": "In 259 AC, at Summerhall", "Died": "In 283 AC, at the Trident", "Father": null, "Mother": null, "Spouse": 361, "Children": [], "Allegiances": [378], "Books": [1, 2, 3, 5, 8], "PovBooks": [], "PlayedBy": [""], "TvSeries": [] },
    { "Id": 957, "Name": "Sansa Stark", "IsFemale": true, "Culture": "Northmen", "Titles": ["Princess"], "Aliases": ["Little bird", "Alayne Stone", "Jonquil"], "Born": "In 286 AC, at Winterfell", "Died": "", "Father": null, "Mother": null, "Spouse": 1052, "Children": [], "Allegiances": [362, 10], "Books": [8], "PovBooks": [1, 2, 3, 5], "PlayedBy": ["Sophie Turner"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6"] },
    { "Id": 583, "Name": "Jon Snow", "IsFemale": false, "Culture": "Northmen", "Titles": ["Lord Commander of the Night's Watch"], "Aliases": ["Lord Snow", "Ned Stark's Bastard", "The Snow of Winterfell", "The Crow-Come-Over", "The 998th Lord Commander of the Night's Watch", "The Bastard of Winterfell", "The Black Bastard of the Wall", "Lord Crow"], "Born": "In 283 AC", "Died": "", "Father": null, "Mother": null, "Spouse": null, "Children": [], "Allegiances": [362], "Books": [5], "PovBooks": [1, 2, 3, 8], "PlayedBy": ["Kit Harington"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6"] },
    { "Id": 529, "Name": "Jaime Lannister", "IsFemale": false, "Culture": "Westerlands", "Titles": ["Ser", "Lord Commander of the Kingsguard", "Warden of the East (formerly)"], "Aliases": ["The Kingslayer", "The Lion of Lannister", "The Young Lion", "Cripple"], "Born": "In 266 AC, at Casterly Rock", "Died": "", "Father": null, "Mother": null, "Spouse": null, "Children": [], "Allegiances": [229], "Books": [1, 2], "PovBooks": [3, 5, 8], "PlayedBy": ["Nikolaj Coster-Waldau"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5"] },
    { "Id": 238, "Name": "Cersei Lannister", "IsFemale": true, "Culture": "Westerman", "Titles": ["Light of the West", "Queen Dowager", "Protector of the Realm", "Lady of Casterly Rock", "Queen Regent"], "Aliases": ["Brotherfuckerthe bitch queen"], "Born": "In 266 AC, at Casterly Rock", "Died": "", "Father": null, "Mother": null, "Spouse": 901, "Children": [], "Allegiances": [229], "Books": [1, 2, 3], "PovBooks": [5, 8], "PlayedBy": ["Lena Headey"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6"] },
    { "Id": 1022, "Name": "Theon Greyjoy", "IsFemale": false, "Culture": "Ironborn", "Titles": ["Prince of Winterfell", "Captain of Sea Bitch", "Lord of the Iron Islands (by law of the green lands)"], "Aliases": ["Prince of Fools", "Theon Turncloak", "Reek", "Theon Kinslayer"], "Born": "In 278 AC or 279 AC, at Pyke", "Died": "", "Father": null, "Mother": null, "Spouse": null, "Children": [], "Allegiances": [169], "Books": [1, 3, 5], "PovBooks": [2, 8], "PlayedBy": ["Alfie Allen"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6"] },
    { "Id": 27, "Name": "Tywin Lannister", "IsFemale": false, "Culture": "", "Titles": ["Lord of Casterly Rock", "Shield of Lannisport", "Warden of the West", "Hand of the King", "Savior of the City (of King's Landing)"], "Aliases": ["The Lion of Lannister", "The Old Lion", "The Great Lion of the Rock"], "Born": "In 242 AC", "Died": "In 300 AC, at King's Landing", "Father": null, "Mother": null, "Spouse": 562, "Children": [], "Allegiances": [229], "Books": [1, 2, 3, 5, 8, 11], "PovBooks": [], "PlayedBy": ["Charles Dance"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4"] },
    { "Id": 955, "Name": "Sandor Clegane", "IsFemale": false, "Culture": "", "Titles": [], "Aliases": ["The Hound", "Dog"], "Born": "In 270 AC or 271 AC", "Died": "In 300 AC (supposedly)", "Father": null, "Mother": null, "Spouse": null, "Children": [], "Allegiances": [72, 229], "Books": [1, 2, 3, 5, 8], "PovBooks": [], "PlayedBy": ["Rory McCann"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 6"] }

]

for (var i = 0; i < characters.length; i++) {
    addCard(characters[i])
}

function addCard(cardData) {
    document.getElementById('card-container').innerHTML += `<div class="character-card">
    <h2 class="character-name">${cardData.Name}</h2>
    <img class="character-picture" src="img/arya_stark.jpg" alt="">
    <p class="character-information">
        ${cardData.Culture}<br>
        ${cardData.Titles}<br>
        ${cardData.Aliases}<br>
    </p>
</div>`
    console.log(cardData)
}

