const sourceNames = {
  sheet: "z arkusza",
  ai: "stworzone przez AI"
};

const speculativeQuestionIds = new Set([
  "ai-three-way-handshake",
  "ai-port-categories",
  "ai-broadcast-domain",
  "ai-collision-domain",
  "ai-subnet-mask-27",
  "ai-subnet-network-broadcast",
  "ai-vlsm-practice",
  "ai-ipv6-compression-rule",
  "ai-devices-layers",
  "ai-mesh-topology"
]);

const state = {
  view: "quiz",
  query: "",
  category: "all",
  source: "all",
  showAnswers: false,
  repeatOnly: false,
  order: QUESTIONS.map((question) => question.id),
  optionOrders: {},
  flashcardQuery: "",
  flashcardCategory: "all",
  flashcardSource: "all",
  flashcardOrder: FLASHCARDS.map((card) => card.id),
  flashcardIndex: 0,
  flashcardFlipped: false,
  examCount: 20,
  examQuestionIds: [],
  examFinished: false,
  examScore: null
};

const revealedAnswers = new Set();
const checkResults = {};
const userAnswers = {};
const progressKey = "kolokwium2QuizProgress";
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
  resetAnswersButton: document.querySelector("#resetAnswersButton"),
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
  examEmptyState: document.querySelector("#examEmptyState")
};

initialize();

function initialize() {
  fillCategories();
  fillFlashcardFilters();
  bindEvents();
  render();
  renderFlashcards();
  renderExam();
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
    shuffleAnswerOptions(QUESTIONS);
    render();
  });

  elements.resetAnswersButton.addEventListener("click", () => {
    resetQuizAnswers();
  });

  elements.resetButton.addEventListener("click", () => {
    state.query = "";
    state.category = "all";
    state.source = "all";
    state.showAnswers = false;
    state.repeatOnly = false;
    state.order = QUESTIONS.map((question) => question.id);
    state.optionOrders = {};
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

function resetQuizAnswers() {
  Object.keys(userAnswers).forEach((id) => {
    delete userAnswers[id];
  });
  Object.keys(checkResults).forEach((id) => {
    delete checkResults[id];
  });
  revealedAnswers.clear();
  state.showAnswers = false;
  elements.showAnswersToggle.checked = false;
  render();
}

function switchView(view) {
  state.view = view;
  renderView();
}

function renderView() {
  const isQuiz = state.view === "quiz";
  const isFlashcards = state.view === "flashcards";
  const isExam = state.view === "exam";

  elements.quizToolbar.hidden = !isQuiz;
  elements.quizArea.hidden = !isQuiz;
  elements.flashcardArea.hidden = !isFlashcards;
  elements.examArea.hidden = !isExam;
  elements.quizViewButton.classList.toggle("is-active", isQuiz);
  elements.flashcardsViewButton.classList.toggle("is-active", isFlashcards);
  elements.examViewButton.classList.toggle("is-active", isExam);
  elements.quizViewButton.setAttribute("aria-pressed", String(isQuiz));
  elements.flashcardsViewButton.setAttribute("aria-pressed", String(isFlashcards));
  elements.examViewButton.setAttribute("aria-pressed", String(isExam));
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
    elements.flashcardList.innerHTML = "";
    return;
  }

  elements.flashcardSide.textContent = state.flashcardFlipped ? "Tył" : "Przód";
  elements.flashcardFront.textContent = state.flashcardFlipped ? current.back : current.front;
  elements.flashcardBack.hidden = !state.flashcardFlipped;
  elements.flashcardBack.textContent = state.flashcardFlipped ? `Źródło: ${current.source}` : "";

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

function shuffleAnswerOptions(questions) {
  questions.forEach((question) => {
    if (question.options?.length > 1) {
      state.optionOrders[question.id] = shuffle([...question.options.keys()]);
    }

    const groups = getGroupChoiceData(question);
    groups.forEach((group, index) => {
      if (group.choices.length > 1) {
        state.optionOrders[getGroupChoiceOrderKey(question, index)] = shuffle([
          ...group.choices.keys()
        ]);
      }
    });
  });
}

function getOrderedOptions(question) {
  if (!question.options?.length) return [];

  const order = state.optionOrders[question.id];
  if (!order || order.length !== question.options.length) return question.options;

  return order.map((index) => question.options[index]).filter((option) => option !== undefined);
}

function getOrderedGroupChoices(question, group, index) {
  const order = state.optionOrders[getGroupChoiceOrderKey(question, index)];
  if (!order || order.length !== group.choices.length) return group.choices;

  return order.map((choiceIndex) => group.choices[choiceIndex]).filter(Boolean);
}

function getGroupChoiceOrderKey(question, index) {
  return `${question.id}:group:${index}`;
}

function startExam() {
  const count = getExamCount();
  state.examCount = count;
  state.examQuestionIds = shuffle(QUESTIONS.map((question) => question.id)).slice(0, count);
  state.examFinished = false;
  state.examScore = null;
  shuffleAnswerOptions(getExamQuestions());

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
  const sourceClass = question.source === "ai" ? "tag-ai" : "tag-sheet";

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
        ${renderQuestionImage(question)}
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

  return `
    <h3>Wynik</h3>
    <p>
      Zamknięte pytania w pełni poprawne: <strong>${score.perfectQuestions}/${score.closedQuestions}</strong>.
      Punkty cząstkowe: <strong>${score.correctUnits}/${score.totalUnits}</strong> (${percent}%).
    </p>
    ${
      score.openQuestions
        ? `<p>Pytań otwartych do samooceny: <strong>${score.openQuestions}</strong>. Porównaj swoją odpowiedź z modelem pod pytaniem.</p>`
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

  const sourceClass = question.source === "ai" ? "tag-ai" : "tag-sheet";
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
        ${renderQuestionImage(question)}
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

function renderQuestionImage(question) {
  if (!question.image?.src) return "";

  return `
    <figure class="question-figure">
      <img src="${escapeAttribute(question.image.src)}" alt="${escapeAttribute(question.image.alt || "")}">
    </figure>
  `;
}

function renderChoice(question, type, options = {}) {
  const selected = userAnswers[question.id] || {};
  const result = checkResults[question.id];
  const inputType = type === "singleChoice" ? "radio" : "checkbox";
  const selectedValues = type === "singleChoice" ? [selected.choice] : selected.choices || [];
  const orderedOptions = getOrderedOptions(question);
  const namePrefix = options.inputNamePrefix || "";
  const disabled = options.disabled ? "disabled" : "";

  return `
    <div class="interactive-block">
      <div class="choice-list">
        ${orderedOptions
          .map((option) => {
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
  const choices = getOrderedOptions(question).map((option) => stripOptionPrefix(option));
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
            const choices = getOrderedGroupChoices(question, group, index);
            return `
              <fieldset class="group-choice ${rowClass}">
                <legend>${escapeHtml(group.prompt)}</legend>
                ${choices
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
  if (question.id === "sheet-osi-pdu") return "matching";
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
    answerItems.some((answer) =>
      Array.isArray(question.answer)
        ? answerMatchesOption(answer, option)
        : answerContainsOption(answer, option)
    )
  );
}

function answerMatchesOption(answer, option) {
  const cleanAnswer = normalizeText(answer);
  const cleanOption = normalizeText(option);
  const optionWithoutLetter = normalizeText(stripOptionPrefix(option));

  return cleanAnswer === cleanOption || cleanAnswer === optionWithoutLetter;
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
