const name1 = "rutik";

const reverseName = (name1) => {
    const num1 = name1.split("");
    console.log(num1);

    const reverseArray = num1.reverse();
    console.log(reverseArray);

    const reverseString = reverseArray.join("");
    console.log("reverse string :", reverseString);
}

reverseName(name1);

// short method

const reverse = str => str.split("").reverse().join("");

console.log(reverse("rutik"));


// using loop

const reverseStringWithoutMethod = (name1)=>{
    let reversed = "";


    for(let i=name1.length-1;i>=0;i--){
        reversed += name1[i];
    }

    console.log("revesed :",reversed);
}

reverseStringWithoutMethod(name1);