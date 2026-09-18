(function () {
  "use strict";

  var KEY = "revisao-banco-b1-v1";
  var memoryState = createDefaultState();
  var persistent = true;

  function createDefaultState() {
    return {
      schemaVersion: 1,
      answers: {},
      reviewQueue: [],
      lessons: {},
      videoPositions: {},
      simulations: [],
      drafts: {},
      lastActivity: {}
    };
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function isObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  function normalize(input) {
    if (!isObject(input) || input.schemaVersion !== 1) {
      throw new Error("Formato de progresso incompatível.");
    }
    var output = createDefaultState();
    if (isObject(input.answers)) {
      Object.keys(input.answers).forEach(function (key) {
        var answer = input.answers[key];
        if (/^(?:[1-9]|[1-6][0-9]|7[01])$/.test(key) && isObject(answer) && /^[A-E]$/.test(answer.selected) && typeof answer.correct === "boolean") {
          output.answers[key] = {
            selected: answer.selected,
            correct: answer.correct,
            attempts: Number.isInteger(answer.attempts) && answer.attempts > 0 ? answer.attempts : 1,
            date: typeof answer.date === "string" ? answer.date : ""
          };
        }
      });
    }
    output.reviewQueue = Array.isArray(input.reviewQueue) ? input.reviewQueue.filter(function (id, index, list) {
      return Number.isInteger(id) && id > 0 && id <= 71 && id !== 68 && list.indexOf(id) === index;
    }) : [];
    if (isObject(input.lessons)) Object.keys(input.lessons).forEach(function (key) { if (/^[1-4]$/.test(key)) output.lessons[key] = input.lessons[key] === true; });
    if (isObject(input.videoPositions)) Object.keys(input.videoPositions).forEach(function (key) { var value = Number(input.videoPositions[key]); if (/^[1-4]$/.test(key) && isFinite(value) && value >= 0) output.videoPositions[key] = value; });
    output.simulations = Array.isArray(input.simulations) ? input.simulations.filter(isObject).slice(-30) : [];
    if (isObject(input.drafts)) Object.keys(input.drafts).forEach(function (key) { if (key === "71" && typeof input.drafts[key] === "string") output.drafts[key] = input.drafts[key].slice(0, 20000); });
    if (isObject(input.lastActivity)) Object.keys(input.lastActivity).forEach(function (key) { if (/^[1-4]$/.test(key) && typeof input.lastActivity[key] === "string") output.lastActivity[key] = input.lastActivity[key]; });
    return output;
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      memoryState = raw ? normalize(JSON.parse(raw)) : createDefaultState();
    } catch (error) {
      persistent = false;
      memoryState = createDefaultState();
    }
  }

  function save(nextState) {
    memoryState = normalize(nextState);
    if (persistent) {
      try {
        localStorage.setItem(KEY, JSON.stringify(memoryState));
      } catch (error) {
        persistent = false;
      }
    }
    return { state: clone(memoryState), persistent: persistent };
  }

  function reset() {
    memoryState = createDefaultState();
    if (persistent) {
      try {
        localStorage.removeItem(KEY);
      } catch (error) {
        persistent = false;
      }
    }
    return { state: clone(memoryState), persistent: persistent };
  }

  function request(event) {
    var detail = event.detail || {};
    var result;
    try {
      if (detail.action === "get") result = { state: clone(memoryState), persistent: persistent };
      if (detail.action === "save") result = save(detail.value);
      if (detail.action === "replace") result = save(normalize(detail.value));
      if (detail.action === "reset") result = reset();
      if (!result) throw new Error("Ação de armazenamento inválida.");
      detail.respond(result);
    } catch (error) {
      detail.respond({ error: error.message || "Falha ao acessar o progresso." });
    }
  }

  load();
  window.addEventListener("review-storage-request", request);
}());
