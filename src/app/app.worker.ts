/// <reference lib="webworker" />

import isPrimeNumber from 'prime-number';
// import primeNumberList from 'prime-number/list';
addEventListener('message', ({ data }) => {
    
    const arePrimeList = data.map((prime) => {
        return isPrimeNumber(prime);
    });
    postMessage(arePrimeList);
});
