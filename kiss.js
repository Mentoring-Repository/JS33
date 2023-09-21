// Commit test
// SORTEAZA ARRAY CRESCATOR
let array = [5, 2, 3, 4];

array = array.sort();
console.log(array);

for (let i = 0; i < array.length - 1; i++)
  for (let j = i + 1; j < array.length; j++)
    if (array[i] > array[j]) {
      let aux = array[i];
      array[i] = array[j];
      array[j] = aux;
    }
console.log(array);
// Desfasurator bubble sort
/*
Inital [5,2,3,4]
i = 0; j = 1
array[i] = 5 > array[j] = 2
{
    aux = 5
    array[i] = 2
    array[j] = 5
}
La nivel i=0;j=1 [2,5,3,4]
La nivel i=0;j=2 [2,5,3,4]
La nivel i=0;j=3 [2,5,3,4]
La nivel i=1;j=2 [2,3,5,4]
La nivel i=1;j=3 [2,3,5,4]
La nivel i=2;j=3 [2,3,4,5]
iese din loop si returneaza [2,3,4,5]
*/
