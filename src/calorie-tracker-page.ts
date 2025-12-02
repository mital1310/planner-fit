import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import globalStyles from './global.css?raw';

type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snacks';

interface FoodItem {
  id: number;
  meal: MealType;
  name: string;
  amount: number;
  unit: string;
  caloriesPerServing: number;
  totalCalories: number;
}

interface DayMeals {
  [meal: string]: FoodItem[];
}

@customElement('calorie-tracker-page')
export class CalorieTrackerPage extends LitElement {
  static styles = unsafeCSS(globalStyles);

  @state() private weekStart: Date = this.getStartOfWeek(new Date());
  @state() private selectedDateKey: string = this.toDateKey(new Date());
  @state() private dailyGoal = 2000;

  // form state
  @state() private formMeal: MealType = 'breakfast';
  @state() private formFoodName = '';
  @state() private formAmount = '1';
  @state() private formUnit = '';
  @state() private formCaloriesPerServing = '';
  @state() private showQuickAdd = false;

  // data
  @state() private mealsByDate: Record<string, DayMeals> = {};
  @state() private lastId = 1;

  // ---------- date helpers ----------

  private getStartOfWeek(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay(); // 0 = Sun
    const diff = d.getDate() - day; // Sunday as first day
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  private toDateKey(date: Date): string {
    return date.toISOString().slice(0, 10); // YYYY-MM-DD
  }

  private fromDateKey(key: string): Date {
    return new Date(key + 'T00:00:00');
  }

  private formatDayHeader(dateKey: string): string {
    const d = this.fromDateKey(dateKey);
    return d.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  }

  private formatWeekDayShort(date: Date): string {
    return date.toLocaleDateString(undefined, { weekday: 'short' });
  }

  private isToday(key: string): boolean {
    return key === this.toDateKey(new Date());
  }

  private getWeekDates(): Date[] {
    const days: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(this.weekStart);
      d.setDate(d.getDate() + i);
      days.push(d);
    }
    return days;
  }

  // ---------- data helpers ----------

  private getDayMeals(dateKey: string): DayMeals {
    if (!this.mealsByDate[dateKey]) {
      this.mealsByDate = {
        ...this.mealsByDate,
        [dateKey]: {
          breakfast: [],
          lunch: [],
          dinner: [],
          snacks: [],
        },
      };
    }
    return this.mealsByDate[dateKey];
  }

  private getDayTotal(dateKey: string): number {
    const dayMeals = this.getDayMeals(dateKey);
    return (['breakfast', 'lunch', 'dinner', 'snacks'] as MealType[])
      .flatMap((m) => dayMeals[m] || [])
      .reduce((sum, f) => sum + f.totalCalories, 0);
  }

  private getWeekTotal(): number {
    return this.getWeekDates()
      .map((d) => this.getDayTotal(this.toDateKey(d)))
      .reduce((a, b) => a + b, 0);
  }

  private getMealTotal(dateKey: string, meal: MealType): number {
    const dayMeals = this.getDayMeals(dateKey);
    return (dayMeals[meal] || []).reduce((sum, f) => sum + f.totalCalories, 0);
  }

  private getDistribution(dateKey: string): {
    breakfast: number;
    lunch: number;
    dinner: number;
    snacks: number;
  } {
    const total = this.getDayTotal(dateKey) || 0;
    const toPercent = (v: number) => (total === 0 ? 0 : Math.round((v / total) * 100));

    return {
      breakfast: toPercent(this.getMealTotal(dateKey, 'breakfast')),
      lunch: toPercent(this.getMealTotal(dateKey, 'lunch')),
      dinner: toPercent(this.getMealTotal(dateKey, 'dinner')),
      snacks: toPercent(this.getMealTotal(dateKey, 'snacks')),
    };
  }

  // ---------- events ----------

  private handlePrevWeek() {
    const d = new Date(this.weekStart);
    d.setDate(d.getDate() - 7);
    this.weekStart = this.getStartOfWeek(d);
  }

  private handleNextWeek() {
    const d = new Date(this.weekStart);
    d.setDate(d.getDate() + 7);
    this.weekStart = this.getStartOfWeek(d);
  }

  private handleSelectDay(date: Date) {
    this.selectedDateKey = this.toDateKey(date);
  }

