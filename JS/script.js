// class place
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Place = /** @class */ (function () {
    function Place(name, description, city, zipCode, adress, adressNr, img) {
        this.name = name;
        this.description = description;
        this.city = city;
        this.zipCode = zipCode;
        this.adress = adress;
        this.adressNr = adressNr;
        this.img = img;
    }
    Place.prototype.display = function () {
        return "<div class=\"card border-0 col-10 offset-1 col-md-6 offset-md-0 col-lg-3 mx-auto p-3\">\n                <div class=\"shadow rounded\">\n                    <img src=\"" + this.img + "\" class=\"card-img-top d-none d-md-block\" alt=\"...\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.name + "</h5>\n                        <p class=\"card-text\">" + this.description + "</p>\n                    </div>\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item font-weight-bold\">\n                            <i class=\"fas fa-map-marked\"></i><br>\n                            <span class=\"font-weight-normal\">" + this.zipCode + " " + this.city + "<br>" + this.adress + " " + this.adressNr + "</span>\n                        </li>           \n                    </ul>\n                </div>\n             </div>";
    };
    return Place;
}());
// class restaurant
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, description, city, zipCode, adress, adressNr, img, telNr, webAdress, type) {
        var _this = _super.call(this, name, description, city, zipCode, adress, adressNr, img) || this;
        _this.telNr = telNr;
        _this.webAdress = webAdress;
        _this.type = type;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return "<div class=\"card border-0 col-10 offset-1 col-md-6 offset-md-0 col-lg-3 mx-auto p-3\">\n                <div class=\"shadow rounded\">\n                    <img src=\"" + this.img + "\" class=\"card-img-top d-none d-md-block\" alt=\"...\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.name + "</h5>\n                        <p class=\"card-text\">" + this.description + "</p>\n                    </div>\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item font-weight-bold\">\n                            <i class=\"fas fa-map-marked\"></i><br>\n                            <span class=\"font-weight-normal\">" + this.zipCode + " " + this.city + "<br>" + this.adress + " " + this.adressNr + "</span>\n                        </li>\n                        <li class=\"list-group-item font-weight-bold\">\n                          <i class=\"fas fa-tty\"></i></i><span class=\"font-weight-normal\"> " + this.telNr + "</span>\n                        </li>\n                        <li class=\"list-group-item font-weight-bold\">\n                            <i class=\"fas fa-home\"></i> \n                            <span class=\"font-weight-normal\"><a href=\"" + this.webAdress + "\" class=\"text-dark\">Web</a></span>\n                        <li class=\"list-group-item font-weight-bold text-center\">\n                            <img src=\"" + this.type + "\" alt=\"\">\n                        </li>           \n                    </ul>\n                </div>\n             </div>";
    };
    return Restaurant;
}(Place));
// class events
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, description, city, zipCode, adress, adressNr, img, eventLocation, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, name, description, city, zipCode, adress, adressNr, img) || this;
        _this.eventLocation = eventLocation;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice.toFixed(2);
        return _this;
    }
    Events.prototype.display = function () {
        return "<div class=\"card border-0 col-10 offset-1 col-md-6 offset-md-0 col-lg-3 mx-auto p-3\">\n                <div class=\"shadow rounded\">\n                    <img src=\"" + this.img + "\" class=\"card-img-top d-none d-md-block\" alt=\"...\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.name + "</h5>\n                        <p class=\"card-text\">" + this.description + "</p>\n                    </div>\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item font-weight-bold\">\n                          <i class=\"fas fa-map-marked\"></i><br>\n                          <span class=\"font-weight-normal\">" + this.zipCode + " " + this.city + "<br>" + this.adress + "</span>\n                        </li>\n                        <li class=\"list-group-item font-weight-bold\">\n                          <i class=\"far fa-calendar\"></i>\n                          <span class=\"font-weight-normal\"> " + this.eventDate + "</span>\n                        </li>\n                        <li class=\"list-group-item font-weight-bold\">\n                          <i class=\"far fa-clock\"></i>\n                          <span class=\"font-weight-normal\"> " + this.eventTime + "</span>\n                        </li>\n                        <li class=\"list-group-item font-weight-bold\">\n                          <i class=\"far fa-money-bill-alt\"></i>\n                          <span class=\"font-weight-normal\"> \u20AC " + this.ticketPrice + "</span>\n                        </li>         \n                    </ul>\n                </div>\n             </div>";
    };
    return Events;
}(Place));
// class StreetArt
var StreetArt = /** @class */ (function (_super) {
    __extends(StreetArt, _super);
    function StreetArt(name, description, city, zipCode, adress, adressNr, img, curator, year, title) {
        var _this = _super.call(this, name, description, city, zipCode, adress, adressNr, img) || this;
        _this.curator = curator;
        _this.year = year;
        _this.title = title;
        return _this;
    }
    StreetArt.prototype.display = function () {
        return "<div class=\"card border-0 col-10 offset-1 col-md-6 offset-md-0 col-lg-3 mx-auto p-3\">\n                <div class=\"shadow rounded\">\n                    <img src=\"" + this.img + "\" class=\"card-img-top d-none d-md-block\" alt=\"...\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.name + "</h5>\n                        <h6 class=\"card-text\">" + this.title + "</h6>\n                        <p class=\"card-text\">" + this.curator + "</p>\n                    </div>\n                    <ul class=\"list-group list-group-flush\">\n                          <li class=\"list-group-item font-weight-bold\">                      \n                            <span class=\"font-weight-normal\">" + this.description + "</span>\n                        </li>   \n                        <li class=\"list-group-item font-weight-bold\">\n                            <i class=\"fas fa-map-marked\"></i><br>\n                            <span class=\"font-weight-normal\">" + this.zipCode + " " + this.city + "<br>" + this.adress + " " + this.adressNr + "</span>\n                        </li>           \n                    </ul>\n                </div>\n             </div>";
    };
    return StreetArt;
}(Place));
//objects
var karlskirche = new Place("Karlskirche", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1040, "Kreuzherrengasse", 1, "img/places/karlskirche.jpg");
var schlossSchönbrunn = new Place("Schloss Schönbrunn", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1130, "Schönbrunner Schloßstraße", 47, "img/places/schoenbrunn.jpg");
var prater = new Place("Schloss Schönbrunn", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1020, "Prater", 7, "img/places/prater.jpg");
var hundertwasser = new Place("KUNST HAUS WIEN. Museum Hundertwasser", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1030, "Untere Weißgerberstraße", 13, "img/places/hundertwasser.jpg");
var harvest = new Restaurant("Harvest", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1020, "Karmeliterplatz", 1, "img/eat/harvest.jpg", "0676 4927790", "http://harvest-bistrot.at/", "https://www.happycow.net/img/category/category_vegan.svg");
var hawidere = new Restaurant("Hawidere", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1150, "Ullmannstraße", 31, "img/eat/hawidere.jpg", "0664 1508429", "http://hawidere.at/", "https://www.happycow.net/img/category/category_veg-friendly.svg");
var rupps = new Restaurant("Rupps", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1050, "Arbeitergasse", 46, "img/eat/rupps.jpg", "01 5452284", "https://www.rupps.at/", "https://www.happycow.net/img/category/category_vegetarian.svg");
var secretGarden = new Restaurant("Secret Garden", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1060, "Mariahilfer Straße", 45, "img/eat/secretGarden.jpg", "01 5862839", "https://secret-garden-cafe.at/", "https://www.happycow.net/img/category/category_vegetarian.svg");
var cats = new Events("Cats", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1010, "Seilerstätte", 9, "img/events/cats.jpg", "Ronacher", "13.11.2019", "18.30", 49);
var seeed = new Events("Seeed", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1150, "Roland-Rainer-Platz", 1, "img/events/seeed.jpg", "Wiener Stadthalle, Halle D", "1.11.2019", "20.00", 55.80);
var basbaritenori = new Events("Willi Resetarits & Basbaritenori", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1060, "Mariahilfer Straße", 81, "img/events/basbaritenori.jpg", "Stadtsaal", "17.12.2019", "20.00", 22.50);
var unspelling = new Events("Unspelled", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1070, "Museumsplatz", 1, "img/events/unspelled.jpg", "TQW Studios", "14.11.2019", "19.30", 15);
var kobraKlimt = new StreetArt("Eduardo Kobra", "Kobra decided to reinterpret the famous photograph of Klimt with his cat, Katze. With an interesting detail: they will be standing on the roofs of Schiele's famous Krumau - Crescent of Houses (The Small City V).", "Vienna", 1040, "Wiedner Hauptstraße", 78, "img/StreetArt/kobra_klimt.jpg", "curated by Calle Libre Festival", 2018, "Untitled");
var nychosFreud = new StreetArt("Nychos - Rabbit Eye Movement", "What lies beneath—or inside, rather—has been a longstanding interest of Nychos.The Dissection of Freud is just a taste of what will be on view at his subsequent solo show called IKON at the Jonathan Levine Gallery where other pop culture heavyweights are split, made see-through, or melted.", "Vienna", 1090, "Spittelauer Lände", 12, "img/StreetArt/nychos_freud.jpg", "", 2016, "Vienna Therapy - Dissection of Freud");
var skirlRuin = new StreetArt("skirl and Ruin", "The Viennese Street Artist SKIRL is best known for his distinctive black and white style with many parallel lines giving life to abstract objects and forms, developed from his own way of graffiti-style-writing in reduced colors with amorph elements. Ruin pulls his viewers into the immediacy of his pictures. He combines elements of early street art with his own approaches and creations. He plays with graffiti techniques and figural representations, which he sometimes reduces fragmentarily. Ruin is playful, imaginative, ironic, surrealist, humoresque. In his paintings we encounter bizarre characters, grotesque insects, flying fish, abstruse objects.", "Vienna", 1020, "Obere Donaustraße", 101, "img/StreetArt/skirl_ruin.jpg", "", 2017, "Untitled");
var cyrcleGaia = new StreetArt("Cyrcle and Gaia", "While representing one of the most challenging artistic endeavors, murals are simultaneously the source of great satisfaction, for artists as well as the public. Imagine, what is more, a large scale piece of art beginning its existence in the frenetical surroundings of a big city. This is the goal of the Cash, Cans & Candy 2014 project, organized by the Ernst Hilger Gallery during the summer in the Austria’s capitol Vienna. CYRCLE. and Gaia are responsible for creating a piece of art, a large mural that transpires the discourse of the architectural history of the city, on the wall on Wesbanhof Station in Vienna.", "Vienna", 1150, "Felberstraße", 1, "img/StreetArt/cyrcle_gaia.jpg", "curated by Cash, Cans & Candy", 2014, "Modern Antique");
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
    var printText = document.getElementById("displayCard");
    printText.innerHTML = "";
    arrayPlace.forEach(function (index) {
        printText.innerHTML += index.display();
    });
}
function displayRestaurants() {
    var printText = document.getElementById("displayCard");
    printText.innerHTML = "";
    arrayRestaurant.forEach(function (index) {
        printText.innerHTML += index.display();
    });
}
function displayEvents() {
    var printText = document.getElementById("displayCard");
    printText.innerHTML = "";
    arrayEvents.forEach(function (index) {
        printText.innerHTML += index.display();
    });
}
function displayStreetArt() {
    var printText = document.getElementById("displayCard");
    printText.innerHTML = "";
    arrayStreetArt.forEach(function (index) {
        printText.innerHTML += index.display();
    });
}
function displayAll() {
    var printText = document.getElementById("displayCard");
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
