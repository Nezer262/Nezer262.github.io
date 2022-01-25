import {girlsData} from "./script/girls-data/girls-data.js";
import {createGirlCard} from "./script/create-girl-card/create-girl-card.js";

function renderMy(girlsData) {
    const div = document.createElement("div");
    for (const data of girlsData) {
        const res = createGirlCard(data);
        div.append(res);
    }
    return div;
};

const HomeComponent = {
render: () => {
    return renderMy(girlsData);
}
}

const individualsComponent = {
render: () => {
    return `
    <section>
        <h1>Page 1</h1>
        <p>This is just a test</p>
    </section>
    `;
}
} 

const eliteComponent = {
render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
}
}

const brandNewComponent = {
render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
}
} 

const realComponent = {
render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
}
} 

const departureComponent = {
render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
}
}

const cheapComponent = {
render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
}
}

const apartmentComponent = {
render: () => {
    return `
    <section>
        <h1>Page 2</h1>
        <p>This is just a test</p>
    </section>
    `;
}
} 

const ErrorComponent = {
render: () => {
    return `
    <section>
        <h1>Error</h1>
        <p>This is just a test</p>
    </section>
    `;
}
}

const routes = [
{ path: '/', component: HomeComponent, },
{ path: '/individuals', component: individualsComponent, },
{ path: '/elite', component: eliteComponent, },
{ path: '/brandNew', component: brandNewComponent, },
{ path: '/real', component:realComponent, },
{ path: '/departure', component: departureComponent, },
{ path: '/apartment', component: apartmentComponent, },
{ path: '/cheap', component: cheapComponent, },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const router = () => {
    // Find the component based on the current path
    const path = parseLocation();
    // If there's no matching route, get the "Error" component
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    // Render the component in the "app" placeholder
    document.querySelector('#root').append(component.render());
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);