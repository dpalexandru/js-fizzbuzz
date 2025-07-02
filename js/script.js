//Costruisco un ciclo che stampa i numeri da 1 a 100

for (let i = 1; i<= 100 ; i++) {
  //aggiungo if per selezionare i numeri divisibili sia per 3 che per 5 
  if (i %3 == 0 && i %5 ==0) {
    console.log(`Fizzbuzzzzzz`)
  }
  //aggiungo else if per selezionare i divisibili per 3
  else if (i %3 == 0){
    console.log(`Fizzzz`)
  }
  //aggiungo else if per selezionare i divisibili per 3
  else if (i %5 == 0){
    console.log(`Buzzz`)
  }
  else {
    console.log(i);
}}
