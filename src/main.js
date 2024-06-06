const header= document.getElementById('header');
const searchIcon= document.getElementById('searchIcon');
const newsSection= document.getElementById('newsSection');
const seacherSection= document.getElementById('seacherSection');
const seacherInput= document.getElementById('seacherInput');
const searchArticle= document.getElementById('search');
const searchedArticle= document.getElementById('searched');
const movieInfo= document.getElementById('movieInfo');

const movies= document.querySelectorAll('.movie');
console.log(movies)
movies.forEach(movie => {
    movie.addEventListener('click', InfoSection);
  });

var counter = 0;
function openSearch(){  
    newsSection.classList.toggle('none');
    seacherSection.classList.toggle('none');
    if(counter === 0){ // Abre el buscador
        searcherEvents();
        searchIcon.src = '../svg/x.svg';
        counter++;
    }
    else{ // Cierra el buscador
        searchIcon.src = '../svg/search.svg';
        counter--;
        if(searchArticle.classList.contains('none')){
            search();
            seacherInput.value = "";
        }
    }
}
function searcherEvents(){
    seacherInput.focus();
    seacherInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            search(); 
        }
    });
}
function search(){
    searchArticle.classList.toggle('none');
    searchedArticle.classList.toggle('none');
}
function InfoSection(){
    if(newsSection.classList.contains('none')){
        newsSection.classList.remove('none');
        header.classList.remove('none');
    }
    else {
        newsSection.classList.add('none');
        header.classList.add('none');
    }
    movieInfo.classList.toggle('none');
}