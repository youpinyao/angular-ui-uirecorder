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

    it('url: http://0.0.0.0:8686/#!/components/feedback/alert', async function(){
        await driver.url(_(`http://0.0.0.0:8686/#!/components/feedback/alert`));
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('scrollTo: 0, 38', async function(){
        await driver.scrollTo(0, 38);
    });

    it('click: div.ma-alert-danger > i.icon-close, 14, 8, 0', async function(){
        await driver.sleep(300).wait('div.ma-alert-danger > i.icon-close', 30000)
               .sleep(300).mouseMove(14, 8).click(0);
    });

    it('× click: i.icon-close, 11, 13, 0', async function(){
        await driver.sleep(300).wait('i.icon-close', 30000)
               .sleep(300).mouseMove(11, 13).click(0);
    });

    it('mouseDown: 新增 ( //div[text()="新增"], 76, 23, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="新增"]', 30000)
               .sleep(300).mouseMove(76, 23).mouseDown(0);
    });

    it('scrollTo: 0, 29', async function(){
        await driver.scrollTo(0, 29);
    });

    it('mouseUp: 新增 ( //div[text()="新增"], 76, 23, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="新增"]', 30000)
               .sleep(300).mouseMove(76, 23).mouseMove(76, 23).mouseUp(0);
    });

    it('click: 新增 ( //div[text()="新增"], 55, 19, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="新增"]', 30000)
               .sleep(300).mouseMove(55, 19).click(0);
    });

    it('scrollTo: 0, 89', async function(){
        await driver.scrollTo(0, 89);
    });

    it('click: 新增 ( //div[text()="新增"], 67, 13, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="新增"]', 30000)
               .sleep(300).mouseMove(67, 13).click(0);
    });

    it('scrollTo: 0, 115', async function(){
        await driver.scrollTo(0, 115);
    });

    it('click: 新增 ( //div[text()="新增"], 67, 23, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="新增"]', 30000)
               .sleep(300).mouseMove(67, 23).click(0);
    });

    it('scrollTo: 0, 200', async function(){
        await driver.scrollTo(0, 200);
    });

    it('click: div.ma-alert-warning > i.icon-close, 8, 6, 0', async function(){
        await driver.sleep(300).wait('div.ma-alert-warning > i.icon-close', 30000)
               .sleep(300).mouseMove(8, 6).click(0);
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
