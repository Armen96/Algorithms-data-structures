function swap(items, firstIndex, secondIndex){
    let temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function selectionSort(items){
   for ( let i = 0; i < items.length; i++ ) {
       let currentId = i;
       for ( let j = i + 1; j < items.length; j++ ) {
           if( items[j] < items[currentId] ) {
               currentId = j;
           }
       }

       swap(items, i , currentId)
   }

   return items;
}


console.log(selectionSort([5,9,6,1,22,14,95,42,4]));
