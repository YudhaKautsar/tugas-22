const a = 'Saya ingin belajar bersama';
const array1 = a.split(" ")

array1.forEach(function (item, index, array) {
    console.log(`Item : ${item} Index ke ${index}`);
});