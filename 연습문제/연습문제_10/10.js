const btns = document.getElementsByName("image");
const img = document.getElementById("images");

btns.forEach(btn => {
  btn.addEventListener("click", e => {
    const val = e.target.id; 
    console.log(val);
    img.src = "https://picsum.photos/400/300?random=" + val;
  });
});
