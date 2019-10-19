class Place {
   name:string;
   description:string;
   city:string;
   zipCode:number;
   adress: string 
   adressNr:number;
   img:string;
constructor(name:string, description:string, city:string, zipCode:number, adress:string, adressNr:number, img:string) {
       this.name = name;
       this.description = description;
       this.city = city;
       this.zipCode = zipCode;
       this.adress = adress;
       this.adressNr = adressNr
       this.img = img;
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
                    </ul>
                </div>
             </div>`
    }
}

class Restaurant extends Place {
   telNr;
   webAdress;
   type;

   constructor(name:string, description:string, city:string, zipCode:number, adress:string, adressNr:number, img:string, telNr:string, webAdress:string, type:string) {
       super(name, description, city, zipCode, adress, adressNr, img)
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
                    </ul>
                </div>
             </div>`
    }
}

class Events extends Place {
   eventLocation;
   eventDate;
   eventTime;
   ticketPrice;

   constructor(name:string, description:string, city:string, zipCode:number, adress:string, adressNr:number, img:string, eventLocation:string, eventDate:any, eventTime:any, ticketPrice:number) {
       super(name, description, city, zipCode, adress, adressNr, img)
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
                    </ul>
                </div>
             </div>`
    }
}

//objects

let karlskirche = new Place("Karlskirche","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1040, "Kreuzherrengasse", 1,"img/places/karlskirche.jpg");
let schlossSchönbrunn = new Place("Schloss Schönbrunn","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1130, "Schönbrunner Schloßstraße", 47,"img/places/schoenbrunn.jpg");
let prater = new Place("Schloss Schönbrunn","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1020, "Prater", 7,"img/places/prater.jpg");
let hundertwasser = new Place("KUNST HAUS WIEN. Museum Hundertwasser","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1030, "Untere Weißgerberstraße", 13,"img/places/hundertwasser.jpg");

let harvest = new Restaurant("Harvest", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1020, "Karmeliterplatz", 1, "img/eat/harvest.jpg", "0676 4927790", "http://harvest-bistrot.at/", "https://www.happycow.net/img/category/category_vegan.svg");
let hawidere = new Restaurant("Hawidere", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1150, "Ullmannstraße", 31, "img/eat/hawidere.jpg", "0664 1508429", "http://hawidere.at/", "https://www.happycow.net/img/category/category_veg-friendly.svg");
let rupps = new Restaurant("Rupps", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1050, "Arbeitergasse", 46, "img/eat/rupps.jpg", "01 5452284", "https://www.rupps.at/", "https://www.happycow.net/img/category/category_vegetarian.svg");
let secretGarden = new Restaurant("Secret Garden", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1060, "Mariahilfer Straße", 45, "img/eat/secretGarden.jpg", "01 5862839", "https://secret-garden-cafe.at/", "https://www.happycow.net/img/category/category_vegetarian.svg");

let cats = new Events ("Cats", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1010, "Seilerstätte", 9,"img/events/cats.jpg", "Ronacher", "13.11.2019", "18.30", 49);
let seeed = new Events ("Seeed", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1150, "Roland-Rainer-Platz", 1,"img/events/seeed.jpg", "Wiener Stadthalle, Halle D", "1.11.2019", "20.00", 55.80);
let basbaritenori = new Events ("Willi Resetarits & Basbaritenori", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1060, "Mariahilfer Straße", 81,"img/events/basbaritenori.jpg", "Stadtsaal", "17.12.2019", "20.00", 22.50);
let unspelling = new Events("Unspelled", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Vienna", 1070, "Museumsplatz", 1,"img/events/unspelled.jpg", "TQW Studios", "14.11.2019", "19.30", 15);


//display Place/Events/Restaurants onclick

var btnPlace = document.getElementById("btnPlace")
var btnEat = document.getElementById("btnEat")
var btnEvent = document.getElementById("btnEvent")
var btnShowAll = document.getElementById("btnShowAll")

var arrayPlace = [karlskirche,schlossSchönbrunn,prater,hundertwasser];
var arrayRestaurant = [harvest,hawidere,rupps,secretGarden];
var arrayEvents = [cats,seeed,basbaritenori,unspelling];
var showAll = [karlskirche,schlossSchönbrunn,prater,hundertwasser,harvest,hawidere,rupps,secretGarden,cats,seeed,basbaritenori,unspelling];

//function to display content

function displayPlaces(){
  let printText = document.getElementById("displayCard");
  printText.innerHTML = "";
  arrayPlace.forEach(function(index) {

    printText.innerHTML += index.display();
        
  });
}

function displayRestaurants(){
  let printText = document.getElementById("displayCard");
  printText.innerHTML = "";
  arrayRestaurant.forEach(function(index) {

    printText.innerHTML += index.display();
        
  });
}

function displayEvents(){
  let printText = document.getElementById("displayCard");
  printText.innerHTML = "";
  arrayEvents.forEach(function(index) {

    printText.innerHTML += index.display();
        
  });
}

function displayAll(){
  let printText = document.getElementById("displayCard");
  printText.innerHTML = "";
  showAll.forEach(function(index) {

    printText.innerHTML += index.display();
        
  });
}

//Eventlistener

btnPlace.addEventListener("click",displayPlaces);
btnEat.addEventListener("click",displayRestaurants);
btnEvent.addEventListener("click",displayEvents);
btnShowAll.addEventListener("click",displayAll);