  private handleJumpToToday() {
    const today = new Date();
    this.weekStart = this.getStartOfWeek(today);
    this.selectedDateKey = this.toDateKey(today);
  }

  private handleGoalInput(e: Event) {
    const val = Number((e.target as HTMLInputElement).value || 0);
    this.dailyGoal = isNaN(val) || val <= 0 ? 0 : val;
  }

  private handleFormMealChange(meal: MealType) {
    this.formMeal = meal;
  }

  private handleInputChange(field: 'name' | 'amount' | 'unit' | 'calories', e: Event) {
    const value = (e.target as HTMLInputElement).value;

    switch (field) {
      case 'name':
        this.formFoodName = value;
        break;
      case 'amount':
        this.formAmount = value;
        break;
      case 'unit':
        this.formUnit = value;
        break;
      case 'calories':
        this.formCaloriesPerServing = value;
        break;
    }
  }

  private handleQuickAdd(food: {
    name: string;
    amount: number;
    unit: string;
    caloriesPerServing: number;
  }) {
    // Fill the form with preset
    this.formFoodName = food.name;
    this.formAmount = String(food.amount);
    this.formUnit = food.unit;
    this.formCaloriesPerServing = String(food.caloriesPerServing);
  }

  private handleAddFood(e: Event) {
    e.preventDefault();

    const name = this.formFoodName.trim();
    if (!name) return;

    const amount = Number(this.formAmount) || 0;
    const cals = Number(this.formCaloriesPerServing) || 0;

    const totalCalories = amount * cals;

    const newItem: FoodItem = {
      id: this.lastId++,
      meal: this.formMeal,
      name,
      amount,
      unit: this.formUnit.trim(),
      caloriesPerServing: cals,
      totalCalories,
    };

    const dateKey = this.selectedDateKey;
    const dayMeals = this.getDayMeals(dateKey);

    const updatedMealsForType = [...(dayMeals[this.formMeal] || []), newItem];

    this.mealsByDate = {
      ...this.mealsByDate,
      [dateKey]: {
        ...dayMeals,
        [this.formMeal]: updatedMealsForType,
      },
    };

    // reset form except meal
    this.formFoodName = '';
    this.formAmount = '1';
    this.formUnit = '';
    this.formCaloriesPerServing = '';
  }

  private handleDeleteFood(dateKey: string, meal: MealType, id: number) {
    const dayMeals = this.getDayMeals(dateKey);
    const updatedMealsForType = (dayMeals[meal] || []).filter((f) => f.id !== id);

    this.mealsByDate = {
      ...this.mealsByDate,
      [dateKey]: {
        ...dayMeals,
        [meal]: updatedMealsForType,
      },
    };
  }

  // ---------- render helpers ----------

  private renderBanner() {
    return html`
      <section class="card-gradient">
        <div class="banner-left">
          <div class="banner-icon">🔥</div>
          <div>
            <div class="card-gradient-main-title">Calorie Tracker</div>
            <div class="card-gradient-sub">
              Track your daily nutrition and stay on target with your goals.
            </div>
          </div>
        </div>

        <button class="header-cta-chip" @click=${this.handleJumpToToday}>
          Jump to Today
        </button>
      </section>
    `;
  }

