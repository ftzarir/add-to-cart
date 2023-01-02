var itemId = 0;
function addToCart(item) {
    itemId += 1
    var selectedItem = document.createElement("div")
    selectedItem.setAttribute("id", itemId)
    var title = document.createElement("div")
    title.innerText = item.children[0].children[0].innerText
    var price = document.createElement("div")
    price.innerText = item.children[0].children[2].innerText
    var line = document.createElement("hr")
    var delbtn = document.createElement("button")
    delbtn.innerText = "Remove From Cart"
    delbtn.setAttribute("onclick", 'del(' + itemId + ')')
    var cartItem = document.querySelector(".info");
    selectedItem.append(title)
    selectedItem.append(price)
    selectedItem.append(delbtn)
    selectedItem.append(line)
    cartItem.append(selectedItem)

}
function del(item) {
    document.getElementById(item).remove()
}