export function countPrimes(num){
    let count = 0;
    for(let i = 2; i <= num; i++){
      let isPrime = true;
      for(let j = 2; j < i; j++){
        if(i % j == 0){
          isPrime = false;
          break;
        }
      }
      if(isPrime){
        count++;
        console.log(i);
      }
    }
    return count;
  }
  