const sourceNames = {
  sheet: "z listy pytań",
  notatki: "z notatek"
};

function sourceTagClass(source) {
  if (source === "notatki") return "tag-notatki";
  if (source === "ai") return "tag-ai";
  return "tag-sheet";
}

const speculativeQuestionIds = new Set([]);

const state = {
  view: "quiz",
  query: "",
  category: "all",
  source: "all",
  showAnswers: false,
  repeatOnly: false,
  order: QUESTIONS.map((question) => question.id),
  flashcardQuery: "",
  flashcardCategory: "all",
  flashcardSource: "all",
  flashcardOrder: FLASHCARDS.map((card) => card.id),
  flashcardIndex: 0,
  flashcardFlipped: false,
  examCount: 20,
  examQuestionIds: [],
  examFinished: false,
  examScore: null,
  diagramBlocks: readDiagramBlocks(),
  diagramTaskId: DIAGRAM_TASKS[0]?.id || "",
  diagramSolutionShown: false,
  sortId: SORTING_DIAGRAMS[0]?.id || "",
  sortOrder: [],
  sortChecked: false,
  sortModelShown: false
};

const revealedAnswers = new Set();
const checkResults = {};
const userAnswers = {};
const progressKey = "algorytmyQuizProgress";
let progress = readProgress();

const elements = {
  quizViewButton: document.querySelector("#quizViewButton"),
  flashcardsViewButton: document.querySelector("#flashcardsViewButton"),
  examViewButton: document.querySelector("#examViewButton"),
  quizToolbar: document.querySelector("#quizToolbar"),
  quizArea: document.querySelector("#quizArea"),
  flashcardArea: document.querySelector("#flashcardArea"),
  examArea: document.querySelector("#examArea"),
  searchInput: document.querySelector("#searchInput"),
  categorySelect: document.querySelector("#categorySelect"),
  sourceSelect: document.querySelector("#sourceSelect"),
  showAnswersToggle: document.querySelector("#showAnswersToggle"),
  repeatOnlyToggle: document.querySelector("#repeatOnlyToggle"),
  shuffleButton: document.querySelector("#shuffleButton"),
  resetButton: document.querySelector("#resetButton"),
  visibleCount: document.querySelector("#visibleCount"),
  questionList: document.querySelector("#questionList"),
  emptyState: document.querySelector("#emptyState"),
  progressText: document.querySelector("#progressText"),
  flashcardSearchInput: document.querySelector("#flashcardSearchInput"),
  flashcardCategorySelect: document.querySelector("#flashcardCategorySelect"),
  flashcardSourceSelect: document.querySelector("#flashcardSourceSelect"),
  flashcardCounter: document.querySelector("#flashcardCounter"),
  flashcardCard: document.querySelector("#flashcardCard"),
  flashcardSide: document.querySelector("#flashcardSide"),
  flashcardFront: document.querySelector("#flashcardFront"),
  flashcardBack: document.querySelector("#flashcardBack"),
  flashcardImage: document.querySelector("#flashcardImage"),
  flashcardDiagram: document.querySelector("#flashcardDiagram"),
  prevFlashcardButton: document.querySelector("#prevFlashcardButton"),
  flipFlashcardButton: document.querySelector("#flipFlashcardButton"),
  nextFlashcardButton: document.querySelector("#nextFlashcardButton"),
  shuffleFlashcardsButton: document.querySelector("#shuffleFlashcardsButton"),
  flashcardList: document.querySelector("#flashcardList"),
  flashcardListCount: document.querySelector("#flashcardListCount"),
  flashcardEmptyState: document.querySelector("#flashcardEmptyState"),
  examSetupForm: document.querySelector("#examSetupForm"),
  examCountInput: document.querySelector("#examCountInput"),
  startExamButton: document.querySelector("#startExamButton"),
  finishExamButton: document.querySelector("#finishExamButton"),
  examStatusText: document.querySelector("#examStatusText"),
  examResultPanel: document.querySelector("#examResultPanel"),
  examQuestionList: document.querySelector("#examQuestionList"),
  examEmptyState: document.querySelector("#examEmptyState"),
  diagramViewButton: document.querySelector("#diagramViewButton"),
  diagramArea: document.querySelector("#diagramArea"),
  diagramLegend: document.querySelector("#diagramLegend"),
  diagramPalette: document.querySelector("#diagramPalette"),
  diagramEditorList: document.querySelector("#diagramEditorList"),
  diagramEditorEmpty: document.querySelector("#diagramEditorEmpty"),
  diagramScaffoldButton: document.querySelector("#diagramScaffoldButton"),
  diagramSampleButton: document.querySelector("#diagramSampleButton"),
  diagramCheckButton: document.querySelector("#diagramCheckButton"),
  diagramClearButton: document.querySelector("#diagramClearButton"),
  diagramFeedback: document.querySelector("#diagramFeedback"),
  diagramCanvas: document.querySelector("#diagramCanvas"),
  diagramTaskSelect: document.querySelector("#diagramTaskSelect"),
  diagramTaskBody: document.querySelector("#diagramTaskBody"),
  sortSelect: document.querySelector("#sortSelect"),
  sortNote: document.querySelector("#sortNote"),
  sortShuffleButton: document.querySelector("#sortShuffleButton"),
  sortCheckButton: document.querySelector("#sortCheckButton"),
  sortReconList: document.querySelector("#sortReconList"),
  sortReconFeedback: document.querySelector("#sortReconFeedback"),
  sortScaffoldButton: document.querySelector("#sortScaffoldButton"),
  sortModelButton: document.querySelector("#sortModelButton"),
  sortModelWrap: document.querySelector("#sortModelWrap"),
  sortModelCanvas: document.querySelector("#sortModelCanvas")
};

function initialize() {
  fillCategories();
  fillFlashcardFilters();
  fillDiagramLegend();
  fillDiagramTasks();
  fillSortSelect();
  resetSortOrder();
  bindEvents();
  bindDiagramEvents();
  bindSortEvents();
  render();
  renderFlashcards();
  renderExam();
  renderDiagramBuilder();
  renderDiagramTask();
  renderSort();
  renderView();
}

function fillCategories() {
  const categories = ["all", ...new Set(QUESTIONS.map((question) => question.category))].sort(
    (a, b) => {
      if (a === "all") return -1;
      if (b === "all") return 1;
      return a.localeCompare(b, "pl");
    }
  );

  elements.categorySelect.innerHTML = categories
    .map((category) => {
      const label = category === "all" ? "Wszystkie" : category;
      return `<option value="${escapeAttribute(category)}">${escapeHtml(label)}</option>`;
    })
    .join("");
}

function bindEvents() {
  elements.quizViewButton.addEventListener("click", () => {
    switchView("quiz");
  });

  elements.flashcardsViewButton.addEventListener("click", () => {
    switchView("flashcards");
  });

  elements.examViewButton.addEventListener("click", () => {
    switchView("exam");
  });

  elements.diagramViewButton.addEventListener("click", () => {
    switchView("diagram");
  });

  elements.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    render();
  });

  elements.categorySelect.addEventListener("change", (event) => {
    state.category = event.target.value;
    render();
  });

  elements.flashcardSearchInput.addEventListener("input", (event) => {
    state.flashcardQuery = event.target.value.trim().toLowerCase();
    resetFlashcardPosition();
    renderFlashcards();
  });

  elements.flashcardCategorySelect.addEventListener("change", (event) => {
    state.flashcardCategory = event.target.value;
    resetFlashcardPosition();
    renderFlashcards();
  });

  elements.flashcardSourceSelect.addEventListener("change", (event) => {
    state.flashcardSource = event.target.value;
    resetFlashcardPosition();
    renderFlashcards();
  });

  elements.flashcardCard.addEventListener("click", () => {
    state.flashcardFlipped = !state.flashcardFlipped;
    renderFlashcards();
  });

  elements.flipFlashcardButton.addEventListener("click", () => {
    state.flashcardFlipped = !state.flashcardFlipped;
    renderFlashcards();
  });

  elements.prevFlashcardButton.addEventListener("click", () => {
    moveFlashcard(-1);
  });

  elements.nextFlashcardButton.addEventListener("click", () => {
    moveFlashcard(1);
  });

  elements.shuffleFlashcardsButton.addEventListener("click", () => {
    state.flashcardOrder = shuffle([...state.flashcardOrder]);
    resetFlashcardPosition();
    renderFlashcards();
  });

  elements.flashcardList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-flashcard-id]");
    if (!button) return;

    const filtered = getFilteredFlashcards();
    const index = filtered.findIndex((card) => card.id === button.dataset.flashcardId);
    if (index === -1) return;

    state.flashcardIndex = index;
    state.flashcardFlipped = false;
    renderFlashcards();
    elements.flashcardCard.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  elements.examSetupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    startExam();
  });

  elements.examCountInput.max = String(QUESTIONS.length);
  elements.examCountInput.addEventListener("input", () => {
    state.examCount = getExamCount();
  });

  elements.finishExamButton.addEventListener("click", () => {
    finishExam();
  });

  elements.sourceSelect.addEventListener("change", (event) => {
    state.source = event.target.value;
    render();
  });

  elements.showAnswersToggle.addEventListener("change", (event) => {
    state.showAnswers = event.target.checked;
    render();
  });

  elements.repeatOnlyToggle.addEventListener("change", (event) => {
    state.repeatOnly = event.target.checked;
    render();
  });

  elements.shuffleButton.addEventListener("click", () => {
    state.order = shuffle([...state.order]);
    render();
  });

  elements.resetButton.addEventListener("click", () => {
    state.query = "";
    state.category = "all";
    state.source = "all";
    state.showAnswers = false;
    state.repeatOnly = false;
    state.order = QUESTIONS.map((question) => question.id);
    revealedAnswers.clear();
    elements.searchInput.value = "";
    elements.categorySelect.value = "all";
    elements.sourceSelect.value = "all";
    elements.showAnswersToggle.checked = false;
    elements.repeatOnlyToggle.checked = false;
    render();
  });

  bindAnswerEvents(elements.questionList);
  bindAnswerEvents(elements.examQuestionList);

  elements.questionList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const card = button.closest("[data-question-id]");
    if (!card) return;

    const id = card.dataset.questionId;
    const action = button.dataset.action;

    if (action === "toggle-answer") {
      if (revealedAnswers.has(id)) {
        revealedAnswers.delete(id);
      } else {
        revealedAnswers.add(id);
      }
      render();
    }

    if (action === "check-closed") {
      const question = findQuestion(id);
      if (question) {
        checkResults[id] = evaluateClosedAnswer(question);
      }
      render();
    }

    if (action === "mark-known") {
      progress[id] = progress[id] === "known" ? undefined : "known";
      cleanProgress();
      saveProgress();
      render();
    }

    if (action === "mark-repeat") {
      progress[id] = progress[id] === "repeat" ? undefined : "repeat";
      cleanProgress();
      saveProgress();
      render();
    }
  });
}

