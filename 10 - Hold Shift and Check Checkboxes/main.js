const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked

function handleCheck(e) { 
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        for (const checkbox of checkboxes) {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        }
    }

    lastChecked = this;
}

for (const checkbox of checkboxes) {
    checkbox.addEventListener('click', handleCheck);
}