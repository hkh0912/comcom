const express = require('express');
const app = express();

app.get('', (request, response) => {
    var num = request.query.input;
    
    const arr = [];
    for(var i=2; i*i <= num && num > 1; ++i){
        while(parseInt(num % i, 10) === 0){
            arr.push(i);
            num = parseInt(num / i, 10);
        }
    }
    if(num === 1) response.send(200, arr[arr.length-1])
    else response.send(200, num)
    
});


app.listen(8081, function () {
    console.log('listening on port 8081');
});