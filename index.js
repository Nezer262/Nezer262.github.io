"use strict";

let girlsData = [
    {
        name: "Alina",
        status: "Жду звонка",
        descr: "Пример описания текста",
        src: "assets/img/anketa.jpg",
        srcCheck: "assets/img/100.png",
        likes: "3",
        phone: "8 (111) 111-11-11",
        age: "18",
        weight: "56",
        growth: "175",
        breast: "3",
        priceHour: "1500 Р",
        priceTwoHour: "3000 Р",
        priceNight: "7500 Р",
    },
    {
        name: "Masha",
        status: "Жду звонка",
        descr: "Пример описания текста",
        src: "assets/img/anketa.jpg",
        srcCheck: "assets/img/100.png",
        likes: "5",
        phone: "8 (111) 111-11-11",
        age: "21",
        weight: "51",
        growth: "181",
        breast: "2",
        priceHour: "2000 Р",
        priceTwoHour: "3500 Р",
        priceNight: "9000 Р",
    },
    {
        name: "Nastya",
        status: "Занята",
        descr: "Пример описания текста",
        src: "assets/img/anketa.jpg",
        srcCheck: "assets/img/100.png",
        likes: "1",
        phone: "8 (111) 111-11-11",
        age: "20",
        weight: "50",
        growth: "170",
        breast: "1",
        priceHour: "1000 Р",
        priceTwoHour: "2000 Р",
        priceNight: "5000 Р",
    },
    {
        name: "Vera",
        status: "Жду звонка",
        descr: "Пример описания текста",
        src: "assets/img/anketa.jpg",
        srcCheck: "assets/img/100.png",
        likes: "7",
        phone: "8 (111) 111-11-11",
        age: "23",
        weight: "54",
        growth: "176",
        breast: "2",
        priceHour: "3000 Р",
        priceTwoHour: "6000 Р",
        priceNight: "12000 Р",
    }
];

function renderMy(girlsData) {
    let str = "";
    let div = document.createElement("div");
    div.classList.add("content-item");
    let divItemStat = document.createElement("div");
    divItemStat.classList.add("item__status");
    div.append(divItemStat);
    let name = document.createElement("a");
    name.classList.add("name");
    name.element.setAttribute("href", "#");
    name.textContent("${data.name}");
    divItemStat.append(name);
    let status = document.createElement("span");
    status.classList.add("online");
    status.textContent("${status.name}");
    divItemStat.append(status);
    let divDescr = document.createElement("div");
    divDescr.classList.add("item__descr");
    divDescr.textContent("${descr.name}");
    div.append(divDescr);
    let divDetails = document.createElement("div");
    divDetails.classList.add("item__details");
    div.append(divDetails);
    let divLeft = document.createElement("div");
    divLeft.classList.add("item__left");
    divDetails.append(divLeft);
    let divImg = document.createElement("div");
    divImg.classList.add("item-img");
    divLeft.append(divImg);
    let a = document.createElement("a");
    a.element.setAttribute("href", "#");
    divImg.append(a);
    let imgAnketa = document.createElement("img");
    imgAnketa.classList.add("img-anketa");
    imgAnketa.element.setAttribute("src", "${data.src}");
    imgAnketa.element.setAttribute("alt", " ");
    imgAnketa.element.setAttribute("width", "150");
    imgAnketa.element.setAttribute("height", "190");
    a.append(imgAnketa);
    let imgCheck = document.createElement("img");
    imgCheck.classList.add("anketaReal");
    imgCheck.element.setAttribute("src", "${data.srcCheck}");
    imgCheck.element.setAttribute("alt", " ");
    a.append(imgCheck);
    let divLikes = document.createElement("div");
    divLikes.classList.add("likes");
    divLeft.append(divLikes);
    let divRight = document.createElement("div");
    divRight.classList.add("item__right");
    divDetails.append(divRight);
    let divPhone = document.createElement("div");
    divPhone.classList.add("item__phone");
    divPhone.textContent("${data.phone}");
    divRight.append(divPhone);
    let divPlace = document.createElement("div");
    divPlace.classList.add("item__place");
    divPlace.textContent("Скрипт интим услуг");
    divRight.append(divPlace);
    let divParams = document.createElement("div");
    divParams.classList.add("item__params");
    divRight.append(divParams);
    let pAge = document.createElement("p");
    pAge.textContent("Возраст: <span>${data.age}</span>");
    divParams.append(pAge);
    let pWeight = document.createElement("p");
    pWeight.classList.add("parm");
    pWeight.textContent("Вес: <span>${data.weight}</span>");
    divParams.append(pWeight);
    let pGrowth = document.createElement("p");
    pGrowth.textContent("Рост: <span>${data.growth}</span>");
    divParams.append(pGrowth);
    let pBreast = document.createElement("p");
    pBreast.classList.add("parm");
    pBreast.textContent("Грудь: <span>${data.breast}</span>");
    let divPrice = document.createElement("div");
    divPrice.classList.add("item__price");
    divRight.append(divPrice);
    let priceHour = document.createElement("p");
    priceHour.textContent("<span>1 ЧАС:</span>${data.priceHour}");
    divPrice.append(priceHour);
    let priceTwoHour = document.createElement("p");
    priceTwoHour.textContent("<span>2 ЧАСА:</span>${data.priceTwoHour}");
    divPrice.append(priceTwoHour);
    let priceNight = document.createElement("p");
    priceNight.textContent("<span>НОЧЬ:</span>${data.priceNight}");
    divPrice.append(priceNight);

    for (const data of girlsData) {
        str += 
        `
        <div class="content-item">
            <div class="item__status">
                <a href="#" class="name">${data.name}</a>
                <span class="online">${data.status}</span>
            </div>
            <div class="item__descr">${data.descr}</div>
            <div class="item__details">
                <div class="item__left">
                    <div class="item-img">
                        <a href="#">
                            <img class="img-anketa" src="${data.src}" alt="" width="150" height="190">
                            <img class="anketaReal" src="${data.srcCheck}" alt="">
                        </a>
                    </div>
                    <div class="likes">
                        <a class="like-item" href="#">${data.likes}</a>
                    </div> 
                </div>
                <div class="item__right">
                    <div class="item__phone">${data.phone}</div>
                    <div class="item__place">Скрипт интим услуг</div>
                    <div class="item__params">
                        <p>Возраст: <span>${data.age}</span></p>
                        <p class="parm">Вес: <span>${data.weight}</span></p><br>
                        <p>Рост: <span>${data.growth}</span></p>
                        <p class="parm">Грудь: <span>${data.breast}</span></p>
                    </div>
                    <div class="item__price">
                        <p><span>1 ЧАС:</span>${data.priceHour}</p>
                        <p><span>2 ЧАСА:</span>${data.priceTwoHour}</p>
                        <p><span>НОЧЬ:</span>${data.priceNight}</p>
                    </div>
                </div>
            </div>
        </div>
        `
        }
        return str;

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
    document.querySelector('#root').innerHTML = component.render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);