let items = [
    {
      id: 1,
      name: "Unique furniture",
      image:"https://i.pinimg.com/originals/e2/81/ea/e281ead80319f8f1198b281fc3f4e8fb.jpg",
      link: "unique.html"
    },
    {
      id: 2,
      name: "Design Consultancy & Collaboration With Your Architect",
      image:"https://content3.jdmagicbox.com/comp/def_content/architects/default-architects-10.jpg?clr=263340",
      link: "consultancy.html"
    },

    {
      id: 3,
      name: "Furnishing",
      image: "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/10/30193822/Home-Furnishing-Fabric-Wool.jpg",
      link: "furnishing.html"
    },
     

      {
        id: 4,
        name: "Outdoor Decor",
        image: "https://www.janelockhart.com/blog/wp-content/uploads/2020/06/best-outdoor-decor.jpg",
        link: "outdoor.html" 
    },

      {
        id: 5,
        name: "Flooring",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmp3dyXTpmVlKNpReOT_Kc3Yfye3so9xdRwQ&usqp=CAU",
        link: "floor.html" 
    },

      {
        id: 6,
        name: "Remodelling Rooms",
        image: "https://i.pinimg.com/originals/04/a0/4d/04a04d023224156b83b95214af99ef39.jpg",
        link: "remodelling.html"  
    },

      {
        id: 7,
        name: "Themed Rooms",
        image: "https://i.pinimg.com/originals/1e/28/d9/1e28d974d762fa8e117b394ef8859eff.jpg",
        link: "theme.html"  
    },
      {
        id: 8,
        name: "Ceiling Work",
      image: "https://5.imimg.com/data5/OL/GS/MY-42920061/gypsum-ceiling-work-500x500.jpg",
      link: "ceiling.html" 
    }
    ]

    function display(item1){
        let products= "";
        item1.forEach(function(ele){
            products +=`
            <li><a href="${ele.link}"
            <img src="${ele.image}" style="width:100%">
            <img src="${ele.image}" style="width:100%">
             <h2>${ele.name}</h2>
             </a></li>`;
        });
        document.getElementById("#SearchService").innerHTML=products;
    }

    display(items);
function searchForService(){
  let searched= document.getElementById("search_service").value;
  let searchedValue=items.filter(function(ele)
  {
      let stringitem= ele.name;
      return stringitem.toUpperCase().indexOf(searched.toUpperCase())!=-1;
  });
  display(searchedValue);
}
