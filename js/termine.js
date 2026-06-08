// Vereinskalender Kuckucksgemeinschaft Altenritte e.V.
// Pflege: Neue Termine einfach in der Liste "termine" ergänzen.
// Wichtig bei GitHub Pages: Bildpfade und Dateinamen exakt schreiben, auch Groß-/Kleinschreibung.

const termine = [
  {
    titel: "Kuckucksfest",
    untertitel: "Rittahe 2025",
    start: "2025-08-23",
    ende: "2025-08-24",
    zeit: "Samstag ab 15:00, Sonntag ab 10:00",
    ort: "Dorfplatz, Altenritte",
    beschreibung: "Das große Vereinsfest auf dem Dorfplatz mit Begegnung, Musik und Aktionen für Altenritte.",
    bild: "images/Dorfplatz Altenritte.jpg",
    status: "open",
    statusText: "Rückmeldung möglich",
    formular: ""
  },
  {
    titel: "Gründungsversammlung",
    untertitel: "beendet",
    start: "2024-06-07",
    ende: "2024-06-07",
    zeit: "19:00 bis 22:00 Uhr",
    ort: "Ev. Gemeindehaus, Altenritte",
    beschreibung: "Gründungsversammlung der Kuckucksgemeinschaft Altenritte e.V.",
    bild: "images/Ev. Gemeindehaus Altenritte.jpg",
    status: "past",
    statusText: "Beendet",
    formular: ""
  },
  {
    titel: "Mitgliederversammlung",
    untertitel: "einmal jährlich",
    start: "2025-03-01",
    ende: "2025-03-01",
    zeit: "ab 18:00 Uhr",
    ort: "Vereinshaus, Altenritte",
    beschreibung: "Jährliche Mitgliederversammlung mit Informationen aus dem Vorstand und Ausblick auf das Vereinsjahr.",
    bild: "images/Vereinshaus.jpg",
    status: "past",
    statusText: "Beendet",
    formular: ""
  },
  {
    titel: "Sauberhaftes Baunatal",
    untertitel: "Reinigungsaktion",
    start: "2025-03-22",
    ende: "2025-03-22",
    zeit: "10:00 bis 15:00 Uhr",
    ort: "ganzer Ortsteil, Altenritte",
    beschreibung: "Gemeinsame Müllsammelaktion im Ortsteil. Jede helfende Hand ist willkommen.",
    bild: "images/img-9.jpg",
    status: "past",
    statusText: "Beendet",
    formular: ""
  },
  {
    titel: "Festumzug Elgershausen",
    untertitel: "Schützenfest",
    start: "2025-06-08",
    ende: "2025-06-08",
    zeit: "ab 13:00 Uhr",
    ort: "Abfahrt in Altenritte",
    beschreibung: "Teilnahme am Festumzug in Elgershausen. Weitere Infos zur Aufstellung folgen über den Vorstand.",
    bild: "images/KGA-Umzug-2024-0.jpeg",
    status: "past",
    statusText: "Beendet",
    formular: ""
  },
  {
    titel: "Vereinssitzung",
    untertitel: "wiederkehrend",
    start: "2025-06-11",
    ende: "2025-06-11",
    zeit: "19:00 bis 21:00 Uhr",
    ort: "Vereinshaus, Altenritte",
    beschreibung: "Regelmäßige Sitzung zur Planung aktueller Vereinsaufgaben.",
    bild: "images/Vereinshaus.jpg",
    status: "open",
    statusText: "Geplant",
    formular: ""
  },
  {
    titel: "Vereinssitzung",
    untertitel: "wiederkehrend",
    start: "2025-06-25",
    ende: "2025-06-25",
    zeit: "19:00 bis 21:00 Uhr",
    ort: "Vereinshaus, Altenritte",
    beschreibung: "Regelmäßige Sitzung zur Planung aktueller Vereinsaufgaben.",
    bild: "images/Vereinshaus.jpg",
    status: "open",
    statusText: "Geplant",
    formular: ""
  },
  {
    titel: "Vereinshilfe",
    untertitel: "Großenritter Zeltkirmes e.V.",
    start: "2024-09-21",
    ende: "2024-09-22",
    zeit: "Spezifisch nach Einteilung",
    ort: "Grüner Weg 33, Großenritte",
    beschreibung: "Unterstützung der Großenritter Zeltkirmes e.V. durch Vereinsmitglieder.",
    bild: "images/GRZK.jpeg",
    status: "past",
    statusText: "Beendet",
    formular: ""
  },
  {
  titel: "Arbeitseinsatz Kreiselpflege",
  untertitel: "Pflegeeinsatz",
  start: "2026-06-20",
  ende: "2026-06-20",
  zeit: "09:00 Uhr",
  ort: "Kreisel Altenritte",
  beschreibung: "Gemeinsamer Arbeitseinsatz zur Pflege des Kreisels.",
  bild: "images/Vereinshaus.jpg",
  status: "open",
  statusText: "Geplant",
  formular: "#"
},

{
  titel: "Arbeitseinsatz Kuckucksfest",
  untertitel: "Vorbereitung",
  start: "2026-07-18",
  ende: "2026-07-18",
  zeit: "Uhrzeit folgt",
  ort: "Altenritte",
  beschreibung: "Vorbereitende Arbeiten für das Kuckucksfest.",
  bild: "images/Vereinshaus.jpg",
  status: "open",
  statusText: "Geplant",
  formular: "#"
},

{
  titel: "Parkplatz-Aktion HR4 Radio",
  untertitel: "Aufbau / Organisation",
  start: "2026-08-07",
  ende: "2026-08-07",
  zeit: "17:00 Uhr",
  ort: "Altenritte",
  beschreibung: "Treffen zur Parkplatz-Aktion im Rahmen der HR4-Veranstaltung.",
  bild: "images/Vereinshaus.jpg",
  status: "open",
  statusText: "Geplant",
  formular: "#"
},

{
  titel: "Parkplatz-Aktion HR4 Radio",
  untertitel: "Aufbau / Organisation",
  start: "2026-08-08",
  ende: "2026-08-08",
  zeit: "17:00 Uhr",
  ort: "Altenritte",
  beschreibung: "Treffen zur Parkplatz-Aktion im Rahmen der HR4-Veranstaltung.",
  bild: "images/Vereinshaus.jpg",
  status: "open",
  statusText: "Geplant",
  formular: "#"
},

{
  titel: "Besprechung Kuckucksfest",
  untertitel: "Einweisung Helfer",
  start: "2026-08-19",
  ende: "2026-08-19",
  zeit: "Uhrzeit folgt",
  ort: "Vereinshaus Altenritte",
  beschreibung: "Besprechung und Einweisung aller Helfer für das Kuckucksfest.",
  bild: "images/Vereinshaus.jpg",
  status: "open",
  statusText: "Geplant",
  formular: "#"
},

{
  titel: "Kuckucksfest",
  untertitel: "Rittahe 2026",
  start: "2026-08-22",
  ende: "2026-08-23",
  zeit: "Details folgen",
  ort: "Dorfplatz Altenritte",
  beschreibung: "Das traditionelle Kuckucksfest der Kuckucksgemeinschaft Altenritte.",
  bild: "images/Dorfplatz Altenritte.jpg",
  status: "open",
  statusText: "Anmeldung offen",
  formular: "#"
},

{
  titel: "Nachbesprechung Kuckucksfest",
  untertitel: "Rückblick",
  start: "2026-09-09",
  ende: "2026-09-09",
  zeit: "Uhrzeit folgt",
  ort: "Vereinshaus Altenritte",
  beschreibung: "Gemeinsame Nachbesprechung des Kuckucksfestes.",
  bild: "images/Vereinshaus.jpg",
  status: "open",
  statusText: "Geplant",
  formular: "#"
},

{
  titel: "Großenritter Zeltkirmes",
  untertitel: "Kirmes und Umzug",
  start: "2026-09-17",
  ende: "2026-09-20",
  zeit: "Details folgen",
  ort: "Großenritte",
  beschreibung: "Teilnahme an der Großenritter Zeltkirmes inklusive Festumzug.",
  bild: "images/KGA-Umzug-2024-0.jpeg",
  status: "open",
  statusText: "Geplant",
  formular: "#"
},

{
  titel: "Vereinstreffen",
  untertitel: "Monatstreffen",
  start: "2026-10-17",
  ende: "2026-10-17",
  zeit: "Uhrzeit folgt",
  ort: "Vereinshaus Altenritte",
  beschreibung: "Regelmäßiges Vereinstreffen.",
  bild: "images/Vereinshaus.jpg",
  status: "open",
  statusText: "Geplant",
  formular: "#"
},

{
  titel: "Vereinstreffen",
  untertitel: "Monatstreffen",
  start: "2026-11-21",
  ende: "2026-11-21",
  zeit: "Uhrzeit folgt",
  ort: "Vereinshaus Altenritte",
  beschreibung: "Regelmäßiges Vereinstreffen.",
  bild: "images/Vereinshaus.jpg",
  status: "open",
  statusText: "Geplant",
  formular: "#"
},

{
  titel: "Adventskaffee",
  untertitel: "Vereinsveranstaltung",
  start: "2026-11-29",
  ende: "2026-11-29",
  zeit: "Uhrzeit folgt",
  ort: "Vereinshaus Altenritte",
  beschreibung: "Gemeinsamer Adventskaffee für Mitglieder und Gäste.",
  bild: "images/Vereinshaus.jpg",
  status: "open",
  statusText: "Geplant",
  formular: "#"
}
];

