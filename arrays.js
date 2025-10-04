const arr = [1,2,3,4,5];

// console.log(arr.length);

// console.log(arr.pop());

// console.log(arr);

// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }


const map = arr.map(el => {
    console.log(el)
    return el;
})

console.log(map);