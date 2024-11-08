
   
   function removeDuplicates ( arr : number[] ) : number[] {
       return arr.filter (( value, index, array) => {
         return  array.indexOf(value) == index  })
       
   }
   
   const r = removeDuplicates( [1, 2, 2, 3, 4, 4, 5])
