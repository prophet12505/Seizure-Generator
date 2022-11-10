const prefix = "./images/ads/"
const adImages = ["Acer.png", "Apple.png", "Dell.png", "HP.png", "Lenovo.png", "Microsoft.png"];
adImages.sort();
for (var i = 0; i < adImages.length; i++) {
    adImages[i] = prefix + adImages[i];
}

console.log(adImages);
let thisAd = 0;
function randomAd() {
    //  thisAd = Math.floor(Math.random() * adImages.length);
    rotate();
    document.getElementById("adBanner").src = adImages[thisAd];
    addLinks();
}
function addLinks(adBanner) {
    //retrieve parentNode
    if (document.getElementById(adBanner).parentNode.tagName == "A") {
        document.getElementById(adBanner).parentNode.onclick = newLocation;
    }
}
function randomAd_All(){
    randomAd(0);
    randomAd(1);
    randomAd(2);
    randomAd(3);
    randomAd(4);
    randomAd(5);

};
// setInterval(randomAd, 1000);
rotate();
console.log("working");
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key == 'ArrowDown' || key == 'ArrowRight' || key == ' ') {
        randomAd()
    }
    else if (key == 'ArrowUp' || key == 'ArrowLeft') {
        randomAd();
    }

});
//array of ad Links to display when image is clicked
function newLocation() {
    const adURL = ["microsoft.ca", "apple.com/ca", "dell.com/en-ca/", "hp.com/", "acer.ca", "lenovo.com/ca/en/"];
    adURL.sort();
    //opens link in a new tab/window
    window.open("https://www."+adURL[thisAd],"_blank");
    return false;
}


function rotate(){
    thisAd = thisAd+1;
    if(thisAd>=adImages.length){
        thisAd%=adImages.length;
    }
    const adName=[1,2,3,4,5,6];
    for(var i=0;i<adName.length;i++){
        adName[i]="adBanner"+adName[i];
    }
   // console.log(adName);
    document.getElementById("adBanner").src=adImages[thisAd];
    document.getElementById(adName[thisAd]).src=adImages[(thisAd+Math.floor(Math.random()*6))%adImages.length];
    addLinks("adBanner");
    addLinks(adName[thisAd]);
    setTimeout(rotate,500);


}
