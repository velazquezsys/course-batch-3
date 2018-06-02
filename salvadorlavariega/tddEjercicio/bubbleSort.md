# Bubble Sort
> Se requiere implementar el método de burbuja para ordenar 
> un arreglo de cualquier longitud

```js
// Test one
isEmptyArray(array){
 if(array == null){
    return testFailed("The array is null")
 }
 if(array.length < 1){
    return testFailed("The array isEmpty")
 }
}
//Test Two 
isNumericArray(array){
 for(element in  array){
  if (notIsNumber(element)){
    return testFailed("The array contains a not number element")
  }
 }
 
 //to be continue...
}