(function initVereinskalender() {
  const calendarGrid = document.getElementById("calendarGrid");
  if (!calendarGrid) return;

  const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
  let currentDate = getInitialMonth();
  let selectedDate = null;
  let currentFilter = "all";

  const monthLabel = document.getElementById("calendarMonthLabel");
  const countLabel = document.getElementById("calendarCountLabel");
  const eventList = document.getElementById("eventList");
  const emptyState = document.getElementById("emptyState");
  const eventMonthHeadline = document.getElementById("eventMonthHeadline");
  const eventIntro = document.getElementById("eventIntro");

  function getInitialMonth() {
    const today = new Date();
    const upcoming = termine
      .map(event => toDate(event.start))
      .filter(date => date >= new Date(today.getFullYear(), today.getMonth(), today.getDate()))
      .sort((a, b) => a - b)[0];

    const base = upcoming || today;
    return new Date(base.getFullYear(), base.getMonth(), 1);
  }

  function toDate(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function formatISO(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function eventTouchesDate(event, date) {
    const check = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return check >= toDate(event.start) && check <= toDate(event.ende);
  }

  function eventTouchesMonth(event, year, month) {
    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);
    return toDate(event.start) <= monthEnd && toDate(event.ende) >= monthStart;
  }

  function getMonthEvents() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return termine.filter(event => eventTouchesMonth(event, year, month));
  }

  function passesFilter(event) {
    if (currentFilter === "all") return true;
    return event.status === currentFilter;
  }

  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();
    const firstDay = new Date(year, month, 1);
    const startOffset = (firstDay.getDay() + 6) % 7;
    const gridStart = new Date(year, month, 1 - startOffset);
    const monthEvents = getMonthEvents();

    monthLabel.textContent = `${monthNames[month]} ${year}`;
    countLabel.textContent = `${monthEvents.length} Termin${monthEvents.length === 1 ? "" : "e"} in diesem Monat`;
    eventMonthHeadline.textContent = `${monthNames[month]} ${year}`;
    calendarGrid.innerHTML = "";

    for (let i = 0; i < 42; i++) {
      const dayDate = new Date(gridStart);
      dayDate.setDate(gridStart.getDate() + i);

      const dayButton = document.createElement("button");
      dayButton.className = "termine-day";
      dayButton.type = "button";
      dayButton.textContent = dayDate.getDate();
      dayButton.setAttribute("aria-label", dayDate.toLocaleDateString("de-DE"));

      if (termine.some(event => eventTouchesDate(event, dayDate))) dayButton.classList.add("has-event");
      if (dayDate.getMonth() !== month) dayButton.classList.add("is-outside");
      if (formatISO(dayDate) === formatISO(today)) dayButton.classList.add("is-today");
      if (selectedDate && formatISO(dayDate) === formatISO(selectedDate)) dayButton.classList.add("is-selected");

      dayButton.addEventListener("click", () => {
        selectedDate = dayDate;
        currentDate = new Date(dayDate.getFullYear(), dayDate.getMonth(), 1);
        renderCalendar();
        renderEvents();
      });

      calendarGrid.appendChild(dayButton);
    }
  }

  function formatDateTile(event) {
    const start = toDate(event.start);
    const end = toDate(event.ende);
    const isRange = event.start !== event.ende;

    return {
      day: isRange ? `${start.getDate()}.–${end.getDate()}.` : start.getDate(),
      month: monthNames[start.getMonth()].slice(0, 3),
      year: start.getFullYear()
    };
  }

  function renderEvents() {
    let visibleEvents = selectedDate
      ? termine.filter(event => eventTouchesDate(event, selectedDate))
      : getMonthEvents();

    visibleEvents = visibleEvents
      .filter(passesFilter)
      .sort((a, b) => toDate(a.start) - toDate(b.start));

    eventIntro.textContent = selectedDate
      ? `Ausgewählter Tag: ${selectedDate.toLocaleDateString("de-DE")}`
      : "Alle eingetragenen Termine im ausgewählten Monat.";

    eventList.innerHTML = "";
    emptyState.style.display = visibleEvents.length ? "none" : "block";

    visibleEvents.forEach(event => {
      const tile = formatDateTile(event);
      const card = document.createElement("article");
      card.className = "termine-event-card";
      card.innerHTML = `
        <div class="termine-date-tile">
          <span class="termine-day-number">${tile.day}</span>
          <span class="termine-month">${tile.month}</span>
          <span class="termine-year">${tile.year}</span>
        </div>
        <div class="termine-event-content">
          <span class="termine-status ${event.status === "past" ? "closed" : ""}"><i class="fa-solid fa-circle"></i>${event.statusText}</span>
          <h3>${event.titel}</h3>
          <div class="termine-subtitle">${event.untertitel}</div>
          <div class="termine-meta">
            <span><i class="fa-regular fa-clock"></i>${event.zeit}</span>
            <span><i class="fa-solid fa-location-dot"></i>${event.ort}</span>
          </div>
          <p>${event.beschreibung}</p>
        </div>
        <div class="termine-event-side">
          <img class="termine-event-image" src="${event.bild}" alt="${event.ort}" loading="lazy">
          <div class="termine-event-actions">
            <a class="termine-button termine-button-dark" href="#"><i class="fa-solid fa-circle-info"></i> Details</a>
            ${event.formular ? `<a class="termine-button termine-button-yellow" href="${event.formular}" target="_blank" rel="noopener"><i class="fa-solid fa-check"></i> Rückmeldung</a>` : ""}
          </div>
        </div>
      `;
      eventList.appendChild(card);
    });
  }

  document.getElementById("prevMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    selectedDate = null;
    renderCalendar();
    renderEvents();
  });

  document.getElementById("nextMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    selectedDate = null;
    renderCalendar();
    renderEvents();
  });

  document.querySelectorAll(".termine-filter button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".termine-filter button").forEach(pill => pill.classList.remove("is-active"));
      button.classList.add("is-active");
      currentFilter = button.dataset.filter;
      renderEvents();
    });
  });

  let overviewYear = currentDate.getFullYear();

