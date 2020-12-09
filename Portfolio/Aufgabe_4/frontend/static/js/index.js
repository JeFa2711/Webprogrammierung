import campingplatz from "./views/campingplatz.js";
import vans from "./views/vans.js";
import buchungsanfrage from "./views/buchungsanfrage.js";
const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};
const router = async() => {
  const routes =[
    { path:"/campingplatz", view: campingplatz => console.log("Viewing Campingplätze")},
    { path:"/vans", view: vans },
    { path:"/buchungsanfrage", view: buchungsanfrage},
  ];

  // TEST euch route
  const potentialMatches = routes.map(route =>{
    return{
      route: route,
      isMatch: location.pathname === route.path
    }
  })
  let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

  if (!match){
    match = {route: routes[0],
      isMatch:true
    };
  }
  const view = new match.route.view());
  document.querySelector("#app").innerHTML = await view.getHtml();
  console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if(e.target.matches("[data-link]")){
      e.preventDefault();
      navigatoTo(e.target.href);

    }
  })
  router();
});
