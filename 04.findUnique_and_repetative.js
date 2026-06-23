

    const num = [10,20,30,40,50,60,70,80,90,100];

    const ValueFind = (num)=>{

        let count = {};
        let uniqueval = [];
        let repetitiveval = [];


        for(let i of num){
            if(count[i]){
                count[i]+=1;
            }
            else{
                count[i] = 1;
            }
        }

        for(let key in count){
            if(count[key] === 1){
                 uniqueval.push(Number(key));
            }
            else{
                repetitiveval.push(Number(key));
            }
        }

        console.log(count);
        console
        .log(uniqueval);
        console.log(repetitiveval);
    }

    ValueFind(num);