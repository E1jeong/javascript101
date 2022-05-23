const items = document.querySelector(".items");
const form = document.querySelector(".new-form");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //�ڵ� ���ε� ������ ���ؼ� �����
  onAdd();
});

function onAdd() {
  //1. �Է��� �ؽ�Ʈ �޾ƿ���
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  //2. �޾ƿ� �ؽ�Ʈ�� ���ο� ������ ���� (�ؽ�Ʈ + ������ư)
  const item = createItem(text);
  //3. items �����̳� �ȿ� ���θ��� ������ �߰�
  items.appendChild(item);
  //4. ���� �߰��� ���������� ��ũ�Ѹ�
  item.scrollIntoView({ block: "center" });
  //5. input �ʱ�ȭ
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
//   //�̺�Ʈ�� ��������� ���̶�� return(���⼭�� ���ڰ� ���̴� ���̶��)
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
