import { main } from '../app.js'
import { html, render } from '../lib.js'
import { sudoku } from "../controllers/sudoku.js";
import { onLeave } from '../controllers/leave.js';
import { onHint } from '../controllers/hints.js';
import { onReset } from '../controllers/reset.js';
import { onValidate } from '../controllers/check.js';

export function showSudoku(ctx) {

    const template = html `
    <section id="sudoku">
        <div id="info-bar">
            <p id="level-info">Level: Hard</p>
            <time id="time" datetime="00:00:00">00:00:00</time>
        </div>
        <div id="container">
            <div class="box-1">
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
            </div>
            <div class="box-1">
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
            </div>
            <div class="box-1">
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
            </div>
            <div class="box-2">
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
            </div>
            <div class="box-2">
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
            </div>
            <div class="box-2">
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
            </div>
            <div class="box-3">
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
            </div>
            <div class="box-3">
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
            </div>
            <div class="box-3">
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
            </div>

        </div>

        <div id="commands">
            <button id="leave" @click=${onLeave}>Leave</button>
            <button id="check" @click=${onValidate}>Check</button>
            <button id="hint" @click=${onHint}>Hint x3</button>
            <button id="reset" @click=${onReset}>Reset</button>
        </div>

    </section>
    `
    render(template, main);
    sudoku();
}