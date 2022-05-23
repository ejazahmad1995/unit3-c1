//store the products array in localstorage as "products"

function Products(t,d,p,i){
    this.type=t;
    this.description=d;
    this.price=p;
    this.image=i;
};








function storeData(event){

    event.preventDefault();
    let form=document.getElementById("products");

    let type=products.type.value;

    let desc=products.desc.value;

    let price=products.price.value;

    let image =products.image.value;

    let s1=new Products(type,desc,price,image);

    let data=JSON.parse(localStorage.getItem("Products")) || [];

    data.push(s1);

    localStorage.setItem("products",JSON.stringify(data));

    console.log(s1);


}
