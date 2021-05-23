const fs = require('fs');
fs.writeFile('employee.json', '{"name": "Rumeysa", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
});

  fs.appendFile('employee.json','{"name": "Ayla", "salary": 3000}', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
  fs.readFile('employee.json', 'utf8', (err, data) => { 
    if (err) console.log(err);                         
    console.log(data);                                 
  })
  fs.unlink('employee.json', (err) => {
    if (err) console.log(err);
});