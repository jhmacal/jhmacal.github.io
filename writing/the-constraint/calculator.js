/**
 * Privilege Exposure Calculator
 * writing/the-constraint/calculator.js
 *
 * Defaults: conversations=26, participants=9, years=5
 * Output 1 (total): 26 * 9 * 52 * 5 = 60,840
 * Output 2 (annual): 26 * 9 * 52    = 12,168
 * Output 3 (people): Math.ceil(26/2) = 13
 */

(function () {
  'use strict';

  var CALCULATOR_HTML = [
    '<div class="calculator">',
    '  <p class="calculator__title">Privilege Exposure Calculator</p>',
    '  <div class="calculator__sliders">',
    '    <div class="slider-row">',
    '      <div class="slider-row__label">',
    '        <span class="slider-row__name">Immigration conversations per week</span>',
    '        <span class="slider-row__value" id="val-conversations">26</span>',
    '      </div>',
    '      <input type="range" id="slider-conversations" min="5" max="80" value="26">',
    '    </div>',
    '    <div class="slider-row">',
    '      <div class="slider-row__label">',
    '        <span class="slider-row__name">Average participants per conversation</span>',
    '        <span class="slider-row__value" id="val-participants">9</span>',
    '      </div>',
    '      <input type="range" id="slider-participants" min="2" max="30" value="9">',
    '    </div>',
    '    <div class="slider-row">',
    '      <div class="slider-row__label">',
    '        <span class="slider-row__name">Years without embedded counsel</span>',
    '        <span class="slider-row__value" id="val-years">5</span>',
    '      </div>',
    '      <input type="range" id="slider-years" min="1" max="10" value="5">',
    '    </div>',
    '  </div>',
    '  <div class="calculator__outputs">',
    '    <div class="calc-output">',
    '      <span class="calc-output__number" id="out-total">60,840</span>',
    '      <span class="calc-output__label">Total unprotected communications</span>',
    '    </div>',
    '    <div class="calc-output">',
    '      <span class="calc-output__number" id="out-annual">12,168</span>',
    '      <span class="calc-output__label">Per year</span>',
    '    </div>',
    '    <div class="calc-output">',
    '      <span class="calc-output__number" id="out-people">13</span>',
    '      <span class="calc-output__label">Distinct individuals reached annually</span>',
    '    </div>',
    '  </div>',
    '</div>'
  ].join('\n');

  function formatNumber(n) {
    return n.toLocaleString('en-US');
  }

  function compute(conversations, participants, years) {
    var annual = conversations * participants * 52;
    var total = annual * years;
    var people = Math.ceil(conversations / 2);
    return { total: total, annual: annual, people: people };
  }

  function updateOutputs() {
    var conversations = parseInt(document.getElementById('slider-conversations').value, 10);
    var participants  = parseInt(document.getElementById('slider-participants').value, 10);
    var years         = parseInt(document.getElementById('slider-years').value, 10);

    // Update displayed slider values
    document.getElementById('val-conversations').textContent = conversations;
    document.getElementById('val-participants').textContent  = participants;
    document.getElementById('val-years').textContent         = years;

    // Compute and display outputs
    var result = compute(conversations, participants, years);
    document.getElementById('out-total').textContent  = formatNumber(result.total);
    document.getElementById('out-annual').textContent = formatNumber(result.annual);
    document.getElementById('out-people').textContent = formatNumber(result.people);
  }

  function init() {
    var container = document.getElementById('calculator-container');
    if (!container) return;

    container.innerHTML = CALCULATOR_HTML;

    document.getElementById('slider-conversations').addEventListener('input', updateOutputs);
    document.getElementById('slider-participants').addEventListener('input', updateOutputs);
    document.getElementById('slider-years').addEventListener('input', updateOutputs);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
