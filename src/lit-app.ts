import {LitElement, html, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './planner-fit-app.ts';
import globalStyles from './global.css?raw';

@customElement('lit-app')
export class LitApp extends LitElement {
    static styles = [unsafeCSS(globalStyles)];

    @property() name = 'Lit App';

    render() {
        return html`<h1>Hello, ${this.name}</h1>`;
    }
}
