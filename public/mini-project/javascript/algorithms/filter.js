// let ages = [1,32, 12, 45, 21, 14, 45, 62, 12,100];
// let Adults = ages.filter((element) => {
//     return element >=18;
// });
// console.log(Adults);
// console.log(Adults[0]);

let marks = [99, 10, 84, 53, 46, 44];
// let passMarks = marks.filter(function(element){
//     return element >= 50;
// });
// //console.log(`these are the pass marks`);
// console.log(`These are the pass marks:- ${passMarks}`);

// let greatestMarks = marks.reduce(function(accumulater, element){
//     return Math.max(accumulater, element);
// });
// console.log(`the greatest mark of this student:- ${greatestMarks}`);

// let converted = marks.map(function(element){
//     return element/2;
// });
// console.log(`These are marks converted into 50:- ${converted}`);

// let total = marks.reduce(function(accumulater, element){
//     return accumulater + element;
// });
// console.log(`this is the total of student:- ${total}`);

// let hello = (name)=>console.log(`hello ${name}`);

// let total2 = marks.reduce((accumulater, element) =>  accumulater + element);   
// console.log(total2);

// let prices = [20, 30, 40, 50, 100];
// let above20 = prices.filter((element) => element>20);
// console.log(above20);

// let total3 = above20.reduce((accumulater, element) => accumulater + element);
// console.log(total3);

// let gst = prices.map((element) => element + 40);
// console.log(`it's the privies one:- ${prices}`);
// console.log(`it's the nowest one:- ${gst}`);

// const student1 = {
//     name: "AMMAR",
//     id: "bcb005",
//     Smarks: m = [50, 60, 40, 30, 60],
//     total4: m.reduce((accumulater, element) => accumulater + element),
// }
// console.log(student1.total4);
// console.log(`these are marks:- ${student1.Smarks}`);

// function student(name, id, mark7, total7){
//     this.name = name;
//     this.id = id;
//     this.mark7 = mark7;
//     this.total7 = total7;
//     this.miss = function(){
//          console.log(this.total7 - this.mark7);
//     }
// }
// let student5 = new student("AMMAR", "BCB005", 343, 500);
// console.log(student5.name);
// console.log(student5.id);
// console.log(student5.mark7);
// console.log(student5.total7);
// student5.miss();

// class prdouct{
//     constructor(name, price, gst){
//         this.name = name;
//         this.price = price; 
//         this.gst = gst;
//     }
//     display(){
//         console.log(`Product Type:- ${this.name}`);
//         console.log(`price of the product:- ${this.price}`);
//         console.log(`total price(with gst):- ${this.calculate(this.gst)}`);
//     }
//     calculate(gst){
//         return this.price + (this.price * gst);
//     }
// }
// let prdouct1 = new prdouct("Apple", 120, 8);
// prdouct1.display();


// //_______________________OBJECTS, CLASS, CONSTRACTOR_________________________
// class phone{
//     constructor(name, model, imea, storage, ram){
//         this.name = name;
//         this.model = model;
//         this.imea = imea;
//         this.storage = storage;
//         this.ram  = ram;
//     }
//     display(){
//         console.log(`Name of the phone:- ${this.name}`);
//         console.log(`Name of the phone:- ${this.model}`);
//         console.log(`Name of the phone:- ${this.imea}`);
//         console.log(`Name of the phone:- ${this.storage}`);
//         console.log(`Name of the phone:- ${this.ram}`);
//         console.log(`_______|_____|_____|_____`);
//     }
// }
// let phone11 = new phone("iphone", "16Pro", 34125, 512, 16);
// let phone2 = new phone("samsung", "S24 ULTRA", 34125, "1tb", 32);
// let phone3 = new phone("Redmi", "12pro", 57985, "512", 16);
// phone11.display();
// phone2.display();
// phone3.display();
// //________________________________, Inheritance,__________________________________

// class Circle{
//      Pi = 3.1415;
//     constructor(radius){
//         this.radius = radius;
//     }
//     circumference(){
//         return (2*this.Pi*this.radius).toFixed(2);
//     }
//     area(){
//         return (2*this.Pi*this.radius*this.radius).toFixed(2);
//     }
//     // display(){
//     //     console.log(`this the ${this.name}`)
//     //     console.log(`Area of the ${this.name}:- ${this.area()}`);
//     //     console.log(`Area of the ${this.name}:- ${this.circumference()}`);
//     // }
// }
// class operation extends Circle{
//     display(){
//         //console.log(this.name);
//         console.log(this.area());
//         console.log(this.circumference());
//     }
// }
// let Shape = new operation(10);
// Shape.display();
// //_______________________________SUPER______________________________________
// class Newphone{
//     constructor(name, model, storage){
//         this.name = name;
//         this.model = model;
//         this.storage = storage;
//     }
//     display1(){
//         console.log(`You select ${this.name} ${this.model}, the phone have ${this.storage}.`);
//     }

