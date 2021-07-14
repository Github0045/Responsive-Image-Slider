const imgs = document.querySelectorAll('.imgs > img');
const indexsBox = document.querySelector('.indexs');
const count = document.querySelector('.count');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let currImg = 1;

for (let i = 1; i <= imgs.length; i++) {
    indexsBox.innerHTML += `<span class="idx">${i}</span>`;
}
let idx = Array.from(indexsBox.children);

idx.forEach(el => {
    el.addEventListener('click', () => {
        currImg = Number(el.textContent);
        mainFunc()
    })
})

next.addEventListener('click', () => {
    currImg++;
    if (currImg > imgs.length) {
        currImg = imgs.length;
    }
    mainFunc()
})

prev.addEventListener('click', () => {
    currImg--;
    if (currImg < 1) {
        currImg = 1;
    }
    mainFunc()
})

function mainFunc() {
    imgs.forEach(el => {
        el.classList.remove('active')
    })
    imgs[currImg - 1].classList.add('active');
    count.textContent = `Slide #${currImg} Of ${imgs.length}`;

    idx.forEach(el => {
        el.classList.remove('active')
    });
    idx[currImg - 1].classList.add('active');

    if (currImg === 1) {
        prev.disabled = true;
        next.disabled = false;
    } else if (currImg === imgs.length) {
        next.disabled = true;
        prev.disabled = false;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
mainFunc()