const endPoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6'

const containerCard = document.querySelector('.row');
const overPlan = document.getElementById('overlay');
const button = document.querySelector('.btn');

axios.get(endPoint)
.then(response => {
 console.log(response.data)
response.data.forEach(album => printCard (album))

document.querySelectorAll('.card-img-top').forEach((card) => {
    card.addEventListener("click", clickImg);
    //console.log(card)//
})
})

button.addEventListener("click", clickBut);
function clickBut() {
 overPlan.style.display = 'none';
}

function clickImg(event) {
overPlan.style.display = 'block';
const url = event.target.src;
const image = document.querySelector('#overlay img');
image.src = url

console.log(url)


}


//function on (){
//    overPlan.style.display = 'block';//
//}
//function off (){//
//   ;//
//}//



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