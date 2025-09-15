// Cách 1
for (let i = 1; i <= 100; i++) {
    console.log(i);
    i = i + 3;
}

// Cách 2
for (let i = 1; i <= 100; i += 4) {
    console.log(i);
}