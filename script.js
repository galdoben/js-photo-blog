const endPoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6'

const containerCard = document.querySelector('.row');


axios.get(endPoint)
.then(response => {
 console.log(response.data)
response.data.forEach(album => printCard (album))
})





function printCard (album) {
    const {title, url} = album
    containerCard.innerHTML += `<div class="col">
                    <div class="card p-3 rounded-0 mt-5">
                    <img src="img/pin.svg" class="card-pin" alt="pin-top">
                    <img src='${url}' class="card-img-top rounded-0" alt="img-top">
                    <div class="card-body">
                    <p class="card-text">${title}</p>
                    </div>
                </div>
                </div>`
    console.log(album)
}

//const titleMaiusc = title.map( (titolo) =>{
   // const iniziale = titolo.charAt(0).toUpperCase();
   // return `$(iniziale)${titolo.substring(1).toLowerCse()}`
//})
//console.log(titleMaiusc)