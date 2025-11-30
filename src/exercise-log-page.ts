import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PlannerExercise, PlannerDay } from './models';
import { plannerState } from './shared-state';
import globalStyles from './global.css?raw';
import { PlannerPage } from './planner-page'; // Imported for type safety if needed, though often used via querySelector

type CompletionStatus = 'incomplete' | 'partial' | 'complete';
type Difficulty = 'Easy' | 'Moderate' | 'Hard' | 'Very Hard';

interface LogExercise {
  id: number;
  name: string;
  category: string;
  reps: number;
  weight: string;
  completionStatus: CompletionStatus;
  difficulty: Difficulty;
}

interface LogEntry {
  id: number;
  dateLabel: string;
  durationMinutes: number;
  completionPercent: number;
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

function getDayOfWeek(): string {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayIndex = new Date().getDay();
  return days[dayIndex];
}

// 👇 NEW HELPER FUNCTION: Formats YYYY-MM-DD back to "Wednesday, November..."
function formatDateToLabel(isoDate: string): string {
  if (!isoDate) return todayLabel();
  // Create date using split to avoid timezone shifts
  const [y, m, d] = isoDate.split('-').map(Number);
  const date = new Date(y, m - 1, d); 
  return date.toLocaleDateString(undefined, {
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
    notes: 'Great workout! Felt strong on bench press.',
    exercises: [
      { id: 1, name: 'Bench Press', category: 'Chest', reps: 10, weight: '135 lbs', completionStatus: 'complete', difficulty: 'Moderate' },
      { id: 2, name: 'Push-ups', category: 'Chest', reps: 15, weight: '', completionStatus: 'partial', difficulty: 'Easy' },
      { id: 3, name: 'Dumbbell Flyes', category: 'Chest', reps: 12, weight: '30 lbs', completionStatus: 'incomplete', difficulty: 'Hard' },
    ],
  },
  {
    id: 2,
    dateLabel: 'Monday, November 17, 2025',
    durationMinutes: 60,
    completionPercent: 100,
    notes: 'Leg day was tough but rewarding.',
    exercises: [
      { id: 1, name: 'Squats', category: 'Legs', reps: 12, weight: '225 lbs', completionStatus: 'complete', difficulty: 'Hard' },
      { id: 2, name: 'Leg Press', category: 'Legs', reps: 15, weight: '270 lbs', completionStatus: 'complete', difficulty: 'Moderate' },
    ],
  },
];

@customElement('exercise-log-page')
export class ExerciseLogPage extends LitElement {
  @state() private logEntries: LogEntry[] = INITIAL_ENTRIES;
  @state() private showNewEntry = false;
  @state() private editingEntryId: number | null = null;
  @state() private newNotes = '';
  @state() private todayExercises: PlannerExercise[] = [];
  @state() private exerciseCompletions: Record<number, CompletionStatus> = {};
  @state() private exerciseDifficulties: Record<number, Difficulty> = {};
  @state() private workoutDuration: string = '';
  
  // 👇 NEW STATE for the date picker
  @state() private entryDate = ''; 

  static styles = unsafeCSS(globalStyles);

  private getPlannerExercises(): PlannerExercise[] {
    const dayId = getDayOfWeek();
    let exercises = plannerState.getExercisesForDay(dayId);
    
    if (exercises.length === 0) {
      const plannerPage = document.querySelector('planner-page') as PlannerPage | null;
      if (plannerPage) {
        // Accessing properties via 'any' to bypass strict type checking on the custom element if needed
        const days = (plannerPage as any).plannerDays || (plannerPage as any).days || [];
        if (days.length > 0) {
          const day = days.find((d: PlannerDay) => d.id === dayId);
          exercises = day?.exercises || [];
          plannerState.setDays(days);
        }
      }
    }
    
    return exercises;
  }

  private openNewEntry() {
    let exercises = this.getPlannerExercises();
    
    if (exercises.length === 0) {
      const plannerPage = document.querySelector('planner-page') as any;
      if (plannerPage) {
        const days = plannerPage.plannerDays || plannerPage.days || [];
        if (days.length > 0) {
          plannerState.setDays(days);
          const dayId = getDayOfWeek();
          exercises = plannerState.getExercisesForDay(dayId);
        }
      }
    }
    
    // 👇 NEW: Initialize date to today (YYYY-MM-DD)
    const now = new Date();
    this.entryDate = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, '0'),
      String(now.getDate()).padStart(2, '0')
    ].join('-');
    
    this.todayExercises = exercises;
    exercises.forEach((ex) => {
      this.exerciseCompletions[ex.id] = 'incomplete';
      this.exerciseDifficulties[ex.id] = 'Moderate';
    });
    this.showNewEntry = true;
  }

