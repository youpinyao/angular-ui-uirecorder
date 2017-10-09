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

    it('url: http://0.0.0.0:8686/#!/components/data-entry/input', async function(){
        await driver.url(_(`http://0.0.0.0:8686/#!/components/data-entry/input`));
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('scrollTo: 0, 292', async function(){
        await driver.scrollTo(0, 292);
    });

    it('scrollTo: 0, 59', async function(){
        await driver.scrollTo(0, 59);
    });

    it('click: i.switch-appearance, 9, 14, 0', async function(){
        await driver.sleep(300).wait('i.switch-appearance', 30000)
               .sleep(300).mouseMove(9, 14).click(0);
    });

    it('click: i.switch-appearance, 30, 17, 0', async function(){
        await driver.sleep(300).wait('i.switch-appearance', 30000)
               .sleep(300).mouseMove(30, 17).click(0);
    });

    it('mouseDown: div:nth-child(2) > div:nth-child(2) > div[name="test"][type="text"].ng-isolate-scope > input[type="text"]:nth-child(1), 115, 25, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div:nth-child(2) > div[name="test"][type="text"].ng-isolate-scope > input[type="text"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(115, 25).mouseDown(0);
    });

    it('scrollTo: 0, 97', async function(){
        await driver.scrollTo(0, 97);
    });

    it('mouseUp: div:nth-child(2) > div:nth-child(2) > div[name="test"][type="text"].ng-isolate-scope > input[type="text"]:nth-child(1), 115, 25, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div:nth-child(2) > div[name="test"][type="text"].ng-isolate-scope > input[type="text"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(115, 25).mouseMove(115, 25).mouseUp(0);
    });

    it('sendKeys: 43{BACK_SPACE}{BACK_SPACE}', async function(){
        await driver.sendKeys('43{BACK_SPACE}{BACK_SPACE}');
    });

    it('click: i.clear, 21, 15, 0', async function(){
        await driver.sleep(300).wait('i.clear', 30000)
               .sleep(300).mouseMove(21, 15).click(0);
    });

    it('click: div:nth-child(12) > div:nth-child(2) > div[name="test"][type="text"].ng-isolate-scope > input[type="text"]:nth-child(1), 179, 18, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(12) > div:nth-child(2) > div[name="test"][type="text"].ng-isolate-scope > input[type="text"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(179, 18).click(0);
    });

    it('sendKeys: 123123213', async function(){
        await driver.sendKeys('123123213');
    });

    it('click: div[name="numberTestValue"] > input[type="text"]:nth-child(1), 76, 10, 0', async function(){
        await driver.sleep(300).wait('div[name="numberTestValue"] > input[type="text"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(76, 10).click(0);
    });

    it('sendKeys: {BACK_SPACE}{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}323232323.3123{BACK_SPACE}23', async function(){
        await driver.sendKeys('{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}323232323.3123{BACK_SPACE}23');
    });

    it('click: i.clear, 14, 12, 0', async function(){
        await driver.sleep(300).wait('i.clear', 30000)
               .sleep(300).mouseMove(14, 12).click(0);
    });

    it('click: textarea, 160, 24, 0', async function(){
        await driver.sleep(300).wait('textarea', 30000)
               .sleep(300).mouseMove(160, 24).click(0);
    });

    it('click: div.ma-input-search-normal, 229, 16, 0', async function(){
        await driver.sleep(300).wait('div.ma-input-search-normal', 30000)
               .sleep(300).mouseMove(229, 16).click(0);
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