function bindAnswerEvents(container) {
  container.addEventListener("input", handleAnswerInput);
  container.addEventListener("change", handleAnswerChange);
}

function handleAnswerInput(event) {
  const field = event.target.closest("[data-answer-field]");
  if (!field) return;

  const card = field.closest("[data-question-id]");
  if (!card) return;

  const id = card.dataset.questionId;
  const kind = field.dataset.answerField;
  userAnswers[id] = userAnswers[id] || {};

  if (kind === "open") {
    userAnswers[id].open = field.value;
  }
}

function handleAnswerChange(event) {
  const field = event.target.closest("[data-answer-field]");
  if (!field) return;

  const card = field.closest("[data-question-id]");
  if (!card) return;

  const id = card.dataset.questionId;
  const question = findQuestion(id);
  if (!question) return;

  const type = getQuestionType(question);
  const hadResult = Boolean(checkResults[id]);
  userAnswers[id] = userAnswers[id] || {};
  delete checkResults[id];

  if (type === "singleChoice") {
    userAnswers[id].choice = field.value;
  }

  if (type === "multiChoice") {
    const selected = [...card.querySelectorAll("[data-answer-field='choice']:checked")].map(
      (input) => input.value
    );
    userAnswers[id].choices = selected;
  }

  if (type === "matching") {
    userAnswers[id].matching = userAnswers[id].matching || {};
    userAnswers[id].matching[field.dataset.matchKey] = field.value;
  }

  if (type === "groupChoice") {
    userAnswers[id].groups = userAnswers[id].groups || {};
    userAnswers[id].groups[field.dataset.groupIndex] = field.value;
  }

  if (hadResult) {
    render();
    renderExam();
  }
}

function render() {
  const orderedQuestions = state.order
    .map((id) => QUESTIONS.find((question) => question.id === id))
    .filter(Boolean);
  const filteredQuestions = orderedQuestions.filter(matchesFilters);

  elements.visibleCount.textContent = String(filteredQuestions.length);
  elements.emptyState.hidden = filteredQuestions.length > 0;
  renderProgress();

  elements.questionList.innerHTML = filteredQuestions.map(renderQuestion).join("");
}

function switchView(view) {
  state.view = view;
  renderView();
}

function renderView() {
  const isQuiz = state.view === "quiz";
  const isFlashcards = state.view === "flashcards";
  const isExam = state.view === "exam";
  const isDiagram = state.view === "diagram";

  elements.quizToolbar.hidden = !isQuiz;
  elements.quizArea.hidden = !isQuiz;
  elements.flashcardArea.hidden = !isFlashcards;
  elements.examArea.hidden = !isExam;
  elements.diagramArea.hidden = !isDiagram;
  elements.quizViewButton.classList.toggle("is-active", isQuiz);
  elements.flashcardsViewButton.classList.toggle("is-active", isFlashcards);
  elements.examViewButton.classList.toggle("is-active", isExam);
  elements.diagramViewButton.classList.toggle("is-active", isDiagram);
  elements.quizViewButton.setAttribute("aria-pressed", String(isQuiz));
  elements.flashcardsViewButton.setAttribute("aria-pressed", String(isFlashcards));
  elements.examViewButton.setAttribute("aria-pressed", String(isExam));
  elements.diagramViewButton.setAttribute("aria-pressed", String(isDiagram));
}

function fillFlashcardFilters() {
  const categories = ["all", ...new Set(FLASHCARDS.map((card) => card.category))].sort((a, b) => {
    if (a === "all") return -1;
    if (b === "all") return 1;
    return a.localeCompare(b, "pl");
  });
  const sources = ["all", ...new Set(FLASHCARDS.map((card) => card.source))].sort((a, b) => {
    if (a === "all") return -1;
    if (b === "all") return 1;
    return a.localeCompare(b, "pl");
  });

  elements.flashcardCategorySelect.innerHTML = categories
    .map((category) => {
      const label = category === "all" ? "Wszystkie" : category;
      return `<option value="${escapeAttribute(category)}">${escapeHtml(label)}</option>`;
    })
    .join("");

  elements.flashcardSourceSelect.innerHTML = sources
    .map((source) => {
      const label = source === "all" ? "Wszystkie" : source;
      return `<option value="${escapeAttribute(source)}">${escapeHtml(label)}</option>`;
    })
    .join("");
}

function renderFlashcards() {
  const filtered = getFilteredFlashcards();
  const hasCards = filtered.length > 0;

  if (state.flashcardIndex >= filtered.length) {
    state.flashcardIndex = Math.max(0, filtered.length - 1);
  }

  const current = filtered[state.flashcardIndex];

  elements.flashcardEmptyState.hidden = hasCards;
  elements.flashcardCounter.textContent = hasCards
    ? `${state.flashcardIndex + 1} / ${filtered.length}`
    : "0 / 0";
  elements.flashcardListCount.textContent = `${filtered.length} fiszek`;
  elements.prevFlashcardButton.disabled = !hasCards || filtered.length === 1;
  elements.nextFlashcardButton.disabled = !hasCards || filtered.length === 1;
  elements.flipFlashcardButton.disabled = !hasCards;
  elements.shuffleFlashcardsButton.disabled = !hasCards;
  elements.flashcardCard.disabled = !hasCards;

  if (!current) {
    elements.flashcardSide.textContent = "Brak";
    elements.flashcardFront.textContent = "Brak fiszek";
    elements.flashcardBack.hidden = true;
    elements.flashcardBack.textContent = "";
    elements.flashcardImage.hidden = true;
    elements.flashcardImage.removeAttribute("src");
    elements.flashcardDiagram.hidden = true;
    elements.flashcardDiagram.innerHTML = "";
    elements.flashcardList.innerHTML = "";
    return;
  }

  elements.flashcardSide.textContent = state.flashcardFlipped ? "Tył" : "Przód";
  elements.flashcardFront.textContent = state.flashcardFlipped ? current.back : current.front;
  elements.flashcardBack.hidden = !state.flashcardFlipped;
  elements.flashcardBack.textContent = state.flashcardFlipped ? `Źródło: ${current.source}` : "";

  const showImage = state.flashcardFlipped && Boolean(current.image && current.image.src);
  elements.flashcardImage.hidden = !showImage;
  if (showImage) {
    elements.flashcardImage.src = current.image.src;
    elements.flashcardImage.alt = current.image.alt || "";
  } else {
    elements.flashcardImage.removeAttribute("src");
    elements.flashcardImage.alt = "";
  }

  const sortDiagram = current.diagramId
    ? SORTING_DIAGRAMS.find((sort) => sort.id === current.diagramId)
    : null;
  const showDiagram = state.flashcardFlipped && Boolean(sortDiagram);
  elements.flashcardDiagram.hidden = !showDiagram;
  elements.flashcardDiagram.innerHTML = showDiagram ? buildFlowchartSvg(sortDiagram.diagram) || "" : "";

  elements.flashcardList.innerHTML = filtered
    .map(
      (card, index) => `
        <button
          type="button"
          class="flashcard-list-item ${index === state.flashcardIndex ? "is-current" : ""}"
          data-flashcard-id="${escapeAttribute(card.id)}"
        >
          <span>${escapeHtml(card.category)} · ${escapeHtml(card.source)}</span>
          <strong>${escapeHtml(card.front)}</strong>
        </button>
      `
    )
    .join("");
}

