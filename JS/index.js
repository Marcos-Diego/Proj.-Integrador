//inicio do menu
let li = document.getElementsByTagName("li");
let lMenu = document.getElementsByTagName("ul");
const nav = document.getElementsByTagName("nav");
const corpo = document.body.children;
const button = document.getElementById("menu");

lMenu = lMenu[0].children;

for (let x = 0; x < lMenu.length; x++) {
   li[x].classList.add("border-b-2", "mb-[40px]", "pb-[5px]", "pl-[8px]", "w-[100%]", "shadow-xl");
   if (x == 0) {
      li[x].classList.add("mt-[30px]")
   };
};

let click = 0;
button.addEventListener("click", () => {
   if (click == 0) {
      click++
      for (let x = 0; x < corpo.length; x++) {
         corpo[x].classList.add("brightness-50")
      }
      nav[0].classList.remove("hidden", "brightness-50")
   }
})
//fim do menu