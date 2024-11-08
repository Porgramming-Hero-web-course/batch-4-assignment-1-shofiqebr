



    type Circle  = {
        shape : 'circle' ;
        radius : number;

    }
    type Rectangle = {
        shape : 'rectangle';
        width : number;
        height : number

    }
   const calculateShapeArea  = (item : Circle | Rectangle) : number => {
  if ( item.shape === 'circle' ) {
    return parseFloat((Math.PI * item.radius * item.radius).toFixed(2))
  }else {
    return parseFloat((item.height * item.width).toFixed(2))
  }
   }

   const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });


  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
 
