const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
    console.log('hello');
}

function toggleActive(e) {
    this.classList.toggle('open-active');
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

for (const panel of panels) {
    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', toggleActive);
}