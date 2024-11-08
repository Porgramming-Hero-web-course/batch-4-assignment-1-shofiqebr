

function removeDuplicates (arr : number[]) : number[] {
    return arr = arr.filter((value, index, array) => 
       array.indexOf(value) === index
     )
   }
   
   const r = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
   console.log(r)
   
   function rd ( arr : number[] ) : number[] {
       return arr.filter (( value, index, array) => {
         return  array.indexOf(value) == index  })
       
   }
   
   const r1 = rd( [1, 2, 2, 3, 4, 4, 5])
   console.log(r1)