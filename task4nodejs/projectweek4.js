function gradecalculator(scores) {
    let sum=0;
    for(let i=0;i<scores.length;i++){
        sum+=scores[i];
    }
    const average=sum/scores.length;
    let grade;
    if(average>=90){
        grade="A";
    }
    else if(average>=80){
        grade="B";

    }
    else if(average>=70){
        grade="C";

    }
    else if(average>=60){
        grade="D";

    }
    else if(average>=50){
        grade="E";

    }
    else {
        grade="F";
    }
    return {average,grade};
    }

const scores=[100,100,100,100,100];
const result=gradecalculator(scores) ;
console.log(`average scores:${result.average}`);
console.log(`grade:${result.grade}`);

