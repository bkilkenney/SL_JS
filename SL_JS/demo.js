alert('Oh Hello');

var day = 3;
switch (day) {
    case 1:
        document.write('Sunday');
        break;
    case 2:
        document.write('Monday');
        break;
    case 3:
        document.write('Tuesday');
        break;
    case 4:
        document.write('Wednesday');
        break;
    case 5:
        document.write('Thursday');
        break;
    case 6:
        document.write('Friday');
        break;
    case 7:
        document.write('Saturday');
        break;
    default:
        document.write('Not a valid day');
}

document.write('<br />');

for (var i = 1; i <= 5; i++) {
    document.write(i + '<br />');
}

var i = 20;
do {
    document.write(i + '<br />');
    i++;
} while (i < 26);


var x = 0;
while (x < 6) {
    x++;
}
document.write(x);

document.write('<br />');

var me = {
    name: 'Brad',
    age: 34,
    eyeColor: 'Blue',
    height: 69,
    weight: 170
};


document.write('My name is ' + me.name + ', and my age is ' + me.age);
document.write('<br/>');
document.write('The number of letters in my name is: ', me.name.length);

function person(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
}

var p1 = new person('Billy', 35, 170);

document.write('<br/>His name is ' + p1.name + ' and his age is ' + p1.age + '<br/>');


//var d = new Date();
//var d2 = new Date("January 18, 1982 00:00:01");
//document.write(d + '<br/>' + d2 + '<br/>');
//document.write(d.getHours());

//Below printTime function will update the document every 5 seconds

//function printTime() {
//    var d3 = new Date();
//    var hours = d3.getHours();
//    var minutes = d3.getMinutes();
//    var seconds = d3.getSeconds();
//    document.body.innerHTML = hours +':'+ minutes +':' +seconds;
//}
//setInterval(printTime, 5000);


var elem = document.getElementById('demo');
elem.innerHTML = 'Hello from this site\'s first getElementById';

var a = document.getElementById('demo2');
var arr = a.childNodes;

for (var i = 0; i < arr.length; i++) {
    arr[i].innerHTML = "Here's some demo.js text!";
}