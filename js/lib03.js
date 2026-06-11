
/*Mã nguồn Javacript*/
const product = {
    id:"1",
    name:"Hoa hồng Pháp",
    price:250000,
    description:"Đây là giống Hoa được yêu thích ở Pháp được nhập khẩu  về Việt Nam ...",
    image:"../assets/images/loaken.jpg",
    link:"chi-tiet.html"
};

function inBCC(n)
{
    let result = "";
    let i = 1;
    while(i<=10)
    {
        result += `${n} x ${i} = ${n*i} <br>`;
        i++;
    }
    document.getElementById("result").innerHTML = result;
}

function addItem(name, price, description, link, image)
{
    //Tạo khung chứa container-item
    const item = document.createElement("div"); //<div></div>
    
    item.setAttribute("class", "container-item");

    //Trong một item có  khung chứa container-image và container-info

    //Tạo khung chứa container-image
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "container-image");

    //Tạo 1 ảnh
    const imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", image);//truyền tham số image
    imageProduct.setAttribute("alt", name);
    imageProduct.setAttribute("style", "width:100%; max-width:150px;");
    containerImage.style.textAlign = "center";

    //Chèn đối tưởng ảnh vào khung chứa ảnh
    containerImage.appendChild(imageProduct);

    //Tạo khung chứa container-info
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-info");
    containerInfo.style.textAlign = "center";

    //Tạo 4 con
    const nameProduct = document.createElement("p");
    nameProduct.innerHTML = name;
    nameProduct.style.color = "#ff0202ff";

    const priceProduct = document.createElement("div");
    priceProduct.innerHTML = price;
    priceProduct.style.backgroundColor = "green";
    priceProduct.style.color = "white";
    priceProduct.style.padding = "5px 10px";
    priceProduct.style.borderRadius = "5px";
    priceProduct.style.display = "inline-block";
    priceProduct.style.margin = "10px 0";

    const descProduct = document.createElement("p");
    descProduct.innerHTML = description;

    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", link);

    //Thêm con vào khung chứa info
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(priceProduct);
    containerInfo.appendChild(descProduct);
    containerInfo.appendChild(linkProduct);

    //Đưa khung ảnh vào item
    item.appendChild(containerImage);
    //Đưa khung info vào item
    item.appendChild(containerInfo);
    //Đưa khung chứa container-product-list vào container
    document.getElementById("container-product-list").appendChild(item);
}
function addItemV2(obj)
{
    const list = document.getElementById("product-list");
    list.innerHTML = `
        div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card product-item">
                        <div class = "product-image">
                            <img class="card-img-top" src="${obj.name}" alt="${obj.name}"
                        </div>
                        <div class="card-body bg-light product-info">
                            <h4 class = "card-title">${obj.name}</h4>
                            <h5 class = "card-text">${obj.price}</h5>
                            <p class = "card-text">${obj.description}</p>
                            <a class = "btn btn-info" href = "${obj.link}">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>
    `;
} 
function loadAllProducts(array)
    {
        let i=0;
        while(i<array.length)
        {
            addItemV2(array[i]);
            i++;
        }

    }