// }
// class iphone extends Newphone{
//     constructor(name, model, storage, expence){
//         super(name, model, storage);
//         //this.name = name;
//         this.expence = expence;
//     }
//     display(){
//         console.log(`this mobile have speceliset in ${this.expence}`);
//     }
// }
// class samsung24 extends Newphone{
//     constructor(name, model,storage, camera){
//         super(name, model, storage);
//         this.camera = camera;
//     }
//     display(){
//         console.log(`this mobile have speceliset in ${this.camera}`);
//     }
// }

// let phone1 = new iphone("iphone", "16Pro",512,"Cinematic Camera");
// console.log(phone1.display1());
// console.log(phone1.display());
// //____________________________Getters and Setters__________________________
// class Rectancle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newW){
//         if(newW > 0){
//             this._width = newW;
//         }
//         else{
//             console.log("you must enter in positive number");
//         }
//     }
//     set height(newh){
//         if(newh > 0){
//             this._height = newh;
//         }
//         else{
//             console.error("you must enter in positive number");
//         }
//     }
//     get width(){
//         return this._width;
//     }
//     get height(){
//         return this._height;
//     }
//     area(){
//         return this._width * this._height;
//     }
//     display(){
//         console.log(`this Rectangle Width is:- ${this._width}`);
//         console.log(`this Rectangle Height is:- ${this.height}`);
//         console.log(`this Rectangle Area is:- ${this.area()}`);
//     }
// }

// let Rectangle1 = new Rectancle("", 4);
// Rectancle.width = "ammar";
// Rectangle1.display();

// class person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     set firstName(newFirst){
//         if(typeof newFirst === "string"){
//             this._firstName = newFirst;
//         }
//         else{
//             console.log(`You must enter In word`);
//         }
//     }
//     get firstName(){
//         return this._firstName;
//     }
//     // display(){
//     //     console.log(Person1._firstName);
//     // }
// }
// let Person1 = new person(12, "Ahamed", 18);
// console.log(Person1.firstName);
// //_______________________________Dis-structuring___________________________
// //For Arrays
let a = ["White", "Yellow", "Orange", "Green"];
let [first, second, thirt, ...Extra] = a;
console.log(Extra);
// //For Objects
// let CAR1 = {
//     name: "Ford",
//     model: "Mustang",
//     price: "$1,20,00,000",
//     taxINT: "$1,00,000",
//     taxUSA: "$2,00,000",
//     taxUK: "$3,00,000",
// }
// let CAR2 = {
//     name: "Porche",
//     model: "911",
//     price: "$3,20,00,000",
//     taxINT: "$1,00,000",
//     taxUSA: "$2,00,000",
//     taxUK: "$3,00,000",
// }
// let{name, model1, price, ...tax} = CAR1;
// console.log(tax);
// //________________________________Nested Objects______________________________________
// let person4 = {
//     name: "Ahamed Ammar",
//     Mobile: "8122613274",
//     Roll: "Student",
//     Address : {
//         Street:"53/3, ParasuramaPuram North Street",
//         Taluk: "Kadayanallur",
//         District: "Tenkasi",
//     }
// }
// for(let member in person4.Address){
//     console.log(person4.Address[member]);
// }
// //______________________________Array Objects____________________________________
// let Foods = [ {name: "Biryani", flaver: "chicken", price: 180}, {name: "Maggi", flaver: "spicy", price: 80}, {name: "Parrota", flaver: "mutton", price: 200}, {name: "buttur masala", flaver: "chicken", price: 300}];

// for(let i=0;i<4;i++){
//     console.log(`Food Name:-${Foods[i].name}`);
// }
// console.log(`________________________`);
// Foods.forEach(Foods=>console.log(`Flaver of the Food:- ${Foods.flaver}`));
// console.log(`________________________`);
// Foods.forEach(Foods=>console.log(`Flaver of the Food:- $${Foods.price}`));
// console.log(`________________________`);
// let total = Foods.price.reduce((accumulater, element)=>accumulater+element);
// console.log(total);

// //_____________________________________SORT THE ARRAY____________________________________________________________
// let fruits = ["Apple", "Banana", "Castele", "Pomogranete"];
// let New = fruits.sort((a, b) => a - b);
// console.log(New);

// //__________________________Suffele the array__________________________________

// // Fisher - Yates algorithm
// const cards = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 'q', 'k', 'j'];
// SuffeleArr(cards);
// console.log(cards);

