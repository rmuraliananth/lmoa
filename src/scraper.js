(function () {
    'use strict';
    var LomaTextScraper = function() {
    };

    LomaTextScraper.prototype.scrape = function(url){
        console.log('scraping started ...');

        var html = new LomaWebContentReader().read(url).then(function(html){
            // console.log(html);
            return new LomaTextParser().parseHtmlToText(html);
            // return text;
        })
      return html;
    };


    var LomaWebContentReader = function(){
    };

    LomaWebContentReader.prototype.read = function(urn){
        const puppeteer = require('puppeteer');
        console.log('read html content for given urn : ', urn);
        return new Promise(async (resolve, reject) => {
            try {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                const response = await page.goto(urn);
                const html = await page.content();
                browser.close();
                // var lomaTextParser = new LomaTextParser();
                // const text = await lomaTextParser.parseHtmlToText(html);
                // // console.log(text);
                // return resolve(text);
                resolve(html);
            } catch (e) {
                console.error('unable to read web content', e);
                reject(e);
            }
        })
    };

    var LomaTextParser = function(){
    };


    LomaTextParser.prototype.parseHtmlToText = function(html) {
      const Boilerpipe = require('boilerpipe');
      console.log('parse html to text');
      return new Promise(async (resolve, reject) => {
          try {
              // use DefaultExtractor to parse html to text
              const boilerpipe = new Boilerpipe();
              boilerpipe.setHtml(html);
              const text = await boilerpipe.getText(function(error, text){
                resolve(text);
              });
          } catch (e) {
              console.error('unable to parse html content to text', e);
              reject(e);
          }
        });
    };
    exports = module.exports = LomaTextScraper;
})();
