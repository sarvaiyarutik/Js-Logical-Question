

let number = [1,2,3,4,5,6,7,8,9];

const num =(number)=>{

    let sum = 0;
    

    for(let i=0;i<number.length;i++){
       
        sum = number[i]+sum;
    }
    console.log(sum);


}

num(number);





//another method
const another = [100,200,300,400,500];


const all = (another)=>{


    let sum = 0;


    for(let i of another){
 
        sum+=i;

    }

    console.log(sum);
};

all(another);






// example



const n = [1,2,3,4,5,6,7,8,9];

const functionN =(n)=>{

    let sumN = 0;

    for(let i=0;i<n.length;i++){

        sumN = n[i] + sumN;
    }

    console.log(sumN);
}


functionN(n);




// for  in method



const n2 = [10,20,30,40,50,60,70,80,90];

const functionN2 = (n2)=>{

    let sum2 = 0;

    for(let key of n2){
        sum2+=key;
    }

    console.log(sum2)
}

functionN2(n2);