  private calculateCompletionPercent(entry: LogEntry): number {
    if (entry.exercises.length === 0) return 0;
    let total = 0;
    entry.exercises.forEach((ex) => {
      if (ex.completionStatus === 'complete') total += 100;
      else if (ex.completionStatus === 'partial') total += 50;
      else total += 0;
    });
    return Math.round(total / entry.exercises.length);
  }

  private get filteredEntries(): LogEntry[] {
    return this.logEntries;
  }

  private get totalEntries(): number {
    return this.filteredEntries.length;
  }

  private get completedToday(): number {
    const label = todayLabel();
    return this.filteredEntries.filter(
      (e) => e.dateLabel === label && e.completionPercent === 100
    ).length;
  }

  private get thisWeek(): number {
    return this.filteredEntries.length;
  }

  private cancelNewEntry() {
    this.showNewEntry = false;
    this.editingEntryId = null;
    this.newNotes = '';
    this.todayExercises = [];
    this.exerciseCompletions = {};
    this.exerciseDifficulties = {};
    this.workoutDuration = '';
    this.entryDate = '';
  }

  private onNotesInput(e: Event) {
    this.newNotes = (e.target as HTMLTextAreaElement).value;
  }

  private onDurationInput(e: Event) {
    this.workoutDuration = (e.target as HTMLInputElement).value;
  }

  private onExerciseCompletionChange(exerciseId: number, e: Event) {
    const select = e.target as HTMLSelectElement;
    this.exerciseCompletions[exerciseId] = select.value as CompletionStatus;
    this.requestUpdate();
  }

  private onExerciseDifficultyChange(exerciseId: number, e: Event) {
    const select = e.target as HTMLSelectElement;
    this.exerciseDifficulties[exerciseId] = select.value as Difficulty;
    this.requestUpdate();
  }

  private editEntry(entry: LogEntry) {
    this.editingEntryId = entry.id;
    this.showNewEntry = true;
    this.newNotes = entry.notes;
    this.workoutDuration = entry.durationMinutes.toString();
    
    // 👇 NEW: Parse the existing label back to YYYY-MM-DD for the picker
    const d = new Date(entry.dateLabel);
    if (!isNaN(d.getTime())) {
      this.entryDate = [
        d.getFullYear(),
        String(d.getMonth() + 1).padStart(2, '0'),
        String(d.getDate()).padStart(2, '0')
      ].join('-');
    } else {
      this.entryDate = new Date().toISOString().split('T')[0];
    }
    
    this.todayExercises = entry.exercises.map((ex) => ({
      id: ex.id,
      order: 1,
      name: ex.name,
      sets: 1,
      reps: ex.reps,
      weight: ex.weight || '',
      muscleGroup: ex.category,
    }));
    
    entry.exercises.forEach((ex) => {
      this.exerciseCompletions[ex.id] = ex.completionStatus;
      this.exerciseDifficulties[ex.id] = ex.difficulty;
    });
  }

  private deleteEntry(entryId: number) {
    if (confirm('Are you sure you want to delete this entry?')) {
      this.logEntries = this.logEntries.filter((e) => e.id !== entryId);
    }
  }

  private saveEntry(e: Event) {
    e.preventDefault();
    
    const exercises: LogExercise[] = this.todayExercises.map((ex) => ({
      id: ex.id,
      name: ex.name,
      category: ex.muscleGroup,
      reps: ex.reps,
      weight: ex.weight || '',
      completionStatus: this.exerciseCompletions[ex.id] || 'incomplete',
      difficulty: this.exerciseDifficulties[ex.id] || 'Moderate',
    }));

    const duration = parseInt(this.workoutDuration) || 0;
    const completionPercent = this.calculateCompletionPercent({
      id: 0,
      dateLabel: '',
      durationMinutes: duration,
      completionPercent: 0,
      notes: '',
      exercises,
    });

    // 👇 NEW: Use the picker date logic
    const finalLabel = formatDateToLabel(this.entryDate);

    if (this.editingEntryId) {
      const existingEntry = this.logEntries.find((e) => e.id === this.editingEntryId);
      if (existingEntry) {
        const updatedEntry: LogEntry = {
          ...existingEntry,
          durationMinutes: duration,
          completionPercent,
          dateLabel: finalLabel, // Updated
          notes: this.newNotes.trim(),
          exercises,
        };
        this.logEntries = this.logEntries.map((e) =>
          e.id === this.editingEntryId ? updatedEntry : e
        );
      }
    } else {
      const entry: LogEntry = {
        id: Date.now(),
        dateLabel: finalLabel, // Updated
        durationMinutes: duration,
        completionPercent,
        notes: this.newNotes.trim(),
        exercises,
      };
      this.logEntries = [entry, ...this.logEntries];
    }

    this.cancelNewEntry();
  }

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

