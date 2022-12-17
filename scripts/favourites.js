let body=document.getElementById("container")
let favApi = JSON.parse(localStorage.getItem("fav-api")) || []
function showData(data) {
    body.innerHTML = null
    data.forEach((element,index) => {
        let card = document.createElement("div")
        let name = document.createElement("h2")
        let description = document.createElement("p")
        let link = document.createElement("a");
        let category = document.createElement("h3");
        let remove = document.createElement("button");
        remove.addEventListener("click", () => {
            favApi.splice(index,1)
            localStorage.setItem("fav-api", JSON.stringify(favApi));
            showData(favApi)
        })
        remove.innerText = "Remove"
        name.innerText = element.API;
        description.innerText = element.Description;
        link.setAttribute("href", element.Link)
        link.innerText = "click here"
        category.innerText = element.Category;
        card.append(name, description, link, category, remove)
        body.append(card);
    });
}
showData(favApi);