import { girlsData } from "./script/girls-data/girls-data.js";
import { createGirlCard } from "./script/create-girl-card/create-girl-card.js";
import { typeGirls } from "./script/constants/constant.js";
// const btn = document.getElementById("btn");

function renderHome(girlsData) {
  const div = document.createElement("div");
  for (let i = 0; i < girlsData.length; i++) {
    const res = createGirlCard(girlsData[i]);
    div.append(res);
  }
  return div;
};
/* btn.addEventListener('click', allGirls () {

}); */

const renderIndividuals = () => {
  const individualsGirls = girlsData.filter((item) => item.type === typeGirls.individuals);
  return renderHome(individualsGirls);
};

const renderElite = () => {
  const eliteGirls = girlsData.filter((item) => item.type === typeGirls.elite);
  return renderHome(eliteGirls);
};

const renderBrandNew = () => {
  const brandNewGirls = girlsData.filter((item) => item.type === typeGirls.brandNew);
  return renderHome(brandNewGirls);
};

const renderReal = () => {
  const realGirls = girlsData.filter((item) => item.type === typeGirls.real);
  return renderHome(realGirls);
};

const HomeComponent = {
  render: () => {
    return renderHome(girlsData);
  },
};

const individualsComponent = {
  render: () => {
    return renderIndividuals();
  },
};

const eliteComponent = {
  render: () => {
    return renderElite();
  },
};

const brandNewComponent = {
  render: () => {
    return renderBrandNew();
  },
};

const realComponent = {
  render: () => {
    return renderReal();
  },
};

const departureComponent = {
  render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
  },
};

const cheapComponent = {
  render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
  },
};

const apartmentComponent = {
  render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
  },
};

const ErrorComponent = {
  render: () => {
    return `
    <section>
        <h1>Error</h1>
        <p>This is just a test</p>
    </section>
    `;
  },
};

const routes = [
  { path: "/", component: HomeComponent },
  { path: "/individuals", component: individualsComponent },
  { path: "/elite", component: eliteComponent },
  { path: "/brandNew", component: brandNewComponent },
  { path: "/real", component: realComponent },
  { path: "/departure", component: departureComponent },
  { path: "/apartment", component: apartmentComponent },
  { path: "/cheap", component: cheapComponent },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || "/";

const findComponentByPath = (path, routes) =>
  routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, "gm"))) ||
  undefined;

const router = () => {
  // Find the component based on the current path
  const path = parseLocation();
  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } =
    findComponentByPath(path, routes) || {};
  // Render the component in the "app" placeholder
  document.querySelector("#root").innerHTML = "";
  document.querySelector("#root").append(component.render());
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
