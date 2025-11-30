import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './planner-page';
import './exercise-log-page';
import './diary-page';
import './bmi-calculator-page';
import globalStyles from './global.css?raw';

type TabId = 'planner' | 'log' | 'diary' | 'bmi';

@customElement('planner-fit-app')
export class PlannerFitApp extends LitElement {
  @state() private activeTab: TabId = 'planner';

  static styles = unsafeCSS(globalStyles);

  private setTab(tab: TabId) {
    this.activeTab = tab;
  }

  private renderTab(id: TabId, label: string) {
    const active = this.activeTab === id;
    return html`
      <button
        class=${`tab ${active ? 'active' : ''}`}
        @click=${() => this.setTab(id)}
      >
        ${label}
      </button>
    `;
  }

  render() {
    return html`
      <header>
        <div class="header-inner">
          <div class="brand">
            <div class="logo">📘</div>
            <div>
              <div class="brand-text-title">Planner Fit</div>
              <div class="brand-text-sub">Plan • log • reflect</div>
            </div>
          </div>
        </div>

        <div class="header-inner">
          <div class="tabs-wrap">
            <div class="tabs">
              ${this.renderTab('planner', 'Planner')}
              ${this.renderTab('log', 'Exercise Log')}
              ${this.renderTab('diary', 'Diary')}
              ${this.renderTab('bmi', 'BMI Calculator')} <!-- 👈 NEW TAB -->
            </div>
          </div>
        </div>
      </header>

      <div class="page">
        ${this.activeTab === 'planner'
          ? html`<planner-page></planner-page>`
          : this.activeTab === 'log'
          ? html`<exercise-log-page></exercise-log-page>`
          : this.activeTab === 'diary'
          ? html`<diary-page></diary-page>`
          : html`<bmi-calculator-page></bmi-calculator-page>`}
      </div>
    `;
  }
}
