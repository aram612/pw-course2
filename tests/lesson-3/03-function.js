// Bài 1
function multiply(a, b) {
    console.log(a * b);
}

multiply(2, 4);
multiply(10, 9);

// Bài 2
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}

console.log(`Giá trị nhỏ nhất là: ${findMin(7, 4, 2)}`);
console.log(`Giá trị nhỏ nhất là: ${findMin(3, 8, 4)}`);

// Bài 3
function getTopStudents(students, threshold) {
    const arr = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            arr.push(students[i].name);
        }
    }
    return arr;
}

console.log(getTopStudents([{ name: "Tanjiro", score: 25 },
{ name: "Zenitsu", score: 20 },
{ name: "Inosuke", score: 15 },
{ name: "Nezuko", score: 30 }], 20));

/* bài này lúc đầu hơi khó hiểu, em thắc mắc ở đoạn khai báo tham số, em có thử getTopStudents(students[], threshold) mới biết trong
    js không cho phép khai báo kiểu này, sau mò ra mới biết chỉ cần khai báo đơn giản, giá trị truyền vào sẽ qđịnh tham số đó là gì*/


// Bài 4
function calculateInterest(principal, rate, years) {
    let total = 0;
    total = (principal + (principal * rate * years)) / 100;
    return total;
}

console.log(`Tổng số tiền 5 năm là: `, calculateInterest(200_000_000, 5, 5));