  private renderWeekSelector() {
    const weekDates = this.getWeekDates();
    const weekTotal = this.getWeekTotal();
    const selectedDate = this.fromDateKey(this.selectedDateKey);

    return html`
      <section class="cal-week-card">
        <div class="cal-week-header">
          <div class="cal-week-title">Select Day</div>
          <button class="cal-jump-today-btn" @click=${this.handleJumpToToday}>
            Jump to Today
          </button>
        </div>

        <div class="cal-week-nav-row">
          <button class="cal-week-arrow" @click=${this.handlePrevWeek} aria-label="Previous week">
            ‹
          </button>

          <div class="cal-week-current">
            <div class="cal-week-current-day">
              ${selectedDate.toLocaleDateString(undefined, { weekday: 'long' })}
            </div>
            <div class="cal-week-current-sub">
              ${selectedDate.toLocaleDateString(undefined, {
                month: 'long',
                day: 'numeric',
              })}
              <span>${this.isToday(this.selectedDateKey) ? 'Today' : ''}</span>
            </div>
          </div>

          <button class="cal-week-arrow" @click=${this.handleNextWeek} aria-label="Next week">
            ›
          </button>
        </div>

        <div class="cal-week-days">
          ${weekDates.map((d) => {
            const key = this.toDateKey(d);
            const isSelected = key === this.selectedDateKey;
            const isToday = this.isToday(key);
            const dayTotal = this.getDayTotal(key);

            const classes = {
              'cal-week-day-card': true,
              'is-selected': isSelected,
              'is-today': isToday,
            };

            const className = Object.entries(classes)
              .filter(([, v]) => v)
              .map(([k]) => k)
              .join(' ');

            return html`
              <button
                class=${className}
                @click=${() => this.handleSelectDay(d)}
                type="button"
              >
                <div class="cal-week-day-name">${this.formatWeekDayShort(d)}</div>
                <div class="cal-week-day-calories">
                  ${dayTotal > 0 ? `${dayTotal} cal` : '-'}
                </div>
              </button>
            `;
          })}
        </div>

        <div class="cal-week-footer">
          <div>Week Total</div>
          <div class="cal-week-total-value">${weekTotal} calories</div>
        </div>
      </section>
    `;
  }

  private renderSummaryAndProgress() {
    const dateKey = this.selectedDateKey;
    const dayTotal = this.getDayTotal(dateKey);
    const remaining = Math.max(this.dailyGoal - dayTotal, 0);
    const progressPct = this.dailyGoal > 0 ? Math.min(100, Math.round((dayTotal / this.dailyGoal) * 100)) : 0;

    return html`
      <section class="card-white">
        <div class="section-title">
          ${this.fromDateKey(dateKey).toLocaleDateString(undefined, {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div class="section-sub">
          Overview of your calories for the selected day.
        </div>

        <div class="summary-row cal-summary-inner">
          <!-- Total -->
          <div class="summary-card cal-summary-card">
            <div class="summary-icon">📈</div>
            <div>
              <div class="summary-label">Total Calories</div>
              <div class="summary-value">${dayTotal}</div>
              <div class="cal-summary-sub">consumed today</div>
            </div>
          </div>

          <!-- Goal -->
          <div class="summary-card cal-summary-card">
            <div class="summary-icon">🎯</div>
            <div>
              <div class="summary-label">Daily Goal</div>
              <div class="summary-value">
                ${this.dailyGoal}
              </div>
              <div class="cal-goal-edit">
                Goal:
                <input
                  class="input-number"
                  type="number"
                  min="0"
                  style="max-width: 120px; display: inline-block; margin-left: 6px;"
                  .value=${String(this.dailyGoal)}
                  @input=${this.handleGoalInput}
                />
                kcal
              </div>
            </div>
          </div>

          <!-- Remaining -->
          <div class="summary-card cal-summary-card">
            <div class="summary-icon">💚</div>
            <div>
              <div class="summary-label">Remaining</div>
              <div class="summary-value">${remaining}</div>
              <div class="cal-summary-sub">calories left</div>
            </div>
          </div>
        </div>

        <div class="cal-progress-section">
          <div class="cal-progress-label">
            ${this.fromDateKey(dateKey).toLocaleDateString(undefined, {
              weekday: 'long',
            })}'s Progress
            <span class="cal-progress-percent">${progressPct}%</span>
          </div>

          <div class="dist-bar-track">
            <div
              class="dist-bar-fill"
              style=${`width: ${progressPct}%;`}
            ></div>
          </div>
        </div>
      </section>
    `;
  }

