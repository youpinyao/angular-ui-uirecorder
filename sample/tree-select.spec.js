const fs = require('fs');
const path = require('path');
const chai = require("chai");
const should = chai.should();
const JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);
const resemble = require('resemblejs-node');
resemble.outputSettings({
    errorType: 'flatDifferenceIntensity'
});

const rootPath = getRootPath();

module.exports = function(){

    let driver, testVars;

    before(function(){
        let self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    it('url: http://0.0.0.0:8686/#!/components/data-entry/treeSelect', async function(){
        await driver.url(_(`http://0.0.0.0:8686/#!/components/data-entry/treeSelect`));
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('scrollTo: 0, 100', async function(){
        await driver.scrollTo(0, 100);
    });

    it('click: disabled ( //h4[text()="disabled"], 18, 42, 0 )', async function(){
        await driver.sleep(300).wait('//h4[text()="disabled"]', 30000)
               .sleep(300).mouseMove(18, 42).click(0);
    });

    it('click: i.switch-appearance, 22, 5, 0', async function(){
        await driver.sleep(300).wait('i.switch-appearance', 30000)
               .sleep(300).mouseMove(22, 5).click(0);
    });

    it('click: i.switch-appearance, 27, 11, 0', async function(){
        await driver.sleep(300).wait('i.switch-appearance', 30000)
               .sleep(300).mouseMove(27, 11).click(0);
    });

    it('click: li:nth-child(1) > i.icon-closecircle, 7, 6, 0', async function(){
        await driver.sleep(300).wait('li:nth-child(1) > i.icon-closecircle', 30000)
               .sleep(300).mouseMove(7, 6).click(0);
    });

    it('click: 8888 ( ul.select2-choices, 169, 23, 0 )', async function(){
        await driver.sleep(300).wait('ul.select2-choices', 30000)
               .sleep(300).mouseMove(169, 23).click(0);
    });

    it('scrollTo: 0, 154', async function(){
        await driver.scrollTo(0, 154);
    });

    it('click: li:nth-child(1) > div.ui-select-choices-row-inner > div > i.tree-arrow-click, 18, 18, 0', async function(){
        await driver.sleep(300).wait('li:nth-child(1) > div.ui-select-choices-row-inner > div > i.tree-arrow-click', 30000)
               .sleep(300).mouseMove(18, 18).click(0);
    });

    it('scrollTo: 0, 192', async function(){
        await driver.scrollTo(0, 192);
    });

    it('click: 9999 ( li:nth-child(4) > div.ui-select-choices-row-inner > div, 67, 13, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(4) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(67, 13).click(0);
    });

    it('click: 8888 ( li:nth-child(3) > div.ui-select-choices-row-inner > div, 76, 20, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(3) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(76, 20).click(0);
    });

    it('click: 77771 ( li:nth-child(2) > div.ui-select-choices-row-inner > div, 83, 23, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(2) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(83, 23).click(0);
    });

    it('click: 8888 ( li:nth-child(3) > div.ui-select-choices-row-inner > div, 75, 14, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(3) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(75, 14).click(0);
    });

    it('click: 66661 ( li:nth-child(5) > div.ui-select-choices-row-inner > div, 86, 8, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(5) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(86, 8).click(0);
    });

    it('click: 77771 ( li:nth-child(2) > div.ui-select-choices-row-inner > div, 36, 19, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(2) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(36, 19).click(0);
    });

    it('click: 8888 ( li:nth-child(3) > div.ui-select-choices-row-inner > div, 49, 14, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(3) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(49, 14).click(0);
    });

    it('click: 9999 ( li:nth-child(4) > div.ui-select-choices-row-inner > div, 62, 20, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(4) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(62, 20).click(0);
    });

    it('click: li:nth-child(5) > div.ui-select-choices-row-inner > div > i.tree-arrow-click, 14, 15, 0', async function(){
        await driver.sleep(300).wait('li:nth-child(5) > div.ui-select-choices-row-inner > div > i.tree-arrow-click', 30000)
               .sleep(300).mouseMove(14, 15).click(0);
    });

    it('mouseDown: 88881 ( li:nth-child(7) > div.ui-select-choices-row-inner > div, 56, 2, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(7) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(56, 2).mouseDown(0);
    });

    it('scrollElementTo: ul.ui-select-choices, 0, 89', async function(){
        await driver.sleep(300).wait('ul.ui-select-choices', 30000)
               .sleep(300).scrollElementTo(0, 89);
    });

    it('mouseUp: 88881 ( li:nth-child(7) > div.ui-select-choices-row-inner > div, 56, 2, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(7) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(56, 2).mouseMove(56, 2).mouseUp(0);
    });

    it('click: 77771 ( li:nth-child(6) > div.ui-select-choices-row-inner > div, 63, 25, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(6) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(63, 25).click(0);
    });

    it('click: 99991 ( li:nth-child(8) > div.ui-select-choices-row-inner > div, 67, 17, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(8) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(67, 17).click(0);
    });

    it('click: 66661 ( li:nth-child(5) > div.ui-select-choices-row-inner > div.tree-open, 108, 27, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(5) > div.ui-select-choices-row-inner > div.tree-open', 30000)
               .sleep(300).mouseMove(108, 27).click(0);
    });

    it('click: 88881 ( li:nth-child(7) > div.ui-select-choices-row-inner > div, 93, 11, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(7) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(93, 11).click(0);
    });

    it('click: 66661 ( li:nth-child(5) > div.ui-select-choices-row-inner > div.tree-open, 115, 19, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(5) > div.ui-select-choices-row-inner > div.tree-open', 30000)
               .sleep(300).mouseMove(115, 19).click(0);
    });

    it('click: 88881 ( li:nth-child(7) > div.ui-select-choices-row-inner > div, 100, 20, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(7) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(100, 20).click(0);
    });

    it('click: 77771 ( li:nth-child(6) > div.ui-select-choices-row-inner > div, 106, 10, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(6) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(106, 10).click(0);
    });

    it('click: 99991 ( li:nth-child(8) > div.ui-select-choices-row-inner > div, 105, 8, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(8) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(105, 8).click(0);
    });

    it('click: 66661 ( li:nth-child(5) > div.ui-select-choices-row-inner > div.tree-open, 71, 7, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(5) > div.ui-select-choices-row-inner > div.tree-open', 30000)
               .sleep(300).mouseMove(71, 7).click(0);
    });

    it('scrollElementTo: ul.ui-select-choices, 0, 33', async function(){
        await driver.sleep(300).wait('ul.ui-select-choices', 30000)
               .sleep(300).scrollElementTo(0, 33);
    });

    it('click: 77771 ( li:nth-child(2) > div.ui-select-choices-row-inner > div, 111, 27, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(2) > div.ui-select-choices-row-inner > div', 30000)
               .sleep(300).mouseMove(111, 27).click(0);
    });

    it('scrollTo: 0, 137', async function(){
        await driver.scrollTo(0, 137);
    });

    it('click: 6666 ( li:nth-child(1) > div.ui-select-choices-row-inner > div.tree-open, 132, 15, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(1) > div.ui-select-choices-row-inner > div.tree-open', 30000)
               .sleep(300).mouseMove(132, 15).click(0);
    });

    it('scrollTo: 0, 372', async function(){
        await driver.scrollTo(0, 372);
    });

    it('click: 清空 ( //div[text()="清空"], 27, 17, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="清空"]', 30000)
               .sleep(300).mouseMove(27, 17).click(0);
    });

    it('scrollTo: 0, 283', async function(){
        await driver.scrollTo(0, 283);
    });

    function _(str){
        if(typeof str === 'string'){
            return str.replace(/\{\{(.+?)\}\}/g, function(all, key){
                return testVars[key] || '';
            });
        }
        else{
            return str;
        }
    }

};

