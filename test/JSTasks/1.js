let money = [1000, 500, 200, 100, 50];

let value = 1450;

function getResult(value) {
    let count = 0;
    for (const key in money) {
        while(value - money[key] >= 0) {
            value -= money[key];
            count++;
        }
    }

    if(value != 0) {
        return -1;
    } else {
        return count;
    }
}

console.log(getResult(value));

