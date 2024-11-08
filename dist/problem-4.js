"use strict";
{
    const calculateShapeArea = (item) => {
        if (item.shape === 'circle') {
            return Math.PI * item.radius * item.radius;
        }
        else {
            return item.height * item.width;
        }
    };
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
}
