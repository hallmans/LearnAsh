//calculating the area
//Day 8 


function floor(length, width){
    var area = length * width;
        //console.log("The area of this room is: " + area + "\n"); 
    return area + 5;
}
var mattFloor = floor( 5, 5);
var theaterFloor  = floor( 5, 5);
var guestFloor = floor( 5, 5);
var ashFloor = floor( 5, 5);
var kitchenFloor = floor( 5, 5);

var fNum = 5 ;
while (floor < 60){
console.log("The area of Matt's room is: " + mattFloor + "\n");
console.log("The area of the theatre room is: " + theaterFloor + "\n");
console.log("The area of the guest room is: " + guestFloor + "\n");
console.log("The area of Ashlyn's room is: " + ashFloor + "\n");
console.log("The area of the Kitchen is: " + kitchenFloor + "\n");
 
fNum = floor;
}
