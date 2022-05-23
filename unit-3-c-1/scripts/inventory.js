function append(){
    let data=JSON.parse(localStorage.getItem("products")) || [];

    let container=document.createElement("container");

    data.forEach(function(elem){
        let div=document.getElement("all_products");

        let img=document.createElement("div");
        img.src=elem.image;



        let btn=document.getElementById("remove_product");
        btn.innerText="Remove";

        btn.setAttribute('click',function(){remove(index);});

        div.append(img,btn);
        container.append(div);

        

        
    });
    append();

    function remove(index){
        let data=JSON.parse(localStorage.getItem("products")) ||[];
    }
    

}