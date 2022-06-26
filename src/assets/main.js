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

const printInfo = (data) => {
    data.data.forEach(element => {
        console.log(element);
        results.innerHTML += `${element.title}`
    });

}

const getAnimeByName = async (name) => {
    let data = await getData(`${API}anime?q=${name}`);
    printInfo(data);
}

const getRandomAnime = async () => {
    let data = await getData(`${API}random/anime`);
    console.log(data);
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