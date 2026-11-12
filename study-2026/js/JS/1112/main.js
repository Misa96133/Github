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
    const result = users.filter((user) => user.name.includes(word));
    render(result);
});