function getFilteredFlashcards() {
  return state.flashcardOrder
    .map((id) => FLASHCARDS.find((card) => card.id === id))
    .filter(Boolean)
    .filter((card) => {
      const text = [card.front, card.back, card.category, card.source].join(" ").toLowerCase();
      const matchesQuery = !state.flashcardQuery || text.includes(state.flashcardQuery);
      const matchesCategory =
        state.flashcardCategory === "all" || card.category === state.flashcardCategory;
      const matchesSource = state.flashcardSource === "all" || card.source === state.flashcardSource;

      return matchesQuery && matchesCategory && matchesSource;
    });
}

function resetFlashcardPosition() {
  state.flashcardIndex = 0;
  state.flashcardFlipped = false;
}

function moveFlashcard(direction) {
  const filtered = getFilteredFlashcards();
  if (!filtered.length) return;

  state.flashcardIndex = (state.flashcardIndex + direction + filtered.length) % filtered.length;
  state.flashcardFlipped = false;
  renderFlashcards();
}

function startExam() {
  const count = getExamCount();
  state.examCount = count;
  state.examQuestionIds = shuffle(QUESTIONS.map((question) => question.id)).slice(0, count);
  state.examFinished = false;
  state.examScore = null;

  state.examQuestionIds.forEach((id) => {
    delete userAnswers[id];
    delete checkResults[id];
    revealedAnswers.delete(id);
  });

  renderExam();
}

function finishExam() {
  const questions = getExamQuestions();
  if (!questions.length) return;

  const closedQuestions = questions.filter(isClosedQuestion);
  const openQuestions = questions.filter((question) => !isClosedQuestion(question));
  let correctUnits = 0;
  let totalUnits = 0;
  let perfectQuestions = 0;

  closedQuestions.forEach((question) => {
    const result = evaluateClosedAnswer(question);
    checkResults[question.id] = result;
    correctUnits += result.correct;
    totalUnits += result.total;
    if (result.perfect) perfectQuestions += 1;
  });

  state.examFinished = true;
  state.examScore = {
    closedQuestions: closedQuestions.length,
    openQuestions: openQuestions.length,
    perfectQuestions,
    correctUnits,
    totalUnits
  };

  renderExam();
}

function renderExam() {
  const questions = getExamQuestions();
  const hasQuestions = questions.length > 0;

  elements.examCountInput.value = String(state.examCount);
  elements.examEmptyState.hidden = hasQuestions;
  elements.finishExamButton.hidden = !hasQuestions || state.examFinished;
  elements.startExamButton.textContent = hasQuestions ? "Rozpocznij od nowa" : "Rozpocznij egzamin";

  if (!hasQuestions) {
    elements.examStatusText.textContent = "Ustaw liczbę pytań i rozpocznij egzamin.";
    elements.examResultPanel.hidden = true;
    elements.examResultPanel.innerHTML = "";
    elements.examQuestionList.innerHTML = "";
    return;
  }

  elements.examStatusText.textContent = state.examFinished
    ? `Egzamin zakończony. Pytania: ${questions.length}.`
    : `Egzamin trwa. Pytania: ${questions.length}. Wynik pojawi się po zakończeniu.`;

  elements.examResultPanel.hidden = !state.examFinished;
  elements.examResultPanel.innerHTML = state.examFinished ? renderExamResult() : "";
  elements.examQuestionList.innerHTML = questions.map(renderExamQuestion).join("");
}

function renderExamQuestion(question, index) {
  const type = getQuestionType(question);
  const closed = isClosedQuestion(question);
  const sourceClass = sourceTagClass(question.source);

  return `
    <article class="question-card exam-question" data-question-id="${escapeAttribute(question.id)}">
      <div class="question-main">
        <div class="meta">
          <span class="tag">egzamin</span>
          <span class="tag ${sourceClass}">${escapeHtml(sourceNames[question.source])}</span>
          <span class="tag">${escapeHtml(question.category)}</span>
          <span class="tag">${escapeHtml(type === "open" ? "otwarte" : "zamknięte")}</span>
        </div>
        <h3>${index + 1}. ${escapeHtml(question.question)}</h3>
        ${renderUncertainty(question)}
        ${renderInteractiveQuestion(question, {
          disabled: state.examFinished,
          inputNamePrefix: "exam-",
          resultOnly: state.examFinished && closed,
          showCheckControls: state.examFinished && closed
        })}
      </div>
      ${state.examFinished ? renderExamAnswerPanel(question) : ""}
    </article>
  `;
}

function renderExamResult() {
  if (!state.examScore) return "";

  const score = state.examScore;
  const percent = score.totalUnits
    ? Math.round((score.correctUnits / score.totalUnits) * 100)
    : 0;
  const closedScore = score.closedQuestions
    ? `<p>
        Zamknięte pytania w pełni poprawne: <strong>${score.perfectQuestions}/${score.closedQuestions}</strong>.
        Punkty cząstkowe: <strong>${score.correctUnits}/${score.totalUnits}</strong> (${percent}%).
      </p>`
    : `<p>Ten zestaw zawiera pytania otwarte. Porównaj swoje odpowiedzi z modelem pod każdym pytaniem.</p>`;

  return `
    <h3>Wynik</h3>
    ${closedScore}
    ${
      score.openQuestions
        ? `<p>Pytań otwartych do samooceny: <strong>${score.openQuestions}</strong>.</p>`
        : ""
    }
  `;
}

function renderExamAnswerPanel(question) {
  return `
    <div class="answer-panel">
      <div class="answer-grid">
        <div class="answer-block">
          <h4>Odpowiedź modelowa</h4>
          ${renderAnswer(question.answer)}
        </div>
        <div class="answer-block">
          <h4>Wyjaśnienie</h4>
          <p>${escapeHtml(question.explanation)}</p>
        </div>
      </div>
    </div>
  `;
}

function getExamQuestions() {
  return state.examQuestionIds.map(findQuestion).filter(Boolean);
}

function getExamCount() {
  const parsed = Number.parseInt(elements.examCountInput.value, 10);
  if (Number.isNaN(parsed)) return 1;
  return Math.min(Math.max(parsed, 1), QUESTIONS.length);
}

function isClosedQuestion(question) {
  return getQuestionType(question) !== "open";
}

function matchesFilters(question) {
  const text = [
    question.question,
    question.category,
    question.level,
    question.answer,
    question.explanation,
    ...(question.options || []),
    ...(question.subtasks || [])
  ]
    .flat()
    .join(" ")
    .toLowerCase();

  const matchesQuery = !state.query || text.includes(state.query);
  const matchesCategory = state.category === "all" || question.category === state.category;
  const matchesSource = state.source === "all" || question.source === state.source;
  const matchesRepeat = !state.repeatOnly || progress[question.id] === "repeat";

  return matchesQuery && matchesCategory && matchesSource && matchesRepeat;
}

function renderQuestion(question) {
  const isRevealed = state.showAnswers || revealedAnswers.has(question.id);
  const status = progress[question.id];
  const answerId = `answer-${question.id}`;
  const cardClasses = ["question-card"];

  if (status === "known") cardClasses.push("is-known");
  if (status === "repeat") cardClasses.push("is-repeat");

  const sourceClass = sourceTagClass(question.source);
  const statusTag =
    status === "known"
      ? '<span class="tag tag-known">umiem</span>'
      : status === "repeat"
        ? '<span class="tag tag-repeat">powtórz</span>'
        : "";

  return `
    <article class="${cardClasses.join(" ")}" data-question-id="${escapeAttribute(question.id)}">
      <div class="question-main">
        <div class="meta">
          <span class="tag ${sourceClass}">${escapeHtml(sourceNames[question.source])}</span>
          <span class="tag">${escapeHtml(question.category)}</span>
          <span class="tag">${escapeHtml(question.level)}</span>
          ${statusTag}
        </div>
        <h3>${escapeHtml(question.question)}</h3>
        ${renderUncertainty(question)}
        ${renderInteractiveQuestion(question)}
      </div>
      ${
        isRevealed
          ? `<div id="${answerId}" class="answer-panel">
              <div class="answer-grid">
                <div class="answer-block">
                  <h4>Odpowiedź</h4>
                  ${renderAnswer(question.answer)}
                </div>
                <div class="answer-block">
                  <h4>Wyjaśnienie</h4>
                  <p>${escapeHtml(question.explanation)}</p>
                </div>
              </div>
            </div>`
          : ""
      }
      <div class="actions">
        <button
          type="button"
          data-action="toggle-answer"
          aria-expanded="${isRevealed ? "true" : "false"}"
          aria-controls="${answerId}"
        >
          ${isRevealed ? "Ukryj odpowiedź" : "Pokaż odpowiedź"}
        </button>
        <button
          type="button"
          data-action="mark-known"
          aria-pressed="${status === "known" ? "true" : "false"}"
        >
          Umiem
        </button>
        <button
          type="button"
          data-action="mark-repeat"
          aria-pressed="${status === "repeat" ? "true" : "false"}"
        >
          Powtórz
        </button>
      </div>
    </article>
  `;
}