if(module.parent && /mocha\.js/.test(module.parent.id)){
    runThisSpec();
}

function runThisSpec(){
    // read config
    let webdriver = process.env['webdriver'] || '';
    let proxy = process.env['wdproxy'] || '';
    let config = require(rootPath + '/config.json');
    let webdriverConfig = Object.assign({},config.webdriver);
    let host = webdriverConfig.host;
    let port = webdriverConfig.port || 4444;
    let match = webdriver.match(/([^\:]+)(?:\:(\d+))?/);
    if(match){
        host = match[1] || host;
        port = match[2] || port;
    }
    let testVars = config.vars;
    let browsers = webdriverConfig.browsers;
    browsers = browsers.replace(/^\s+|\s+$/g, '');
    delete webdriverConfig.host;
    delete webdriverConfig.port;
    delete webdriverConfig.browsers;

    // read hosts
    let hostsPath = rootPath + '/hosts';
    let hosts = '';
    if(fs.existsSync(hostsPath)){
        hosts = fs.readFileSync(hostsPath).toString();
    }
    let specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');

    browsers.split(/\s*,\s*/).forEach(function(browserName){
        let caseName = specName + ' : ' + browserName;

        let browserInfo = browserName.split(' ');
        browserName = browserInfo[0];
        let browserVersion = browserInfo[1];

        describe(caseName, function(){

            this.timeout(600000);
            this.slow(1000);

            let driver;
            before(function(){
                let self = this;
                let driver = new JWebDriver({
                    'host': host,
                    'port': port
                });
                let sessionConfig = Object.assign({}, webdriverConfig, {
                    'browserName': browserName,
                    'version': browserVersion,
                    'ie.ensureCleanSession': true,
                    'chromeOptions': {
                        'args': ['--enable-automation']
                    }
                });
                if(proxy){
                    sessionConfig.proxy = {
                        'proxyType': 'manual',
                        'httpProxy': proxy,
                        'sslProxy': proxy
                    }
                }
                else if(hosts){
                    sessionConfig.hosts = hosts;
                }
                self.driver = driver.session(sessionConfig).windowSize(1366, 768).config({
                    pageloadTimeout: 30000, // page onload timeout
                    scriptTimeout: 5000, // sync script timeout
                    asyncScriptTimeout: 10000 // async script timeout
                });
                self.testVars = testVars;
                let casePath = path.dirname(caseName);
                self.screenshotPath = rootPath + '/screenshots/' + casePath;
                self.diffbasePath = rootPath + '/diffbase/' + casePath;
                self.caseName = caseName.replace(/.*\//g, '').replace(/\s*[:\.\:\-\s]\s*/g, '_');
                mkdirs(self.screenshotPath);
                mkdirs(self.diffbasePath);
                self.stepId = 0;
                return self.driver;
            });

            module.exports();

            beforeEach(function(){
                let self = this;
                self.stepId ++;
                if(self.skipAll){
                    self.skip();
                }
            });

            afterEach(async function(){
                let self = this;
                let currentTest = self.currentTest;
                let title = currentTest.title;
                if(currentTest.state === 'failed' && /^(url|waitBody|switchWindow|switchFrame):/.test(title)){
                    self.skipAll = true;
                }
                if(!/^(closeWindow):/.test(title)){
                    let filepath = self.screenshotPath + '/' + self.caseName + '_' + self.stepId;
                    let driver = self.driver;
                    try{
                        // catch error when get alert msg
                        await driver.getScreenshot(filepath + '.png');
                        let url = await driver.url();
                        let html = await driver.source();
                        html = '<!--url: '+url+' -->\n' + html;
                        fs.writeFileSync(filepath + '.html', html);
                        let cookies = await driver.cookies();
                        fs.writeFileSync(filepath + '.cookie', JSON.stringify(cookies));
                    }
                    catch(e){}
                }
            });

            after(function(){
                return this.driver.close();
            });

        });
    });
}

function getRootPath(){
    let rootPath = path.resolve(__dirname);
    while(rootPath){
        if(fs.existsSync(rootPath + '/config.json')){
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

function mkdirs(dirname){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirs(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function callSpec(name){
    try{
        require(rootPath + '/' + name)();
    }
    catch(e){
        console.log(e)
        process.exit(1);
    }
}

function isPageError(code){
    return code == '' || / jscontent="errorCode" jstcache="\d+"|diagnoseConnectionAndRefresh|dnserror_unavailable_header|id="reportCertificateErrorRetry"|400 Bad Request|403 Forbidden|404 Not Found|500 Internal Server Error|502 Bad Gateway|503 Service Temporarily Unavailable|504 Gateway Time-out/i.test(code);
}

function catchError(error){

}
