// src/diary-page.ts
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { DiaryEntry, Mood, INITIAL_DIARY } from './models';

@customElement('diary-page')
export class DiaryPage extends LitElement {
  @state() private diaryEntries: DiaryEntry[] = [...INITIAL_DIARY];
  @state() private newMood: Mood = 'Good';
  @state() private newDiaryText = '';
  @state() private showNewEntryForm = false;

  static styles = css`
    :host {
      display: block;
      color: #020617;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text',
        'Segoe UI', sans-serif;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    .card-gradient {
      border-radius: 24px;
      padding: 18px 18px;
      color: #fff;
      background: linear-gradient(90deg, #fb7185, #ec4899, #a855f7);
      box-shadow: 0 16px 40px rgba(236, 72, 153, 0.4);
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .card-gradient-main-title {
      font-size: 18px;
      font-weight: 700;
    }

    .card-gradient-sub {
      font-size: 11px;
      color: #fee2e2;
      margin-top: 4px;
    }

    .new-entry-btn {
      border-radius: 999px;
      border: none;
      background: #ec4899;
      background-image: linear-gradient(90deg, #f97316, #ec4899);
      color: #ffffff;
      padding: 8px 18px;
      font-size: 12px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      box-shadow: 0 10px 24px rgba(248, 113, 113, 0.6);
      white-space: nowrap;
    }

    .new-entry-btn span:first-child {
      font-size: 14px;
    }

    .card-white {
      margin-top: 12px;
      border-radius: 24px;
      background: #ffffff;
      padding: 16px;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
    }

    .stat-chip-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
    }

    @media (min-width: 640px) {
      .stat-chip-row {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    .stat-chip {
      border-radius: 18px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      padding: 10px;
      font-size: 11px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .stat-icon {
      width: 26px;
      height: 26px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fee2e2;
    }

    .stat-title {
      color: #6b7280;
    }

    .stat-value {
      font-size: 13px;
      font-weight: 600;
      color: #111827;
    }

    .section {
      margin-top: 12px;
      border-radius: 24px;
      background: #ffffff;
      padding: 16px;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
    }

    .section-title {
      font-size: 12px;
      font-weight: 600;
      color: #0f172a;
    }

    .section-sub {
      font-size: 11px;
      color: #6b7280;
    }

    .new-entry-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .cancel-chip {
      border-radius: 999px;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      padding: 6px 14px;
      font-size: 11px;
      color: #4b5563;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      white-space: nowrap;
    }

    .mood-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      margin-top: 10px;
    }

    @media (min-width: 640px) {
      .mood-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }

    .mood-btn {
      border-radius: 18px;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      padding: 8px 6px;
      font-size: 11px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      transition: background 0.15s ease, border-color 0.15s ease,
        box-shadow 0.15s ease;
    }

    .mood-btn.active {
      border-color: #3b82f6;
      background: #eff6ff;
      box-shadow: 0 0 0 1px #3b82f6;
    }

    .mood-emoji {
      font-size: 18px;
    }

    .diary-input {
      margin-top: 10px;
      width: 100%;
      min-height: 120px;
      border-radius: 18px;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      padding: 12px 14px;
      font-size: 12px;
      font-family: inherit;
      resize: vertical;
      color: #111827;
    }

    .diary-input:focus {
      outline: none;
      border-color: #fb7185;
      background: #ffffff;
      box-shadow: 0 0 0 1px rgba(248, 113, 113, 0.4);
    }

    .save-btn {
      margin-top: 12px;
      width: 100%;
      border-radius: 999px;
      border: none;
      background: linear-gradient(90deg, #fb7185, #ec4899);
      color: #ffffff;
      font-size: 12px;
      font-weight: 600;
      padding: 9px;
      cursor: pointer;
      box-shadow: 0 12px 28px rgba(236, 72, 153, 0.4);
    }

    .diary-entry-card {
      margin-top: 10px;
      border-radius: 22px;
      background: #fee2e2;
      padding: 12px 14px;
      box-shadow: 0 10px 30px rgba(248, 113, 113, 0.2);
    }

    .diary-entry-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .diary-entry-date {
      font-size: 12px;
      font-weight: 600;
      color: #111827;
    }

    .diary-entry-mood {
      border-radius: 999px;
      background: #dcfce7;
      padding: 4px 10px;
      font-size: 11px;
      color: #15803d;
      font-weight: 500;
      white-space: nowrap;
    }

    .diary-entry-text {
      margin-top: 8px;
      font-size: 12px;
      color: #374151;
    }

    .diary-entry-icon {
      width: 30px;
      height: 30px;
      border-radius: 999px;
      background: #fb7185;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin-right: 6px;
    }
  `;

  /* ---------- derived stats ---------- */

  private get totalEntries() {
    return this.diaryEntries.length;
  }

  private get greatDays() {
    return this.diaryEntries.filter((e) => e.mood === 'Great').length;
  }

