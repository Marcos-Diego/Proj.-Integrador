//inicio do menu
let li = document.getElementsByTagName("li");
let lMenu = document.getElementsByTagName("ul");
const nav = document.getElementsByTagName("nav");
const corpo = document.body.children;
const button = document.getElementById("menu");

lMenu = lMenu[0].children;

for (let x = 0; x < lMenu.length; x++) {
    li[x].classList.add("hover:text-gray-950", "text-gray-700", "mb-[40px]", "pb-[5px]", "pl-[8px]", "w-[100%]", 
        "shadow-xl", "border-b-2");
    if (x == 0) {
        li[x].classList.add("mt-[30px]")
    };
};

button.addEventListener("click", () => {
    nav[0].classList.remove("hidden")
    for (let x = 0; x < corpo.length; x++) {
        if (x == 1) { continue; }
        corpo[x].classList.add("blur-[2px]")
    }
}
)
//fim do menu