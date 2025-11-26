// src/planner-fit-app.ts
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './planner-page';
import './exercise-log-page';
import './diary-page';
import './calorie-tracker-page';

type TabId = 'planner' | 'log' | 'diary' | 'calories';

@customElement('planner-fit-app')
export class PlannerFitApp extends LitElement {
  @state() private activeTab: TabId = 'planner';

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: linear-gradient(to bottom, #eef2ff, #f7f9ff, #ffffff);
      color: #020617;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text',
        'Segoe UI', sans-serif;
      box-sizing: border-box;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

    .page {
      max-width: 1100px;
      margin: 0 auto;
      padding: 12px 12px 32px;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 10;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid #e5e7eb;
      margin: 0 -12px 8px;
      padding: 8px 12px 10px;
    }

    .header-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .logo {
      width: 36px;
      height: 36px;
      border-radius: 16px;
      background: linear-gradient(135deg, #6366f1, #a855f7);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 20px rgba(88, 80, 236, 0.35);
      font-size: 18px;
    }

    .brand-text-title {
      font-size: 14px;
      font-weight: 600;
    }

    .brand-text-sub {
      font-size: 11px;
      color: #6b7280;
    }

    .settings-btn {
      border-radius: 999px;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      padding: 6px 10px;
      font-size: 11px;
      color: #4b5563;
      display: none;
      align-items: center;
      gap: 2px;
      cursor: pointer;
    }

    @media (min-width: 640px) {
      .settings-btn {
        display: inline-flex;
      }
    }

    .tabs-wrap {
      margin-top: 8px;
      overflow-x: auto;
      padding-bottom: 4px;
    }

    .tabs {
      display: inline-flex;
      gap: 4px;
      padding: 3px;
      border-radius: 999px;
      background: #e5e7eb;
      font-size: 11px;
    }

    .tab {
      border-radius: 999px;
      padding: 6px 12px;
      cursor: pointer;
      color: #6b7280;
      border: none;
      background: transparent;
      font: inherit;
      white-space: nowrap;
    }

    .tab.active {
      background: #ffffff;
      color: #4f46e5;
      box-shadow: 0 2px 8px rgba(148, 163, 184, 0.5);
    }
  `;

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
          <button class="settings-btn">
            <span>Settings</span>
            <span>⚙️</span>
          </button>
        </div>

        <div class="header-inner">
          <div class="tabs-wrap">
            <div class="tabs">
              ${this.renderTab('planner', 'Planner')}
              ${this.renderTab('log', 'Exercise Log')}
              ${this.renderTab('diary', 'Diary')}
              ${this.renderTab('calories', 'Calorie Tracker')}
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
          : html`<calorie-tracker-page></calorie-tracker-page>`}
      </div>
    `;
  }
}
