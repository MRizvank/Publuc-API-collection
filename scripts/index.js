let body=document.getElementById("container")
let apiData=JSON.parse(localStorage.getItem("api-data"))||[]
let favApi=JSON.parse(localStorage.getItem("fav-api"))||[]

let form=document.getElementById("form");


fetch("https://api.publicapis.org/entries")
.then((response)=>{
return response.json();
})
.then((res)=>{
apiData=res.entries;
localStorage.setItem("api-data",JSON.stringify(apiData));
showData(apiData)

})
.catch((error)=>{
console.log(error)
})
document.getElementById("form").addEventListener("submit",function (event){
event.preventDefault()
let search=form.search.value;
filterData(search)
});


document.getElementById("form").addEventListener("submit",function (event){
event.preventDefault()
let search=form.search.value;
filterData(search)
});
function showData(data){
body.innerHTML=null
data.forEach((element) => {
    let card=document.createElement("div")
    let name=document.createElement("h2")
    let description =document.createElement("p")
    let link=document.createElement("a");
    let category=document.createElement("h3");
    let favorites=document.createElement("button");
    favorites.addEventListener("click",()=>{
        favApi.push(element)
        localStorage.setItem("fav-api",JSON.stringify(favApi));
    })
    favorites.innerText="Add to Favorites"
    name.innerText=element.API;
    description.innerText=element.Description;
    link.setAttribute("href",element.Link)
    link.innerText="click here"
    category.innerText=element.Category;
    card.append(name,description,link,category,favorites)
    body.append(card);
});
}
function filterData(search){
body.innerHTML=null;
apiData=JSON.parse(localStorage.getItem("api-data"))
apiData = apiData.filter((user) => user.Category.includes(search)==true)
showData(apiData)

}