// src/calorie-tracker-page.ts
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('calorie-tracker-page')
export class CalorieTrackerPage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .section {
      margin-top: 10px;
      border-radius: 24px;
      background: #ffffff;
      padding: 16px;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
    }

    .title {
      font-size: 14px;
      font-weight: 600;
      color: #0f172a;
    }

    .sub {
      margin-top: 4px;
      font-size: 11px;
      color: #6b7280;
    }
  `;

  render() {
    return html`
      <section class="section">
        <div class="title">Calorie Tracker</div>
        <div class="sub">
          This is a placeholder for now. Later you can add daily calories, macros,
          or connect to another tool here.
        </div>
      </section>
    `;
  }
}
