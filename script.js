function fix() {
    let coconut = document.getElementById("coconut");
    coconut.remove()
    let coast = document.getElementById("coast");
    coast.remove()
    let watermelon = document.getElementById("watermelon");
    watermelon.remove()
    let sunflowers = document.getElementById("sunflowers");
    sunflowers.remove()


    let tree = document.createElement("img");
    tree.setAttribute ("id", "tree") 
    tree.setAttribute("src", "to-add/christmasTree.jpg")
    let snowmen = document.createElement("img");
    snowmen.setAttribute ("id", "snowmen") 
    snowmen.setAttribute("src", "to-add/snowmen.jpg")
    let stockings = document.createElement("img");
    stockings.setAttribute ("id", "stockings") 
    stockings.setAttribute("src", "to-add/stockings.jpg")


    let photos = document.getElementById("photos");
    photos.appendChild(tree);
    photos.appendChild(snowmen);
    photos.appendChild(stockings);
}
