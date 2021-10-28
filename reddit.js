const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

rp ("https://reddit.com/r/popular.json")
    .then(body =>console.log("Response body as string", body))
    .catch(err=>console.log("Could not complete request", err));

    JSON.parse(body.stringify(forEach(item => {
        console.log(item.data.title, item.data.url, item.data.author);
        const myArray =  myArray.push(item.data.title, item.data.url, item.data.author);
      require('fs').writeFile('./popular-articles.json'),
          JSON.stringify(myArray),
          function (err) {
              if (err) {
                  console.error('Write Error');
      
              }
            }
        })));
        
