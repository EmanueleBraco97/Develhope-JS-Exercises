class Square {
  constructor(side) {
    this.side = side;
  }
  getArea(){
    return this.side* this.side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea(){
    return this.width*this.height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea(){
    return this.radius* this.radius;
  }
}

class AreaCalculator {
  static calculate(object){
    if(object instanceof Square || object instanceof Rectangle || object instanceof Circle){
      return object.getArea();
    }else{
      return 'istanza non definita';
    }
  }
}



const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));