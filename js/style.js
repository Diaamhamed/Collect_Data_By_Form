//X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=||- بسم الله -||=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X\\
var ProductFName=document.getElementById("ProductName");
var ProductFPrice=document.getElementById("ProductPrice");
var ProductFCate=document.getElementById("ProductCate");
var ProductFDesc=document.getElementById("ProductDesc");
var mainBtn=document.getElementById("mainBtn")
var ProductList=[];
var Update;
var Incase="Create"

if (localStorage.getItem("Product")!=null) {
    ProductList=JSON.parse(localStorage.getItem("Product"));
    displayProduct();
} else {
    ProductList=[];
}
//X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=||- ADD PRODUCT -||=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X\\
function AddProduct() { 
    if (ProductFName.value === '' || ProductFPrice.value === '' || ProductFCate.value === '' || ProductFDesc.value === '')
    { alert("Please fill in all fields.");
return; 
}
    var Product={
        Name:ProductFName.value,
        Price:ProductFPrice.value,
        Cate:ProductFCate.value,
        Desc:ProductFDesc.value,
    }
    if (Incase==="Create") {
        ProductList.push(Product);
    localStorage.setItem("Product",JSON.stringify(ProductList));
    displayProduct();
    }else{
        ProductList[Update]=Product
        displayProduct();
        Incase="Create";
        mainBtn.innerText="Add Product";
        mainBtn.classList.add("btn-outline-info");
        mainBtn.classList.remove("btn-success");
        mainBtn.style.margin = "";
        mainBtn.style.display = "";            
        localStorage.setItem("Product",JSON.stringify(ProductList));
        clearProduct()
        console.log(ProductList);
}
}
//X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=||- DISPLAY PRODUCT -||=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X\\
    function displayProduct() {
        var truck=``;
        for (var i = 0; i < ProductList.length; i++) {
            truck+=` <tr>
            <td>${i+1}</td>
            <td>${ProductList[i].Name}</td>
            <td>${ProductList[i].Price}</td>
            <td>${ProductList[i].Cate}</td>
            <td>${ProductList[i].Desc}</td>
            <td>
                <button type="submit" class="fw-bold btn btn-outline-warning"onclick="updateProduct(${i})">
                    Update
                </button>
                </td>
                <td>
                <button type="submit" class="fw-bold btn btn-outline-danger" onclick="deleteProduct(${i})">
                    Delete
                </button>
                </td>
            </tr>`
        }
        document.getElementById("Tbody").innerHTML=truck;
    }
//X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=||- CLEAR PRODUCT FILEDS -||=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X\\
function clearProduct() {
    ProductFName.value='';
    ProductFPrice.value='';
    ProductFCate.value='';
    ProductFDesc.value='';
}
//X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=||- DELETE PRODUCT -||=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X\\
function deleteProduct(index) {
    ProductList.splice(index,1);
    displayProduct();
    localStorage.setItem("Product",JSON.stringify(ProductList));
}
//X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=||- UPDATE PRODUCT -||=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X\\
function updateProduct(index) {
    ProductFName.value=ProductList[index].Name;
    ProductFPrice.value=ProductList[index].Price;
    ProductFCate.value=ProductList[index].Cate;
    ProductFDesc.value=ProductList[index].Desc;
    mainBtn.innerText="Update Product"
    mainBtn.classList.add("btn-success");
    mainBtn.classList.remove("btn-outline-info");
    mainBtn.style.margin = "0 auto";
    mainBtn.style.display = "block";
    Incase="Update";
    Update=index;
    }
//X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=||- Search -||=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X\\
    var Search="".includes()
function searchProduct(searchkey) {
    var truck=``;
    for (var i = 0; i < ProductList.length; i++) {
    if (ProductList[i].Name.toLowerCase().includes(searchkey.toLowerCase())) {
        ProductList[i].newName=ProductList[i].Name.replace(searchkey,`<span class=" text-danger fw-bolder">${searchkey}</span>`)
    truck+=` <tr>
            <td>${i+1}</td>
            <td>${ProductList[i].newName?ProductList[i].newName:ProductList[i].Name}</td>
            <td>${ProductList[i].Price}</td>
            <td>${ProductList[i].Cate}</td>
            <td>${ProductList[i].Desc}</td>
            <td>
                <button type="submit" class="fw-bold btn btn-outline-warning"onclick="updateProduct(${i})">
                    Update
                </button>
                </td>
                <td>
                <button type="submit" class="fw-bold btn btn-outline-danger" onclick="deleteProduct(${i})">
                    Delete
                </button>
                </td>
            </tr>`
        }
        document.getElementById("Tbody").innerHTML=truck;
}
}
//X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=||- VALIDATION -||=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X\\
function validationProductName() {
    var regex=/^[A-Z][a-z]{3,8}$/
        if (regex.test(ProductFName.value)) {
            document.getElementById("error-name").classList.add("d-none");
            ProductFName.classList.remove("is-invalid");
    }else{
        document.getElementById("error-name").classList.remove("d-none");
        ProductFName.classList.add("is-invalid");
    }
}
//X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=||-  -||=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X\\
