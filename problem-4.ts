

{

    type CircleShape = {
        shape : 'circle' ;
        radius : number;

    }
    type Rectangle = {
        shape : 'rectangle';
        width : number;
        height : number

    }
   const calculateShapeArea = (item : CircleShape | Rectangle) => {
  if ( item.shape === 'circle' ) {
    return Math.PI * item.radius * item.radius
  }else {
    return item.height * item.width
  }
   }

   const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea)

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea)
}