// bmi-calculator-page.ts
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import globalStyles from './global.css?raw';

type BmiUnit = 'imperial' | 'metric';

@customElement('bmi-calculator-page')
export class BmiCalculatorPage extends LitElement {
  static styles = unsafeCSS(globalStyles);

  @state() private unit: BmiUnit = 'imperial';

  // imperial inputs
  @state() private weightLbs = '';
  @state() private heightFeet = '';
  @state() private heightInches = '';

  // metric inputs
  @state() private weightKg = '';
  @state() private heightCm = '';

  @state() private bmiValue: number | null = null;
  @state() private bmiCategory: string | null = null;
  @state() private bmiMessage: string | null = null;
  @state() private healthyRange: string | null = null;

  private setUnit(unit: BmiUnit) {
    this.unit = unit;
    // optional: keep values but reset result so user knows to recalc
    this.bmiValue = null;
    this.bmiCategory = null;
    this.bmiMessage = null;
    this.healthyRange = null;
  }

  private onSubmit(e: Event) {
    e.preventDefault();

    if (this.unit === 'imperial') {
      const w = parseFloat(this.weightLbs);
      const ft = parseFloat(this.heightFeet);
      const inch = parseFloat(this.heightInches || '0');
      const totalInches = ft * 12 + inch;

      if (!w || !totalInches) return;

      const bmi = (703 * w) / (totalInches * totalInches);
      const { category, message } = this.categorizeBmi(bmi);

      const minW = (18.5 * totalInches * totalInches) / 703;
      const maxW = (24.9 * totalInches * totalInches) / 703;

      this.bmiValue = parseFloat(bmi.toFixed(1));
      this.bmiCategory = category;
      this.bmiMessage = message;
      this.healthyRange = `${Math.round(minW)} – ${Math.round(
        maxW,
      )} lbs (BMI 18.5–24.9)`;
    } else {
      const w = parseFloat(this.weightKg);
      const cm = parseFloat(this.heightCm);

      if (!w || !cm) return;

      const m = cm / 100;
      const bmi = w / (m * m);
      const { category, message } = this.categorizeBmi(bmi);

      const minW = 18.5 * m * m;
      const maxW = 24.9 * m * m;

      this.bmiValue = parseFloat(bmi.toFixed(1));
      this.bmiCategory = category;
      this.bmiMessage = message;
      this.healthyRange = `${Math.round(minW)} – ${Math.round(
        maxW,
      )} kg (BMI 18.5–24.9)`;
    }
  }

  private categorizeBmi(bmi: number) {
    if (bmi < 18.5) {
      return {
        category: 'Underweight',
        message: 'You are below the recommended range for your height.',
      };
    }
    if (bmi < 25) {
      return {
        category: 'Healthy range',
        message: 'Nice! Your BMI is in the generally recommended range.',
      };
    }
    if (bmi < 30) {
      return {
        category: 'Overweight',
        message:
          'Slightly above the recommended range. Small, steady changes can help.',
      };
    }
    return {
      category: 'Obese',
      message:
        'Above the recommended range. Consider discussing goals with a healthcare professional.',
    };
  }

  private get resultTagClass() {
    if (this.bmiValue == null) return 'bmi-result-tag bmi-result-tag--info';
    if (this.bmiValue < 18.5 || this.bmiValue >= 30) {
      return 'bmi-result-tag bmi-result-tag--warning';
    }
    if (this.bmiValue >= 25) {
      return 'bmi-result-tag bmi-result-tag--info';
    }
    return 'bmi-result-tag bmi-result-tag--normal';
  }

