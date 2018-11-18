function  findUniqNumber(A) {

    var returnNumber = -1;
    var new1 = new Array();

   for(i=0; i < new1.length; i++){

      var Index = A[i];
     if( new1[Index] === undefined){
        new1[Index] = 1;
     else{
     }
        new1[Index] += 1;
     }
    }

   for(j = 0; j < A.length; j++){
     if(new1[A[j]] == 1){
       nb = A[j];
       break;
     }
   }
    return nb;
}