function renderYearOverview() {
  const yearLabel = document.getElementById('yearOverviewLabel');
  const yearList = document.getElementById('yearOverviewList');

  if (!yearLabel || !yearList) return;

  yearLabel.textContent = overviewYear;
  yearList.innerHTML = '';

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yearEvents = termine
    .filter(event => toDate(event.start).getFullYear() === overviewYear)
    .sort((a, b) => toDate(a.start) - toDate(b.start));

  if (yearEvents.length === 0) {
    yearList.innerHTML = `
      <div class="termine-year-empty">
        Für dieses Jahr sind aktuell keine Termine eingetragen.
      </div>
    `;
    return;
  }

  yearEvents.forEach(event => {
    const start = toDate(event.start);
    const end = toDate(event.ende);
    const isPast = end < today;

    const dateText = event.start === event.ende
      ? start.toLocaleDateString('de-DE')
      : `${start.toLocaleDateString('de-DE')} – ${end.toLocaleDateString('de-DE')}`;

    const row = document.createElement('article');
    row.className = `termine-year-row ${isPast ? 'is-past' : ''}`;

    row.innerHTML = `
      <div class="termine-year-date">${dateText}</div>
      <div class="termine-year-title">
        <strong>${event.titel}</strong>
        <span>${event.untertitel || ''}</span>
      </div>
      <div class="termine-year-place">
        <i class="fa-solid fa-location-dot"></i> ${event.ort}
      </div>
      <div class="termine-year-status">
        ${isPast ? 'Vergangen' : event.statusText}
      </div>
    `;

    yearList.appendChild(row);
  });
}

document.getElementById('prevYear')?.addEventListener('click', () => {
  overviewYear--;
  renderYearOverview();
});

document.getElementById('nextYear')?.addEventListener('click', () => {
  overviewYear++;
  renderYearOverview();
});

document.getElementById('currentYearButton')?.addEventListener('click', () => {
  overviewYear = new Date().getFullYear();
  renderYearOverview();
});
  
renderCalendar();
renderEvents();
renderYearOverview();
})();
