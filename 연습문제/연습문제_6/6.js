const shop = document.querySelector(".rName");

shop.addEventListener("click", e => {
  // 기존 span 요소를 input 요소로 변경
  const currentText = e.target.innerText;  // 기존 텍스트
  const input = document.createElement("input");
  input.className = "inputName";
  input.value = currentText;  // 기존 텍스트를 input에 넣음
  e.target.innerHTML = '';  // 기존 span 내용 삭제
  e.target.appendChild(input);  // input을 기존 위치에 추가

  // 입력 필드 외의 다른 곳을 클릭하면 내용 업데이트
  input.addEventListener("blur", () => {
    const newText = input.value.trim();
    if (newText !== "") {
      e.target.innerHTML = newText;  // 내용이 있으면 span으로 업데이트
    } else {
      e.target.innerHTML = currentText;  // 내용이 없으면 원래 텍스트로 되돌리기
    }
  });
});

const menus = document.querySelector(".menus");
const modBtn = document.querySelector(".mod");
const btns = document.querySelector(".btns");

modBtn.addEventListener("click", () => {
  toggleModifyMode(); // 수정 모드 토글
});

// 수정/종료 버튼을 토글하는 함수
function toggleModifyMode() {
  const modify = btns.querySelector(".end"); // '종료' 버튼이 있으면 수정 모드인 것
  btns.innerHTML = ''; // 기존 버튼들 제거

  if (modify) {
    // 수정 모드 -> 종료 모드
    const modBtn = document.createElement("button");
    modBtn.className = "mod";
    modBtn.innerText = "수정";
    btns.append(modBtn);

    modBtn.addEventListener("click", () => {
      toggleModifyMode(); // 수정 버튼 클릭 시 다시 수정 모드로
    });
  } else {
    // 종료 모드 -> 수정 모드
    const btn1 = document.createElement("button");
    btn1.className = "end";
    btn1.innerText = "종료";

    const btn2 = document.createElement("button");
    btn2.className = "del";
    btn2.innerText = "제거";

    const btn3 = document.createElement("button");
    btn3.className = "add";
    btn3.innerText = "추가";

    btns.append(btn1, btn2, btn3); // 종료, 제거, 추가 버튼 추가

    // 메뉴 추가
    const addBtn = document.querySelector(".add");
    addBtn.addEventListener("click", () => {
      const div = document.createElement("div");
      div.className = "menu";

      const input1 = document.createElement("input");
      input1.type = "checkbox";

      const input2 = document.createElement("input");
      input2.type = "text";
      input2.placeholder = "메뉴명";
      input2.className = "menuName";

      const input3 = document.createElement("input");
      input3.type = "number";
      input3.placeholder = "가격";
      input3.className = "menuPrice";

      div.append(input1, input2, input3);
      menus.append(div);
    });

    // 메뉴 제거
    const delBtn = document.querySelector(".del");
    delBtn.addEventListener("click", () => {
      const selectedMenu = document.querySelector(".menu input[type='checkbox']:checked");
      if (selectedMenu) {
        selectedMenu.closest(".menu").remove();  // 체크된 메뉴 항목 삭제
      }
    });

    // 종료 버튼 클릭 시 수정 버튼으로 돌아가기
    const endBtn = document.querySelector(".end");
    endBtn.addEventListener("click", () => {
      toggleModifyMode(); // 종료 버튼 클릭 시 수정 모드로 돌아가기
    });
  }
}