function renderInteractiveQuestion(question, options = {}) {
  const type = getQuestionType(question);

  if (type === "matching") return renderMatching(question, options);
  if (type === "groupChoice") return renderGroupChoice(question, options);
  if (type === "singleChoice" || type === "multiChoice") return renderChoice(question, type, options);

  return renderOpenQuestion(question, options);
}

function renderChoice(question, type, options = {}) {
  const selected = userAnswers[question.id] || {};
  const result = checkResults[question.id];
  const inputType = type === "singleChoice" ? "radio" : "checkbox";
  const selectedValues = type === "singleChoice" ? [selected.choice] : selected.choices || [];
  const namePrefix = options.inputNamePrefix || "";
  const disabled = options.disabled ? "disabled" : "";

  return `
    <div class="interactive-block">
      <div class="choice-list">
        ${question.options
          .map((option, index) => {
            const checked = selectedValues.includes(option);
            const className = getChoiceClass(question, option, result);
            return `
              <label class="choice-item ${className}">
                <input
                  type="${inputType}"
                  name="${escapeAttribute(`${namePrefix}choice-${question.id}`)}"
                  value="${escapeAttribute(option)}"
                  data-answer-field="choice"
                  ${checked ? "checked" : ""}
                  ${disabled}
                >
                <span>${escapeHtml(option)}</span>
              </label>
            `;
          })
          .join("")}
      </div>
      ${renderCheckControls(question, options)}
    </div>
  `;
}

function renderMatching(question, options = {}) {
  const selected = userAnswers[question.id]?.matching || {};
  const result = checkResults[question.id];
  const choices = question.options.map((option) => stripOptionPrefix(option));
  const disabled = options.disabled ? "disabled" : "";

  return `
    <div class="interactive-block">
      <div class="matching-list">
        ${question.subtasks
          .map((subtask) => {
            const key = getSubtaskKey(subtask);
            const rowResult = result?.details?.[key];
            const rowClass = rowResult === true ? "is-correct" : rowResult === false ? "is-wrong" : "";
            return `
              <label class="matching-row ${rowClass}">
                <span>${escapeHtml(subtask)}</span>
                <select data-answer-field="matching" data-match-key="${escapeAttribute(key)}" ${disabled}>
                  <option value="">Wybierz</option>
                  ${choices
                    .map(
                      (choice) =>
                        `<option value="${escapeAttribute(choice)}" ${
                          selected[key] === choice ? "selected" : ""
                        }>${escapeHtml(choice)}</option>`
                    )
                    .join("")}
                </select>
              </label>
            `;
          })
          .join("")}
      </div>
      ${renderCheckControls(question, options)}
    </div>
  `;
}

function renderGroupChoice(question, options = {}) {
  const selected = userAnswers[question.id]?.groups || {};
  const result = checkResults[question.id];
  const groups = getGroupChoiceData(question);
  const namePrefix = options.inputNamePrefix || "";
  const disabled = options.disabled ? "disabled" : "";

  return `
    <div class="interactive-block">
      <div class="group-choice-list">
        ${groups
          .map((group, index) => {
            const rowResult = result?.details?.[index];
            const rowClass = rowResult === true ? "is-correct" : rowResult === false ? "is-wrong" : "";
            return `
              <fieldset class="group-choice ${rowClass}">
                <legend>${escapeHtml(group.prompt)}</legend>
                ${group.choices
                  .map(
                    (choice) => `
                      <label class="choice-item compact">
                        <input
                          type="radio"
                          name="${escapeAttribute(`${namePrefix}group-${question.id}-${index}`)}"
                          value="${escapeAttribute(choice.letter)}"
                          data-answer-field="group"
                          data-group-index="${index}"
                          ${selected[index] === choice.letter ? "checked" : ""}
                          ${disabled}
                        >
                        <span>${escapeHtml(`${choice.letter}) ${choice.text}`)}</span>
                      </label>
                    `
                  )
                  .join("")}
              </fieldset>
            `;
          })
          .join("")}
      </div>
      ${renderCheckControls(question, options)}
    </div>
  `;
}

function renderOpenQuestion(question, options = {}) {
  const value = userAnswers[question.id]?.open || "";
  const placeholder = question.subtasks?.length
    ? "Wpisz swoje rozwiązanie. Możesz rozpisać każdy podpunkt osobno."
    : "Wpisz swoją odpowiedź. Sprawdzasz ją samodzielnie po pokazaniu odpowiedzi.";
  const disabled = options.disabled ? "disabled" : "";

  return `
    <div class="interactive-block">
      ${renderList(question.options, "options")}
      ${renderList(question.subtasks, "subtasks")}
      <label class="open-answer">
        <span>Twoja odpowiedź</span>
        <textarea data-answer-field="open" rows="4" placeholder="${escapeAttribute(placeholder)}" ${disabled}>${escapeHtml(
          value
        )}</textarea>
      </label>
    </div>
  `;
}

function renderCheckControls(question, options = {}) {
  if (options.showCheckControls === false) return "";

  const result = checkResults[question.id];
  const showButton = options.resultOnly !== true;

  return `
    <div class="check-row">
      ${showButton ? '<button type="button" data-action="check-closed">Sprawdź wynik</button>' : ""}
      ${result ? renderResult(result) : ""}
    </div>
  `;
}

function renderResult(result) {
  const className = result.perfect ? "result-ok" : "result-bad";
  const wrongText = result.wrong ? `, błędne: ${result.wrong}` : "";
  return `<p class="result ${className}" aria-live="polite">Poprawnie: ${result.correct}/${result.total}${wrongText}</p>`;
}

function renderUncertainty(question) {
  if (!speculativeQuestionIds.has(question.id)) return "";

  return `
    <p class="uncertainty">
      Tego nie dało się jednoznacznie potwierdzić w PDF. Realny wynik może się różnić. Nasz wynik to spekulacja.
    </p>
  `;
}

function getQuestionType(question) {
  if (getGroupChoiceData(question).length > 0) return "groupChoice";
  if (question.options?.length) {
    return isMultipleChoice(question) ? "multiChoice" : "singleChoice";
  }
  return "open";
}

function isMultipleChoice(question) {
  if (Array.isArray(question.answer) && question.answer.length > 1) return true;
  return /wybierz\s+(dwie|trzy|zakresy|możliwe)/i.test(question.question);
}

function evaluateClosedAnswer(question) {
  const type = getQuestionType(question);

  if (type === "singleChoice" || type === "multiChoice") {
    const correctOptions = getCorrectOptions(question);
    const selected =
      type === "singleChoice"
        ? [userAnswers[question.id]?.choice].filter(Boolean)
        : userAnswers[question.id]?.choices || [];
    const correct = countCorrectSelections(selected, correctOptions);
    const wrong = countWrongSelections(selected, correctOptions);
    const perfect = setsEqual(
      new Set(selected.map(normalizeText)),
      new Set(correctOptions.map(normalizeText))
    );

    return {
      correct,
      total: correctOptions.length,
      wrong,
      perfect,
      correctOptions
    };
  }

  if (type === "matching") {
    const correctMap = getMatchingAnswers(question);
    const selected = userAnswers[question.id]?.matching || {};
    const details = {};
    let correct = 0;

    Object.entries(correctMap).forEach(([key, value]) => {
      details[key] = normalizeText(selected[key]) === normalizeText(value);
      if (details[key]) correct += 1;
    });

    return {
      correct,
      total: Object.keys(correctMap).length,
      wrong: Object.keys(correctMap).length - correct,
      perfect: correct === Object.keys(correctMap).length,
      details
    };
  }

  if (type === "groupChoice") {
    const groups = getGroupChoiceData(question);
    const selected = userAnswers[question.id]?.groups || {};
    const details = {};
    let correct = 0;

    groups.forEach((group, index) => {
      details[index] = selected[index] === group.correctLetter;
      if (details[index]) correct += 1;
    });

    return {
      correct,
      total: groups.length,
      wrong: groups.length - correct,
      perfect: correct === groups.length,
      details
    };
  }

  return { correct: 0, total: 0, wrong: 0, perfect: false };
}

function getCorrectOptions(question) {
  const answerItems = Array.isArray(question.answer) ? question.answer : [question.answer];
  return question.options.filter((option) =>
    answerItems.some((answer) => answerContainsOption(answer, option))
  );
}

function answerContainsOption(answer, option) {
  const cleanAnswer = normalizeText(answer);
  const cleanOption = normalizeText(option);
  const optionWithoutLetter = normalizeText(stripOptionPrefix(option));

  return cleanAnswer.includes(cleanOption) || cleanAnswer.includes(optionWithoutLetter);
}

function getChoiceClass(question, option, result) {
  if (!result) return "";

  const isCorrect = result.correctOptions?.some(
    (correctOption) => normalizeText(correctOption) === normalizeText(option)
  );
  const selected = (userAnswers[question.id]?.choices || [userAnswers[question.id]?.choice]).filter(Boolean);
  const isSelected = selected.some((value) => normalizeText(value) === normalizeText(option));

  if (isCorrect) return "is-correct";
  if (isSelected) return "is-wrong";
  return "";
}

