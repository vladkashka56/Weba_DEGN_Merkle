const fs = require('fs'); 
const csv = require('csv-parser');

let csv_data = {};
let total = 0;

fs.createReadStream('./snapshot.csv')
.pipe(csv())
.on('data', function(data){
    try {
        // let line_data = data.Address + '_' + data.Balances;
        total += parseInt(data.Balances);
        let addr = data.Address;
        // csv_data.push(line_data)
        csv_data[addr.toLowerCase()] = parseInt(data.Balances);

        //perform the operation
    }
    catch(err) {
        //error handler
    }
})
.on('end',function(){
    console.log("csv:", total)
    let resJson = JSON.stringify(csv_data);

    fs.writeFile(`./whitelist.json`, resJson, 'utf8', (err) => { console.log(err) })
  
    //some final operation
});  