  private renderAddFoodCard() {
    const quickFoods = [
      { name: 'Greek Yogurt & Berries', amount: 1, unit: 'bowl', caloriesPerServing: 180 },
      { name: 'Grilled Chicken Salad', amount: 1, unit: 'bowl', caloriesPerServing: 350 },
      { name: 'Veggie Stir Fry', amount: 1, unit: 'plate', caloriesPerServing: 420 },
      { name: 'Apple & Peanut Butter', amount: 1, unit: 'serving', caloriesPerServing: 200 },
    ];

    return html`
      <section class="cal-add-card">
        <div class="add-card-title">Add Food</div>

        <div class="add-meal-tabs">
          ${(['breakfast', 'lunch', 'dinner', 'snacks'] as MealType[]).map((meal) => {
            const isActive = this.formMeal === meal;
            const label =
              meal === 'breakfast'
                ? 'Breakfast'
                : meal === 'lunch'
                ? 'Lunch'
                : meal === 'dinner'
                ? 'Dinner'
                : 'Snacks';

            return html`
              <button
                type="button"
                class="add-meal-tab ${isActive ? 'is-active' : ''}"
                @click=${() => this.handleFormMealChange(meal)}
              >
                ${label}
              </button>
            `;
          })}
        </div>

        <button
          type="button"
          class="quick-add-link"
          @click=${() => (this.showQuickAdd = !this.showQuickAdd)}
        >
          ${this.showQuickAdd ? 'Hide' : 'Quick Add Common Foods'}
        </button>

        ${this.showQuickAdd
          ? html`
              <div class="quick-add-panel">
                ${quickFoods.map(
                  (f) => html`
                    <button
                      type="button"
                      class="quick-add-chip"
                      @click=${() => this.handleQuickAdd(f)}
                    >
                      <div class="quick-add-name">${f.name}</div>
                      <div class="quick-add-meta">
                        ${f.amount} ${f.unit} · ${f.caloriesPerServing} cal / serving
                      </div>
                    </button>
                  `
                )}
              </div>
            `
          : null}

        <form @submit=${this.handleAddFood} style="margin-top: 10px;">
          <label class="field-label">Food Name</label>
          <input
            class="input-text"
            type="text"
            placeholder="e.g., Oatmeal"
            .value=${this.formFoodName}
            @input=${(e: Event) => this.handleInputChange('name', e)}
          />

          <div class="add-form-grid add-form-grid--row">
            <div>
              <label class="field-label">Amount</label>
              <input
                class="input-number"
                type="number"
                min="0"
                step="0.5"
                placeholder="1"
                .value=${this.formAmount}
                @input=${(e: Event) => this.handleInputChange('amount', e)}
              />
            </div>

            <div>
              <label class="field-label">Unit</label>
              <input
                class="input-text"
                type="text"
                placeholder="e.g., cup"
                .value=${this.formUnit}
                @input=${(e: Event) => this.handleInputChange('unit', e)}
              />
            </div>
          </div>

          <label class="field-label">Calories (per serving)</label>
          <input
            class="input-number"
            type="number"
            min="0"
            step="1"
            placeholder="e.g., 150"
            .value=${this.formCaloriesPerServing}
            @input=${(e: Event) => this.handleInputChange('calories', e)}
          />

          <button type="submit" class="add-submit-btn cal-add-btn">
            <span>＋</span>
            <span>Add Food</span>
          </button>
        </form>
      </section>
    `;
  }

  private renderBreakdownCard() {
    const dateKey = this.selectedDateKey;
    const total = this.getDayTotal(dateKey);
    const dist = this.getDistribution(dateKey);

    const hasData = total > 0;

    const makeBar = (label: string, value: number, className: string) => html`
      <div class="dist-row">
        <div class="dist-label">${label}</div>
        <div class="dist-bar-track">
          <div
            class="dist-bar-fill ${className}"
            style=${`width: ${value}%;`}
          ></div>
        </div>
        <div class="dist-percent">${value}%</div>
      </div>
    `;

    const mealTotals = {
      breakfast: this.getMealTotal(dateKey, 'breakfast'),
      lunch: this.getMealTotal(dateKey, 'lunch'),
      dinner: this.getMealTotal(dateKey, 'dinner'),
      snacks: this.getMealTotal(dateKey, 'snacks'),
    };

    return html`
      <section class="cal-breakdown-card">
        <div class="breakdown-header">
          <div class="breakdown-title">Calorie Breakdown</div>
        </div>

        ${!hasData
          ? html`<div class="breakdown-empty">Add foods to see distribution.</div>`
          : html`
              <div class="breakdown-grid">
                <div>
                  <div class="breakdown-section-title">Distribution by Meal</div>
                  <div class="dist-list">
                    ${makeBar('Breakfast', dist.breakfast, 'dist-breakfast')}
                    ${makeBar('Lunch', dist.lunch, 'dist-lunch')}
                    ${makeBar('Dinner', dist.dinner, 'dist-dinner')}
                    ${makeBar('Snacks', dist.snacks, 'dist-snacks')}
                  </div>
                </div>

                <div>
                  <div class="breakdown-section-title">Calories by Meal</div>
                  <div class="cal-bars">
                    ${(['breakfast', 'lunch', 'dinner', 'snacks'] as MealType[]).map(
                      (meal) => {
                        const value = mealTotals[meal];
                        const pct = total === 0 ? 0 : (value / total) * 100;
                        const h = 20 + (120 * pct) / 100; // min height

                        const label =
                          meal === 'breakfast'
                            ? 'Breakfast'
                            : meal === 'lunch'
                            ? 'Lunch'
                            : meal === 'dinner'
                            ? 'Dinner'
                            : 'Snacks';

                        const extraClass =
                          meal === 'breakfast'
                            ? 'cal-breakfast'
                            : meal === 'lunch'
                            ? 'cal-lunch'
                            : meal === 'dinner'
                            ? 'cal-dinner'
                            : 'cal-snacks';

                        return html`
                          <div class="cal-bar">
                            <div
                              class="cal-bar-fill ${extraClass}"
                              style=${`height: ${h}px;`}
                            >
                              <div class="cal-bar-value">
                                ${value > 0 ? value : ''}
                              </div>
                            </div>
                            <div class="cal-bar-label">${label}</div>
                          </div>
                        `;
                      }
                    )}
                  </div>
                </div>
              </div>
            `}
      </section>
    `;
  }