function getMatchingAnswers(question) {
  return Object.fromEntries(
    question.answer.map((item) => {
      const [key, value] = item.split(" - ");
      return [key.trim(), value.trim()];
    })
  );
}

function getGroupChoiceData(question) {
  if (!question.subtasks?.length || !Array.isArray(question.answer)) return [];

  const groups = question.subtasks
    .map((subtask, index) => {
      const choices = parseInlineChoices(subtask);
      if (choices.length < 2) return null;

      const prompt = subtask.split(":")[0].trim();
      const answer = question.answer[index] || "";
      const correctLetter = (answer.match(/-\s*([a-z])\)/i) || [])[1]?.toLowerCase();
      if (!correctLetter) return null;

      return {
        prompt,
        choices,
        correctLetter
      };
    })
    .filter(Boolean);

  return groups.length === question.subtasks.length ? groups : [];
}

function parseInlineChoices(text) {
  const afterColon = text.includes(":") ? text.slice(text.indexOf(":") + 1) : text;
  const matches = [...afterColon.matchAll(/([a-z])\)\s*([^,]+)(?=,\s*[a-z]\)|$)/gi)];

  return matches.map((match) => ({
    letter: match[1].toLowerCase(),
    text: match[2].trim()
  }));
}

function countCorrectSelections(selected, correctOptions) {
  const correctSet = new Set(correctOptions.map(normalizeText));
  return selected.filter((item) => correctSet.has(normalizeText(item))).length;
}

function countWrongSelections(selected, correctOptions) {
  const correctSet = new Set(correctOptions.map(normalizeText));
  return selected.filter((item) => !correctSet.has(normalizeText(item))).length;
}

function setsEqual(left, right) {
  if (left.size !== right.size) return false;
  return [...left].every((item) => right.has(item));
}

function findQuestion(id) {
  return QUESTIONS.find((question) => question.id === id);
}

function getSubtaskKey(subtask) {
  return subtask.split(".")[0].trim();
}

function stripOptionPrefix(value) {
  return String(value).replace(/^[a-z]\)\s*/i, "").trim();
}

function renderList(items, className) {
  if (!items || items.length === 0) return "";

  return `
    <ul class="${className}">
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function renderAnswer(answer) {
  if (Array.isArray(answer)) {
    return `<ul class="answer-list">${answer.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  return `<p>${escapeHtml(answer)}</p>`;
}

function renderProgress() {
  const known = Object.values(progress).filter((value) => value === "known").length;
  const repeat = Object.values(progress).filter((value) => value === "repeat").length;
  elements.progressText.textContent = `Postęp: ${known} oznaczonych jako „umiem”, ${repeat} do powtórki.`;
}

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(progressKey)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(progressKey, JSON.stringify(progress));
}

function cleanProgress() {
  progress = Object.fromEntries(Object.entries(progress).filter(([, value]) => value));
}

function shuffle(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
  }
  return items;
}

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.,;:]$/g, "")
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

/* ===========================================================================
   Schematy blokowe (flowcharts): legenda, kreator i zadania.
   =========================================================================== */

const diagramBlocksKey = "algorytmyDiagramBuilder";
const diagramTypeLabels = {
  terminator: "Start / Koniec",
  io: "Wejście / Wyjście",
  process: "Operacja",
  decision: "Decyzja",
  connector: "Łącznik"
};
const diagramAllowedTypes = new Set(Object.keys(diagramTypeLabels));

function defaultBlockText(type, blocks) {
  if (type === "terminator") {
    const hasTerminator = (blocks || []).some((block) => block.type === "terminator");
    return hasTerminator ? "STOP" : "START";
  }
  if (type === "io") return "Wczytaj / Wypisz ...";
  if (type === "process") return "operacja, np. s := s + 1";
  if (type === "decision") return "warunek?";
  if (type === "connector") return "A";
  return "";
}

let diagramBlockSeq = 0;

function makeBlock(type, text, extra = {}) {
  const block = {
    id: typeof extra.id === "string" && extra.id ? extra.id : `b${Date.now().toString(36)}-${diagramBlockSeq++}`,
    type,
    text: text ?? ""
  };
  if (type === "decision") {
    block.mainBranch = extra.mainBranch === "Nie" ? "Nie" : "Tak";
    block.branchText = extra.branchText || "";
  }
  if (typeof extra.loopTo === "string" && extra.loopTo) {
    block.loopTo = extra.loopTo;
  }
  return block;
}

function fillDiagramLegend() {
  elements.diagramLegend.innerHTML = DIAGRAM_LEGEND.map(
    (item) => `
      <article class="diagram-legend-card">
        <div class="diagram-legend-symbol">${legendSymbolSvg(item.type)}</div>
        <div>
          <h4>${escapeHtml(item.name)}</h4>
          <p>${escapeHtml(item.use)}</p>
        </div>
      </article>
    `
  ).join("");
}

function fillDiagramTasks() {
  elements.diagramTaskSelect.innerHTML = DIAGRAM_TASKS.map(
    (task) => `<option value="${escapeAttribute(task.id)}">${escapeHtml(task.title)}</option>`
  ).join("");
  elements.diagramTaskSelect.value = state.diagramTaskId;
}

function bindDiagramEvents() {
  elements.diagramPalette.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-add]");
    if (!button) return;
    addDiagramBlock(button.dataset.add);
  });

  elements.diagramEditorList.addEventListener("input", (event) => {
    const field = event.target.closest("[data-field]");
    if (!field) return;
    const row = field.closest("[data-index]");
    if (!row) return;
    const block = state.diagramBlocks[Number(row.dataset.index)];
    if (!block) return;
    block[field.dataset.field] = field.value;
    saveDiagramBlocks();
    renderDiagramPreview();
  });

  elements.diagramEditorList.addEventListener("change", (event) => {
    const field = event.target.closest("select[data-field]");
    if (!field) return;
    const row = field.closest("[data-index]");
    if (!row) return;
    const block = state.diagramBlocks[Number(row.dataset.index)];
    if (!block) return;
    block[field.dataset.field] = field.value;
    saveDiagramBlocks();
    renderDiagramPreview();
  });

  elements.diagramEditorList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-act]");
    if (!button) return;
    const row = button.closest("[data-index]");
    if (!row) return;
    const index = Number(row.dataset.index);
    const action = button.dataset.act;

    if (action === "up") moveDiagramBlock(index, -1);
    if (action === "down") moveDiagramBlock(index, 1);
    if (action === "del") deleteDiagramBlock(index);
  });

  elements.diagramScaffoldButton.addEventListener("click", insertDiagramScaffold);
  elements.diagramSampleButton.addEventListener("click", loadDiagramSample);
  elements.diagramCheckButton.addEventListener("click", runDiagramCheck);
  elements.diagramClearButton.addEventListener("click", clearDiagram);

  elements.diagramTaskSelect.addEventListener("change", (event) => {
    state.diagramTaskId = event.target.value;
    state.diagramSolutionShown = false;
    renderDiagramTask();
  });

  elements.diagramTaskBody.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-act='toggle-solution']");
    if (!button) return;
    state.diagramSolutionShown = !state.diagramSolutionShown;
    renderDiagramTask();
  });
}

function addDiagramBlock(type) {
  if (!diagramAllowedTypes.has(type)) return;
  state.diagramBlocks.push(makeBlock(type, defaultBlockText(type, state.diagramBlocks)));
  commitDiagram();
}

function moveDiagramBlock(index, direction) {
  const target = index + direction;
  if (target < 0 || target >= state.diagramBlocks.length) return;
  const blocks = state.diagramBlocks;
  [blocks[index], blocks[target]] = [blocks[target], blocks[index]];
  commitDiagram();
}

function deleteDiagramBlock(index) {
  state.diagramBlocks.splice(index, 1);
  commitDiagram();
}

function insertDiagramScaffold() {
  const blocks = state.diagramBlocks;
  if (!blocks.length) {
    blocks.push(makeBlock("terminator", "START"));
    blocks.push(makeBlock("terminator", "STOP"));
  } else {
    if (blocks[0].type !== "terminator") blocks.unshift(makeBlock("terminator", "START"));
    if (blocks[blocks.length - 1].type !== "terminator") blocks.push(makeBlock("terminator", "STOP"));
  }
  commitDiagram();
}

function loadDiagramSample() {
  state.diagramBlocks = DIAGRAM_SAMPLE.map((block) => makeBlock(block.type, block.text, block));
  hideDiagramFeedback();
  commitDiagram();
}

function clearDiagram() {
  state.diagramBlocks = [];
  hideDiagramFeedback();
  commitDiagram();
}

function commitDiagram() {
  saveDiagramBlocks();
  renderDiagramBuilder();
}

function renderDiagramBuilder() {
  renderDiagramEditor();
  renderDiagramPreview();
}

