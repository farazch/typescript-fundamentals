// When we export a file to use in another file,
// it becomes module

export class Point {

    constructor(private _x?:number,private _y?:number){
    }

    draw()
    {
        console.log("CLASS POINTD :: X is = ",this._x," and _y is = ",this._y);
    }

}