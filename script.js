document.location.hash = "#home";

const make_btn = (label, hidden = false) => {
    let btn = document.createElement("button");
    btn.type = "button";
    btn.innerHTML = label;
    btn.classList.toggle("hide", hidden);
    return btn;
}

for (let article of document.getElementsByTagName("article")) {
    let btn_more = make_btn("read more");
    let btn_less = make_btn("back", true);

    const toggle = _ => {
        btn_more.classList.toggle("hide");
        btn_less.classList.toggle("hide");
        article.classList.toggle("main");
        article.parentNode.classList.toggle("single");
    };
    btn_more.onclick = toggle;
    btn_less.onclick = toggle;

    let inner = document.createElement("div");
    inner.append(...article.childNodes);

    article.appendChild(btn_less);
    article.appendChild(inner);
    article.appendChild(btn_more);

    console.log(article.parentNode);
}