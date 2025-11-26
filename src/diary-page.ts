// src/diary-page.ts
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { DiaryEntry, INITIAL_DIARY, Mood } from './models';

@customElement('diary-page')
export class DiaryPage extends LitElement {
  @state() private diaryEntries: DiaryEntry[] = INITIAL_DIARY;
  @state() private newMood: Mood = 'Good';
  @state() private newDiaryText = '';

  static styles = css`
    :host {
      display: block;
    }

    .card-gradient {
      border-radius: 24px;
      padding: 14px 16px;
      color: #fff;
      background: linear-gradient(90deg, #fb7185, #ec4899, #a855f7);
      box-shadow: 0 16px 40px rgba(248, 113, 113, 0.4);
      margin-top: 8px;
    }

    .card-white,
    .section {
      margin-top: 10px;
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

    .stat-chip-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
      margin-top: 10px;
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

    .mood-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      margin-top: 8px;
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
    }

    .mood-btn.active {
      border-color: #3b82f6;
      background: #eff6ff;
      box-shadow: 0 0 0 1px #3b82f6;
    }

    .mood-emoji {
      font-size: 18px;
    }

    textarea.diary-input {
      margin-top: 8px;
      width: 100%;
      min-height: 90px;
      border-radius: 18px;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      padding: 8px 10px;
      font-size: 12px;
      font-family: inherit;
      resize: vertical;
      color: #111827;
    }

    textarea.diary-input:focus {
      outline: none;
      border-color: #fb7185;
      background: #ffffff;
    }

    .save-btn {
      margin-top: 10px;
      width: 100%;
      border-radius: 999px;
      border: none;
      background: linear-gradient(90deg, #fb7185, #ec4899);
      color: #ffffff;
      font-size: 12px;
      font-weight: 600;
      padding: 8px;
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
  `;

  private get greatDays(): number {
    return this.diaryEntries.filter((d) => d.mood === 'Great').length;
  }

  private setMood(mood: Mood) {
    this.newMood = mood;
  }

  private onDiaryInput(e: Event) {
    this.newDiaryText = (e.target as HTMLTextAreaElement).value;
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
    this.newDiaryText = '';
    this.newMood = 'Good';
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
            <div
              style="
                width:30px;height:30px;border-radius:999px;
                background:#fb7185;
                display:flex;align-items:center;justify-content:center;
                color:#fff;
              "
            >
              💗
            </div>
            <div class="diary-entry-date">${entry.dateLabel}</div>
          </div>
          <div class="diary-entry-mood">${moodEmoji} ${entry.mood}</div>
        </div>
        <div class="diary-entry-text">${entry.text}</div>
      </section>
    `;
  }

  render() {
    const todayLabel = new Date().toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    return html`
      <section class="card-gradient">
        <div style="font-size:15px;font-weight:600;">Diary</div>
        <div style="margin-top:4px;font-size:11px;color:#fee2e2;">
          Reflect on your fitness journey.
        </div>
      </section>

      <section class="card-white">
        <div class="stat-chip-row">
          ${this.renderStatChip('Total Entries', this.diaryEntries.length, '💗')}
          ${this.renderStatChip('Great Days', this.greatDays, '😊')}
          ${this.renderStatChip('This Week', 2, '💜')}
        </div>
      </section>

      <section class="section">
        <div
          style="display:flex;align-items:center;justify-content:space-between;gap:8px;"
        >
          <div style="display:flex;align-items:center;gap:8px;">
            <div
              style="
                width:32px;height:32px;border-radius:999px;
                background:#fb7185;
                display:flex;align-items:center;justify-content:center;
                color:#fff;
              "
            >
              💗
            </div>
            <div>
              <div class="section-title">New Diary Entry</div>
              <div class="section-sub">${todayLabel}</div>
            </div>
          </div>
          <div
            style="
              font-size:11px;
              padding:4px 10px;
              border-radius:999px;
              background:#f3f4f6;
              color:#6b7280;
            "
          >
            Cancel
          </div>
        </div>

        <div style="margin-top:12px;">
          <div class="section-title" style="font-size:12px;">How are you feeling?</div>
          <div class="mood-grid">
            ${this.renderMoodButton('Great', '😄')}
            ${this.renderMoodButton('Good', '🙂')}
            ${this.renderMoodButton('Okay', '😐')}
            ${this.renderMoodButton('Tough', '😵‍💫')}
          </div>
        </div>

        <div style="margin-top:12px;">
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

        <button class="save-btn" @click=${this.saveDiary}>Save Entry</button>
      </section>

      ${this.diaryEntries.map((entry) => this.renderDiaryEntry(entry))}
    `;
  }
}
