import {LitElement, html, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './planner-fit-app.ts';
import globalStyles from './global.css?raw';

@customElement('lit-app')
export class LitApp extends LitElement {
    static styles = [unsafeCSS(globalStyles)];

 render() {
    // Root shell for Plan Fit
    return html`<planner-fit-app></planner-fit-app>`;
  }
}
