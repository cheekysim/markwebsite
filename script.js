window.onload = function(){
    const ads = ["images/advert1.jpg", "images/advert2.jpg", "images/advert3.jpg"];
    const random = Math.floor(Math.random() * ads.length);
    var ad = (random, ads[random]);
    document.getElementById("advert").src=ad;
};
