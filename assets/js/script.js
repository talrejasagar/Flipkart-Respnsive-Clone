var _listdata = [
    {
      id: 1,
      title: "Top Offers",
      image:"assets/image/2.png"
    },
    {
      id: 2,
      title: "Grocery",
      image:"assets/image/3.png"   
    },
    {
      id: 3,
      title: "Mobiles",
      image:"assets/image/4.png"
    },
    {
      id: 4,
      title: "Fashion",
      image:"assets/image/5.png"
    },
    {
      id: 5,
      title: "Electronics",
      image:"assets/image/6.png"
    },
    {
      id: 6,
      title: "Home",
      image:"assets/image/7.jpg"
    },
    {
      id: 7,
      title: "Appliances",
      image: "assets/image/8.png"
    },
    {
      id: 8,
      title: "Travel",
      image:"assets/image/9.png"
    },
    {
      id: 9,
      title: "Beauty, Toys & More",
      image:"assets/image/10.png"
    },
  ];

  var listiteams = document.getElementById("content");

  function createElements(content) {
    var listdata = document.createElement("div");
    listdata.innerHTML = `<div>
        <img class="imagecontent" src=${content.image}>
        <p class="paracontent"><a href="header.html" target="_blank" style="text-decoration:none">${content.title}</a></p>
    </div>`;

    return listdata;
  }

  for (var i = 0; i < _listdata.length; i++) {
    dataiteam = _listdata[i];
    var currentdata = createElements(dataiteam);
    listiteams.appendChild(currentdata);
  }


 