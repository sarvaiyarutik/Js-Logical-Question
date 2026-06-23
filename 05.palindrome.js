

let str = "Massage";

const palindrome = (str)=>{

    const lowercase = str.toLowerCase();
    const reverseWord = lowercase.split("").reverse().join("");


    if(lowercase === reverseWord){
        console.log("string is palinfrome :",str);
    }
    else{
        console.log("string is not palindrome");

    }
};



palindrome(str);




const checkPalindromeStrring = ()=>{

    let cleanword = str.toLowerCase();
    let reversed = "";

    for(let i=cleanword.length-1;i>=0;i--){
        reversed+=cleanword[i];
    }

    cleanword === reversed
    
        ? console.log("given string is palindrome string", str)
    : console.log("given string is not palindrome string");


};

checkPalindromeStrring();