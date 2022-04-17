// const route = (event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
// }
//
// const routes = {
//     "/": "/index.html",
//     "/career": "/index.html",
//     "/portfolio": "/index.html",
//     "/projects": "/index.html",
//     "/music": "../MusicalInteractions/music.html",
//     "/dance": "/index.html",
// };
//
// const handleLocation = async () => {
//     const path = window.location.pathname;
//     const route = routes[path] || routes;
//     const html = await fetch(route).then((data) => data.text());
//     document.getElementById("main-page").innerHTML = html;
// }
//
// window.onpopstate = handleLocation();
// window.route = route;