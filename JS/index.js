//inicio do header
const pai = document.getElementsByTagName("ul");

let filhos = pai[0].children;

for (let x = 0; x < filhos.length; x++) {
    let netos = filhos[x].children; //o netos são o p e hr
    console.log(netos[0])
    for (let y = 0; y < netos.length; y++) {
        if (y == 0) {
            netos[y].classList.add("hover:text-gray-950", "text-gray-700", "mb-[40px]", "pb-[5px]", "pl-[8px]", "w-[100%]");
            if (x == 0) { netos[y].classList.add("mt-[30px]") };
        }
        else if (y == 1) {
            netos[y].classList.add("width=[50%]");
        }
    }
}


//fim do header
//inicio do nav
const nav = document.getElementsByTagName("nav");
const menuOpen = document.getElementById("menu");

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
//inicio de img
const banner = document.getElementById("banner")
let nextBanner = banner.lastElementChild;

const listaIMG = ["img/Amantino_Camara_Logo.png", "img/git_imagem.jpg"];
let imgMAX = listaIMG.length;
console.log(imgMAX)

function tempo() {
    if (nextBanner == "bg-[url(img/Amantino_Camara_Logo.png)]")
        setInterval(start, 5000);
};
function start() {

}

tempo();

//fim de img
//inicio de botoes e suas funçoes
const bannerLeft = document.getElementById("banner-left");
bannerLeft.addEventListener("click", () => {
    tempo()
});
const bannerRight = document.getElementById("banner-right");
bannerRight.addEventListener("click", () => {
    tempo()

});
//fim de botoes e suas funçoes

//fim do banner