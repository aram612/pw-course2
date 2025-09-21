const { read } = require("fs");

// Bài 1
const car = {
    make: "Toyota",
    model: "Corolla",
    year: "2021"
};

console.log(`Năm sản xuất của xe là: ${car["year"]}`);

// Bài 2
const person = {
    name: "Tanjiro",
    address: {
        street: "Kumotori - Okutama",
        city: "Tokyo",
        country: "Japan"
    }
};

console.log(`Tên đường của nhân vật là: ${person["address"]["street"]}`);

// Bài 3
const student = {
    name: "Hoàng",
    grades: {
        math: 5,
        english: 1
    }
};

console.log(`Điểm môn toán là: ${student["grades"]["math"]}`);

// Bài 4
const settings = {
    volume: 88,
    brightness: 99
};

settings.volume = 66;

console.log(`object sau khi cập nhật giá trị là: `, settings);

// Bài 5
const bike = {};

bike.color = "red";

console.log(`object sau khi cập nhật: `, bike);

// Bài 6
const employee = {
    name: "Zenitsu",
    age: 16
};

delete employee.age;

console.log(`object sau khi cập nhật: `, employee);

// Bài 7
let school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}

console.log(school);
console.log(school[1]);
