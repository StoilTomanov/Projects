export function sudoku() {
    document.querySelectorAll('input').forEach(i => {
        i.addEventListener('focus', onFocus)
        i.addEventListener('blur', onBlur)
    })

    function onFocus(ev) {
        ev.target.style.backgroundColor = 'rgb(106, 186, 230)';
    }

    function onBlur(ev) {
        ev.target.style.backgroundColor = '';
    }
}