const fruits = ["りんご", "バナナ", "ぶどう", "みかん", "いちご"];
const input = document.querySelector("#search");
const list = document.querySelector("#list");

// リストを表示する関数(forEach・createElement は学習済み!)
function render(items) {
  list.innerHTML = "";          // いったん空にする
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

render(fruits);

input.addEventListener("input", () => {
  const word = input.value;                              // 入力された文字
  const result = fruits.filter((item) => item.includes(word));
  if (result.length === 0) {
      list.innerHTML = "<li>見つかりませんでした</li>";
    } else {
      render(result);
    }
});

  
// Q1. forEach と filter の違いは?
// A.forEach は全部に1つずつ処理をする。filter は条件に合うものだけ集めて新しい配列を作る。

// Q2. list.innerHTML = ""; を消すとどうなる?
// A. 前のリストが消えずに残り、その下に新しい結果が追加される。だから毎回最初に空にする必要がある。

// Q3. "input" を "change" に変えると、動きはどう変わる?
// A.“input” は1文字打つたびに絞り込まれる。"change" は Enter を押す(または外をクリックする)まで変わらない。