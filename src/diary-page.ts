import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { DiaryEntry, Mood, INITIAL_DIARY } from './models';
import globalStyles from './global.css?raw';

@customElement('diary-page')
export class DiaryPage extends LitElement {
  @state() private diaryEntries: DiaryEntry[] = [...INITIAL_DIARY];
  @state() private newMood: Mood = 'Good';
  @state() private newDiaryText = '';
  @state() private showNewEntryForm = false;

  static styles = unsafeCSS(globalStyles);

  private get totalEntries() {
    return this.diaryEntries.length;
  }

  private get greatDays() {
    return this.diaryEntries.filter((e) => e.mood === 'Great').length;
  }

  private get thisWeek() {
    return this.diaryEntries.length;
  }

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

  render() {
    const todayLabel = new Date().toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    return html`
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

      <section class="card-white">
        <div class="stat-chip-row">
          ${this.renderStatChip('Total Entries', this.totalEntries, '💗')}
          ${this.renderStatChip('Great Days', this.greatDays, '😊')}
          ${this.renderStatChip('This Week', this.thisWeek, '💜')}
        </div>
      </section>

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
