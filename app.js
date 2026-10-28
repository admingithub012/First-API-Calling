let url = "https://catfact.ninja/fact";
const btn = document.getElementById('fact-btn');
const normalBg = '#036440';
const clickBg = '#013a25';
let ol = document.querySelector(".OrderList");
let hintCheck = true;
btn.addEventListener("mousedown", async () => {
    if (hintCheck == true) {
        let hint = document.querySelector(".hint");
        ol.removeChild(hint);
        hintCheck= false;
    }
    btn.style.transform = 'scale(0.95)';
    btn.style.borderColor = normalBg;
    let li = document.createElement("li")
    ol.insertAdjacentElement("beforeend", li);
    li.innerHTML = `<p>New Fact Loading...</p>`;
    let data = await getFacts();
    li.innerHTML = `<p><i>"${data}"</i></p>`;
});
btn.addEventListener("mouseup", () => {
    btn.style.transform = 'scale(1)';
    btn.style.borderColor = clickBg;
});

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        let error =`Error is : ${err}`;
        return error;
    }
}




