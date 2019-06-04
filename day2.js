
const req = new XMLHttpRequest();
req.onreadystatechange = function func(){
    if(req.readyState===4){
        //console.log(req.responseText);
        var str2Jsn = JSON.parse(req.responseText);
        var jsn2Str = JSON.stringify(members);
        var powers = str2Jsn["members"][2]["powers"];
        var members = str2Jsn["members"];
        var heros = JSON.stringify(members);        
        // for(x in powers){
        //     var result = document.createElement("P");
        //     result.innerHTML = powers[x];
        //     document.body.appendChild(result);
        // }
        for(object in members){
            var result1 = document.createElement("P");
            result1.innerHTML = JSON.stringify(members[object]);
            document.body.appendChild(result1);
        }
         console.log();
         console.log(str2Jsn);    
    }
};
req.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
req.send();



function fetchData(url){
    return new Promise((resolve, reject)=>{
        const req = new XMLHttpRequest();
        req.onreadystatechange = ()=>{
            if(req.readyState===4){
                if(req.status===200){
                    resolve(req);
                    
                }else{
                    reject("it fucked up")
                }
            }
        }
        req.open("GET", url);
        req.send();
    });
    
}
fetchData("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json").then((req)=>{
    console.log(req.responseText);
    let a = "what's good";
    let b = "Danny";
    let x = `${a}, ${b}!`;
    console.log(x)
    // return fetchData();
    
});





const me = {
    firstname : "Rob",
    lastName : "coates",
    age : 23,
    address: {
        line1: "16 Chapel Road",
        line2: "Morley St Botolph",
        line3: "Wymondham",
        City: "Norwich",
        postcode: "NR18 9TF"
    }
}

console.log(me.age);
var myJson = JSON.stringify(me.address.line1);
console.log(myJson);
var myString = JSON.parse(myJson);
console.log(myString);
//document.getElementById("demo").innerHTML = myJson;
