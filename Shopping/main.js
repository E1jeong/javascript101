const items = document.querySelector(".items");
const form = document.querySelector(".new-form");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //자동 리로딩 방지를 위해서 사용함
  onAdd();
});

function onAdd() {
  //1. 입력한 텍스트 받아오기
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  //2. 받아온 텍스트로 새로운 아이템 만듬 (텍스트 + 삭제버튼)
  const item = createItem(text);
  //3. items 컨테이너 안에 새로만든 아이템 추가
  items.appendChild(item);
  //4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: "center" });
  //5. input 초기화
  input.value = "";
  input.focus();
}

let id = 0; //UUID
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
    <div class="item">
      <span class="item__name">${text}</span>
      <button class="item__delete">
        <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
    <div class="item__divider"></div>
  `;
  id++;

  // const item = document.createElement("div");
  // item.setAttribute("class", "item");

  // const name = document.createElement("span");
  // name.setAttribute("class", "item__name");
  // name.innerText = text;

  // const deleteBtn = document.createElement("button");
  // deleteBtn.setAttribute("class", "item__delete");
  // deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  // deleteBtn.addEventListener("click", () => {
  //   items.removeChild(itemRow);
  // });

  // const itemDivider = document.createElement("div");
  // itemDivider.setAttribute("class", "item__divider");

  // item.appendChild(name);
  // item.appendChild(deleteBtn);

  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivider);
  return itemRow;
}

// addBtn.addEventListener("click", () => {
//   onAdd();
// });

// input.addEventListener("keydown", (event) => {
//   //이벤트가 만들어지는 중이라면 return(여기서는 글자가 쓰이는 중이라면)
//   if (event.isComposing) {
//     return;
//   }
//   if (event.key === "Enter") {
//     onAdd();
//   }
// });

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
