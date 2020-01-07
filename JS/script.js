// class place
class Place {
    constructor(name, description, city, zipCode, adress, adressNr, img, createdDate) {
        this.name = name;
        this.description = description;
        this.city = city;
        this.zipCode = zipCode;
        this.adress = adress;
        this.adressNr = adressNr;
        this.img = img;
        this.createdDate = createdDate;
    }
    display() {
        return `<div class="card border-0 col-10 offset-1 col-md-6 offset-md-0 col-lg-3 mx-auto p-3">
                <div class="shadow rounded">
                    <img src="${this.img}" class="card-img-top d-none d-md-block" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text">${this.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item font-weight-bold">
                            <i class="fas fa-map-marked"></i><br>
                            <span class="font-weight-normal">${this.zipCode} ${this.city}<br>${this.adress} ${this.adressNr}</span>
                        </li> 
                        <li class="list-group-item text-muted">
                          Created: ${this.createdDate}
                        </li>           
                    </ul>
                </div>
             </div>`;
    }
}
// class restaurant
class Restaurant extends Place {
    constructor(name, description, city, zipCode, adress, adressNr, img, createdDate, telNr, webAdress, type) {
        super(name, description, city, zipCode, adress, adressNr, img, createdDate);
        this.telNr = telNr;
        this.webAdress = webAdress;
        this.type = type;
    }
    display() {
        return `<div class="card border-0 col-10 offset-1 col-md-6 offset-md-0 col-lg-3 mx-auto p-3">
                <div class="shadow rounded">
                    <img src="${this.img}" class="card-img-top d-none d-md-block" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text">${this.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item font-weight-bold">
                            <i class="fas fa-map-marked"></i><br>
                            <span class="font-weight-normal">${this.zipCode} ${this.city}<br>${this.adress} ${this.adressNr}</span>
                        </li>
                        <li class="list-group-item font-weight-bold">
                          <i class="fas fa-tty"></i></i><span class="font-weight-normal"> ${this.telNr}</span>
                        </li>
                        <li class="list-group-item font-weight-bold">
                            <i class="fas fa-home"></i> 
                            <span class="font-weight-normal"><a href="${this.webAdress}" class="text-dark">Web</a></span>
                        <li class="list-group-item font-weight-bold text-center">
                            <img src="${this.type}" alt="">
                        </li>
                        <li class="list-group-item text-muted">
                          Created: ${this.createdDate}
                        </li>            
                    </ul>
                </div>
             </div>`;
    }
}
// class events
class Events extends Place {
    constructor(name, description, city, zipCode, adress, adressNr, img, createdDate, eventLocation, eventDate, eventTime, ticketPrice) {
        super(name, description, city, zipCode, adress, adressNr, img, createdDate);
        this.eventLocation = eventLocation;
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice.toFixed(2);
    }
    display() {
        return `<div class="card border-0 col-10 offset-1 col-md-6 offset-md-0 col-lg-3 mx-auto p-3">
                <div class="shadow rounded">
                    <img src="${this.img}" class="card-img-top d-none d-md-block" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text">${this.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item font-weight-bold">
                          <i class="fas fa-map-marked"></i><br>
                          <span class="font-weight-normal">${this.zipCode} ${this.city}<br>${this.adress}</span>
                        </li>
                        <li class="list-group-item font-weight-bold">
                          <i class="far fa-calendar"></i>
                          <span class="font-weight-normal"> ${this.eventDate}</span>
                        </li>
                        <li class="list-group-item font-weight-bold">
                          <i class="far fa-clock"></i>
                          <span class="font-weight-normal"> ${this.eventTime}</span>
                        </li>
                        <li class="list-group-item font-weight-bold">
                          <i class="far fa-money-bill-alt"></i>
                          <span class="font-weight-normal"> € ${this.ticketPrice}</span>
                        </li>
                        <li class="list-group-item text-muted">
                          Created: ${this.createdDate}
                        </li>          
                    </ul>
                </div>
             </div>`;
    }
}
// class StreetArt
class StreetArt extends Place {
    constructor(name, description, city, zipCode, adress, adressNr, img, createdDate, curator, year, title) {
        super(name, description, city, zipCode, adress, adressNr, img, createdDate);
        this.curator = curator;
        this.year = year;
        this.title = title;
    }
    display() {
        return `<div class="card border-0 col-10 offset-1 col-md-6 offset-md-0 col-lg-3 mx-auto p-3">
                <div class="shadow rounded">
                    <img src="${this.img}" class="card-img-top d-none d-md-block" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <h6 class="card-text">${this.title}</h6>
                        <p class="card-text">${this.curator}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                          <li class="list-group-item font-weight-bold">                      
                            <span class="font-weight-normal">${this.description}</span>
                        </li>   
                        <li class="list-group-item font-weight-bold">
                            <i class="fas fa-map-marked"></i><br>
                            <span class="font-weight-normal">${this.zipCode} ${this.city}<br>${this.adress} ${this.adressNr}</span>
                        </li>
                        <li class="list-group-item text-muted">
                          Created: ${this.createdDate}
                        </li>            
                    </ul>
                </div>
             </div>`;
    }
}
//objects
let karlskirche = new Place("Karlskirche", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1040, "Kreuzherrengasse", 1, "img/places/karlskirche.jpg", "24.10.2019 12:45");
let schlossSchönbrunn = new Place("Schloss Schönbrunn", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1130, "Schönbrunner Schloßstraße", 47, "img/places/schoenbrunn.jpg", '23.10.2019 12:45');
let prater = new Place("Schloss Schönbrunn", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1020, "Prater", 7, "img/places/prater.jpg", '22.10.2019 12:45');
let hundertwasser = new Place("KUNST HAUS WIEN. Museum Hundertwasser", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1030, "Untere Weißgerberstraße", 13, "img/places/hundertwasser.jpg", "21.10.2019 12:45");
let harvest = new Restaurant("Harvest", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1020, "Karmeliterplatz", 1, "img/eat/harvest.jpg", "20.10.2019 12:45", "0676 4927790", "http://harvest-bistrot.at/", "https://www.happycow.net/img/category/category_vegan.svg");
let hawidere = new Restaurant("Hawidere", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1150, "Ullmannstraße", 31, "img/eat/hawidere.jpg", "19.10.2019 12:45", "0664 1508429", "http://hawidere.at/", "https://www.happycow.net/img/category/category_veg-friendly.svg");
let rupps = new Restaurant("Rupps", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1050, "Arbeitergasse", 46, "img/eat/rupps.jpg", "18.10.2019 12:45", "01 5452284", "https://www.rupps.at/", "https://www.happycow.net/img/category/category_vegetarian.svg");
let secretGarden = new Restaurant("Secret Garden", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1060, "Mariahilfer Straße", 45, "img/eat/secretGarden.jpg", "17.10.2019 12:45", "01 5862839", "https://secret-garden-cafe.at/", "https://www.happycow.net/img/category/category_vegetarian.svg");
let cats = new Events("Cats", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1010, "Seilerstätte", 9, "img/events/cats.jpg", "16.10.2019 12:45", "Ronacher", "13.11.2019", "18.30", 49);
let seeed = new Events("Seeed", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1150, "Roland-Rainer-Platz", 1, "img/events/seeed.jpg", "21.10.2019 12:45", "Wiener Stadthalle, Halle D", "1.11.2019", "20.00", 55.80);
let basbaritenori = new Events("Willi Resetarits & Basbaritenori", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1060, "Mariahilfer Straße", 81, "img/events/basbaritenori.jpg", "20.10.2019 12:45", "Stadtsaal", "17.12.2019", "20.00", 22.50);
let unspelling = new Events("Unspelled", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1070, "Museumsplatz", 1, "img/events/unspelled.jpg", "22.10.2019 12:45", "TQW Studios", "14.11.2019", "19.30", 15);
let kobraKlimt = new StreetArt("Eduardo Kobra", "Kobra decided to reinterpret the famous photograph of Klimt with his cat, Katze. With an interesting detail: they will be standing on the roofs of Schiele's famous Krumau - Crescent of Houses (The Small City V).", "Vienna", 1040, "Wiedner Hauptstraße", 78, "img/art/kobra-klimt.jpg", "25.10.2019 12:45", "curated by Calle Libre Festival", 2018, "Untitled");
let nychosFreud = new StreetArt("Nychos - Rabbit Eye Movement", "What lies beneath—or inside, rather—has been a longstanding interest of Nychos.The Dissection of Freud is just a taste of what will be on view at his subsequent solo show called IKON at the Jonathan Levine Gallery where other pop culture heavyweights are split, made see-through, or melted.", "Vienna", 1090, "Spittelauer Lände", 12, "img/art/nychos-freud.jpg", "20.10.2019 12:45", "", 2016, "Vienna Therapy - Dissection of Freud");
let skirlRuin = new StreetArt("skirl and Ruin", "The Viennese Street Artist SKIRL is best known for his distinctive black and white style with many parallel lines giving life to abstract objects and forms, developed from his own way of graffiti-style-writing in reduced colors with amorph elements. Ruin pulls his viewers into the immediacy of his pictures. He combines elements of early street art with his own approaches and creations. He plays with graffiti techniques and figural representations, which he sometimes reduces fragmentarily. Ruin is playful, imaginative, ironic, surrealist, humoresque. In his paintings we encounter bizarre characters, grotesque insects, flying fish, abstruse objects.", "Vienna", 1020, "Obere Donaustraße", 101, "img/art/skirl-ruin.jpg", "29.10.2019 12:45", "", 2017, "Untitled");
let cyrcleGaia = new StreetArt("Cyrcle and Gaia", "While representing one of the most challenging artistic endeavors, murals are simultaneously the source of great satisfaction, for artists as well as the public. Imagine, what is more, a large scale piece of art beginning its existence in the frenetical surroundings of a big city. This is the goal of the Cash, Cans & Candy 2014 project, organized by the Ernst Hilger Gallery during the summer in the Austria’s capitol Vienna. CYRCLE. and Gaia are responsible for creating a piece of art, a large mural that transpires the discourse of the architectural history of the city, on the wall on Wesbanhof Station in Vienna.", "Vienna", 1150, "Felberstraße", 1, "img/art/cyrcle-gaia.jpg", "25.10.2019 12:45", "curated by Cash, Cans & Candy", 2014, "Modern Antique");
//display Place/Events/Restaurants onclick
//variables and arrays
var btnPlace = document.getElementById("btnPlace");
var btnEat = document.getElementById("btnEat");
var btnEvent = document.getElementById("btnEvent");
var btnArt = document.getElementById("btnArt");
var btnShowAll = document.getElementById("btnShowAll");
var arrayPlace = [karlskirche, schlossSchönbrunn, prater, hundertwasser];
var arrayRestaurant = [harvest, hawidere, rupps, secretGarden];
var arrayEvents = [cats, seeed, basbaritenori, unspelling];
var arrayStreetArt = [kobraKlimt, nychosFreud, skirlRuin, cyrcleGaia];
var showAll = [karlskirche, schlossSchönbrunn, prater, hundertwasser, harvest, hawidere, rupps, secretGarden, cats, seeed, basbaritenori, unspelling, kobraKlimt, nychosFreud, skirlRuin, cyrcleGaia];
//function to display content
function displayPlaces() {
    let printText = document.getElementById("displayCard");
    printText.innerHTML = "";
    arrayPlace.forEach(function (index) {
        printText.innerHTML += index.display();
    });
}
function displayRestaurants() {
    let printText = document.getElementById("displayCard");
    printText.innerHTML = "";
    arrayRestaurant.forEach(function (index) {
        printText.innerHTML += index.display();
    });
}
function displayEvents() {
    let printText = document.getElementById("displayCard");
    printText.innerHTML = "";
    arrayEvents.forEach(function (index) {
        printText.innerHTML += index.display();
    });
}
function displayStreetArt() {
    let printText = document.getElementById("displayCard");
    printText.innerHTML = "";
    arrayStreetArt.forEach(function (index) {
        printText.innerHTML += index.display();
    });
}
function displayAll() {
    let printText = document.getElementById("displayCard");
    printText.innerHTML = "";
    showAll.forEach(function (index) {
        printText.innerHTML += index.display();
    });
}
//Eventlistener
btnPlace.addEventListener("click", displayPlaces);
btnEat.addEventListener("click", displayRestaurants);
btnEvent.addEventListener("click", displayEvents);
btnArt.addEventListener("click", displayStreetArt);
btnShowAll.addEventListener("click", displayAll);
// sort by createdDate
var fileName = document.URL.split('/').pop();
if (fileName == "index-asc.html") {
    function comparebyCreatedDateAsc(date1, date2) {
        return date1.createdDate.localeCompare(date2.createdDate);
    }
    showAll.sort(comparebyCreatedDateAsc);
    arrayPlace.sort(comparebyCreatedDateAsc);
    arrayEvents.sort(comparebyCreatedDateAsc);
    arrayRestaurant.sort(comparebyCreatedDateAsc);
    arrayStreetArt.sort(comparebyCreatedDateAsc);
}
else if (fileName == "index-desc.html") {
    function comparebyCreatedDateDesc(date1, date2) {
        return date2.createdDate.localeCompare(date1.createdDate);
    }
    showAll.sort(comparebyCreatedDateDesc);
    arrayPlace.sort(comparebyCreatedDateDesc);
    arrayEvents.sort(comparebyCreatedDateDesc);
    arrayRestaurant.sort(comparebyCreatedDateDesc);
    arrayStreetArt.sort(comparebyCreatedDateDesc);
}
else if (fileName == "index") {
}
