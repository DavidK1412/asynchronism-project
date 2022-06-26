const API = 'https://api.jikan.moe/v4/';
const buttonForm = null || document.getElementById("search");
const textForm = null || document.getElementById("searchName");
const results = null || document.getElementById("results");
const randomSearch = null || document.getElementById("randomSearch");

const getData = async (urlApi) => {
    const response = await fetch(urlApi);
    const data = await response.json();

    return data;
}

const printInfo = (element) => {
        console.log(element);
        results.innerHTML += `<div class="card">
            <div class="container">
                <img src="${element.images.jpg.image_url}" alt="">
            </div>
            <div class="details">
                <h3>${element.title} - ${element.aired.prop.from.year}</h3>
                <p>Tipo: ${element.type}</p>
                <p>Genero: ${element.genres[0].name}</p>
            </div>
        </div>`

}

const clearDisplay = () => {
    results.innerHTML = "";
}

const getAnimeByName = async (name) => {
    clearDisplay();
    let data = await getData(`${API}anime?q=${name}`);
    data.data.map(element => {
        printInfo(element);
    });
}

const getRandomAnime = async () => {
    clearDisplay();
    for(let i = 0; i < 5; i++){
        let data = await getData(`${API}random/anime`);
        printInfo(data.data);
    }
}

buttonForm.addEventListener("click", () => {
    let animeName = textForm.value;
    if(animeName != ""){
        getAnimeByName(animeName);
    }else{
        alert("Campo vacio!");
    }
});

randomSearch.addEventListener("click", () => {
    getRandomAnime();
})