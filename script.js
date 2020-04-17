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
    { "Id": 743, "Name": "MELISANDRE", "characterIMG": "img/character_melisandre.png", "IsFemale": true, "Culture": "Asshai", "Titles": [], "Aliases": ["The Red Priestess", "The Red Woman", "The King's Red Shadow", "Lady Red", "Lot Seven"], "Born": "At Unknown", "Died": "", "Father": null, "Mother": null, "Spouse": null, "Children": [], "Allegiances": [], "Books": [2, 3, 5], "PovBooks": [8], "PlayedBy": ["Carice van Houten"], "TvSeries": ["Season 2", "Season 3", "Season 4", "Season 5", "Season 6"] },
    { "Id": 823, "Name": "PETRY BAELISH", "characterIMG": "img/character_little_finger.png", "IsFemale": false, "Culture": "Valemen", "Titles": ["Master of coin (formerly)", "Lord Paramount of the Trident", "Lord of Harrenhal", "Lord Protector of the Vale"], "Aliases": ["Littlefinger"], "Born": "In 268 AC, at the Fingers", "Died": "", "Father": null, "Mother": null, "Spouse": 688, "Children": [], "Allegiances": [11, 10], "Books": [1, 2, 3, 5, 8], "PovBooks": [], "PlayedBy": ["Aidan Gillen"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6"] },
    { "Id": 565, "Name": "JOFFREY BARATHEON", "characterIMG": "img/character_joffrey_baratheon.png", "IsFemale": false, "Culture": "", "Titles": ["King of the Andals, the Rhoynar and the First Men", "Lord of the Seven Kingdoms", "Protector of the Realm"], "Aliases": ["Joffrey the Illborn", "The Young Usurper", "Aerys the Third", "Joffrey-called-Baratheon"], "Born": "286 AC, at King's Landing", "Died": "300 AC, at Red Keep, King's Landing", "Father": 901, "Mother": 238, "Spouse": 16, "Children": [], "Allegiances": [], "Books": [1, 2, 3, 5, 8], "PovBooks": [], "PlayedBy": ["Jack Gleeson"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4"] },
    { "Id": 957, "Name": "SANSA STARK", "characterIMG": "img/character_sansa_stark.png", "IsFemale": true, "Culture": "Northmen", "Titles": ["Princess"], "Aliases": ["Little bird", "Alayne Stone", "Jonquil"], "Born": "In 286 AC, at Winterfell", "Died": "", "Father": null, "Mother": null, "Spouse": 1052, "Children": [], "Allegiances": [362, 10], "Books": [8], "PovBooks": [1, 2, 3, 5], "PlayedBy": ["Sophie Turner"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6"] },
    { "Id": 583, "Name": "JON SNOW", "characterIMG": "img/character_jon_snow.png", "IsFemale": false, "Culture": "Northmen", "Titles": ["Lord Commander of the Night's Watch"], "Aliases": ["Lord Snow", "Ned Stark's Bastard", "The Snow of Winterfell", "The Crow-Come-Over", "The 998th Lord Commander of the Night's Watch", "The Bastard of Winterfell", "The Black Bastard of the Wall", "Lord Crow"], "Born": "In 283 AC", "Died": "", "Father": null, "Mother": null, "Spouse": null, "Children": [], "Allegiances": [362], "Books": [5], "PovBooks": [1, 2, 3, 8], "PlayedBy": ["Kit Harington"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6"] },
    { "Id": 529, "Name": "JAIME LANNISTER", "characterIMG": "img/character_jaime_lannister.png", "IsFemale": false, "Culture": "Westerlands", "Titles": ["Ser", "Lord Commander of the Kingsguard", "Warden of the East (formerly)"], "Aliases": ["The Kingslayer", "The Lion of Lannister", "The Young Lion", "Cripple"], "Born": "In 266 AC, at Casterly Rock", "Died": "", "Father": null, "Mother": null, "Spouse": null, "Children": [], "Allegiances": [229], "Books": [1, 2], "PovBooks": [3, 5, 8], "PlayedBy": ["Nikolaj Coster-Waldau"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5"] },
    { "Id": 238, "Name": "CERSEI LANNISTER", "characterIMG": "img/character_sercei_lannister.png", "IsFemale": true, "Culture": "Westerman", "Titles": ["Light of the West", "Queen Dowager", "Protector of the Realm", "Lady of Casterly Rock", "Queen Regent"], "Aliases": ["Brotherfuckerthe bitch queen"], "Born": "In 266 AC, at Casterly Rock", "Died": "", "Father": null, "Mother": null, "Spouse": 901, "Children": [], "Allegiances": [229], "Books": [1, 2, 3], "PovBooks": [5, 8], "PlayedBy": ["Lena Headey"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6"] },
    { "Id": 1052, "Name": "TYRION LANNISTER", "characterIMG": "img/character_tyrion_lannister.png", "IsFemale": false, "Culture": "", "Titles": ["Acting Hand of the King (former)", "Master of Coin (former)"], "Aliases": ["The Imp", "Halfman", "The boyman", "Giant of Lannister", "Lord Tywin's Doom", "Lord Tywin's Bane", "Yollo", "Hugor Hill", "No-Nose", "Freak", "Dwarf"], "Born": "In 273 AC, at Casterly Rock", "Died": "", "Father": null, "Mother": null, "Spouse": 2044, "Children": [], "Allegiances": [229], "Books": [5, 11], "PovBooks": [1, 2, 3, 8], "PlayedBy": ["Peter Dinklage"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6"] },
    { "Id": 2069, "Name": "VARYS", "characterIMG": "img/character_varys.png", "IsFemale": false, "Culture": "", "Titles": ["Master of Whisperers"], "Aliases": ["The Spider", "The Eunuch", "Rugen", "Varys of Lys"], "Born": "At Lys", "Died": "", "Father": null, "Mother": null, "Spouse": null, "Children": [], "Allegiances": [], "Books": [1, 2, 3, 5, 8], "PovBooks": [], "PlayedBy": ["Conleth Hill"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6"] },
    { "Id": 208, "Name": "BRANDON STARK", "characterIMG": "img/character_brandon_stark.png", "IsFemale": false, "Culture": "Northmen", "Titles": ["Prince of Winterfell"], "Aliases": ["Bran", "Bran the Broken", "The Winged Wolf"], "Born": "In 290 AC, at Winterfell", "Died": "", "Father": null, "Mother": null, "Spouse": null, "Children": [], "Allegiances": [362], "Books": [5], "PovBooks": [1, 2, 3, 8], "PlayedBy": ["Isaac Hempstead-Wright"], "TvSeries": ["Season 1", "Season 2", "Season 3", "Season 4", "Season 6"] },

]

for (var i = 0; i < characters.length; i++) {
    addCard(characters[i])
}

function addCard(cardData) {
    document.getElementById('card-container').innerHTML += `<div class="character-card" onclick="selectedCard()">
    <h2 class="character-name">${cardData.Name}</h2>
    <img class="character-picture" src="${cardData.characterIMG}" alt="">
    <p>${cardData.Culture}</p>
    </div>`
    console.log(cardData)
}

function selectedCard(e) {
    console.log(e)
    document.getElementById("card-container").innerHTML = "This card is now selected";
}