  // simple prototype: just count all entries as "this week"
  private get thisWeek() {
    return this.diaryEntries.length;
  }

  /* ---------- handlers ---------- */

  private setMood(mood: Mood) {
    this.newMood = mood;
  }

  private onDiaryInput(e: Event) {
    this.newDiaryText = (e.target as HTMLTextAreaElement).value;
  }

  private startNewEntry() {
    this.showNewEntryForm = true;
    this.newMood = 'Good';
    this.newDiaryText = '';
  }

  private cancelNewEntry() {
    this.showNewEntryForm = false;
    this.newMood = 'Good';
    this.newDiaryText = '';
  }

  private saveDiary(e: Event) {
    e.preventDefault();
    if (!this.newDiaryText.trim()) return;

    const todayLabel = new Date().toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    const entry: DiaryEntry = {
      id: Date.now(),
      dateLabel: todayLabel,
      mood: this.newMood,
      text: this.newDiaryText.trim(),
    };

    this.diaryEntries = [entry, ...this.diaryEntries];
    this.cancelNewEntry();
  }

  /* ---------- render ---------- */

  render() {
    const todayLabel = new Date().toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    return html`
      <!-- Header -->
      <section class="card-gradient">
        <div>
          <div class="card-gradient-main-title">Diary</div>
          <div class="card-gradient-sub">Reflect on your fitness journey.</div>
        </div>
        <button class="new-entry-btn" @click=${this.startNewEntry}>
          <span>＋</span>
          <span>New Entry</span>
        </button>
      </section>

      <!-- Stats -->
      <section class="card-white">
        <div class="stat-chip-row">
          ${this.renderStatChip('Total Entries', this.totalEntries, '💗')}
          ${this.renderStatChip('Great Days', this.greatDays, '😊')}
          ${this.renderStatChip('This Week', this.thisWeek, '💜')}
        </div>
      </section>

      <!-- New entry card -->
      ${this.showNewEntryForm
        ? html`
            <section class="section">
              <div class="new-entry-header">
                <div style="display:flex;align-items:center;gap:8px;">
                  <div class="diary-entry-icon">💗</div>
                  <div>
                    <div class="section-title">New Diary Entry</div>
                    <div class="section-sub">${todayLabel}</div>
                  </div>
                </div>
                <button class="cancel-chip" @click=${this.cancelNewEntry}>
                  ✕ Cancel
                </button>
              </div>

              <div style="margin-top:14px;">
                <div class="section-title" style="font-size:12px;">
                  How are you feeling?
                </div>
                <div class="mood-grid">
                  ${this.renderMoodButton('Great', '😄')}
                  ${this.renderMoodButton('Good', '🙂')}
                  ${this.renderMoodButton('Okay', '😐')}
                  ${this.renderMoodButton('Tough', '😵‍💫')}
                </div>
              </div>

              <div style="margin-top:14px;">
                <div class="section-title" style="font-size:12px;">
                  Your Thoughts &amp; Feelings
                </div>
                <textarea
                  class="diary-input"
                  .value=${this.newDiaryText}
                  @input=${this.onDiaryInput}
                  placeholder="How did you feel during and after your workout? What’s on your mind?"
                ></textarea>
              </div>

              <button class="save-btn" @click=${this.saveDiary}>
                Save Entry
              </button>
            </section>
          `
        : null}

      <!-- Existing entries -->
      ${this.diaryEntries.map((entry) => this.renderDiaryEntry(entry))}
    `;
  }

  private renderStatChip(label: string, value: number, icon: string) {
    return html`
      <div class="stat-chip">
        <div class="stat-icon">${icon}</div>
        <div>
          <div class="stat-title">${label}</div>
          <div class="stat-value">${value}</div>
        </div>
      </div>
    `;
  }

  private renderMoodButton(label: Mood, emoji: string) {
    const active = this.newMood === label;
    return html`
      <button
        type="button"
        class=${`mood-btn ${active ? 'active' : ''}`}
        @click=${() => this.setMood(label)}
      >
        <div class="mood-emoji">${emoji}</div>
        <div>${label}</div>
      </button>
    `;
  }

  private renderDiaryEntry(entry: DiaryEntry) {
    const moodEmoji =
      entry.mood === 'Great'
        ? '😄'
        : entry.mood === 'Good'
        ? '🙂'
        : entry.mood === 'Okay'
        ? '😐'
        : '😵‍💫';

    return html`
      <section class="diary-entry-card">
        <div class="diary-entry-header">
          <div style="display:flex;align-items:center;gap:8px;">
            <div class="diary-entry-icon">💗</div>
            <div class="diary-entry-date">${entry.dateLabel}</div>
          </div>
          <div class="diary-entry-mood">${moodEmoji} ${entry.mood}</div>
        </div>
        <div class="diary-entry-text">${entry.text}</div>
      </section>
    `;
  }
}
