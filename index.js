const input = document.getElementById('capsuleInput');
const saveBtn = document.getElementById('saveBtn');
const link = document.getElementById('link');
const params = new URLSearchParams(window.location.search);
const encoded = params.get('msg');






if (encoded) {
    try {
        const decoded = decodeURIComponent(atob(encoded));
        input.value = decoded;
        link.innerHTML = `<strong class="loaded">loaded capsule link:</strong><br><br><br><br><div class="capsule">${(decoded)}</div>`;
        document.getElementById("capsuleInput").value = " ";
    } catch {
        link.textContent = 'invalid link';
    }
}

function voegItemToe(nieuwItem) {
    const key = "linkkk";
    let items = JSON.parse(localStorage.getItem(key)) || [];
    items.push(nieuwItem);
    localStorage.setItem(key, JSON.stringify(items));
}



function betteralert_write() {
    Swal.fire({
        title: 'message first',
        text: 'write a message first',
        confirmButtonText: 'got it!'
    });
}


saveBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) {
        betteralert_write()
        return;
    }
    const encoded = btoa(encodeURIComponent(text));
    const shareUrl = `${window.location.origin}${window.location.pathname}?msg=${encoded}`;
    link.innerHTML = `save this link to open it later:<br><a id="clv" href="${shareUrl}">copy this</a>   <button id="copylink" onclick="copylink()">⧉</button>`;
});
function min_body() {
    const element = document.getElementById("body");
    if (!element) {
        max_body();
        return;
    }

    element.classList.add("fade-out");
    element.addEventListener("transitionend", () => {
        element.remove();
    }, { once: true });
}

function max_body() {
    window.location.reload();
}

function close_body() {
    const element = document.getElementById("body");
    if (!element) return;

    element.classList.add("fade-out");
    element.addEventListener("transitionend", () => {
        element.remove();
    }, { once: true });
}

function betteralert_copied() {
    Swal.fire({
        title: 'copying',
        text: 'copied',
        confirmButtonText: 'okay'
    });
}
function betteralert_copierr(err) {
    Swal.fire({
        title: 'error',
        text: 'error copying message' + err,
        confirmButtonText: 'got it'
    });
}





function copylink() {
    const link = document.getElementById('clv').href;
    voegItemToe(link);
    navigator.clipboard.writeText(link)
        .then(() => betteralert_copied())
        .catch(err => betteralert_copierr(err));
}

function opencoffee(text) {
    window.open(text);
    window.close();
}



