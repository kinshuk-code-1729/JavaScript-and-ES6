let subjects = ['ADA','COA','DSA','DBMS','TOC','OS','OOPS'];
const findSub = (sub) => {
    if(subjects.includes(sub)){
        console.log("Subject is included....");
    }
    else{
        console.log("Subject is not there...");
    }
}

findSub('DBMS');
findSub('SE');