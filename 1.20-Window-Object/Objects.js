console.log(window);

function getPageURL(){
    let url = window.location.href;
    // debugger;
    console.log(url);
}

getPageURL();

function sum(){
    let z  = 729 + 1000;
    let e1 = JSON.stringify({"ID":81,"Age":21});

    // Data stored in localStorage is available until explicitly deleted
    window.localStorage.setItem("Result",z);
    window.localStorage.setItem("Name","Kinshuk"); // localStorage stores data in string format 
    localStorage.setItem("Emp 1",e1);
    console.log(z);

}
function sumAtSession(){
    let z  = 729 + 1000;
    let e1 = JSON.stringify({"ID":81,"Age":21});

    // Data stored in sessionStorage is available until user closes all browser windows
    window.sessionStorage.setItem("Result",z);
    window.sessionStorage.setItem("Name","Kinshuk"); // sessionStorage stores data in string format 
    sessionStorage.setItem("Emp 1",e1);
    console.log(z);
}

function getSessionData(){
    let name = sessionStorage.getItem("Name");
    let res = sessionStorage.getItem("Result");
    let empl = sessionStorage.getItem("Emp 1"); // its a string

    console.log(typeof(name)+" Name is : "+name);
    console.log(typeof(res)+" Result : "+res);
    console.log(typeof(empl)+" Employee Data : "+empl);

    console.log(name);
    console.log(parseInt(res));
    let eO = JSON.parse(empl);
    console.log(typeof(eO));
    console.log(eO);

    const {ID , Age} = eO; // Object destructuring another feature of ES6
    console.log(ID);
    console.log(Age);
}

function clearSessionData(){
    sessionStorage.clear();
}

function getData(){
    let name = localStorage.getItem("Name");
    let res = localStorage.getItem("Result");
    let empl = localStorage.getItem("Emp 1"); // its a string

    console.log(typeof(name)+" Name is : "+name);
    console.log(typeof(res)+" Result : "+res);
    console.log(typeof(empl)+" Employee Data : "+empl);

    console.log(name);
    console.log(parseInt(res));
    let eO = JSON.parse(empl);
    console.log(typeof(eO));
    console.log(eO);

    const {ID , Age} = eO; // Object destructuring another feature of ES6
    console.log(ID);
    console.log(Age);
}

function clearData(){
    localStorage.clear();
}