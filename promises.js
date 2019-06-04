let url = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json"
fetchData().then((v)=>{
    return fetchData();
    log(fetchData);
});
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
    });
    req.open("GET", url);
    req.send();
}
