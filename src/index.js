import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //console.log(div);

  // li生成
  const li = document.createElement("li");
  li.innerText = text;
  //console.log(li);

  // ボタン追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了のTODOから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了のTODOに追加
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;
    const backBuutton = document.createElement("button");
    backBuutton.innerText = "戻す";
    backBuutton.addEventListener("click", () => {
      // 戻すボタンの処理

      // 完了したTODOから削除
      const deleteTarget = backBuutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // 未完了のTODOに追加
      createIncompleteList(backBuutton.parentNode.firstElementChild.innerText);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backBuutton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //  const deleteTarget = deleteButton.parentNode;
    //  document.getElementById("incomplete-list").removeChild(deleteTarget);
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //console.log(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
