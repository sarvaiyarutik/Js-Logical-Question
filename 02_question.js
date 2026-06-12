

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
