(function () {
  "use strict";

  var modules = window.REVIEW_MODULES || [];
  var questions = window.QUESTION_BANK || [];
  var main = document.getElementById("conteudo");
  var statsRoot = document.getElementById("global-stats");
  var storageWarning = document.getElementById("storage-warning");
  var modalRoot = document.getElementById("modal-root");
  var modalContent = document.getElementById("modal-content");
  var moduleTopbar = document.getElementById("module-topbar");
  var moduleTopbarTitle = document.getElementById("module-topbar-title");
  var moduleTopbarStats = document.getElementById("module-topbar-stats");
  var previousFocus = null;
  var state = storageRequest("get").state;
  var currentModuleId = null;
  var activeTab = "lesson";
  var questionIndex = 0;
  var exerciseFilter = "all";
  var topicFilter = "all";
  var simulation = null;
  var reviewOverride = null;
  var reviewSessionIds = null;
  var reviewPassAnswered = {};
  var availableMaterials = [
    "01 - Conceitos de Base de Dados Bancos Relacional e NoSQL.pdf",
    "02. Modelos de Dados Bancos Relacionais.pdf",
    "03 - Modelo Entidade-Relacionamento.pdf",
    "05 - DER .pdf",
    "06 - Modelo Relacional.pdf",
    "08 - Normalização de banco de dados.pdf",
    "Sql Server.pdf",
    "Revisão B1.pdf",
    "RESUMO_01_CONCEITOS_BANCO_DE_DADOS.pdf",
    "RESUMO_02_MODELO_ER_DER.pdf",
    "RESUMO_03_MODELO_RELACIONAL_NORMALIZACAO.pdf",
    "RESUMO_04_SQL_SERVER_COMANDOS.pdf"
  ];
  var complementaryMaterials = {
    1: "RESUMO_01_CONCEITOS_BANCO_DE_DADOS.pdf",
    2: "RESUMO_02_MODELO_ER_DER.pdf",
    3: "RESUMO_03_MODELO_RELACIONAL_NORMALIZACAO.pdf",
    4: "RESUMO_04_SQL_SERVER_COMANDOS.pdf"
  };

  function storageRequest(action, value) {
    var response;
    window.dispatchEvent(new CustomEvent("review-storage-request", {
      detail: { action: action, value: value, respond: function (result) { response = result; } }
    }));
    if (!response || response.error) throw new Error(response ? response.error : "Armazenamento indisponível.");
    return response;
  }

  function save() {
    var result = storageRequest("save", state);
    state = result.state;
    storageWarning.hidden = result.persistent;
    renderStats();
  }

  function element(tag, className, text) {
    var item = document.createElement(tag);
    if (className) item.className = className;
    if (text !== undefined && text !== null) item.textContent = text;
    return item;
  }

  function button(text, className, handler) {
    var item = element("button", "button " + (className || ""), text);
    item.type = "button";
    if (handler) item.addEventListener("click", handler);
    return item;
  }

  function getQuestion(id) {
    return questions.find(function (question) { return question.id === id; });
  }

  function getModule(id) {
    return modules.find(function (module) { return module.id === id; });
  }

  function scoredQuestions(list) {
    return (list || questions).filter(function (question) { return question.scored === true; });
  }

  function answeredScored(list) {
    return scoredQuestions(list).filter(function (question) { return Boolean(state.answers[question.id]); });
  }

  function percent(part, total) {
    return total ? Math.round((part / total) * 100) : 0;
  }

  function countLabel(count, singular, plural) {
    return count + " " + (count === 1 ? singular : plural);
  }

  function renderStats() {
    statsRoot.textContent = "";
    var scored = scoredQuestions();
    var answered = answeredScored(scored);
    var correct = answered.filter(function (question) { return state.answers[question.id].correct; });
    var seen = Object.keys(state.lessons).filter(function (key) { return state.lessons[key]; }).length;
    var progressValue = percent(answered.length, scored.length);
    var summary = element("div", "progress-summary");
    [
      "Progresso " + progressValue + "%",
      seen + "/4 " + (seen === 1 ? "aula" : "aulas"),
      answered.length + "/" + scored.length + " respondidas",
      percent(correct.length, answered.length) + "% acerto",
      countLabel(state.reviewQueue.length, "erro", "erros")
    ].forEach(function (text, index) {
      if (index) summary.appendChild(element("span", "progress-separator", "·"));
      summary.appendChild(element("span", "", text));
    });
    var track = element("div", "progress-track global-progress-track");
    var bar = element("div", "progress-bar"); bar.style.width = progressValue + "%"; track.appendChild(bar);
    statsRoot.append(summary, track);
  }

  function showCompactTopbar(title, summary) {
    document.body.classList.add("module-mode");
    moduleTopbar.hidden = false;
    moduleTopbarTitle.textContent = title;
    moduleTopbarStats.textContent = summary;
  }

  function hideCompactTopbar() {
    document.body.classList.remove("module-mode");
    moduleTopbar.hidden = true;
  }

  function leaveCompactView() {
    if (simulation && document.querySelector(".simulation-card")) {
      confirmAction("Sair do simulado?", "As respostas deste simulado em andamento serão descartadas.", function () {
        closeModal();
        renderHome();
      });
      return;
    }
    renderHome();
  }

  function renderHome() {
    simulation = null;
    reviewOverride = null;
    currentModuleId = null;
    hideCompactTopbar();
    main.textContent = "";
    var hero = element("section", "hero");
    var copy = element("div");
    copy.append(element("p", "eyebrow", "Revisão B1 · Modelagem de Banco de Dados"), element("h1", "", "Trilha de revisão B1"), element("p", "lead", "4 módulos · vídeos explicativos · exercícios do professor · simulado"));
    hero.appendChild(copy);
    main.appendChild(hero);

    var grid = element("section", "module-grid");
    grid.setAttribute("aria-label", "Módulos da revisão");
    modules.forEach(function (module) {
      var moduleQuestions = module.questionIds.map(getQuestion).filter(Boolean);
      var scored = scoredQuestions(moduleQuestions);
      var answered = answeredScored(scored);
      var correct = answered.filter(function (question) { return state.answers[question.id].correct; }).length;
      var done = answered.length === scored.length && scored.length > 0;
      var started = answered.length > 0 || state.lessons[module.id];
      var progressValue = percent(answered.length, scored.length);
      var moduleErrors = state.reviewQueue.filter(function (id) { var question = getQuestion(id); return question && question.module === module.id; }).length;
      var card = element("article", "module-card");
      var cardTop = element("div", "module-card-top");
      cardTop.append(element("span", "module-number", "MÓDULO " + module.order), element("span", "module-percent", progressValue + "%"));
      card.appendChild(cardTop);
      card.append(element("h2", "", module.title), element("p", "muted", module.subtitle));
      var meta = element("div", "card-meta");
      var duration = element("span", "pill", "Vídeo: carregando…");
      duration.dataset.videoDuration = module.id;
      meta.append(
        duration,
        element("span", "pill", countLabel(module.questionIds.length, "atividade", "atividades") + " · " + scored.length + " pontuadas")
      );
      card.appendChild(meta);
      var progress = element("div", "progress-track");
      var bar = element("div", "progress-bar");
      bar.style.width = progressValue + "%";
      progress.appendChild(bar);
      var footerText = done ? answered.length + "/" + scored.length + " pontuadas · Concluído" : answered.length + "/" + scored.length + " pontuadas · " + countLabel(moduleErrors, "erro", "erros");
      card.append(progress, element("p", done ? "status-complete module-progress-copy" : "muted module-progress-copy", footerText));
      card.appendChild(button(started ? "Continuar" : "Começar", "button-primary", function () { openModule(module.id, started ? "exercise" : "lesson"); }));
      grid.appendChild(card);
      loadDuration(module);
    });
    main.appendChild(grid);
    var footer = element("footer", "home-footer");
    footer.append(
      element("span", "", "Projeto educacional independente para apoio à revisão acadêmica."),
      element("span", "", "O progresso fica salvo apenas no seu navegador.")
    );
    main.appendChild(footer);
    main.focus();
  }

  function loadDuration(module) {
    var video = document.createElement("video");
    video.preload = "metadata";
    video.src = "videos/" + module.video;
    video.addEventListener("loadedmetadata", function () {
      var target = document.querySelector('[data-video-duration="' + module.id + '"]');
      if (target) target.textContent = "Vídeo: " + formatDuration(video.duration);
      video.removeAttribute("src");
    });
    video.addEventListener("error", function () {
      var target = document.querySelector('[data-video-duration="' + module.id + '"]');
      if (target) target.textContent = "Vídeo indisponível";
    });
  }

  function formatDuration(seconds) {
    if (!isFinite(seconds)) return "--:--";
    var minutes = Math.floor(seconds / 60);
    var rest = Math.floor(seconds % 60).toString().padStart(2, "0");
    return minutes + ":" + rest;
  }

  function formatLastActivity(value) {
    if (!value) return "ainda não iniciada";
    var date = new Date(value);
    if (isNaN(date.getTime())) return "registrada";
    return date.toLocaleDateString("pt-BR") + " às " + date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  }

  function openModule(id, tab) {
    currentModuleId = id;
    activeTab = tab || "lesson";
    questionIndex = 0;
    exerciseFilter = "all";
    topicFilter = "all";
    reviewSessionIds = null;
    reviewPassAnswered = {};
    renderModule();
  }

  function renderModule() {
    var module = getModule(currentModuleId);
    if (!module) return renderHome();
    var moduleList = scoredQuestions(moduleQuestions(module));
    var answered = answeredScored(moduleList);
    var correct = answered.filter(function (question) { return state.answers[question.id].correct; }).length;
    var errors = state.reviewQueue.filter(function (id) { var question = getQuestion(id); return question && question.module === module.id; }).length;
    showCompactTopbar("Módulo " + module.order + " · " + module.title, answered.length + "/" + moduleList.length + " pontuadas · " + countLabel(correct, "acerto", "acertos") + " · " + countLabel(errors, "erro", "erros") + " · " + percent(answered.length, moduleList.length) + "%");
    main.textContent = "";
    var tabs = element("div", "tabs");
    tabs.setAttribute("role", "tablist");
    [["lesson", "Aula"], ["exercise", "Exercícios"], ["review", "Revisar erros"], ["materials", "Materiais"]].forEach(function (tab) {
      var tabButton = element("button", "tab", tab[1]);
      tabButton.type = "button";
      tabButton.setAttribute("role", "tab");
      tabButton.setAttribute("aria-selected", String(activeTab === tab[0]));
      tabButton.addEventListener("click", function () {
        activeTab = tab[0];
        questionIndex = 0;
        if (activeTab === "review") { reviewSessionIds = null; reviewPassAnswered = {}; }
        renderModule();
      });
      tabs.appendChild(tabButton);
    });
    main.appendChild(tabs);
    if (activeTab === "lesson") renderLesson(module);
    if (activeTab === "exercise") renderExercises(module);
    if (activeTab === "review") renderReview(module);
    if (activeTab === "materials") renderMaterials(module);
    main.focus();
  }

  function renderLesson(module) {
    var panel = element("section", "lesson-layout");
    var videoPanel = element("div", "panel lesson-video-panel");
    videoPanel.append(element("h2", "", "Aula em vídeo"));
    var frame = element("div", "video-frame");
    var video = document.createElement("video");
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;
    video.src = "videos/" + module.video;
    video.setAttribute("aria-label", "Aula do módulo " + module.order + ": " + module.title);
    var lessonDuration = element("span", "pill", "Duração: carregando…");
    video.addEventListener("loadedmetadata", function () {
      lessonDuration.textContent = "Duração: " + formatDuration(video.duration);
      var saved = Number(state.videoPositions[module.id] || 0);
      if (saved > 0 && saved < video.duration - 3) video.currentTime = saved;
    });
    var lastSave = 0;
    video.addEventListener("timeupdate", function () {
      if (Math.abs(video.currentTime - lastSave) >= 5) {
        lastSave = video.currentTime;
        state.videoPositions[module.id] = Math.floor(video.currentTime);
        save();
      }
    });
    video.addEventListener("ended", function () { markLesson(module.id); });
    video.addEventListener("error", function () {
      var message = element("div", "video-error");
      message.append(element("strong", "", "Não foi possível abrir este vídeo."), element("span", "muted", "Confira o arquivo videos/" + module.video));
      frame.appendChild(message);
    });
    frame.appendChild(video);
    videoPanel.appendChild(frame);
    var side = element("aside", "panel lesson-sidebar");
    side.append(element("p", "eyebrow", "Módulo " + module.order), element("h2", "", module.title), element("p", "muted", module.subtitle));
    side.appendChild(lessonDuration);
    var topics = element("ul", "topic-list");
    module.subtitle.split(",").forEach(function (topic) { topics.appendChild(element("li", "", topic.trim())); });
    side.append(element("h3", "", "Tópicos principais"), topics);
    var moduleList = scoredQuestions(moduleQuestions(module));
    var lessonAnswered = answeredScored(moduleList).length;
    side.appendChild(element("p", "muted", lessonAnswered + "/" + moduleList.length + " exercícios respondidos · última atividade: " + formatLastActivity(state.lastActivity[module.id])));
    var lessonProgress = element("div", "progress-track");
    var lessonProgressBar = element("div", "progress-bar"); lessonProgressBar.style.width = percent(lessonAnswered, moduleList.length) + "%"; lessonProgress.appendChild(lessonProgressBar); side.appendChild(lessonProgress);
    side.appendChild(button(state.lessons[module.id] ? "✓ Aula assistida" : "Marcar aula como assistida", state.lessons[module.id] ? "button-success" : "button-primary", function () { markLesson(module.id); renderModule(); }));
    side.appendChild(button("Ir para exercícios", "", function () { activeTab = "exercise"; questionIndex = 0; renderModule(); }));
    panel.append(videoPanel, side);
    main.appendChild(panel);
  }

  function markLesson(id) {
    state.lessons[id] = true;
    state.lastActivity[id] = new Date().toISOString();
    save();
  }

  function moduleQuestions(module) {
    return module.questionIds.map(getQuestion).filter(Boolean);
  }

  function renderExercises(module) {
    var all = moduleQuestions(module);
    var panel = element("section");
    panel.appendChild(buildFilters(all));
    var filtered = all.filter(function (question) {
      var answer = state.answers[question.id];
      if (exerciseFilter === "unanswered" && answer) return false;
      if (exerciseFilter === "correct" && (!answer || !answer.correct)) return false;
      if (exerciseFilter === "wrong" && (!answer || answer.correct)) return false;
      if (topicFilter !== "all" && question.topic !== topicFilter) return false;
      return true;
    });
    if (!filtered.length) {
      var empty = element("div", "panel empty", "Nenhuma questão corresponde a este filtro.");
      if (exerciseFilter !== "all" || topicFilter !== "all") empty.appendChild(button("Voltar para todas", "button-primary", showAllExercises));
      panel.appendChild(empty);
    }
    else {
      questionIndex = Math.min(questionIndex, filtered.length - 1);
      panel.appendChild(renderQuestion(filtered[questionIndex], filtered, "exercise"));
    }
    main.appendChild(panel);
  }

  function showAllExercises() {
    exerciseFilter = "all";
    topicFilter = "all";
    questionIndex = 0;
    activeTab = "exercise";
    renderModule();
  }

  function allRequiredQuestionsAnswered(module) {
    return scoredQuestions(moduleQuestions(module)).every(function (question) { return Boolean(state.answers[question.id]); });
  }

  function buildFilters(list) {
    var toolbar = element("div", "toolbar");
    var filterField = element("div", "status-filters");
    filterField.setAttribute("role", "group");
    filterField.setAttribute("aria-label", "Filtrar questões por status");
    [["all", "Todas"], ["unanswered", "Não respondidas"], ["correct", "Acertadas"], ["wrong", "Erradas"]].forEach(function (entry) {
      var option = button(entry[1], exerciseFilter === entry[0] ? "status-active" : "", function () { exerciseFilter = entry[0]; questionIndex = 0; renderModule(); });
      option.setAttribute("aria-pressed", String(exerciseFilter === entry[0]));
      filterField.appendChild(option);
    });
    var topicField = element("details", "topic-filter");
    var topicSummary = element("summary", "button", "Tópico: " + (topicFilter === "all" ? "Todos" : topicFilter) + " ▾");
    topicField.appendChild(topicSummary);
    var topicPopover = element("div", "topic-popover");
    var topicSearch = document.createElement("input");
    topicSearch.type = "search";
    topicSearch.placeholder = "Buscar tópico";
    topicSearch.setAttribute("aria-label", "Buscar tópico");
    var topicList = element("div", "topic-options");
    var topics = Array.from(new Set(list.map(function (question) { return question.topic; }))).sort();
    [{ value: "all", label: "Todos os tópicos" }].concat(topics.map(function (topic) { return { value: topic, label: topic }; })).forEach(function (entry) {
      var option = button(entry.label, entry.value === topicFilter ? "topic-active" : "", function () { topicFilter = entry.value; questionIndex = 0; topicField.open = false; renderModule(); });
      option.dataset.topicLabel = entry.label.toLocaleLowerCase("pt-BR");
      topicList.appendChild(option);
    });
    topicSearch.addEventListener("input", function () {
      var query = topicSearch.value.trim().toLocaleLowerCase("pt-BR");
      Array.from(topicList.children).forEach(function (option) { option.hidden = option.dataset.topicLabel.indexOf(query) === -1; });
    });
    topicField.addEventListener("keydown", function (event) { if (event.key === "Escape") { topicField.open = false; topicSummary.focus(); } });
    topicList.addEventListener("keydown", function (event) {
      if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].indexOf(event.key) === -1) return;
      var visible = Array.from(topicList.querySelectorAll("button:not([hidden])"));
      var current = visible.indexOf(document.activeElement);
      var direction = (event.key === "ArrowDown" || event.key === "ArrowRight") ? 1 : -1;
      var next = visible[(current + direction + visible.length) % visible.length];
      if (next) { event.preventDefault(); next.focus(); }
    });
    topicPopover.append(topicSearch, topicList);
    topicField.appendChild(topicPopover);
    toolbar.append(filterField, topicField);
    return toolbar;
  }

  function renderQuestion(question, list, context) {
    var card = element("article", "question-card");
    var head = element("div", "question-head");
    var heading = element("div");
    heading.append(element("span", "module-number", "QUESTÃO " + question.id), element("h2", "", question.topic));
    head.append(heading, element("span", "pill", (questionIndex + 1) + " de " + list.length));
    card.appendChild(head);
    var scrollArea = element("div", "question-scroll");
    if (context === "review" || context === "override") scrollArea.appendChild(element("span", "badge", "Revisão de erro · " + list.length + " pendente" + (list.length === 1 ? "" : "s")));
    if (question.id === 15) scrollArea.appendChild(element("span", "badge badge-warning", "⚠️ Enunciado incompleto no material original · não vale ponto"));
    if (!question.scored && question.id !== 15) scrollArea.appendChild(element("span", "badge", "Questão aberta · não vale ponto"));
    scrollArea.appendChild(element("p", "question-text", question.question));
    var responseAction = null;
    if (question.type === "open") renderOpenQuestion(scrollArea, question);
    else responseAction = renderMultipleChoice(scrollArea, question, context);
    card.appendChild(scrollArea);
    var nav = element("div", "question-nav");
    var previous = button("Anterior", "", function () { questionIndex -= 1; rerenderContext(context); });
    previous.disabled = questionIndex === 0;
    var isReviewContext = context === "review" || context === "override";
    var isConfirmed = question.type === "open" || (isReviewContext ? Boolean(reviewPassAnswered[question.id]) : Boolean(state.answers[question.id]));
    var isLast = questionIndex === list.length - 1;
    var isFilteredExercise = context === "exercise" && (exerciseFilter !== "all" || topicFilter !== "all");
    var moduleComplete = allRequiredQuestionsAnswered(getModule(question.module));
    var finalLabel = context === "override" ? "Concluir revisão" : (isFilteredExercise ? "Voltar para todas" : (moduleComplete ? "Concluir módulo" : "Fim desta lista"));
    var next = button(isLast ? finalLabel : "Próxima questão →", "button-primary", function () {
      if (questionIndex === list.length - 1 && context === "override") { toast("Revisão do simulado concluída."); renderHome(); }
      else if (questionIndex === list.length - 1 && isFilteredExercise) showAllExercises();
      else if (questionIndex === list.length - 1) showModuleResult(getModule(question.module));
      else { questionIndex += 1; rerenderContext(context); }
    });
    nav.appendChild(previous);
    if (responseAction) nav.appendChild(responseAction);
    if (isConfirmed) nav.appendChild(next);
    card.appendChild(nav);
    return card;
  }

  function rerenderContext(context) {
    if (context === "override") renderOverrideReview(); else renderModule();
  }

  function renderMultipleChoice(card, question, context) {
    var isReviewContext = context === "review" || context === "override";
    var previous = isReviewContext ? (reviewPassAnswered[question.id] ? state.answers[question.id] : null) : state.answers[question.id];
    var form = document.createElement("form");
    var options = element("fieldset", "options");
    options.appendChild(element("legend", "skip-link", "Escolha uma alternativa"));
    Object.keys(question.options).forEach(function (letter) {
      var label = element("label", "option");
      var input = document.createElement("input");
      input.type = "radio"; input.name = "question-" + question.id; input.value = letter;
      if (previous && previous.selected === letter) input.checked = true;
      if (previous) input.disabled = true;
      var text = element("span", "", letter + ") " + question.options[letter]);
      if (previous && letter === question.answer) label.classList.add("option-correct");
      if (previous && !previous.correct && letter === previous.selected) label.classList.add("option-wrong");
      label.append(input, text); options.appendChild(label);
    });
    form.appendChild(options);
    var action;
    if (!previous) {
      action = button("Confirmar resposta", "button-primary", function () {
        var selected = form.querySelector("input:checked");
        if (!selected) return toast("Escolha uma alternativa antes de confirmar.");
        recordAnswer(question, selected.value);
        if (isReviewContext) reviewPassAnswered[question.id] = true;
        rerenderContext(context);
      });
      action.disabled = true;
      options.addEventListener("change", function () { action.disabled = !form.querySelector("input:checked"); });
    } else {
      form.appendChild(buildFeedback(question, previous));
    }
    card.appendChild(form);
    return action;
  }

  function recordAnswer(question, selected) {
    var correct = selected === question.answer;
    var old = state.answers[question.id];
    state.answers[question.id] = { selected: selected, correct: correct, attempts: old ? old.attempts + 1 : 1, date: new Date().toISOString() };
    if (correct) state.reviewQueue = state.reviewQueue.filter(function (id) { return id !== question.id; });
    else if (state.reviewQueue.indexOf(question.id) === -1) state.reviewQueue.push(question.id);
    state.lastActivity[question.module] = new Date().toISOString();
    save();
  }

  function buildFeedback(question, answer) {
    var box = element("div", "feedback " + (answer.correct ? "feedback-success" : "feedback-error"));
    box.appendChild(element("strong", "", answer.correct ? "✓ Resposta correta" : "✕ Resposta incorreta"));
    if (!answer.correct) box.appendChild(element("p", "", "A correta é " + question.answer + "."));
    box.appendChild(element("p", "muted", (answer.correct ? "Boa. " : "") + compactExplanation(question.answerBasis)));
    if (!question.scored) box.appendChild(element("p", "badge badge-warning", "Esta questão não entra na nota."));
    return box;
  }

  function compactExplanation(text) {
    if (!text || text.length <= 260) return text || "";
    var sentenceEnd = text.indexOf(".");
    if (sentenceEnd > 50 && sentenceEnd < 260) return text.slice(0, sentenceEnd + 1);
    var cut = text.slice(0, 257);
    var lastSpace = cut.lastIndexOf(" ");
    return cut.slice(0, lastSpace > 180 ? lastSpace : 257) + "…";
  }

  function renderOpenQuestion(card, question) {
    var image = document.createElement("img");
    image.className = "der-image"; image.src = "app/assets/q71-der.svg"; image.alt = "DER da questão 71, descrito no texto da página";
    card.appendChild(image);
    var field = element("label", "field", "Seu rascunho (opcional)");
    var textarea = document.createElement("textarea");
    textarea.rows = 8; textarea.value = state.drafts[question.id] || "";
    textarea.addEventListener("change", function () { state.drafts[question.id] = textarea.value; save(); });
    field.appendChild(textarea); card.appendChild(field);
    var answer = element("div", "feedback feedback-info");
    answer.hidden = true;
    answer.append(element("h3", "", "Resposta esperada"), element("pre", "schema-answer", "FUNCIONARIO\n- id_funcionario PK\n- data_nascimento\n- nome\n- cpf\n\nFUNCIONARIO_TELEFONE\n- id_funcionario PK/FK -> FUNCIONARIO.id_funcionario\n- telefone PK\n\nDEPARTAMENTO\n- id_departamento PK\n- nome\n- id_funcionario FK -> FUNCIONARIO.id_funcionario"), element("p", "", "1. Idade é derivado e não vira coluna física por padrão.\n2. Telefone é multivalorado e vira relação própria.\n3. Gerencia é 1:N; a chave de Funcionario migra para Departamento."));
    card.appendChild(button("Mostrar resposta esperada", "button-primary", function (event) { answer.hidden = !answer.hidden; event.currentTarget.textContent = answer.hidden ? "Mostrar resposta esperada" : "Ocultar resposta esperada"; }));
    card.appendChild(answer);
  }

  function renderReview(module) {
    if (reviewSessionIds === null) reviewSessionIds = state.reviewQueue.filter(function (id) { var question = getQuestion(id); return question && question.module === module.id; });
    if (!reviewSessionIds.length) return main.appendChild(element("section", "panel empty", "Nenhum erro pendente neste módulo. Excelente trabalho!"));
    var list = reviewSessionIds.map(getQuestion).filter(Boolean);
    questionIndex = Math.min(questionIndex, list.length - 1);
    main.appendChild(renderQuestion(list[questionIndex], list, "review"));
  }

  function renderMaterials(module) {
    var panel = element("section", "panel");
    panel.append(element("h2", "", "Materiais"), element("p", "muted", "PDFs do professor e resumo complementar disponíveis offline."));
    var requested = module.materials.concat([complementaryMaterials[module.id]]);
    var found = requested.filter(function (name) { return name && availableMaterials.indexOf(name) !== -1; });
    if (!found.length) panel.appendChild(element("p", "empty", "Nenhum PDF deste módulo foi encontrado na pasta. O banco de questões continua disponível normalmente."));
    else {
      var list = element("ul", "material-list");
      found.forEach(function (name) {
        var item = element("li", "material-card");
        item.title = name;
        var isComplement = name.indexOf("RESUMO_") === 0;
        var icon = element("span", "pdf-icon", "PDF");
        var copy = element("div", "material-copy");
        if (isComplement) copy.append(element("span", "badge summary-badge", "Resumo complementar"), element("h3", "", module.title), element("p", "muted", "Material de apoio"));
        else copy.append(element("h3", "", materialTitle(name)), element("p", "muted", "PDF do professor"));
        var actions = element("div", "material-actions");
        var href = "materiais/professor/" + encodeURIComponent(name);
        var link = element("a", "button button-primary", "Abrir PDF"); link.href = href; link.target = "_blank"; link.rel = "noopener noreferrer";
        actions.appendChild(link);
        item.append(icon, copy, actions); list.appendChild(item);
      });
      panel.appendChild(list);
    }
    main.appendChild(panel);
  }

  function materialTitle(name) {
    return name.replace(/\.pdf$/i, "").replace(/^\d+[. -]+/, "").replace(/_/g, " ").trim();
  }

  function showModuleResult(module) {
    var list = scoredQuestions(moduleQuestions(module));
    var answered = answeredScored(list);
    var correct = answered.filter(function (question) { return state.answers[question.id].correct; });
    var wrong = list.filter(function (question) { return state.reviewQueue.indexOf(question.id) !== -1; });
    var content = element("div");
    content.append(element("h2", "", answered.length === list.length ? "Módulo concluído" : "Progresso do módulo"));
    var grid = element("div", "result-grid");
    [[correct.length + "/" + list.length, "Acertos"], [percent(correct.length, list.length) + "%", "Aproveitamento"], [wrong.length, "Erros para revisar"], [answered.length + "/" + list.length, "Respondidas"]].forEach(function (entry) { var stat = element("div", "stat"); stat.append(element("strong", "", entry[0]), element("span", "", entry[1])); grid.appendChild(stat); });
    content.appendChild(grid);
    if (wrong.length) {
      content.appendChild(element("p", "muted", "Tópicos a reforçar: " + Array.from(new Set(wrong.map(function (q) { return q.topic; }))).join(", ")));
      content.appendChild(element("p", "muted", "Questões para revisar: " + wrong.map(function (q) { return q.id; }).join(", ")));
    }
    var actions = element("div", "modal-actions");
    if (wrong.length) actions.appendChild(button("Revisar agora", "button-primary", function () { closeModal(); activeTab = "review"; questionIndex = 0; reviewSessionIds = null; reviewPassAnswered = {}; renderModule(); }));
    actions.appendChild(button("Voltar para o vídeo", "", function () { closeModal(); activeTab = "lesson"; renderModule(); }));
    var nextModule = getModule(module.id + 1);
    if (nextModule) actions.appendChild(button("Próximo módulo", "", function () { closeModal(); openModule(nextModule.id, "lesson"); }));
    content.appendChild(actions); openModal(content);
  }

  function openSimulationChooser() {
    var content = element("div");
    content.append(element("h2", "", "Simulado Geral"), element("p", "muted", "Escolha a quantidade. O feedback aparece somente no final."));
    var balanceLabel = element("label", "simulation-balance");
    var balance = document.createElement("input"); balance.type = "checkbox"; balance.checked = true;
    balanceLabel.append(balance, element("span", "", "Equilibrar por módulo"));
    content.appendChild(balanceLabel);
    var options = element("div", "simulation-options");
    [10, 20, "all"].forEach(function (amount) { options.appendChild(button(amount === "all" ? "Todas" : String(amount), amount === 20 ? "button-primary" : "", function () { closeModal(); startSimulation(amount, balance.checked); })); });
    content.appendChild(options); openModal(content);
  }

  function shuffled(list) {
    var copy = list.slice();
    for (var index = copy.length - 1; index > 0; index -= 1) { var swap = Math.floor(Math.random() * (index + 1)); var value = copy[index]; copy[index] = copy[swap]; copy[swap] = value; }
    return copy;
  }

  function simulationQuestions(amount, balance) {
    if (!balance) {
      var all = shuffled(scoredQuestions());
      return amount === "all" ? all : all.slice(0, amount);
    }
    var groups = modules.map(function (module) { return shuffled(scoredQuestions().filter(function (question) { return question.module === module.id; })); });
    var target = amount === "all" ? scoredQuestions().length : amount;
    var result = [];
    while (result.length < target && groups.some(function (group) { return group.length; })) {
      groups.forEach(function (group) { if (group.length && result.length < target) result.push(group.shift()); });
    }
    return shuffled(result);
  }

  function startSimulation(amount, balance) {
    currentModuleId = null;
    simulation = { questions: simulationQuestions(amount, balance), index: 0, answers: {} };
    renderSimulation();
  }

  function renderSimulation() {
    showCompactTopbar("Simulado Geral", "Questão " + (simulation.index + 1) + "/" + simulation.questions.length + " · feedback no final");
    main.textContent = "";
    var question = simulation.questions[simulation.index];
    var card = element("article", "question-card simulation-card");
    var head = element("div", "question-head");
    var title = element("div"); title.append(element("p", "eyebrow", "Simulado geral"), element("h2", "", "Questão " + (simulation.index + 1) + " de " + simulation.questions.length));
    head.append(title, element("span", "pill", "Módulo " + question.module)); card.appendChild(head);
    var form = document.createElement("form");
    var scrollArea = element("div", "question-scroll");
    scrollArea.appendChild(element("p", "question-text", question.question));
    var options = element("fieldset", "options");
    Object.keys(question.options).forEach(function (letter) { var label = element("label", "option"); var radio = document.createElement("input"); radio.type = "radio"; radio.name = "simulation"; radio.value = letter; radio.checked = simulation.answers[question.id] === letter; label.append(radio, element("span", "", letter + ") " + question.options[letter])); options.appendChild(label); });
    scrollArea.appendChild(options);
    form.appendChild(scrollArea);
    var nav = element("div", "question-nav");
    var quit = button("Sair do simulado", "button-link", function () {
      confirmAction("Sair do simulado?", "As respostas deste simulado em andamento serão descartadas.", function () {
        closeModal();
        renderHome();
      });
    });
    var next = button(simulation.index === simulation.questions.length - 1 ? "Finalizar simulado" : "Salvar e avançar", "button-primary", function () {
      var selected = form.querySelector("input:checked"); if (!selected) return toast("Escolha uma alternativa para continuar.");
      simulation.answers[question.id] = selected.value;
      if (simulation.index < simulation.questions.length - 1) { simulation.index += 1; renderSimulation(); }
      else finishSimulation();
    });
    next.disabled = !form.querySelector("input:checked");
    options.addEventListener("change", function () { next.disabled = !form.querySelector("input:checked"); });
    nav.append(quit, next); form.appendChild(nav); card.appendChild(form); main.appendChild(card); main.focus();
  }

  function finishSimulation() {
    var wrong = [];
    var correct = [];
    simulation.questions.forEach(function (question) {
      if (simulation.answers[question.id] === question.answer) correct.push(question); else wrong.push(question);
    });
    wrong.forEach(function (question) { if (state.reviewQueue.indexOf(question.id) === -1) state.reviewQueue.push(question.id); });
    var perModule = modules.map(function (module) { var list = simulation.questions.filter(function (q) { return q.module === module.id; }); var hits = list.filter(function (q) { return simulation.answers[q.id] === q.answer; }).length; return { id: module.id, hits: hits, total: list.length, percent: percent(hits, list.length) }; });
    state.simulations.push({ date: new Date().toISOString(), total: simulation.questions.length, correct: correct.length, questionIds: simulation.questions.map(function (q) { return q.id; }) });
    save();
    var content = element("div"); content.append(element("h2", "", "Resultado do simulado"), element("p", "lead", "Geral: " + percent(correct.length, simulation.questions.length) + "% · " + correct.length + "/" + simulation.questions.length + " acertos"));
    var grid = element("div", "result-grid"); perModule.forEach(function (result) { var stat = element("div", "stat"); stat.append(element("strong", "", result.total ? result.percent + "%" : "—"), element("span", "", "M" + result.id + " · " + result.hits + "/" + result.total)); grid.appendChild(stat); }); content.appendChild(grid);
    if (wrong.length) content.appendChild(element("p", "muted", "Tópicos fracos: " + Array.from(new Set(wrong.map(function (q) { return q.topic; }))).join(", ")));
    var actions = element("div", "modal-actions");
    if (wrong.length) actions.appendChild(button("Revisar erros deste simulado", "button-primary", function () { closeModal(); reviewOverride = wrong.map(function (q) { return q.id; }); reviewPassAnswered = {}; questionIndex = 0; renderOverrideReview(); }));
    actions.appendChild(button("Voltar ao início", "", function () { closeModal(); renderHome(); })); content.appendChild(actions); openModal(content);
  }

  function renderOverrideReview() {
    var list = (reviewOverride || []).map(getQuestion).filter(Boolean);
    showCompactTopbar("Revisão do simulado", list.length + " erro" + (list.length === 1 ? "" : "s") + " pendente" + (list.length === 1 ? "" : "s"));
    main.textContent = "";
    if (!list.length) main.appendChild(element("section", "panel empty", "Você corrigiu todos os erros deste simulado."));
    else { questionIndex = Math.min(questionIndex, list.length - 1); main.appendChild(renderQuestion(list[questionIndex], list, "override")); }
    main.focus();
  }

  function exportProgress() {
    var data = JSON.parse(JSON.stringify(state));
    data.respostas = data.answers;
    data.acertos = Object.keys(state.answers).filter(function (id) { return state.answers[id].correct; }).map(Number);
    data.erros = state.reviewQueue.slice();
    data.filaRevisao = state.reviewQueue.slice();
    data.aulasAssistidas = data.lessons;
    data.posicoesVideos = data.videoPositions;
    data.historicoSimulados = data.simulations;
    data.data = new Date().toISOString();
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    var date = new Date().toISOString().slice(0, 10);
    link.href = url; link.download = "progresso-revisao-banco-" + date + ".json"; document.body.appendChild(link); link.click(); link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    infoModal("Progresso exportado", "O arquivo JSON foi preparado para download. Guarde-o junto da pasta ou importe-o em outro navegador.");
  }

  function openSettings() {
    var content = element("div", "settings-panel");
    content.append(element("h2", "", "Configurações e dados"), element("p", "muted", "Ferramentas de backup e manutenção do progresso local."));
    var tools = element("div", "settings-actions");
    tools.append(
      button("Exportar progresso", "", function () { closeModal(); exportProgress(); }),
      button("Importar progresso", "", function () { closeModal(); document.getElementById("import-file").click(); })
    );
    var risk = element("section", "risk-zone");
    risk.append(element("h3", "", "Zona de risco"), element("p", "muted", "Esta ação apaga somente os dados desta revisão guardados no navegador."));
    risk.appendChild(button("Resetar todo o progresso", "button-danger-ghost", function () {
      closeModal();
      confirmAction("Resetar todo o progresso?", "Somente os dados desta revisão guardados no navegador serão apagados.", function () { state = storageRequest("reset").state; closeModal(); renderStats(); renderHome(); toast("Progresso resetado."); });
    }));
    content.append(tools, risk);
    openModal(content);
  }

  function importProgress(file) {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      try {
        var parsed = JSON.parse(String(reader.result));
        if (!parsed || parsed.schemaVersion !== 1 || typeof parsed.answers !== "object" || !Array.isArray(parsed.reviewQueue)) throw new Error("Formato inválido");
        confirmAction("Importar este progresso?", "O progresso atual do navegador será substituído.", function () {
          var result = storageRequest("replace", parsed); state = result.state; storageWarning.hidden = result.persistent; closeModal(); renderStats(); renderHome(); toast("Progresso importado com sucesso.");
        });
      } catch (error) { infoModal("Não foi possível importar", "O arquivo não é um progresso válido desta revisão."); }
    });
    reader.addEventListener("error", function () { infoModal("Falha na leitura", "O navegador não conseguiu ler o arquivo selecionado."); });
    reader.readAsText(file);
  }

  function confirmAction(title, message, action) {
    var content = element("div"); content.append(element("h2", "", title), element("p", "muted", message));
    var actions = element("div", "modal-actions"); actions.append(button("Cancelar", "", closeModal), button("Confirmar", "button-primary", action)); content.appendChild(actions); openModal(content);
  }

  function infoModal(title, message) {
    var content = element("div"); content.append(element("h2", "", title), element("p", "muted", message)); var actions = element("div", "modal-actions"); actions.appendChild(button("Entendi", "button-primary", closeModal)); content.appendChild(actions); openModal(content);
  }

  function openModal(content) {
    previousFocus = document.activeElement;
    modalContent.textContent = ""; modalContent.appendChild(content); modalRoot.hidden = false; document.body.classList.add("modal-open");
    var focusable = modalRoot.querySelector("button, input, select, textarea, a[href]"); if (focusable) focusable.focus();
  }

  function closeModal() {
    modalRoot.hidden = true; modalContent.textContent = ""; document.body.classList.remove("modal-open"); if (previousFocus) previousFocus.focus();
  }

  function trapModal(event) {
    if (modalRoot.hidden) return;
    if (event.key === "Escape") return closeModal();
    if (event.key !== "Tab") return;
    var items = Array.from(modalRoot.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]'));
    if (!items.length) return;
    var first = items[0], last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  function toast(message) {
    var region = document.getElementById("toast-region"); var item = element("div", "toast", message); region.appendChild(item); setTimeout(function () { item.remove(); }, 3500);
  }

  document.getElementById("home-button").addEventListener("click", renderHome);
  document.getElementById("module-back-button").addEventListener("click", leaveCompactView);
  document.getElementById("simulation-button").addEventListener("click", openSimulationChooser);
  document.getElementById("settings-button").addEventListener("click", openSettings);
  document.getElementById("import-file").addEventListener("change", function (event) { if (event.target.files[0]) importProgress(event.target.files[0]); event.target.value = ""; });
  document.getElementById("modal-close").addEventListener("click", closeModal);
  modalRoot.addEventListener("click", function (event) { if (event.target === modalRoot) closeModal(); });
  document.addEventListener("click", function (event) {
    document.querySelectorAll("details.topic-filter[open]").forEach(function (details) {
      if (!details.contains(event.target)) details.open = false;
    });
  });
  document.addEventListener("keydown", trapModal);

  storageWarning.hidden = storageRequest("get").persistent;
  renderStats();
  renderHome();
}());
