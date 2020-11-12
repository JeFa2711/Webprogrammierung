
window.addEventListener("load", () => {
    // Funktion zum Umschalten der Tabreiter
    let switchTabPage = (clickedTabItem) => {
        // Erst mal alle Tabseiten ausblenden
        clickedTabItem.parentNode.childNodes.forEach(tabItem => {
            if (tabItem.nodeType != Node.ELEMENT_NODE) return;

            tabItem.classList.remove("active");
            let tabContent = document.querySelector(tabItem.dataset.tabContent);

            if (tabContent != null) {
                tabContent.classList.add("tab-page");
            }
        });

        // Dann die ausgewählte Tabseite anzeigen
        clickedTabItem.classList.add("active");
        let tabContent = document.querySelector(clickedTabItem.dataset.tabContent);

        if (tabContent != null) {
            tabContent.classList.remove("tab-page");
        }
    };

    // Alle Tablaschen in der Seite suchen
    let tabItems = document.querySelectorAll(".tab-item");

    // Event Handler registrieren und erste Tabseite anzeigen
    tabItems.forEach(tabItem => {
        // Bist du eine aktive Tablasche? Dann Inhalt anzeigen.
        if (tabItem.classList.contains("active")) {
            switchTabPage(tabItem);
        }

        // Aktive Seite bei Klick auf die Lasche wechseln
        tabItem.addEventListener("click", event => {
            switchTabPage(event.target);
        });
    });
});
