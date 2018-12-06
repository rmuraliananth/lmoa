const LomaTextScraper = require('./src/scraper.js');
var url = process.argv[2];
var scrapeResponse;

function run () {
    console.log(url);
    if( url == undefined || url == ''){
      throw new Error("Please provide valid url");
    }
    //  new LomaTextScraper().scrape(url).then(function(results){
    //   // console.log(results);
    // })


    new LomaTextScraper().scrape(url).then(function(results){
        scrapeResponse = results;
        console.log(results);
        // return scrapeResponse;
    })


    // //   resolve(result);
    // // },function(err){
    // //   reject(err);
    // // });

}
run();