  private renderProgressBar(percent: number) {
    return html`
      <div style="width: 100%; height: 8px; background: #e5e7eb; border-radius: 999px; overflow: hidden; margin-top: 4px;">
        <div
          style="height: 100%; background: linear-gradient(90deg, #22c55e, #16a34a); width: ${percent}%; transition: width 0.3s ease;"
        ></div>
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
                : html`<div class="log-date-sub">No duration recorded</div>`}
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="log-badge ${isComplete ? '' : 'partial'}">
              ${isComplete
                ? html`100% Complete`
                : html`${entry.completionPercent}% Complete`}
            </div>
            <button
              style="border-radius: 999px; border: 1px solid #e5e7eb; background: #f9fafb; padding: 6px 10px; font-size: 11px; color: #4b5563; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;"
              @click=${() => this.editEntry(entry)}
              title="Edit Entry"
            >
              ✏️ Edit
            </button>
            <button
              style="border-radius: 999px; border: 1px solid #fee2e2; background: #fef2f2; padding: 6px 10px; font-size: 11px; color: #dc2626; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;"
              @click=${() => this.deleteEntry(entry.id)}
              title="Delete Entry"
            >
              🗑️ Delete
            </button>
          </div>
        </div>

        <div class="log-body">
          ${entry.exercises.map((ex) => {
            const completionPercent =
              ex.completionStatus === 'complete'
                ? 100
                : ex.completionStatus === 'partial'
                ? 50
                : 0;
            const statusColor =
              ex.completionStatus === 'complete'
                ? '#16a34a'
                : ex.completionStatus === 'partial'
                ? '#eab308'
                : '#ef4444';
            const difficultyColor =
              ex.difficulty === 'Easy'
                ? '#22c55e'
                : ex.difficulty === 'Moderate'
                ? '#eab308'
                : ex.difficulty === 'Hard'
                ? '#f97316'
                : '#ef4444';

            return html`
              <div
                style="border-radius: 16px; padding: 10px 12px; margin-bottom: 8px; background: #ffffff; border: 1px solid #e5e7eb;"
              >
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                  <div style="flex: 1;">
                    <div style="font-size: 12px; font-weight: 600; color: #111827;">
                      ${ex.name}
                    </div>
                    <div style="font-size: 11px; color: #6b7280; margin-top: 2px;">
                      ${ex.category} • ${ex.reps} reps${ex.weight ? ` • ${ex.weight}` : ''}
                    </div>
                  </div>
                  <div style="display: flex; gap: 6px; align-items: center;">
                    <div
                      style="font-size: 10px; padding: 4px 8px; border-radius: 999px; background: ${statusColor}20; color: ${statusColor}; font-weight: 500;"
                    >
                      ${ex.completionStatus}
                    </div>
                    <div
                      style="font-size: 10px; padding: 4px 8px; border-radius: 999px; background: ${difficultyColor}20; color: ${difficultyColor}; font-weight: 500;"
                    >
                      ${ex.difficulty}
                    </div>
                  </div>
                </div>
                ${this.renderProgressBar(completionPercent)}
              </div>
            `;
          })}
          ${entry.notes
            ? html`<div class="log-notes">${entry.notes}</div>`
            : null}
        </div>
      </section>
    `;
  }

