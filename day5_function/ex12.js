function even(n) {
    return n % 2 === 0;
}

function odd(n) {
    return n % 2 !== 0;
}
function describeParity(n){
    if (even(n)) {
        console.log(`${n} is even`);

    } else if (odd(n))
        console.log(`${n} is odd`);
    }


describeParity(7);
