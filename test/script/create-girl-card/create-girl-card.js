export const createGirlCard = (data) => {
    const div = document.createElement("div");
    div.classList.add("content-item");
    const divItemStat = document.createElement("div");
    divItemStat.classList.add("item__status");
    div.append(divItemStat);
    const name = document.createElement("a");
    name.classList.add("name");
    name.setAttribute("href", "#");
    name.textContent = `${data.name}`;
    divItemStat.append(name);
    const status = document.createElement("span");
    status.classList.add("online");
    status.textContent = `${data.status}`;
    divItemStat.append(status);
    const divDescr = document.createElement("div");
    divDescr.classList.add("item__descr");
    divDescr.textContent = `${data.descr}`;
    div.append(divDescr);
    const divDetails = document.createElement("div");
    divDetails.classList.add("item__details");
    div.append(divDetails);
    const divLeft = document.createElement("div");
    divLeft.classList.add("item__left");
    divDetails.append(divLeft);
    const divImg = document.createElement("div");
    divImg.classList.add("item-img");
    divLeft.append(divImg);
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    divImg.append(a);
    const imgAnketa = document.createElement("img");
    imgAnketa.classList.add("img-anketa");
    imgAnketa.setAttribute("src", `${data.src}`);
    imgAnketa.setAttribute("alt", " ");
    imgAnketa.setAttribute("width", "150");
    imgAnketa.setAttribute("height", "190");
    a.append(imgAnketa);
    const imgCheck = document.createElement("img");
    imgCheck.classList.add("anketaReal");
    imgCheck.setAttribute("src", `${data.srcCheck}`);
    imgCheck.setAttribute("alt", " ");
    a.append(imgCheck);
    const divLikes = document.createElement("div");
    divLikes.classList.add("likes");
    divLeft.append(divLikes);
    const divRight = document.createElement("div");
    divRight.classList.add("item__right");
    divDetails.append(divRight);
    const divPhone = document.createElement("div");
    divPhone.classList.add("item__phone");
    divPhone.textContent = `${data.phone}`;
    divRight.append(divPhone);
    const divPlace = document.createElement("div");
    divPlace.classList.add("item__place");
    divPlace.textContent = "Скрипт интим услуг";
    divRight.append(divPlace);
    const divParams = document.createElement("div");
    divParams.classList.add("item__params");
    divRight.append(divParams);
    const pAge = document.createElement("p");
    pAge.textContent = "Возраст: ";
    divParams.append(pAge);
    const spanAge = document.createElement("span");
    spanAge.textContent = `${data.age}`;
    pAge.append(spanAge);
    const pWeight = document.createElement("p");
    pWeight.classList.add("parm");
    pWeight.textContent = "Вес: ";
    divParams.append(pWeight);
    const spanWeight = document.createElement("span");
    spanWeight.textContent = `${data.weight}`;
    pWeight.append(spanWeight);
    const pGrowth = document.createElement("p");
    pGrowth.textContent = "Рост: ";
    divParams.append(pGrowth);
    const spanGrowth = document.createElement("span");
    spanGrowth.textContent = `${data.growth}`;
    pGrowth.append(spanGrowth);
    const pBreast = document.createElement("p");
    pBreast.classList.add("parm");
    pBreast.textContent = "Грудь: ";
    divParams.append(pBreast);
    const spanBreast = document.createElement("span");
    spanBreast.textContent = `${data.breast}`;
    pBreast.append(spanBreast);
    const divPrice = document.createElement("div");
    divPrice.classList.add("item__price");
    divRight.append(divPrice);
    const priceHour = document.createElement("p");
    priceHour.textContent = `${data.priceHour}`;
    divPrice.append(priceHour);
    const spanHour = document.createElement("span");
    spanHour.textContent = "1 ЧАС:";
    priceHour.prepend(spanHour);
    const priceTwoHour = document.createElement("p");
    priceTwoHour.textContent = `${data.priceTwoHour}`;
    divPrice.append(priceTwoHour);
    const spanTwoHour = document.createElement("span");
    spanTwoHour.textContent = "2 ЧАСА:";
    priceTwoHour.prepend(spanTwoHour);
    const priceNight = document.createElement("p");
    priceNight.textContent = `${data.priceNight}`;
    divPrice.append(priceNight);
    const spanNight = document.createElement("span");
    spanNight.textContent = "НОЧЬ:";
    priceNight.prepend(spanNight);
    return div;
}