function renderDiagramEditor() {
  const blocks = state.diagramBlocks;
  elements.diagramEditorEmpty.hidden = blocks.length > 0;

  elements.diagramEditorList.innerHTML = blocks
    .map((block, index) => {
      const extra =
        block.type === "decision"
          ? `
            <div class="diagram-decision-extra">
              <label>
                <span>Ścieżka w dół</span>
                <select data-field="mainBranch">
                  <option value="Tak" ${block.mainBranch !== "Nie" ? "selected" : ""}>Tak</option>
                  <option value="Nie" ${block.mainBranch === "Nie" ? "selected" : ""}>Nie</option>
                </select>
              </label>
              <label>
                <span>Druga gałąź</span>
                <input
                  type="text"
                  data-field="branchText"
                  value="${escapeAttribute(block.branchText || "")}"
                  placeholder="np. Wypisz wynik / KONIEC"
                >
              </label>
            </div>
          `
          : "";

      const loopField =
        index > 0
          ? `
            <label class="diagram-loop-field">
              <span>↩ Pętla do</span>
              <select data-field="loopTo">
                <option value="">— brak —</option>
                ${blocks
                  .slice(0, index)
                  .map(
                    (target, targetIndex) =>
                      `<option value="${escapeAttribute(target.id)}" ${
                        block.loopTo === target.id ? "selected" : ""
                      }>#${targetIndex + 1}: ${escapeHtml(loopTargetLabel(target))}</option>`
                  )
                  .join("")}
              </select>
            </label>
          `
          : "";

      return `
        <div class="diagram-block-row" data-index="${index}">
          <span class="diagram-block-badge badge-${escapeAttribute(block.type)}">
            ${escapeHtml(diagramTypeLabels[block.type] || block.type)}
          </span>
          <div class="diagram-block-fields">
            <input
              type="text"
              data-field="text"
              value="${escapeAttribute(block.text || "")}"
              placeholder="${escapeAttribute(defaultBlockText(block.type, []))}"
            >
            ${extra}
            ${loopField}
          </div>
          <div class="diagram-block-controls">
            <button type="button" data-act="up" title="W górę" aria-label="Przesuń w górę" ${
              index === 0 ? "disabled" : ""
            }>↑</button>
            <button type="button" data-act="down" title="W dół" aria-label="Przesuń w dół" ${
              index === blocks.length - 1 ? "disabled" : ""
            }>↓</button>
            <button type="button" data-act="del" title="Usuń" aria-label="Usuń blok">✕</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderDiagramPreview() {
  const svg = buildFlowchartSvg(diagramBuilderNodes());
  elements.diagramCanvas.innerHTML =
    svg || '<p class="diagram-empty">Dodaj bloki, aby zobaczyć podgląd schematu.</p>';
}

function loopTargetLabel(block) {
  const text = String(block.text || defaultBlockText(block.type, [])).trim();
  return text.length > 22 ? `${text.slice(0, 21)}…` : text;
}

function diagramBuilderNodes() {
  const ids = new Set(state.diagramBlocks.map((block) => block.id));
  return state.diagramBlocks.map((block) => {
    let node;
    if (block.type === "decision") {
      const main = block.mainBranch === "Nie" ? "Nie" : "Tak";
      const other = main === "Tak" ? "Nie" : "Tak";
      node = {
        type: "decision",
        text: block.text || "warunek?",
        downLabel: main,
        stub: { label: other, text: block.branchText || "" }
      };
    } else {
      node = { type: block.type, text: block.text || defaultBlockText(block.type, []) };
    }
    node.id = block.id;
    if (block.loopTo && block.loopTo !== block.id && ids.has(block.loopTo)) {
      node.loopTo = block.loopTo;
      node.loopLabel = "powtórz";
    }
    return node;
  });
}

function runDiagramCheck() {
  const messages = checkDiagram();
  elements.diagramFeedback.hidden = false;
  elements.diagramFeedback.innerHTML = `
    <h4>Wynik sprawdzenia</h4>
    <ul>
      ${messages
        .map(
          (item) =>
            `<li class="diagram-feedback-${item.ok ? "ok" : "warn"}">${escapeHtml(item.text)}</li>`
        )
        .join("")}
    </ul>
  `;
}

function hideDiagramFeedback() {
  elements.diagramFeedback.hidden = true;
  elements.diagramFeedback.innerHTML = "";
}

function checkDiagram() {
  const blocks = state.diagramBlocks;
  const messages = [];
  const isTerminator = (block) => block && block.type === "terminator";

  if (blocks.length < 2) {
    messages.push({ ok: false, text: "Schemat ma za mało bloków — dodaj kolejne elementy." });
  }

  if (isTerminator(blocks[0])) {
    messages.push({ ok: true, text: "Start: schemat zaczyna się terminatorem (START)." });
  } else {
    messages.push({ ok: false, text: "Schemat powinien zaczynać się terminatorem (START)." });
  }

  if (blocks.length && isTerminator(blocks[blocks.length - 1])) {
    messages.push({ ok: true, text: "Koniec: schemat kończy się terminatorem (STOP / KONIEC)." });
  } else {
    messages.push({ ok: false, text: "Schemat powinien kończyć się terminatorem (STOP / KONIEC)." });
  }

  const empty = blocks.filter((block) => !String(block.text || "").trim());
  if (!empty.length && blocks.length) {
    messages.push({ ok: true, text: "Każdy blok ma wpisaną treść." });
  } else if (empty.length) {
    messages.push({
      ok: false,
      text: `Uzupełnij treść w ${empty.length} ${pluralBlocks(empty.length)} bez opisu.`
    });
  }

  const decisions = blocks.filter((block) => block.type === "decision");
  if (decisions.length) {
    const incomplete = decisions.filter((block) => !String(block.branchText || "").trim());
    if (incomplete.length) {
      messages.push({
        ok: false,
        text: "Każdy romb ma dwa wyjścia — opisz drugą gałąź (pole „Druga gałąź”)."
      });
    } else {
      messages.push({ ok: true, text: "Każdy romb ma opisane obie ścieżki (Tak i Nie)." });
    }
  }

  if (messages.every((item) => item.ok)) {
    messages.push({ ok: true, text: "Świetnie! Schemat spełnia podstawowe zasady." });
  }

  return messages;
}

function pluralBlocks(count) {
  if (count === 1) return "bloku";
  return "blokach";
}

function renderDiagramTask() {
  elements.diagramTaskSelect.value = state.diagramTaskId;
  const task = DIAGRAM_TASKS.find((item) => item.id === state.diagramTaskId);

  if (!task) {
    elements.diagramTaskBody.innerHTML = "";
    return;
  }

  const solution = state.diagramSolutionShown
    ? `
      <div class="diagram-solution">
        <p class="diagram-preview-label">Przykładowe rozwiązanie</p>
        <div class="diagram-canvas">${buildFlowchartSvg(task.solution) || ""}</div>
      </div>
    `
    : "";

  elements.diagramTaskBody.innerHTML = `
    <p class="diagram-task-prompt">${escapeHtml(task.prompt)}</p>
    <details class="diagram-hint">
      <summary>Podpowiedź</summary>
      <p>${escapeHtml(task.hint)}</p>
    </details>
    <div class="diagram-task-actions">
      <button type="button" data-act="toggle-solution">
        ${state.diagramSolutionShown ? "Ukryj rozwiązanie" : "Pokaż przykładowe rozwiązanie"}
      </button>
    </div>
    ${solution}
  `;
}

function readDiagramBlocks() {
  try {
    const value = JSON.parse(localStorage.getItem(diagramBlocksKey));
    if (!Array.isArray(value)) return [];
    return value
      .filter((block) => block && typeof block.type === "string" && diagramAllowedTypes.has(block.type))
      .map((block) => makeBlock(block.type, String(block.text || ""), block));
  } catch {
    return [];
  }
}

function saveDiagramBlocks() {
  try {
    localStorage.setItem(diagramBlocksKey, JSON.stringify(state.diagramBlocks));
  } catch {
    /* ignore storage errors */
  }
}

/* --- Renderowanie schematu jako SVG --------------------------------------- */

const FC = {
  nodeW: 190,
  nodeH: 54,
  decW: 200,
  decH: 92,
  connR: 26,
  vGap: 46,
  colGap: 250,
  stubLen: 92,
  lineH: 16,
  font: 13,
  pad: 16
};

const FC_COLORS = {
  terminator: { fill: "#126c5a", stroke: "#0e5648", text: "#ffffff" },
  io: { fill: "#e5eef8", stroke: "#315f8f", text: "#18221e" },
  process: { fill: "#ffffff", stroke: "#126c5a", text: "#18221e" },
  decision: { fill: "#fff7eb", stroke: "#b66a1f", text: "#18221e" },
  connector: { fill: "#dff1eb", stroke: "#126c5a", text: "#0e5648" }
};

const FC_ARROW = "#5d6b62";

function buildFlowchartSvg(nodes) {
  if (!Array.isArray(nodes) || !nodes.length) return null;

  const numLoops = nodes.filter((node) => node.loopTo).length;
  const railBase = 16;
  const railStep = 16;
  const leftPad = numLoops ? railBase + numLoops * railStep + 10 : 12;
  const mainCx = leftPad + FC.decW / 2;
  const branchCx = mainCx + FC.colGap;

  const mainRecs = [];
  const byId = {};
  const shapes = [];
  const arrows = [];
  let y = FC.pad;
  let maxY = 0;
  let maxX = mainCx + FC.nodeW / 2;
  let minX = numLoops ? railBase - 34 : leftPad - 2;

  nodes.forEach((node, index) => {
    const dims = flowNodeDims(node);
    const top = y;
    const cy = top + dims.h / 2;
    let nextY = top + dims.h + FC.vGap;

    if (index > 0) {
      const prev = mainRecs[index - 1];
      const label = prev.node.type === "decision" ? prev.node.downLabel || "" : "";
      arrows.push(verticalArrow(prev.cx, prev.bottom, mainCx, top, label));
    }

    shapes.push(flowShapeSvg(node.type, mainCx, cy, dims.w, dims.h, dims.lines));
    const rec = { node, cx: mainCx, cy, top, bottom: top + dims.h, w: dims.w, h: dims.h };
    mainRecs.push(rec);
    if (node.id) byId[node.id] = rec;
    maxY = Math.max(maxY, rec.bottom);

    // Free-mode "Nie" hint stub.
    if (node.type === "decision" && node.stub) {
      const startX = mainCx + dims.w / 2;
      arrows.push(stubArrow(startX, cy, node.stub.label, node.stub.text));
      const textWidth = node.stub.text ? node.stub.text.length * 7 + 12 : 0;
      maxX = Math.max(maxX, startX + FC.stubLen + textWidth + 8);
    }

    // Side branch (model answers): dead-end column, rejoining detour, or loop body.
    if (node.type === "decision" && Array.isArray(node.branch) && node.branch.length) {
      const rejoin = node.branchRejoin === true;
      const loop = node.branchLoop === true;
      let branchY = rejoin ? rec.bottom + FC.vGap : cy - flowNodeDims(node.branch[0]).h / 2;
      let prevBranch = null;

      node.branch.forEach((branchNode, branchIndex) => {
        const bd = flowNodeDims(branchNode);
        const bcy = branchY + bd.h / 2;
        if (branchIndex === 0) {
          if (rejoin) {
            arrows.push(elbowArrow(mainCx + dims.w / 2, cy, branchCx, branchY, node.branchLabel || ""));
          } else {
            arrows.push(
              horizontalArrow(mainCx + dims.w / 2, cy, branchCx - bd.w / 2, bcy, node.branchLabel || "")
            );
          }
        } else {
          arrows.push(verticalArrow(prevBranch.cx, prevBranch.bottom, branchCx, branchY, ""));
        }
        shapes.push(flowShapeSvg(branchNode.type, branchCx, bcy, bd.w, bd.h, bd.lines));
        prevBranch = { cx: branchCx, bottom: branchY + bd.h };
        maxY = Math.max(maxY, branchY + bd.h);
        maxX = Math.max(maxX, branchCx + bd.w / 2);
        branchY += bd.h + FC.vGap;
      });

      if (rejoin) {
        const mergeY = prevBranch.bottom + FC.vGap;
        arrows.push(mergeArrow(branchCx, prevBranch.bottom, mainCx, mergeY));
        maxY = Math.max(maxY, mergeY);
        nextY = mergeY + FC.vGap;
      } else if (loop) {
        const railRight = mainCx + dims.w / 2 + 22;
        arrows.push(
          branchLoopArrow(branchCx, prevBranch.bottom, railRight, mainCx + dims.w / 2, cy, node.loopLabel || "")
        );
        maxY = Math.max(maxY, prevBranch.bottom + 18);
      }
    }

    y = nextY;
  });

  if (numLoops) {
    const loops = [];
    nodes.forEach((node, index) => {
      if (node.loopTo && byId[node.loopTo]) {
        const from = mainRecs[index];
        const to = byId[node.loopTo];
        loops.push({ from, to, label: node.loopLabel || "", span: Math.abs(from.cy - to.cy) });
      }
    });
    loops.sort((a, b) => b.span - a.span);
    loops.forEach((loop, k) => {
      arrows.push(loopArrow(loop.from, loop.to, railBase + k * railStep, loop.label));
    });
  }

  const viewX = minX - 6;
  const width = Math.ceil(maxX + 12 - viewX);
  const height = Math.ceil(maxY + FC.pad);

  return `
    <svg class="flowchart-svg" viewBox="${viewX} 0 ${width} ${height}" width="${width}" height="${height}"
      role="img" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="fcArrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7"
          orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="${FC_ARROW}"></path>
        </marker>
      </defs>
      ${arrows.join("")}
      ${shapes.join("")}
    </svg>
  `;
}

function flowNodeDims(node) {
  if (node.type === "connector") {
    return { w: FC.connR * 2, h: FC.connR * 2, lines: wrapText(node.text, 7) };
  }
  if (node.type === "decision") {
    const lines = wrapText(node.text, 16);
    return { w: FC.decW, h: Math.max(FC.decH, lines.length * FC.lineH + 54), lines };
  }
  const lines = wrapText(node.text, 24);
  return { w: FC.nodeW, h: Math.max(FC.nodeH, lines.length * FC.lineH + 22), lines };
}

function wrapText(text, maxChars) {
  const words = String(text || "").trim().split(/\s+/).filter(Boolean);
  if (!words.length) return [""];

  const lines = [];
  let current = "";
  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxChars || !current) {
      current = candidate;
    } else {
      lines.push(current);
      current = word;
    }
  });
  if (current) lines.push(current);

  if (lines.length > 4) {
    const kept = lines.slice(0, 4);
    kept[3] = `${kept[3].slice(0, Math.max(0, maxChars - 1))}…`;
    return kept;
  }
  return lines;
}

