const btn = document.querySelector('#load');
const list = document.querySelector('#list');
const search = document.querySelector('#search');
let users = []; // 取ってきたデータを入れておく箱

function render(items) {
    list.innerHTML = ''; // いったん空にする
    items.forEach((user) => {
        const li = document.createElement('li');
        li.textContent = user.name;
        list.appendChild(li);
    });
}

btn.addEventListener('click', async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('取得に失敗しました');
        users = await res.json();
        render(users);
    } catch (err) {
        list.textContent = 'エラー:' + err.message;
    }
});

search.addEventListener('input', () => {
    const word = search.value;
    const result = users.filter((user) => user.name.toLowerCase().includes(word.toLowerCase()));
    render(result);
});

// Q1: click と input の2つの関数で同じ users を使うから、関数の外に書く
// Q2: innerHTML = '' がないと、前の表示が残ってどんどん追加されていく
// Q3: toLowerCase() で名前も入力も小文字にそろえてから比べる

