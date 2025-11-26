// src/exercise-log-page.ts
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface LogExercise {
  id: number;
  name: string;
  completed: boolean;
}

interface LogEntry {
  id: number;
  dateLabel: string;
  durationMinutes: number;
  completionPercent: number; // 0–100
  notes: string;
  exercises: LogExercise[];
}

function todayLabel(): string {
  return new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

const INITIAL_ENTRIES: LogEntry[] = [
  {
    id: 1,
    dateLabel: 'Wednesday, November 19, 2025',
    durationMinutes: 45,
    completionPercent: 67,
    notes: '"Great workout! Felt strong on bench press."',
    exercises: [
      { id: 1, name: 'Bench Press', completed: true },
      { id: 2, name: 'Push-ups', completed: true },
      { id: 3, name: 'Dumbbell Flyes', completed: false },
    ],
  },
  {
    id: 2,
    dateLabel: 'Monday, November 17, 2025',
    durationMinutes: 60,
    completionPercent: 100,
    notes: '"Leg day was tough but rewarding."',
    exercises: [
      { id: 1, name: 'Squats', completed: true },
      { id: 2, name: 'Leg Press', completed: true },
    ],
  },
];

@customElement('exercise-log-page')
export class ExerciseLogPage extends LitElement {
  @state() private logEntries: LogEntry[] = INITIAL_ENTRIES;
  @state() private showNewEntry = false;
  @state() private newNotes = '';

  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    /* top banner */

    .card-gradient {
      border-radius: 24px;
      padding: 14px 16px;
      color: #fff;
      background: linear-gradient(90deg, #22c55e, #16a34a);
      box-shadow: 0 16px 40px rgba(22, 163, 74, 0.35);
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .banner-text-title {
      font-size: 15px;
      font-weight: 600;
    }
    .banner-text-sub {
      font-size: 11px;
      color: #e5f9ed;
    }

    .banner-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .banner-icon {
      width: 32px;
      height: 32px;
      border-radius: 999px;
      background: #16a34a;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    .banner-actions-btn {
      border-radius: 999px;
      border: none;
      padding: 7px 14px;
      font-size: 11px;
      cursor: pointer;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .banner-actions-btn.add {
      background: #16a34a;
      color: #f0fdf4;
      box-shadow: 0 10px 24px rgba(22, 163, 74, 0.5);
    }

    .banner-actions-btn.cancel {
      background: #f3f4f6;
      color: #4b5563;
      border: 1px solid #e5e7eb;
    }

    /* summary cards */

    .card-white {
      margin-top: 10px;
      border-radius: 24px;
      background: #ffffff;
      padding: 16px;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
    }

    .summary-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-top: 4px;
    }

    @media (min-width: 640px) {
      .summary-row {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    .summary-card {
      border-radius: 22px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      padding: 10px 12px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
    }

    .summary-icon {
      width: 32px;
      height: 32px;
      border-radius: 999px;
      background: #dcfce7;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    .summary-label {
      color: #6b7280;
    }
    .summary-value {
      font-size: 13px;
      font-weight: 600;
      color: #111827;
    }

    /* new entry card */

    .new-entry-card {
      margin-top: 10px;
      border-radius: 24px;
      background: #bbf7d0;
      padding: 2px;
      box-shadow: 0 16px 40px rgba(22, 163, 74, 0.25);
    }

    .new-entry-inner {
      border-radius: 22px;
      background: #ffffff;
      padding: 14px 16px 16px;
    }

    .new-entry-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .new-entry-title {
      font-size: 12px;
      font-weight: 600;
      color: #0f172a;
    }

    .new-entry-sub {
      font-size: 11px;
      color: #6b7280;
    }

    .field-label {
      display: block;
      margin-top: 12px;
      margin-bottom: 4px;
      color: #4b5563;
      font-size: 11px;
      font-weight: 500;
    }

    textarea.notes-input {
      width: 100%;
      min-height: 80px;
      border-radius: 18px;
      border: 1px solid #d1d5db;
      background: #f9fafb;
      padding: 8px 10px;
      font-size: 12px;
      font-family: inherit;
      resize: vertical;
      color: #111827;
    }

    textarea.notes-input:focus {
      outline: none;
      border-color: #16a34a;
      background: #ffffff;
      box-shadow: 0 0 0 1px rgba(22, 163, 74, 0.35);
    }

    .save-btn {
      margin-top: 12px;
      width: 100%;
      border-radius: 999px;
      border: none;
      background: #16a34a;
      color: #f0fdf4;
      font-size: 12px;
      font-weight: 600;
      padding: 9px;
      cursor: pointer;
      box-shadow: 0 12px 28px rgba(22, 163, 74, 0.6);
    }

    /* log entry cards */

    .log-card {
      margin-top: 12px;
      border-radius: 24px;
      background: #ffffff;
      box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06);
      overflow: hidden;
    }

    .log-card-header {
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .log-header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .log-date-icon {
      width: 32px;
      height: 32px;
      border-radius: 999px;
      background: #4f46e5;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 18px;
    }

    .log-date-title {
      font-size: 12px;
      font-weight: 600;
      color: #111827;
    }

    .log-date-sub {
      font-size: 11px;
      color: #6b7280;
    }

    .log-badge {
      font-size: 10px;
      padding: 4px 10px;
      border-radius: 999px;
      background: #16a34a;
      color: #f0fdf4;
      font-weight: 500;
      white-space: nowrap;
    }

    .log-badge.partial {
      background: #e5e7eb;
      color: #4b5563;
    }

    .log-body {
      padding: 12px 16px 14px;
      background: #f9fafb;
    }

    .log-exercise-row {
      border-radius: 16px;
      padding: 8px 10px;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      background: #ecfdf5;
      color: #065f46;
    }

    .log-exercise-row.incomplete {
      background: #f3f4f6;
      color: #4b5563;
    }

    .log-check {
      width: 16px;
      height: 16px;
      border-radius: 999px;
      border: 2px solid #16a34a;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      background: #bbf7d0;
    }

    .log-check.incomplete {
      border-color: #d1d5db;
      background: #ffffff;
    }

    .log-notes {
      margin-top: 8px;
      padding: 8px 10px;
      border-radius: 16px;
      background: #ffffff;
      font-size: 11px;
      color: #4b5563;
      font-style: italic;
    }
  `;

  /* derived stats */

  private get totalEntries(): number {
    return this.logEntries.length;
  }

  private get completedToday(): number {
    const label = todayLabel();
    return this.logEntries.filter(
      (e) => e.dateLabel === label && e.completionPercent === 100
    ).length;
  }

  private get thisWeek(): number {
    // simple approximation: number of entries we have
    return this.logEntries.length;
  }

  /* actions */

  private openNewEntry() {
    this.showNewEntry = true;
  }

  private cancelNewEntry() {
    this.showNewEntry = false;
    this.newNotes = '';
  }

  private onNotesInput(e: Event) {
    this.newNotes = (e.target as HTMLTextAreaElement).value;
  }

  private saveEntry(e: Event) {
    e.preventDefault();
    const notes = this.newNotes.trim();
    if (!notes) return;

    const entry: LogEntry = {
      id: Date.now(),
      dateLabel: todayLabel(),
      durationMinutes: 0,
      completionPercent: 0,
      notes,
      exercises: [],
    };

    this.logEntries = [entry, ...this.logEntries];
    this.newNotes = '';
    this.showNewEntry = false;
  }

  /* render helpers */

  private renderSummaryCard(label: string, value: number, icon: string) {
    return html`
      <div class="summary-card">
        <div class="summary-icon">${icon}</div>
        <div>
          <div class="summary-label">${label}</div>
          <div class="summary-value">${value}</div>
        </div>
      </div>
    `;
  }

  private renderLogEntry(entry: LogEntry) {
    const isComplete = entry.completionPercent === 100;
    return html`
      <section class="log-card">
        <div class="log-card-header">
          <div class="log-header-left">
            <div class="log-date-icon">📅</div>
            <div>
              <div class="log-date-title">${entry.dateLabel}</div>
              ${entry.durationMinutes
                ? html`<div class="log-date-sub">
                    ${entry.durationMinutes} minutes
                  </div>`
                : html`<div class="log-date-sub">Notes only</div>`}
            </div>
          </div>
          <div class="log-badge ${isComplete ? '' : 'partial'}">
            ${isComplete
              ? html`100% Complete`
              : html`${entry.completionPercent}% Complete`}
          </div>
        </div>

        <div class="log-body">
          ${entry.exercises.map((ex) => {
            const cls = ex.completed ? '' : 'incomplete';
            return html`
              <div class="log-exercise-row ${cls}">
                <div class="log-check ${cls}">
                  ${ex.completed ? html`✓` : null}
                </div>
                <div>${ex.name}</div>
              </div>
            `;
          })}
          <div class="log-notes">${entry.notes}</div>
        </div>
      </section>
    `;
  }

  render() {
    return html`
      <!-- Banner with Add / Cancel -->
      <section class="card-gradient">
        <div class="banner-left">
          <div class="banner-icon">📗</div>
          <div>
            <div class="banner-text-title">Exercise Log</div>
            <div class="banner-text-sub">
              Track your completed workouts.
            </div>
          </div>
        </div>

        ${this.showNewEntry
          ? html`
              <button
                class="banner-actions-btn cancel"
                type="button"
                @click=${this.cancelNewEntry}
              >
                Cancel
              </button>
            `
          : html`
              <button
                class="banner-actions-btn add"
                type="button"
                @click=${this.openNewEntry}
              >
                <span>+</span>
                <span>Add Entry</span>
              </button>
            `}
      </section>

      <!-- Summary -->
      <section class="card-white">
        <div class="summary-row">
          ${this.renderSummaryCard('Total Entries', this.totalEntries, '📅')}
          ${this.renderSummaryCard('Completed Today', this.completedToday, '✅')}
          ${this.renderSummaryCard('This Week', this.thisWeek, '📈')}
        </div>
      </section>

      <!-- New Entry Form -->
      ${this.showNewEntry
        ? html`
            <section class="new-entry-card">
              <div class="new-entry-inner">
                <div class="new-entry-header">
                  <div>
                    <div class="new-entry-title">+ New Log Entry</div>
                    <div class="new-entry-sub">${todayLabel()}</div>
                  </div>
                </div>

                <form @submit=${this.saveEntry}>
                  <label class="field-label">Workout Notes</label>
                  <textarea
                    class="notes-input"
                    .value=${this.newNotes}
                    @input=${this.onNotesInput}
                    placeholder="How did your workout go? Any achievements or challenges?"
                  ></textarea>

                  <button type="submit" class="save-btn">Save Entry</button>
                </form>
              </div>
            </section>
          `
        : null}

      <!-- Existing log entries -->
      ${this.logEntries.map((entry) => this.renderLogEntry(entry))}
    `;
  }
}
