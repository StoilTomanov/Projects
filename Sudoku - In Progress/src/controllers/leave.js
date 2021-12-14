import { page } from '../lib.js';

export function onLeave() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    document.getElementById('confirmYes').addEventListener('click', onChoice);
    document.getElementById('confirmNo').addEventListener('click', onChoice);

    function onChoice(ev) {
        if (ev.target.id == 'confirmYes') {
            page.redirect('/');
            modal.style.display = 'none';
        } else if (ev.target.id == 'confirmNo') {
            modal.style.display = 'none';
        }
    }

}