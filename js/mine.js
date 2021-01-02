var nameINp = document.getElementById("productName");
var categoryINp = document.getElementById("productCategory");
var priceINp = document.getElementById("productPrice");
var descINp = document.getElementById("productDescripition");
if (localStorage.getItem("productData") == null) {
    var productList = [];
}
else {
    var productList = JSON.parse(localStorage.getItem("productData"));
}
displayProduct();

function addProduct() {
    var product = {
        name: nameINp.value,
        category: categoryINp.value,
        price: priceINp.value,
        desc: descINp.value
    }
    productList.push(product);
    localStorage.setItem("productData", JSON.stringify(productList));
    console.log(productList);
    displayProduct();
    clearForm();
}

function displayProduct() {

    var trs = "";
    for (var i = 0; i < productList.length; i++) {
        trs += `<tr>
            <td>${i}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].desc}</td>
           <td> <button onclick="deleteProduct(${i});" class="btn btn-danger"  >delete</button></td>
           <td>  <button  onclick="uapdate(${i});" class="btn btn-warning">updata</button></td>
         </tr>`

    }
    document.getElementById("tbody").innerHTML = trs;
}

function clearAll() {
    localStorage.removeItem("productData");
    productList = [];
    displayProduct();
}

function deleteProduct(x) {
    productList.splice(x, 1);
    localStorage.setItem("productData", JSON.stringify(productList));
    displayProduct();
    
}
var searchINp = document.getElementById("searchInp");


function search() {


    var str = "";
    for (var i = 0; i < productList.length; i++) {
        console.log(i);
        if (productList[i].name.includes(searchINp.value)) {
            str += `<tr>
               <td>${i}</td>
               <td >${productList[i].name.toLowerCase().replace(searchINp.value.toLowerCase(), `<span style="background-color:yellow;">${searchINp.value}</span>`)}</td>
               <td>${productList[i].category}</td>
               <td>${productList[i].price}</td>
               <td>${productList[i].desc}</td>
              <td> <button onclick="deleteProduct(${i});" class="btn btn-danger"  >delete</button></td>
              <td>  <button onclick="uapdate(${i});" class="btn btn-warning">updata</button></td>
            </tr>`

        }

    }
    document.getElementById("tbody").innerHTML = str;
}
var addBtn = document.getElementById("addProduct");
function uapdate(index) {
    nameINp.value = productList[index].name;
    priceINp.value = productList[index].price;
    categoryINp.value = productList[index].category;
    descINp.value = productList[index].desc;

    addBtn.innerHTML = "update product";

    addBtn.onclick = function () {
        productList[index].name = nameINp.value;
        productList[index].price = priceINp.value;
        productList[index].category = categoryINp.value;
        productList[index].desc = descINp.value;

        localStorage.setItem("productData", JSON.stringify(productList)); 
        displayProduct();
        addBtn.innerHTML="add product";
        addBtn.onclick=addProduct;
        clearForm();

    }
}

function clearForm() {
    nameINp.value="";
    priceINp.value="";
    categoryINp.value="";
    descINp.value="";
    
}



document.getElementsByTagNameNS()
































