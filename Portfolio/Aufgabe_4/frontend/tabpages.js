// mit bootstraps
// $(document).ready(function(){
//   $(".nav-tabs a").click(function(){
//     $(this).tab('show');
//   });
// });
// var tabbutton = document.querySelectorAll(" .container .tableiste button");
// var tabinhalt = document.querySelectorAll(" .container .tabinhalt");
//
// function openTab(panelIndex){
//   tabbutton.forEach(function(node){
//     node.style.backgroundColor="";
//     node.style.color="";
//   });
//
//   tabbutton[panelIndex].style.color=white;
//   tabbutton.forEach(function(node){
//     node.style.display="none";
//
//   });
//   tabinhalt[panelIndex].style.display="block";
//   }
//
//
//
function openTab(evt, tabpage){
  var i, tabinhalt, tabbutton;
  //Tabinhalt komplett ausblenden!
  tabinhalt = document.getElementsByClassName("tabinhalt");
  for(i=0; i<tabinhalt.length;i++){
    tabinhalt[i].style.display="none";
  }
  // alle Elemente mit der Klasse Tabbutton und die classe active löschen
  tabbutton = document.getElementsByClassName("tabbutton");
  for(i=0; i<tabbutton.length;i++){
    tabbutton[i].className = tabbutton[i].className.replace(" active", "");
  }
  // den aktuellen Tab anzeigen und "active" hinzufügen
  document.getElementById(tabpage).style.display ="block";
  evt.currentTarget.className+= " active";
}

// window.addEventListener("load", () => {
//     // Funktion zum Umschalten der Tabreiter
//     let switchTabPage = (clickedTabItem) => {
//         // Erst mal alle Tabseiten ausblenden
//         clickedTabItem.parentNode.childNodes.forEach(tabbutton => {
//             // if (tabinhalt.nodeType != Node.ELEMENT_NODE) return;
//
//             tabbutton.classList.remove("active");
//             let tabContent = document.querySelector(tabItem.dataset.tabContent);
//
//             if (tabContent != null) {
//                 tabContent.classList.add("tab-page");
//             }
//         });
//
//         // Dann die ausgewählte Tabseite anzeigen
//         clickedTabItem.classList.add("active");
//         let tabContent = document.querySelector(clickedTabItem.dataset.tabContent);
//
//         if (tabContent != null) {
//             tabContent.classList.remove("tab-page");
//         }
//     };
//
//     // Alle Tablaschen in der Seite suchen
//     let tabItems = document.querySelectorAll(".tab-item");
//
//     // Event Handler registrieren und erste Tabseite anzeigen
//     tabItems.forEach(tabItem => {
//         // Bist du eine aktive Tablasche? Dann Inhalt anzeigen.
//         if (tabItem.classList.contains("active")) {
//             switchTabPage(tabItem);
//         }
//
//         // Aktive Seite bei Klick auf die Lasche wechseln
//         tabItem.addEventListener("click", event => {
//             switchTabPage(event.target);
//         });
//     });
// });