  render() {
    return html`
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

      <section class="card-white">
        <div class="summary-row">
          ${this.renderSummaryCard('Total Entries', this.totalEntries, '📅')}
          ${this.renderSummaryCard('Completed Today', this.completedToday, '✅')}
          ${this.renderSummaryCard('This Week', this.thisWeek, '📈')}
        </div>
      </section>

      ${this.showNewEntry
        ? html`
            <section class="new-entry-card">
              <div class="new-entry-inner">
                <div class="new-entry-header">
                  <div>
                    <div class="new-entry-title">
                      ${this.editingEntryId ? '✏️ Edit Log Entry' : '+ New Log Entry'}
                    </div>
                    <div class="new-entry-sub" style="margin-top: 6px;">
                      <input 
                        type="date"
                        style="
                          border: 1px solid #e2e8f0; 
                          background: #f8fafc; 
                          border-radius: 8px; 
                          padding: 6px 10px; 
                          font-family: inherit; 
                          font-size: 12px; 
                          color: #475569;
                          outline: none;
                          cursor: pointer;
                        "
                        .value=${this.entryDate}
                        @input=${(e: Event) => this.entryDate = (e.target as HTMLInputElement).value}
                      />
                    </div>
                  </div>
                </div>

                <form @submit=${this.saveEntry}>
                  ${this.todayExercises.length > 0
                    ? html`
                        <div style="margin-top: 16px;">
                          <div class="section-title" style="margin-bottom: 12px;">
                            Planned Exercises for Today
                          </div>
                          ${this.todayExercises.map((ex) => {
                            return html`
                              <div
                                style="border-radius: 18px; padding: 12px; margin-bottom: 10px; background: #f9fafb; border: 1px solid #e5e7eb;"
                              >
                                <div style="margin-bottom: 8px;">
                                  <div style="font-size: 12px; font-weight: 600; color: #111827;">
                                    ${ex.name}
                                  </div>
                                  <div style="font-size: 11px; color: #6b7280; margin-top: 2px;">
                                    ${ex.muscleGroup} • ${ex.sets} sets × ${ex.reps} reps${ex.weight ? ` • ${ex.weight}` : ''}
                                  </div>
                                </div>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                  <div>
                                    <label class="field-label" style="font-size: 10px; margin-bottom: 4px;">
                                      Completion
                                    </label>
                                    <select
                                      class="select-input"
                                      style="width: 100%; border-radius: 12px; padding: 6px 10px; font-size: 11px; border: 1px solid #d1d5db; background: #ffffff;"
                                      .value=${this.exerciseCompletions[ex.id] || 'incomplete'}
                                      @change=${(e: Event) =>
                                        this.onExerciseCompletionChange(ex.id, e)}
                                    >
                                      <option value="incomplete">Incomplete</option>
                                      <option value="partial">Partial</option>
                                      <option value="complete">Complete</option>
                                    </select>
                                  </div>
                                  <div>
                                    <label class="field-label" style="font-size: 10px; margin-bottom: 4px;">
                                      Difficulty
                                    </label>
                                    <select
                                      class="select-input"
                                      style="width: 100%; border-radius: 12px; padding: 6px 10px; font-size: 11px; border: 1px solid #d1d5db; background: #ffffff;"
                                      .value=${this.exerciseDifficulties[ex.id] || 'Moderate'}
                                      @change=${(e: Event) =>
                                        this.onExerciseDifficultyChange(ex.id, e)}
                                    >
                                      <option value="Easy">Easy</option>
                                      <option value="Moderate">Moderate</option>
                                      <option value="Hard">Hard</option>
                                      <option value="Very Hard">Very Hard</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            `;
                          })}
                        </div>
                      `
                    : html`
                        <div
                          style="text-align: center; padding: 24px; color: #6b7280; font-size: 12px;"
                        >
                          No exercises planned for today. Add exercises in the Planner tab first.
                        </div>
                      `}

                  <div style="margin-top: 16px;">
                    <label class="field-label">Workout Duration (minutes)</label>
                    <input
                      type="number"
                      class="input-number"
                      style="width: 100%; border-radius: 18px; padding: 8px 12px; font-size: 12px;"
                      min="0"
                      .value=${this.workoutDuration}
                      @input=${this.onDurationInput}
                      placeholder="e.g., 45"
                    />
                  </div>

                  <div style="margin-top: 12px;">
                    <label class="field-label">Workout Notes</label>
                    <textarea
                      class="notes-input"
                      .value=${this.newNotes}
                      @input=${this.onNotesInput}
                      placeholder="How did your workout go? Any achievements or challenges?"
                    ></textarea>
                  </div>

                  <button type="submit" class="save-btn">Save Entry</button>
                </form>
              </div>
            </section>
          `
        : null}

      ${this.filteredEntries.length > 0
        ? this.filteredEntries.map((entry) => this.renderLogEntry(entry))
        : null}
    `;
  }
}