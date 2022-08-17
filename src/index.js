import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //console.log(div);

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;
  //console.log(li);

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  //console.log(div);

  // ボタン追加
  const buttonComplete = document.createElement("button");
  buttonComplete.innerText = "完了";
  div.appendChild(buttonComplete);

  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "削除";
  div.appendChild(buttonDelete);

  console.log(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
