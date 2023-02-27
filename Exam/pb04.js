function santa(input){
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);

    let numbers = "";
    let flag = true;
    for(let num = m; num >= n; num--){
        if(num % 2 == 0 &&
           num % 3 == 0){
            if(num == s){
                break;
            }
            numbers += `${num} `;
        }
    }
    console.log(numbers);
}
santa(["20",
"1000",
"36"
])
