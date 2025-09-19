// Bài 1
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(`Tổng từ 1 đến 100: ${sum}`);

// Bài 2
console.log(`Bảng cửu chương:`);
for (let n = 2; n <= 9; n++) {
    for (let m = 1; m <= 9; m++) {
        console.log(`${n} x ${m} = ${n * m}`);
    }
    console.log(`\n`);
}

// Bài 3
const arr = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        arr.push(i);
    }
}
console.log(`Mảng gồm các số lẻ từ 1 đến 99: `, arr);

// Bài 4
for (let i = 1; i <= 10; i++) {
    console.log(`kamado_tanjiro${i}@gmail.com`);
}

// Bài 5
const revenue = [{ month: 1, total: 90 },
{ month: 2, total: 100 },
{ month: 3, total: 110 },
{ month: 4, total: 120 },
{ month: 5, total: 130 },
{ month: 6, total: 140 },
{ month: 7, total: 150 },
{ month: 8, total: 100 },
{ month: 9, total: 110 },
{ month: 10, total: 120 },
{ month: 11, total: 130 },
{ month: 12, total: 110 },
]

let totalRev = 0;
for (let i = 0; i < revenue.length; i++) {
    totalRev = totalRev + revenue[i].total;
}
console.log(totalRev);