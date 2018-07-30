const LomlTextScraper = require('./src/scraper.js');

function run () {
    // return new Promise(async (resolve, reject) => {
    //     try {
    //         const browser = await puppeteer.launch();
    //         const page = await browser.newPage();
    //         const response = await page.goto("http://healthmap.org/ln.php?5932210&promed&0");
    //         // await page.goto("http://www.nejm.org/doi/full/10.1056/NEJMp1807870?rss=searchAndBrowse");
    //         const html = await page.content();
    //
    //         const pipe = new Boilerpipe();
    //         pipe.setHtml(html);
    //         pipe.getText(function(err, text){
    //           console.log('====================================');
    //           console.log(text);
    //         });
    //         browser.close();
    //         return resolve(html);
    //     } catch (e) {
    //         return reject(e);
    //     }
    // })
    var url = 'http://healthmap.org/ln.php?5932210&promed&0';
    const lomlTextScraper = new LomlTextScraper();
    console.log(lomlTextScraper.scrape(url));
}
run();//.then(console.log).catch(console.error);
