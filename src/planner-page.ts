import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { DAYS, MUSCLE_GROUPS, PlannerDay, PlannerExercise } from './models';
import { plannerState } from './shared-state';
import globalStyles from './global.css?raw';

@customElement('planner-page')
export class PlannerPage extends LitElement {
  @state() private selectedDayId: string = 'Mon';
  @state() private days: PlannerDay[] = [...DAYS];
  
  connectedCallback() {
    super.connectedCallback();
    plannerState.setDays(this.days);
  }
  
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('days')) {
      plannerState.setDays(this.days);
    }
  }
  
  get plannerDays(): PlannerDay[] {
    return this.days;
  }

  @state() private showExerciseForm = false;
  @state() private newExerciseName = '';
  @state() private newExerciseSets = '3';
  @state() private newExerciseReps = '10';
  @state() private newExerciseWeight = '';
  @state() private newExerciseMuscleGroup = 'Chest';
  @state() private showWeeklySummary = true;

  static styles = unsafeCSS(globalStyles);

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
    this.newExerciseWeight = '';
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

  private onExerciseWeightInput(e: Event) {
    this.newExerciseWeight = (e.target as HTMLInputElement).value;
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
      weight: this.newExerciseWeight.trim() || '',
      muscleGroup: this.newExerciseMuscleGroup.trim() || 'General',
    };

    const updatedDays = this.days.map((d) =>
      d.id === dayId ? { ...d, exercises: [...d.exercises, newExercise] } : d
    );
    
    this.days = updatedDays;
    
    plannerState.setDays(this.days);

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
                <div>${d.id}</div>
                ${d.exercises.length > 0
                  ? html`<div style="font-size: 9px; margin-top: 2px; opacity: 0.9;">
                      ${d.exercises.length} ${d.exercises.length === 1 ? 'exercise' : 'exercises'}
                    </div>`
                  : null}
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
                        ${ex.sets} sets × ${ex.reps} reps${ex.weight ? ` • ${ex.weight}` : ''}
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

                  <div class="add-form-grid">
                    <div>
                      <label class="field-label">Weight</label>
                      <input
                        class="input-text"
                        type="text"
                        placeholder="e.g., 135 lbs"
                        .value=${this.newExerciseWeight}
                        @input=${this.onExerciseWeightInput}
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
