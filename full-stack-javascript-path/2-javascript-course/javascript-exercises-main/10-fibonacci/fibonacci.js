const fibonacci = function(n) {
let arrayFib=[0,1];

for (let i=2;i<n+1;i++)
{
arrayFib.push(arrayFib[i-2]+arrayFib[i-1]);
}
// Fn = Fn-1 + Fn-2 (applies to all other integers)
if (arrayFib[n]>0)
{
    return arrayFib[n];

}
else{
return("OOPS");
}

};

// Do not edit below this line
module.exports = fibonacci;
