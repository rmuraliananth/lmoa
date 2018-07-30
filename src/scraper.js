(function () {
    'use strict';
    var LomlTextScraper = function() {
    };

    LomlTextScraper.prototype.scrape = function(url){
        console.log('scrape');
        var html = new LomlWebContentReader().read(url);
        console.log(html);
        // var lomlTextParser = new LomlTextParser()
        // var text = lomlTextParser.parseHtmlToText(html, lomlTextParser.getText);
        return html;
    };

    var LomlWebContentReader = function(){
    };

    LomlWebContentReader.prototype.read = function(urn){
        const puppeteer = require('puppeteer');
        console.log('read web content for given urn', urn);
        return new Promise(async (resolve, reject) => {
            try {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                const response = await page.goto(urn);
                const html = await page.content();
                browser.close();
                var lomlTextParser = new LomlTextParser();
                const text = await lomlTextParser.parseHtmlToText(html);
                console.log(text);
                return resolve(text);
            } catch (e) {
                console.error('unable to read web content', e);
                return reject(e);
            }
        })
    };

    var LomlTextParser = (function(){
        var _text='murali';
        LomlTextParser.prototype.parseHtmlToText = async function(html) {
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

        LomlTextParser.prototype.getText = async function(error,text) {
          console.log(text);
          return text;
        };

    });

    exports = module.exports = LomlTextScraper;
})();
