//Task 1
console.log('Task 1 :');
let arr1 = new Array(10);
for (let i = 0; i < 10; i++) {
    arr1[i] = Math.floor(Math.random() * 100) + 1;
}
console.log(arr1);

//Task 2
console.log('Task 2 :');
let listContainer = document.createElement('div');
let listElement = document.createElement('ul');
let listItem = document.createElement('li');
document.body.appendChild(listContainer);
listContainer.appendChild(listElement);
let numberOfListItems = arr1.length;

for (let i = 0; i < numberOfListItems; ++i) {
    listItem.textContent = arr1[i];
    listElement.appendChild(listItem);
    listItem = document.createElement('li');
}

for (let i = 0; i < arr1.length; i++) {
    console.log('[' + (i + 1) + '] - ' + arr1[i]);
}

//Task 3
console.log('Task 3 :');
console.log('Element that can be devided by 7 : ' + arr1.find((elem) => elem % 7 == 0));

//Task 4
console.log('Task 4 :');
arr1.sort((a, b) => a - b);
console.log(arr1);

//Task 5
console.log('Task 5 :');
let arr2 = new Array(10);
for (let i = 0; i < arr2.length; i++) {
    arr2[i] = arr1[i];
}
for (let i = arr2.length / 2; i < arr2.length; i++) {
    arr2[i] = 0;
}
console.log(arr2);

//Task 6
console.log('Task 6 :');
arr1.splice(0, 2);
console.log(arr1);

//Task 7
console.log('Task 7 :');
let num;
let equals = false;
for (let i = 0; i < arr1.length; i++) {
    num = arr1[i];
    for (let j = i + 1; j < arr1.length; j++) {
        if (num == arr1[j]) equals = true;
    }
}
if (equals == true) console.log('Massive have equal elements');
else console.log('Massive have not equal elements')

//Task 8
console.log('Task 8 :');
let arr3 = arr1.slice(arr1.length / 2, arr1.length);
console.log(arr3);

//Task 9
console.log('Task 9 :');
let count = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0) count++;
}
console.log('Count of even numbers : ' + count);