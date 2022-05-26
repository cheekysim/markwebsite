window.onload = function(){
    const ads = ["images/adverts/advert1.jpg", "images/adverts/advert2.jpg", "images/adverts/advert3.jpg"];
    const random = Math.floor(Math.random() * ads.length);
    var ad = (random, ads[random]);
    document.getElementById("advert").src=ad;
};