const persistence = () => {
    let counter = 0;

    return function newFunc(num) {
        let mul = 1;
        let numArr = num.toString().split('');
    
        if(numArr.length == 1) {
          return counter;
        }
        numArr.forEach(element => {
            mul *= +element;
        });
        counter++;

        return newFunc(mul);
    }
}

let count = persistence();
console.log(count(999));