function flowShapeSvg(type, cx, cy, w, h, lines) {
  const color = FC_COLORS[type] || FC_COLORS.process;
  const left = cx - w / 2;
  const top = cy - h / 2;
  const right = cx + w / 2;
  const bottom = cy + h / 2;
  let shape = "";

  if (type === "terminator") {
    shape = `<rect x="${left}" y="${top}" width="${w}" height="${h}" rx="${h / 2}" ry="${h / 2}"
      fill="${color.fill}" stroke="${color.stroke}" stroke-width="2"></rect>`;
  } else if (type === "process") {
    shape = `<rect x="${left}" y="${top}" width="${w}" height="${h}" rx="6" ry="6"
      fill="${color.fill}" stroke="${color.stroke}" stroke-width="2"></rect>`;
  } else if (type === "io") {
    const skew = 16;
    shape = `<polygon points="${left + skew},${top} ${right},${top} ${right - skew},${bottom} ${left},${bottom}"
      fill="${color.fill}" stroke="${color.stroke}" stroke-width="2"></polygon>`;
  } else if (type === "decision") {
    shape = `<polygon points="${cx},${top} ${right},${cy} ${cx},${bottom} ${left},${cy}"
      fill="${color.fill}" stroke="${color.stroke}" stroke-width="2"></polygon>`;
  } else if (type === "connector") {
    shape = `<circle cx="${cx}" cy="${cy}" r="${w / 2}"
      fill="${color.fill}" stroke="${color.stroke}" stroke-width="2"></circle>`;
  }

  return shape + flowTextSvg(cx, cy, lines, color.text);
}

function flowTextSvg(cx, cy, lines, color) {
  const startY = cy - ((lines.length - 1) * FC.lineH) / 2;
  const tspans = lines
    .map((line, index) => `<tspan x="${cx}" y="${startY + index * FC.lineH}">${escapeHtml(line)}</tspan>`)
    .join("");
  return `<text text-anchor="middle" dominant-baseline="middle"
    font-family="Arial, Helvetica, sans-serif" font-size="${FC.font}" font-weight="700"
    fill="${color}">${tspans}</text>`;
}

function verticalArrow(x1, y1, x2, y2, label) {
  let path;
  if (Math.abs(x1 - x2) < 1) {
    path = `M${x1},${y1} L${x2},${y2}`;
  } else {
    const midY = (y1 + y2) / 2;
    path = `M${x1},${y1} L${x1},${midY} L${x2},${midY} L${x2},${y2}`;
  }
  return arrowPath(path) + arrowLabel(x1, (y1 + y2) / 2, label);
}

function horizontalArrow(x1, y1, x2, y2, label) {
  let path;
  if (Math.abs(y1 - y2) < 1) {
    path = `M${x1},${y1} L${x2},${y2}`;
  } else {
    const midX = (x1 + x2) / 2;
    path = `M${x1},${y1} L${midX},${y1} L${midX},${y2} L${x2},${y2}`;
  }
  return arrowPath(path) + arrowLabel((x1 + x2) / 2, Math.min(y1, y2) - 11, label);
}