// function SuffeleArr(array){
//     for(let i = array.length - 1;i > 0;i--){
//         const random = Math.floor(Math.random() * (i + 1));

//         [array[i], array[random]] = [array[random], array[i]];
//     }
// }

// //_________________________________Closurs__________________________________

// function counter1(){
//     let score = 0;// It is the private variable.

//     function inner(){
//         score++;
//         console.log(score);
//     }
//     function getscore(){
//         return score;
//     }
//     return {inner, getscore};
// }

// let c1 = counter1();
// c1.inner();
// c1.inner();
// c1.inner();
// c1.inner();
// console.log(c1.getscore());
// c1.inner();
// console.log(c1.getscore());
// c1.inner();
// console.log(c1.getscore());

// //_____________________setTimeOut__________________________

// let time;
// function starder(){
//     time = setTimeout(()=>window.alert("HELLO.............."),3000);
//     console.log("Start");
// }

// function stoper(){
//     clearTimeout(time);
//     console.log("Stoped");
// }

// //__________________Import method___________________________

// import {m, circumference} from './map.js';

// console.log(m,circumference(10));

// //_________________synchronous, Asynchronous code__________________

// setTimeout(() =>{console.log("time 1")}, 3000);
// console.log("time 2");
// console.log("time 3");

// try {
//     function func1() {
//         setTimeout(() => {
//             console.lag("time 1");
//             func2();
//         }, 3000);
//     }
//     console.lg("Ammar..");
// }
// catch(error){
//     console.log("Please Try..... again");
// }

// finally{
//     console.log("time 2");
//     console.log("time 3");
// }

// func2();

// try {
//     let divident = window.prompt("enter the divident");
//     let divisor = window.prompt("Enter the divisor");
//     if(divisor == 0){
//         throw new Error("please Enter the number above(1 - n)");
//     }
//     let ans = divident/divisor;
//     console.log(ans);
// }

// catch(error){
//     console.log("sorry Error...");
// }

//_______________________________What is the DOM?_______________________________________

// getElementById("");
//getElementsByclass("");
//getElementsByTagName("");
//querySelector("");
//querySelectorAll("");

// const h3Elements = document.querySelectorAll("ul");
// const lists = document.querySelectorAll("h3");
// //Array.from(h3Elements).forEach(h3Elements => {
//     h3Elements[0].style.backgroundColor = "lightgreen";
//     h3Elements[1].style.backgroundColor = "lightgreen";
//     h3Elements[2].style.backgroundColor = "lightgreen";
//     h3Elements[1].style.border = "5px solid";
//     h3Elements[2].style.border = "5px solid";
//     h3Elements[1].style.borderRadius = "100px";
//     h3Elements[1].style.padding = "100px";
//     h3Elements.style.alignItems = "center";
// //});

// lists[2].style.backgroundColor = "yellow"

//__________________________________DOM Navigation_______________________________________________

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

/* <body>
    <h1 id="topic">What is DOM</h1>
    <h2 id="seen">Work Flow..</h2>
    <h3 id="devices">Phones</h3>
    <ul id="Phones">
        <li>Samsung s24</li>
        <li>Apple 16</li>
        <li>Nokia 596 </li>
        <li>Redmi 9</li>
    </ul>
    <h3 id="devices">Lap-Tops</h3>
    <ul >
        <li>Samsung Book7</li>
        <li>Macbook Air</li>
        <li>Asus vivobook 16</li>
        <li>Acer Nitro 13</li>
    </ul>
    <h3 id="devices">External Devices</h3>
    <ul>
        <li>Hard Disk</li>
        <li>SSD</li>
        <li>Pen-Drive</li>
        <li>Memory-Card</li>
    </ul>
    <script src="filter.js"></script>
</body> */
// const element = document.getElementById("Phones");
// let q_headers = document.querySelector("h3");
// let qa_headers = document.querySelectorAll("h3");

// let Q_selectords = element.firstElementChild;
// Q_selectords.style.ba

// let manager = document.getElementsByTagName("h3");
// let q_manager = document.querySelector("h3");
// let qa_manager = document.querySelectorAll("h3");

// let Datas = document.getElementsByTagName("ul");
// let q_datas = document.querySelector("ul");
// let qa_datas = document.querySelectorAll("ul");

// const element = document.getElementsByTagName("ul");
// const firstChild = element.children;
// firstChild.style.backgroundColor = "yellow";

//______________________Add & change HTML__________________

/* <body>
        <ol id="fruits">
            <li id="Apple">Apple</li>
            <li id="Oranage">Oranage</li>
            <li id="PineApple">PineApple</li>
            <li id="Bomogranate">Bomogranate</li>
        </ol>
    <script src="filter.js"></script>
</body> */
// //step 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");