  render() {
    const bmiDisplay =
      this.bmiValue != null ? this.bmiValue.toFixed(1) : '--';

    return html`
      <!-- Hero / banner -->
      <section class="card-gradient bmi-banner">
        <div class="banner-left">
          <div class="card-gradient-main-title">BMI Calculator</div>
        </div>

        <div class="banner-right">
          <div class="card-gradient-sub">
            Quickly estimate your Body Mass Index and see how it fits into the
            recommended range.
          </div>
        </div>
      </section>

      <!-- Top summary row -->
      <section class="section">
        <div class="summary-row">
          <div class="summary-card">
            <div class="summary-icon">📊</div>
            <div>
              <div class="summary-label">Your BMI</div>
              <div class="summary-value">${bmiDisplay}</div>
            </div>
          </div>

          <div class="summary-card">
            <div class="summary-icon">🏷️</div>
            <div>
              <div class="summary-label">Category</div>
              <div class="summary-value">
                ${this.bmiCategory ?? '—'}
              </div>
            </div>
          </div>

          <div class="summary-card">
            <div class="summary-icon">🎯</div>
            <div>
              <div class="summary-label">Healthy range</div>
              <div class="summary-value">
                ${this.healthyRange ?? '18.5 – 24.9 BMI'}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Calculator form -->
      <section class="section">
        <div
          style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;"
        >
          <div>
            <div class="section-title">Calculate your BMI</div>
            <div class="section-sub">
              Choose your units and enter your current height and weight.
            </div>
          </div>
        </div>

        <form class="bmi-layout" @submit=${this.onSubmit}>
          <div class="bmi-unit-toggle">
            <button
              type="button"
              class="bmi-unit-btn ${this.unit === 'imperial'
                ? 'bmi-unit-btn--active'
                : ''}"
              @click=${() => this.setUnit('imperial')}
            >
              US · lbs / ft / in
            </button>
            <button
              type="button"
              class="bmi-unit-btn ${this.unit === 'metric'
                ? 'bmi-unit-btn--active'
                : ''}"
              @click=${() => this.setUnit('metric')}
            >
              Metric · kg / cm
            </button>
          </div>

          ${this.unit === 'imperial'
            ? html`
                <div class="bmi-form-grid bmi-form-grid--row">
                  <div>
                    <label class="bmi-label">Weight (lbs)</label>
                    <input
                      class="bmi-input"
                      type="number"
                      min="1"
                      .value=${this.weightLbs}
                      @input=${(e: Event) =>
                        (this.weightLbs = (e.target as HTMLInputElement).value)}
                    />
                  </div>

                  <div>
                    <label class="bmi-label">Height</label>
                    <div class="bmi-input-row">
                      <input
                        class="bmi-input"
                        type="number"
                        min="0"
                        placeholder="ft"
                        .value=${this.heightFeet}
                        @input=${(e: Event) =>
                          (this.heightFeet = (e.target as HTMLInputElement)
                            .value)}
                      />
                      <input
                        class="bmi-input"
                        type="number"
                        min="0"
                        placeholder="in"
                        .value=${this.heightInches}
                        @input=${(e: Event) =>
                          (this.heightInches = (e.target as HTMLInputElement)
                            .value)}
                      />
                    </div>
                  </div>
                </div>
              `
            : html`
                <div class="bmi-form-grid bmi-form-grid--row">
                  <div>
                    <label class="bmi-label">Weight (kg)</label>
                    <input
                      class="bmi-input"
                      type="number"
                      min="1"
                      .value=${this.weightKg}
                      @input=${(e: Event) =>
                        (this.weightKg = (e.target as HTMLInputElement).value)}
                    />
                  </div>

                  <div>
                    <label class="bmi-label">Height (cm)</label>
                    <input
                      class="bmi-input"
                      type="number"
                      min="1"
                      .value=${this.heightCm}
                      @input=${(e: Event) =>
                        (this.heightCm = (e.target as HTMLInputElement).value)}
                    />
                  </div>
                </div>
              `}

          <button class="bmi-submit" type="submit">Calculate BMI</button>
        </form>
      </section>

      <!-- Result details -->
      ${this.bmiValue != null
        ? html`
            <section class="section">
              <div
                style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;"
              >
                <div>
                  <div class="section-title">Your result</div>
                  <div class="section-sub">
                    BMI is just one indicator and doesn’t replace professional
                    medical advice.
                  </div>
                </div>
                <div class=${this.resultTagClass}>
                  <span>⭐</span>
                  <span>${this.bmiCategory}</span>
                </div>
              </div>

              <div style="font-size:12px;color:#374151;">
                Your estimated BMI is
                <strong>${this.bmiValue.toFixed(1)}</strong>. ${this
                  .bmiMessage}
              </div>

              ${this.healthyRange
                ? html`
                    <div class="bmi-tip">
                      For your height, a typical “healthy” BMI range (18.5–24.9)
                      corresponds to roughly
                      <strong>${this.healthyRange}</strong>.
                    </div>
                  `
                : null}
            </section>
          `
        : null}
    `;
  }
}