  private renderMealCard(meal: MealType) {
    const dateKey = this.selectedDateKey;
    const dayMeals = this.getDayMeals(dateKey);
    const items = dayMeals[meal] || [];
    const total = this.getMealTotal(dateKey, meal);

    const icon =
      meal === 'breakfast'
        ? '☀️'
        : meal === 'lunch'
        ? '🍲'
        : meal === 'dinner'
        ? '🌙'
        : '🍪';

    const title =
      meal === 'breakfast'
        ? 'Breakfast'
        : meal === 'lunch'
        ? 'Lunch'
        : meal === 'dinner'
        ? 'Dinner'
        : 'Snacks';

    const mealClass =
      meal === 'breakfast'
        ? 'meal-breakfast'
        : meal === 'lunch'
        ? 'meal-lunch'
        : meal === 'dinner'
        ? 'meal-dinner'
        : 'meal-snacks';

    return html`
      <section class="cal-meal-card ${mealClass}">
        <div class="cal-meal-header">
          <div class="cal-meal-heading">
            <div class="cal-meal-icon">${icon}</div>
            <div class="cal-meal-title">${title}</div>
          </div>
          <div class="cal-meal-total">${total} cal</div>
        </div>

        ${items.length === 0
          ? html`<div class="cal-meal-empty">No items added yet</div>`
          : html`
              <div class="cal-meal-list">
                ${items.map(
                  (f) => html`
                    <div class="cal-meal-row">
                      <div class="cal-meal-row-main">
                        <div class="cal-meal-food-name">${f.name}</div>
                        <div class="cal-meal-food-meta">
                          ${f.amount} ${f.unit || ''}
                          <span class="cal-meal-food-sub">
                            · ${f.caloriesPerServing} cal / serving
                          </span>
                        </div>
                      </div>
                      <div class="cal-meal-row-meta">
                        <div class="cal-meal-row-kcal">${f.totalCalories} cal</div>
                        <button
                          type="button"
                          class="exercise-delete"
                          @click=${() => this.handleDeleteFood(this.selectedDateKey, meal, f.id)}
                          aria-label="Remove food"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  `
                )}
              </div>
            `}
      </section>
    `;
  }

  // ---------- main render ----------

  render() {
    return html`
      <div class="page">
        ${this.renderBanner()}
        ${this.renderWeekSelector()}
        ${this.renderSummaryAndProgress()}

        <div class="cal-main-grid">
          ${this.renderAddFoodCard()} ${this.renderBreakdownCard()}
        </div>

        <div class="cal-meals-grid">
          ${this.renderMealCard('breakfast')}
          ${this.renderMealCard('lunch')}
          ${this.renderMealCard('dinner')}
          ${this.renderMealCard('snacks')}
        </div>
      </div>
    `;
  }
}
