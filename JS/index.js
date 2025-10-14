//inicio do header
let li = document.getElementsByTagName("li");
let lMenu = document.getElementsByTagName("ul");
const corpo = document.body.children;

lMenu = lMenu[0].children;

for (let x = 0; x < lMenu.length; x++) {
    li[x].classList.add("hover:text-gray-950", "text-gray-700", "mb-[40px]", "pb-[5px]", "pl-[8px]", "w-[100%]", 
        "shadow-xl", "border-b-2");
    if (x == 0) {
        li[x].classList.add("mt-[30px]")
    };
};

//fim do header
//inicio do nav
const nav = document.getElementsByTagName("nav");
const menuClose = document.getElementById("menu");

menuOpen.addEventListener("click", () => {
    nav[0].classList.remove("hidden")
    for (let x = 0; x < corpo.length; x++) {
        if (x == 1) { continue; }
        corpo[x].classList.add("blur-[2px]")
    }
}
)
//fim do nav
//inicio do banner
let nextBanner = 0;

const bannerLeft = document.getElementById("banner-left");
bannerLeft.addEventListener("click", () => {
    nextBanner--;})

const bannerRight = document.getElementById("banner-right");
bannerRight.addEventListener("click", () => {
    nextBanner++;})

const banner = document.getElementById("banner");

setInterval(bannerIMG, 5000);
function bannerIMG() {
    

}

//fim do banner