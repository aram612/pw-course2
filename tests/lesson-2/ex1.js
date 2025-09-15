const myNumber = 12;
const myName = 'my number';
let isEven = false;

if (myNumber % 2 === 0) {
    isEven = true;
    console.log(myName + " is " + isEven);
}
console.log(myName + " is " + isEven); // biến isEven lúc này vẫn = true vì em đã khai báo isEven nằm ngoài {} (isEven có phạm vi toàn bộ function)