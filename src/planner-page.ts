// src/planner-page.ts
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { DAYS, MUSCLE_GROUPS, PlannerDay, PlannerExercise } from './models';

@customElement('planner-page')
export class PlannerPage extends LitElement {
  @state() private selectedDayId: string = 'Mon';
  @state() private days: PlannerDay[] = [...DAYS];

  @state() private showExerciseForm = false;
  @state() private newExerciseName = '';
  @state() private newExerciseSets = '3';
  @state() private newExerciseReps = '10';
  @state() private newExerciseMuscleGroup = 'Chest';
  @state() private showWeeklySummary = true;

  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

    .card-gradient {
      border-radius: 24px;
      padding: 14px 16px;
      color: #fff;
      background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899);
      box-shadow: 0 16px 40px rgba(79, 70, 229, 0.35);
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

    .day-row {
      display: flex;
      gap: 8px;
      margin-top: 12px;
      overflow-x: auto;
      padding-bottom: 3px;
    }

    .day-pill {
      min-width: 52px;
      border-radius: 999px;
      border: 1px solid #e5e7eb;
      background: #ffffff;
      padding: 6px 12px;
      font-size: 11px;
      color: #4b5563;
      cursor: pointer;
      text-align: center;
      white-space: nowrap;
    }

    .day-pill.active {
      border: none;
      background: linear-gradient(90deg, #6366f1, #a855f7);
      color: #ffffff;
      box-shadow: 0 10px 18px rgba(79, 70, 229, 0.4);
    }

    .exercise-row {
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 20px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      padding: 8px 10px;
      margin-top: 6px;
    }

    .exercise-number {
      width: 30px;
      height: 30px;
      border-radius: 12px;
      background: linear-gradient(135deg, #6366f1, #a855f7);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 600;
    }

    .exercise-main {
      flex: 1;
      min-width: 0;
    }

    .exercise-name {
      font-size: 12px;
      font-weight: 600;
      color: #0f172a;
    }

    .exercise-meta {
      font-size: 11px;
      color: #6b7280;
    }

    .exercise-tag {
      font-size: 10px;
      padding: 3px 8px;
      border-radius: 999px;
      background: #fee2e2;
      color: #b91c1c;
      white-space: nowrap;
    }

    .exercise-delete {
      font-size: 14px;
      color: #ef4444;
      cursor: pointer;
    }

    .summary-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
      margin-top: 10px;
    }

    @media (min-width: 640px) {
      .summary-row {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    .summary-card {
      border-radius: 18px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      padding: 10px 10px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
    }

    .summary-icon {
      width: 30px;
      height: 30px;
      border-radius: 999px;
      background: #e0e7ff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .summary-label {
      color: #6b7280;
    }

    .summary-value {
      font-size: 13px;
      font-weight: 600;
      color: #111827;
    }

    /* add exercise card */

    .add-card {
      margin-top: 10px;
      border-radius: 24px;
      background: linear-gradient(135deg, #eef2ff, #fef2ff);
      padding: 1px;
      box-shadow: 0 16px 40px rgba(129, 140, 248, 0.25);
    }

    .add-card-inner {
      border-radius: 23px;
      background: #ffffff;
      padding: 16px 18px 18px;
    }

    .add-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 10px;
    }

    .add-card-title {
      font-size: 12px;
      font-weight: 600;
      color: #0f172a;
    }

    .add-card-sub {
      font-size: 11px;
      color: #6b7280;
    }

    .add-cancel-chip {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 11px;
      padding: 6px 10px;
      border-radius: 999px;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      color: #4b5563;
      cursor: pointer;
      white-space: nowrap;
    }

    .add-form-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-top: 8px;
      font-size: 11px;
    }

    @media (min-width: 640px) {
      .add-form-grid--row {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    .field-label {
      display: block;
      margin-bottom: 4px;
      color: #4b5563;
      font-size: 11px;
      font-weight: 500;
    }

    .input-text,
    .input-number {
      width: 100%;
      border-radius: 999px;
      border: 1px solid #d1d5db;
      background: #f9fafb;
      padding: 7px 10px;
      font-size: 11px;
      color: #111827;
      font-family: inherit;
    }

    .input-text:focus,
    .input-number:focus,
    .select-input:focus {
      outline: none;
      background: #ffffff;
      border-color: #6366f1;
      box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.4);
    }

    .select-wrapper {
      position: relative;
      width: 100%;
    }

    .select-input {
      width: 100%;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      border-radius: 999px;
      border: 1px solid #fecaca;
      background: #fef2f2;
      padding: 7px 30px 7px 30px;
      font-size: 11px;
      color: #b91c1c;
      font-family: inherit;
      cursor: pointer;
    }

    .select-dot {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: #fb7185;
    }

    .select-chevron {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 10px;
      color: #6b7280;
      pointer-events: none;
    }

    .add-submit-btn {
      margin-top: 14px;
      width: 100%;
      border-radius: 999px;
      border: none;
      background: linear-gradient(90deg, #6366f1, #a855f7);
      color: #ffffff;
      font-size: 12px;
      font-weight: 600;
      padding: 9px;
      cursor: pointer;
      box-shadow: 0 14px 32px rgba(79, 70, 229, 0.45);
    }

    .add-submit-btn span:first-child {
      margin-right: 4px;
    }

    .placeholder {
      margin-top: 18px;
      border-radius: 20px;
      border: 1px dashed #e5e7eb;
      background: #f9fafb;
      padding: 28px 16px;
      text-align: center;
      font-size: 12px;
      color: #6b7280;
    }
  `;

  private get selectedDay(): PlannerDay {
    return this.days.find((d) => d.id === this.selectedDayId) ?? this.days[0];
  }

  private get totalExercises(): number {
    return this.days.reduce((sum, d) => sum + d.exercises.length, 0);
  }

  private get activeDays(): number {
    return this.days.filter((d) => d.exercises.length > 0).length;
  }

  private setDay(id: string) {
    this.selectedDayId = id;
  }

  private openExerciseForm() {
    this.showExerciseForm = true;
  }

  private toggleWeeklySummary() {
    this.showWeeklySummary = !this.showWeeklySummary;
  }

  private cancelExerciseForm() {
    this.showExerciseForm = false;
    this.newExerciseName = '';
    this.newExerciseSets = '3';
    this.newExerciseReps = '10';
    this.newExerciseMuscleGroup = 'Chest';
  }

  private onExerciseNameInput(e: Event) {
    this.newExerciseName = (e.target as HTMLInputElement).value;
  }

  private onExerciseSetsInput(e: Event) {
    this.newExerciseSets = (e.target as HTMLInputElement).value;
  }

  private onExerciseRepsInput(e: Event) {
    this.newExerciseReps = (e.target as HTMLInputElement).value;
  }

  private onExerciseMuscleGroupInput(e: Event) {
    this.newExerciseMuscleGroup = (e.target as HTMLSelectElement).value;
  }

  private saveExercise(e: Event) {
    e.preventDefault();
    const name = this.newExerciseName.trim();
    if (!name) return;

    const sets = Number(this.newExerciseSets) || 0;
    const reps = Number(this.newExerciseReps) || 0;
    const dayId = this.selectedDayId;

    const currentDay = this.days.find((d) => d.id === dayId);
    const nextOrder = (currentDay?.exercises.length ?? 0) + 1;

    const newExercise: PlannerExercise = {
      id: Date.now(),
      order: nextOrder,
      name,
      sets,
      reps,
      muscleGroup: this.newExerciseMuscleGroup.trim() || 'General',
    };

    this.days = this.days.map((d) =>
      d.id === dayId ? { ...d, exercises: [...d.exercises, newExercise] } : d
    );

    this.cancelExerciseForm();
  }

  private deleteExercise(dayId: string, exId: number) {
    this.days = this.days.map((d) => {
      if (d.id !== dayId) return d;
      const updated = d.exercises.filter((e) => e.id !== exId);
      const reordered = updated.map((e, idx) => ({ ...e, order: idx + 1 }));
      return { ...d, exercises: reordered };
    });
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

  render() {
    const day = this.selectedDay;

    return html`
      <section class="card-gradient">
        <div style="font-size: 15px; font-weight: 600;">Weekly Workout Plan</div>
        <div style="margin-top:4px;font-size:11px;color:#e0e7ff;">
          Build your perfect training schedule.
        </div>
      </section>

      <section class="card-white">
        <div class="section-title">Select Day</div>
        <div class="day-row">
          ${this.days.map(
            (d) => html`
              <button
                class=${`day-pill ${d.id === this.selectedDayId ? 'active' : ''}`}
                @click=${() => this.setDay(d.id)}
              >
                ${d.id}
              </button>
            `
          )}
        </div>
      </section>

      <section class="section">
        <div
          style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;"
        >
          <div>
            <div class="section-title">${day.label}</div>
            <div class="section-sub">
              ${day.exercises.length} exercises planned
            </div>
          </div>

          ${this.showExerciseForm
            ? html`
                <button class="add-cancel-chip" @click=${this.cancelExerciseForm}>
                  <span>✕</span>
                  <span>Cancel</span>
                </button>
              `
            : html`
                <button
                  style="
                    border-radius:999px;
                    border:none;
                    padding:7px 12px;
                    font-size:11px;
                    color:#fff;
                    background:linear-gradient(90deg,#6366f1,#a855f7);
                    box-shadow:0 10px 24px rgba(79,70,229,0.4);
                    cursor:pointer;
                  "
                  @click=${this.openExerciseForm}
                >
                  + Add Exercise
                </button>
              `}
        </div>

        ${day.exercises.length === 0
          ? html`
              <div class="placeholder">
                <div
                  style="
                    width:48px;height:48px;border-radius:999px;
                    margin:0 auto 10px;
                    background:#e5e7eb;
                    display:flex;align-items:center;justify-content:center;
                    color:#4f46e5;
                  "
                >
                  🧬
                </div>
                <div>No exercises planned for this day</div>
                <div style="margin-top:4px;">Click "Add Exercise" to get started</div>
              </div>
            `
          : html`
              ${day.exercises.map(
                (ex) => html`
                  <div class="exercise-row">
                    <div class="exercise-number">${ex.order}</div>
                    <div class="exercise-main">
                      <div class="exercise-name">${ex.name}</div>
                      <div class="exercise-meta">
                        ${ex.sets} sets × ${ex.reps} reps
                      </div>
                    </div>
                    <div class="exercise-tag">${ex.muscleGroup}</div>
                    <div
                      class="exercise-delete"
                      title="Delete"
                      @click=${() => this.deleteExercise(day.id, ex.id)}
                    >
                      🗑
                    </div>
                  </div>
                `
              )}
            `}
      </section>

      ${this.showExerciseForm
        ? html`
            <section class="add-card">
              <div class="add-card-inner">
                <div class="add-card-header">
                  <div>
                    <div class="add-card-title">+ Add New Exercise</div>
                    <div class="add-card-sub">
                      Add to ${day.label}'s workout
                    </div>
                  </div>
                  <button class="add-cancel-chip" @click=${this.cancelExerciseForm}>
                    <span>✕</span>
                    <span>Cancel</span>
                  </button>
                </div>

                <form @submit=${this.saveExercise}>
                  <div class="add-form-grid">
                    <div>
                      <label class="field-label">Exercise Name</label>
                      <input
                        class="input-text"
                        type="text"
                        placeholder="e.g., Bench Press"
                        .value=${this.newExerciseName}
                        @input=${this.onExerciseNameInput}
                      />
                    </div>
                  </div>

                  <div class="add-form-grid">
                    <div>
                      <label class="field-label">Category</label>
                      <div class="select-wrapper">
                        <span class="select-dot"></span>
                        <select
                          class="select-input"
                          .value=${this.newExerciseMuscleGroup}
                          @change=${this.onExerciseMuscleGroupInput}
                        >
                          ${MUSCLE_GROUPS.map(
                            (group) => html`<option value=${group}>${group}</option>`
                          )}
                        </select>
                        <span class="select-chevron">⌄</span>
                      </div>
                    </div>
                  </div>

                  <div class="add-form-grid add-form-grid--row">
                    <div>
                      <label class="field-label">Sets</label>
                      <input
                        class="input-number"
                        type="number"
                        min="1"
                        .value=${this.newExerciseSets}
                        @input=${this.onExerciseSetsInput}
                      />
                    </div>
                    <div>
                      <label class="field-label">Reps</label>
                      <input
                        class="input-number"
                        type="number"
                        min="1"
                        .value=${this.newExerciseReps}
                        @input=${this.onExerciseRepsInput}
                      />
                    </div>
                  </div>

                  <button type="submit" class="add-submit-btn">
                    <span>+</span>
                    <span>Add Exercise</span>
                  </button>
                </form>
              </div>
            </section>
          `
        : null}

      <section class="section">
        <div
          style="
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:8px;
            cursor:pointer;
          "
          @click=${this.toggleWeeklySummary}
        >
          <div style="display:flex;align-items:center;gap:8px;">
            <div class="summary-icon">🎯</div>
            <div>
              <div class="section-title">Weekly Summary</div>
            </div>
          </div>
          <div style="font-size:11px;color:#6b7280;">
            ${this.showWeeklySummary ? '⌃' : '⌄'}
          </div>
        </div>

        ${this.showWeeklySummary
          ? html`
              <div class="summary-row">
                ${this.renderSummaryCard('Total Exercises', this.totalExercises, '🎯')}
                ${this.renderSummaryCard('Active Days', this.activeDays, '🧬')}
                ${this.renderSummaryCard('Today', day.exercises.length, '🔥')}
              </div>
            `
          : null}
      </section>
    `;
  }
}
