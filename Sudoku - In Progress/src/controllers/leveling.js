export function onCheck(ev) {
    const easy = document.getElementById('easyBtn');
    easy.style.backgroundColor = '';
    easy.dataset.set = false;
    const normal = document.getElementById('normalBtn');
    normal.style.backgroundColor = '';
    normal.dataset.set = false;
    const hard = document.getElementById('hardBtn');
    hard.style.backgroundColor = '';
    hard.dataset.set = false;
    ev.target.dataset.set = true;
    ev.target.style.backgroundColor = 'rgb(78, 153, 149)';

    const playBtn = document.getElementById('playBtn');
    playBtn.disabled = false;
    playBtn.style.backgroundColor = ''

}