const input = document.querySelector(".research") 
const box = document.querySelector(".listbox")
const list = document.querySelector(".list")
 
input.addEventListener("keydown", e=>{
  const div = document.createElement("div");
  div.className = "textbox";
  
  const span = document.createElement("span");
  span.innerText = input.value;

  if(e.key === "Enter"){
    
    if(input.value ===""){
      return;
    }
    div.append(span)
    box.prepend(div);
    input.value = ""
    
    const count = box.children.length;
    console.log(count);

    if(count >= 5){
      box.lastChild.remove();
    }
  }
});
 
input.focus;
