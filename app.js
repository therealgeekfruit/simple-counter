const dec = document.querySelector(".decrease");
const res = document.querySelector(".reset");
const inc = document.querySelector(".increase");
let val = document.querySelector(".value");
let number = val.innerHTML;
dec.addEventListener("click", () => {
  val.innerHTML--;
  colors();
});
inc.addEventListener("click", () => {
  val.innerHTML++;
  colors();
});
res.addEventListener("click", () => {
  val.innerHTML = 0;
  colors();
});
const colors = () => {
  if (val.innerHTML > 0) {
    val.style.color = "green";
  } else if (val.innerHTML < 0) {
    val.style.color = "red";
  } else {
    val.style.color = "black";
  }
};