// //step 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I Like Pizza!";


// //step 3 APPEND ELEMENT TO DOM
// document.getElementById("box1").prepend(newH1);

// const newList = document.createElement("li");

// newList.textContent = "Banana";
// newList.style.backgroundColor = "lightgreen";
// newList.style.fontSize = "40px";
//document.getElementById("fruits").prepend(newList);

//let Orange = document.getElementById("Oranage");

//document.getElementById("fruits").insertBefore(newList,PineApple);

//__________________Event Listener______________________

// let mybox = document.getElementById("mybox");
// let mybtn = document.getElementById("myButton");

// myButton.addEventListener("click", event =>{
//     mybox.style.backgroundColor = "yellow";
//     mybox.textContent = "Don't Touch Me😉";
// });

// myButton.addEventListener("mouseover", event =>{
//     mybox.style.backgroundColor = "orange";
//     mybox.textContent = "Please Click Me 😎";
// });

// myButton.addEventListener("mouseout", () =>{
//     mybox.style.backgroundColor = "lightblue";
//     mybox.textContent = "Don't Touch Me😉";
// });

// let myBox = document.getElementById("myBox");
// document.addEventListener("keydown", event =>{
//     myBox.textContent = "😲";
//     myBox.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event =>{
//     myBox.textContent = "😎";
//     myBox.style.backgroundColor = "lightblue";
// });

/* <body>
    <div id="NewBox">
        😎
    </div>
    <script src="filter.js"></script>
</body>

let NewBox = document.getElementById("NewBox");
let x = 0;
let y = 0;
const move = 10;
document.addEventListener("keydown", event =>{
    NewBox.style.backgroundColor = "tomato";
    NewBox.textContent = "😲";
});

document.addEventListener("keyup", event =>{
    NewBox.style.backgroundColor = "lightblue";
    NewBox.textContent = "😎";
});

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        console.log(`you press:- ${event.key}`);
        switch (event.key) {
            case "ArrowUp":
                y -= move;
                break;
            case "ArrowDown":
                y += move;
                break;
            case "ArrowRight":
                x += move;
                break;
            case "ArrowLeft":
                x -= move;
                break;
        }
        NewBox.style.marginTop = `${y}px`;
        NewBox.style.marginLeft = `${x}px`;
    }
}); */
// document.addEventListener("keyup", event =>{
//     NewBox.backgroundColor = "lightblue";

// })

//____________________Hide & Show_______________________\

/* <body>
    <img id="myimg" src="/Exercise/pngtree-futuristic-wheel-with-digital-clock-picture-image_2743982.jpg" width="400px"/><br>
    <button id="mybtn">Hide</button>
    <script src="filter.js"></script>
</body> */
// let Myimg = document.getElementById("myimg");
// let myBox = document.getElementById("mybtn");

// myBox.addEventListener("click", event =>{
//     if(Myimg.style.visibility === "hidden"){
//         Myimg.style.visibility = "visible";
//         myBox.textContent = "Hide";
//     }
//     else{
//         Myimg.style.visibility = "hidden";
//         myBox.textContent = "Show";
//     }
    
// });

//___________________Node List_______________________


//let MyBtn = document.querySelectorAll(".myButton");

{/* <body>
    <button class="myButton">Button 1</button>
    <button class="myButton">Button 2</button>
    <button class="myButton">Button 3</button>
    <button class="myButton">Button 4</button>
    <button class="myButton">Button 5</button>
    <script src="filter.js"></script>
</body>

let NewButton = document.createElement("button");
NewButton.classList = "myButton";

NewButton.textContent = "Button 6";
document.body.appendChild(NewButton);
let MyBtn = document.querySelectorAll(".myButton");

MyBtn.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "white";
        event.target.style.color = "black";
    });
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "black";
        event.target.style.color = "white";
    });
});

MyBtn.forEach(button =>{
    button.addEventListener("click", event => {
        event.target.remove();
    });
}); */}

//_____________________Class List_____________________________

// add()
// remove()
// toggle(remove if present, add if not)
// replace(old class, Newclass)
// contains()

// let mybtn = document.querySelectorAll("#myBtn");

// mybtn.forEach(button =>{
//     button.classList.add("mybtn");
//     button.addEventListener("mouseover", event =>{
//         button.classList.toggle("hover");
//     });


//     button.addEventListener("mouseout", ()=>{
//         button.classList.toggle("hover");
//     });

//     button.addEventListener("click", ()=>{
//         if(button.classList.contains("disabled")){
//             button.textContent += "🤬";
//         }
//         else{
//             button.classList.replace("mybtn", "disabled");
//         }
//     })

// });






