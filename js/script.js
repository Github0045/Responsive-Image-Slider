const imgs = document.querySelectorAll('.imgs > img');
const indexsBox = document.querySelector('.indexs');
const count = document.querySelector('.count');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let currImg = 1;
let clickCount = 0;

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
    clickCount++;
})

prev.addEventListener('click', () => {
    currImg--;
    if (currImg < 1) {
        currImg = 1;
    }
    mainFunc()
    clickCount--;
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
        prev.classList.add('disabled')
        next.classList.remove('disabled')
    } else if (currImg === imgs.length) {
        next.classList.add('disabled')
        prev.classList.remove('disabled')
    } else {
        prev.classList.remove('disabled')
        next.classList.remove('disabled')
    }
}

setInterval(() => {
    next.click();
    if (clickCount >= imgs.length) {
        for (let i = 1; i <= imgs.length; i++) {
            prev.click();
        }
    }
}, 2500)
mainFunc()