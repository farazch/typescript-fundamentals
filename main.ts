import { Point } from "./point";


/*
function log(message:string){
    console.log(message);

}

var msg = "hello World";
log(msg);
*/

function doSomething()
{
    for (var i=0;i<4;i++)
    {
        console.log(i);
    }
    console.log("finall_y:",i);
}
doSomething();

let count = 5;



// ***************************************
// ***************************************
// Variable T_ypes in TS
// ***************************************
// ***************************************


/*
let a:number;
let b:boolean;
let c:string;
let e:an_y;
let f: number[] = [1,2,3];
let g: an_y[] = [1,true,"4"];

enum Color {Red,Green,Blue};
let backgroundColor = Color.Green;
console.log("line 40");


let message:an_y;
message = "abc";
*/

// ***************************************
// ***************************************
// T_ype Assertion
// ***************************************
// ***************************************


/*
let endsWithC = (<string>message).endsWith("a");
let alternative = (message as string).endsWith("a");
*/

// ***************************************
// ***************************************
// Arrow Functions
// ***************************************
// ***************************************

// Arrow function is concept of t_ypescript

// Below function will work in Javascript
/*
let log = function(message:an_y) {
    console.log(message);
}

// In t_ypescript, we can write above function with arrow function

let doLog = (message:an_y) => {
    console.log(message);
}

// If there is one line within function then we can remove {}
let doLogSimple = (message:an_y) => console.log(message);
*/
// ***************************************
// ***************************************
// Custom t_ypes in T_ypeScript
// ***************************************
// ***************************************

// below is code in-line innotation , issue with this is, its verbose (taking multiple parameters)
// alternative approach is to use interface
// start interface name with  caps letter


/*
let drawPoint = (point: {_x:number,_y:number}) => {
    //
}

drawPoint({
    _x:1,
    _y:2

});


interface Point {
    _x:number,
    _y:number
}

let drawPointWithInterface = (point: Point) => {
    //
}
*/
// so to avoid in-line innotation, we can use interfaces like above line

/* In Obect Oriented programming languages,we have concept called COHESION
links which are related shd b part of one unit, the_y shd go together

*/// ***************************************
// ***************************************
// Classes
// ***************************************
// ***************************************



class PointC {
    private _x:number; // field
    private _y:number; // field

    // ? make parameter optional
    // If 1st paramenter is optional than rest of the parameter will definatel_y b optional
    constructor(_x?: number, _y?: number) {
        if(_x)
            this._x = _x;
        if(_y)    
            this._y = _y;
    }

    draw()
    {
        console.log("CLASS POINTC :: X is = ",this._x," and _y is = ",this._y);
    }

    getDistance(another:PointC){
    }
}

const pObj = new PointC(1,2);
//pObj._x = 7; // this is possible onl_y with public access modifier
//pObj._y = 8;
pObj.draw();


// another clean approach
class PointD {

    constructor(private _x:number,private _y:number){

    }

    set x(value)
    {
        if(value < 0)
            throw new Error("Value can't b negative");
        this._x = value;
    }
    get x()
    {
        return this._x;
    }


    draw()
    {
        console.log("CLASS POINTD :: X is = ",this._x," and _y is = ",this._y);
    }

}

let pdObj = new PointD(3,4);
pdObj.x = 9; // property = it look like field from outside, but internally its method in class 
pdObj.draw();



// from mdoule
let point = new Point(3,4);
point.draw();