function stubArrow(x1, y1, label, text) {
  const x2 = x1 + FC.stubLen;
  const path = `M${x1},${y1} L${x2},${y1}`;
  const note = text
    ? `<text x="${x2 + 8}" y="${y1}" text-anchor="start" dominant-baseline="middle"
        font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="700"
        fill="#5d6b62">${escapeHtml(text)}</text>`
    : "";
  return arrowPath(path) + arrowLabel((x1 + x2) / 2, y1 - 11, label) + note;
}

function loopArrow(fromRec, toRec, railX, label) {
  const startX = fromRec.cx - fromRec.w / 2;
  const endX = toRec.cx - toRec.w / 2;
  const path = `M${startX},${fromRec.cy} L${railX},${fromRec.cy} L${railX},${toRec.cy} L${endX},${toRec.cy}`;
  // Label sits just outside the source node, where the back-edge leaves it.
  return arrowPath(path) + arrowLabel((startX + railX) / 2, fromRec.cy - 11, label);
}

function elbowArrow(x1, y1, x2, y2, label) {
  // Horizontal first, then vertical (used for the entry into a rejoining branch).
  const path = `M${x1},${y1} L${x2},${y1} L${x2},${y2}`;
  return arrowPath(path) + arrowLabel((x1 + x2) / 2, y1 - 11, label);
}

function mergeArrow(x1, y1, x2, y2) {
  // Branch bottom routes back to the main spine; no arrowhead, just a junction dot.
  const path = `M${x1},${y1} L${x1},${y2} L${x2},${y2}`;
  return `<path d="${path}" fill="none" stroke="${FC_ARROW}" stroke-width="2"></path>
    <circle cx="${x2}" cy="${y2}" r="3.5" fill="${FC_ARROW}"></circle>`;
}

function branchLoopArrow(branchX, branchBottom, railX, decisionRightX, decisionCy, label) {
  // Loop body on the right returns to the condition: down, left to the rail, up, into the romb.
  const drop = branchBottom + 18;
  const path = `M${branchX},${branchBottom} L${branchX},${drop} L${railX},${drop} L${railX},${decisionCy} L${decisionRightX},${decisionCy}`;
  return arrowPath(path) + arrowLabel(railX, (decisionCy + drop) / 2, label);
}

function arrowPath(path) {
  return `<path d="${path}" fill="none" stroke="${FC_ARROW}" stroke-width="2" marker-end="url(#fcArrow)"></path>`;
}

function arrowLabel(x, y, text) {
  if (!text) return "";
  const width = text.length * 7 + 10;
  return `
    <g>
      <rect x="${x - width / 2}" y="${y - 9}" width="${width}" height="18" rx="5"
        fill="#ffffff" stroke="#d8ded8"></rect>
      <text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle"
        font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="800"
        fill="#5d6b62">${escapeHtml(text)}</text>
    </g>
  `;
}

function legendSymbolSvg(type) {
  const samples = {
    terminator: { text: "START", w: 120, h: 38 },
    io: { text: "We / Wy", w: 120, h: 38 },
    process: { text: "x := x + 1", w: 124, h: 38 },
    decision: { text: "i < n?", w: 110, h: 60 },
    connector: { text: "A", w: 48, h: 48 }
  };
  const sample = samples[type] || samples.process;
  const lines = wrapText(sample.text, type === "decision" ? 16 : 24);
  const shape = flowShapeSvg(type, 75, 35, sample.w, sample.h, lines);
  return `<svg viewBox="0 0 150 70" width="150" height="70" role="img"
    xmlns="http://www.w3.org/2000/svg">${shape}</svg>`;
}

/* ===========================================================================
   Odtwarzanie schematów sortowań: układanie bloków (auto-ocena) + wzorzec.
   =========================================================================== */

function fillSortSelect() {
  elements.sortSelect.innerHTML = SORTING_DIAGRAMS.map(
    (sort) => `<option value="${escapeAttribute(sort.id)}">${escapeHtml(sort.title)}</option>`
  ).join("");
  elements.sortSelect.value = state.sortId;
}

function getCurrentSort() {
  return SORTING_DIAGRAMS.find((sort) => sort.id === state.sortId) || SORTING_DIAGRAMS[0];
}

function resetSortOrder() {
  const sort = getCurrentSort();
  if (!sort) {
    state.sortOrder = [];
    return;
  }
  state.sortOrder = shuffleIndices(sort.steps.length);
  state.sortChecked = false;
}

function shuffleIndices(length) {
  const indices = Array.from({ length }, (_, index) => index);
  if (length < 2) return indices;
  // Reshuffle until the arrangement is not already in the solved order.
  for (let attempt = 0; attempt < 12; attempt += 1) {
    shuffle(indices);
    if (indices.some((value, position) => value !== position)) break;
  }
  return indices;
}

function bindSortEvents() {
  elements.sortSelect.addEventListener("change", (event) => {
    state.sortId = event.target.value;
    state.sortModelShown = false;
    resetSortOrder();
    hideSortFeedback();
    renderSort();
  });

  elements.sortShuffleButton.addEventListener("click", () => {
    resetSortOrder();
    hideSortFeedback();
    renderSortReconList();
  });

  elements.sortCheckButton.addEventListener("click", () => {
    state.sortChecked = true;
    renderSortReconList();
    renderSortFeedback();
  });

  elements.sortReconList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-act]");
    if (!button) return;
    const row = button.closest("[data-pos]");
    if (!row) return;
    const position = Number(row.dataset.pos);
    if (button.dataset.act === "up") moveSortBlock(position, -1);
    if (button.dataset.act === "down") moveSortBlock(position, 1);
  });

  elements.sortScaffoldButton.addEventListener("click", () => {
    insertDiagramScaffold();
    state.view = "diagram";
    renderView();
    elements.diagramPalette.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  elements.sortModelButton.addEventListener("click", () => {
    state.sortModelShown = !state.sortModelShown;
    renderSortModel();
  });
}

function moveSortBlock(position, direction) {
  const target = position + direction;
  if (target < 0 || target >= state.sortOrder.length) return;
  const order = state.sortOrder;
  [order[position], order[target]] = [order[target], order[position]];
  state.sortChecked = false;
  hideSortFeedback();
  renderSortReconList();
}

function renderSort() {
  const sort = getCurrentSort();
  elements.sortSelect.value = state.sortId;
  elements.sortNote.textContent = sort ? sort.note : "";
  renderSortReconList();
  renderSortModel();
  if (!state.sortChecked) hideSortFeedback();
}

function renderSortReconList() {
  const sort = getCurrentSort();
  if (!sort) {
    elements.sortReconList.innerHTML = "";
    return;
  }

  const total = state.sortOrder.length;
  elements.sortReconList.innerHTML = state.sortOrder
    .map((stepIndex, position) => {
      const step = sort.steps[stepIndex];
      const correct = state.sortChecked && stepIndex === position;
      const wrong = state.sortChecked && stepIndex !== position;
      const stateClass = correct ? "is-correct" : wrong ? "is-wrong" : "";

      return `
        <div class="diagram-sort-item ${stateClass}" data-pos="${position}">
          <span class="diagram-sort-number">${position + 1}</span>
          <span class="diagram-block-badge badge-${escapeAttribute(step.type)}">
            ${escapeHtml(diagramTypeLabels[step.type] || step.type)}
          </span>
          <span class="diagram-sort-text">${escapeHtml(step.text)}</span>
          <span class="diagram-sort-controls">
            <button type="button" data-act="up" aria-label="W górę" ${
              position === 0 ? "disabled" : ""
            }>↑</button>
            <button type="button" data-act="down" aria-label="W dół" ${
              position === total - 1 ? "disabled" : ""
            }>↓</button>
          </span>
        </div>
      `;
    })
    .join("");
}

function renderSortFeedback() {
  const total = state.sortOrder.length;
  const correctCount = state.sortOrder.filter((stepIndex, position) => stepIndex === position).length;
  const perfect = correctCount === total;

  elements.sortReconFeedback.hidden = false;
  elements.sortReconFeedback.innerHTML = `
    <h4>${perfect ? "Brawo! Schemat ułożony poprawnie." : "Wynik sprawdzenia"}</h4>
    <ul>
      <li class="diagram-feedback-${perfect ? "ok" : "warn"}">
        Poprawne pozycje: ${correctCount} / ${total}.
      </li>
      ${
        perfect
          ? '<li class="diagram-feedback-ok">Kolejność kroków zgadza się ze wzorcem.</li>'
          : '<li class="diagram-feedback-warn">Bloki na czerwono są nie na swoim miejscu — popraw kolejność i sprawdź ponownie.</li>'
      }
    </ul>
  `;
}

function hideSortFeedback() {
  elements.sortReconFeedback.hidden = true;
  elements.sortReconFeedback.innerHTML = "";
}

function renderSortModel() {
  const sort = getCurrentSort();
  elements.sortModelButton.textContent = state.sortModelShown
    ? "Ukryj wzorcowy schemat"
    : "Pokaż wzorcowy schemat";
  elements.sortModelWrap.hidden = !state.sortModelShown;
  elements.sortModelCanvas.innerHTML =
    state.sortModelShown && sort ? buildFlowchartSvg(sort.diagram) || "" : "";
}

initialize();
