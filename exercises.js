//ex1 Implemetează o funcție arrow care primește ca parametru un array de string și 
// îmi returnează un singur string obținut prin concatenarea string-urilor din array-ul primit ca parametru. 

const arr=["Hello", "World"]

const sentence = (array) => {
    return array.join(' ');
}

//console.log(sentence(arr));

//ex2:  Implementează o funcție care returnează numărul de caractere diferite 
// între două string-uri de aceeași lungime primite ca parametri. 
// Dacă string-urile primite nu sunt de aceeași lungime, funcția va returna -1.

// const arr1=["Hello", "Raluca", "!"]
// const arr2=["Hello", "Raluca"]

// const difference = (array1, array2) => {
//     if(array1.length !== array2.length) {
//         return -1;
//     } else {
//        for (i=1; i<array1.length; i++){
//         if(array1[i]!==array2[i]) {
//             return array1[i];
//         }
//        }
//     }
// }

// console.log(difference(arr2, arr));

const string1='test';
// const string2='best';

// const compareStrings = (str1, str2) =>{
//     if(str1.length !==str2.length) {
//         return -1;
//     }
//     let counter=0;
//     for(const i in str1){
//         if(str1[i] !==str2[i]) {
//             counter++;
//         }
//     }
//     return counter;
// }
//console.log(compareStrings(string1, string2));

//ex3:  Implementează o funcție care primește ca și parametri un string și o literă și returnează de câte ori se regăsește litera în respectivul text. 
const letter='l'

const find = (str, el) => {
    let counter=0;
    for (const i of str){
        if(i !== el){
            counter++;
        }
    }
    return counter;
}

//console.log(find(string1, letter));

//ex4: . Implementează o funcție care primește ca parametrii două array-uri de aceeași lungime și returnează un array cu elementele din cele două surse intercalate

const array1=[1,3,5]

const array2=[2,4,6]

const combineArrays = (arr1, arr2) => {
    if(arr1.length!== arr2.length) {
        throw new Error('Arrays must be the same length');
    }
    const newArray=[];

    for (const i in arr1){
        newArray.push(arr1[i], arr2[i]);
    }

    return newArray
}

//console.log(combineArrays(array1, array2));

//ex5:  Implementează o funcție care primește ca și parametru un array de numere și care calculează media aritmetică a numerelor. 

const numbers=[1,2,3,4,5];

const medie = (arr) => {
    const sum = arr.reduce((acc, el) => acc+el, 0);
    return sum/arr.length;
}

console.log(medie.apply(numbers));