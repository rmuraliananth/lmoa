(function () {
    'use strict';
    var LomaTextScraper = function() {
    };

    LomaTextScraper.prototype.scrape = function(url){
        console.log('scrape');
        var html = new LomaWebContentReader().read(url);
        console.log(html);
        // var LomaTextParser = new LomaTextParser()
        // var text = LomaTextParser.parseHtmlToText(html, LomaTextParser.getText);
        return html;
    };

    var LomaWebContentReader = function(){
    };

    LomaWebContentReader.prototype.read = function(urn){
        const puppeteer = require('puppeteer');
        console.log('read web content for given urn', urn);
        return new Promise(async (resolve, reject) => {
            try {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                const response = await page.goto(urn);
                const html = await page.content();
                browser.close();
                var LomaTextParser = new LomaTextParser();
                const text = await LomaTextParser.parseHtmlToText(html);
                console.log(text);
                return resolve(text);
            } catch (e) {
                console.error('unable to read web content', e);
                return reject(e);
            }
        })
    };

    var LomaTextParser = (function(){
        var _text='murali';
        LomaTextParser.prototype.parseHtmlToText = async function(html) {
          const Boilerpipe = require('boilerpipe');
          console.log('parse html to text');
          // return new Promise(async (resolve, reject) => {
          //     try {
                  // use DefaultExtractor to parse html to text
                  const boilerpipe = new Boilerpipe();
                  boilerpipe.setHtml(html);
                  const text = await boilerpipe.getText(this.getText);
            //       return resolve(text);
            //   } catch (e) {
            //       console.error('unable to read web content', e);
            //       return reject(e);
            //   }
            // });
            return text;
        };

        LomaTextParser.prototype.getText = async function(error,text) {
          console.log(text);
          return text;
        };

    });

    exports = module.exports = LomaTextScraper;
})();
