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

    it('url: http://0.0.0.0:8686/#!/components/feedback/modal', async function(){
        await driver.url(_(`http://0.0.0.0:8686/#!/components/feedback/modal`));
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('click: open ( //div[text()="open"], 64, 12, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="open"]', 30000)
               .sleep(300).mouseMove(64, 12).click(0);
    });

    it('click: 保存修改 ( //div[text()="保存修改"], 26, 14, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="保存修改"]', 30000)
               .sleep(300).mouseMove(26, 14).click(0);
    });

    it('click: open ( //div[text()="open"], 64, 19, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="open"]', 30000)
               .sleep(300).mouseMove(64, 19).click(0);
    });

    it('click: 放弃 ( //div[text()="放弃"], 24, 18, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="放弃"]', 30000)
               .sleep(300).mouseMove(24, 18).click(0);
    });

    it('click: confirm ( //div[text()="confirm"], 65, 17, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="confirm"]', 30000)
               .sleep(300).mouseMove(65, 17).click(0);
    });

    it('click: 确定 ( //div[text()="确定"], 44, 6, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="确定"]', 30000)
               .sleep(300).mouseMove(44, 6).click(0);
    });

    it('click: confirm ( //div[text()="confirm"], 42, 24, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="confirm"]', 30000)
               .sleep(300).mouseMove(42, 24).click(0);
    });

    it('click: 取消 ( //div[text()="取消"], 51, 15, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="取消"]', 30000)
               .sleep(300).mouseMove(51, 15).click(0);
    });

    it('click: delete ( //div[text()="delete"], 33, 13, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="delete"]', 30000)
               .sleep(300).mouseMove(33, 13).click(0);
    });

    it('click: 删除 ( //div[text()="删除"], 56, 21, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="删除"]', 30000)
               .sleep(300).mouseMove(56, 21).click(0);
    });

    it('click: delete ( //div[text()="delete"], 59, 12, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="delete"]', 30000)
               .sleep(300).mouseMove(59, 12).click(0);
    });

    it('click: 取消 ( //div[text()="取消"], 72, 10, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="取消"]', 30000)
               .sleep(300).mouseMove(72, 10).click(0);
    });

    it('click: alert ( //div[text()="alert"], 74, 8, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="alert"]', 30000)
               .sleep(300).mouseMove(74, 8).click(0);
    });

    it('click: 关闭 ( //div[text()="关闭"], 55, 18, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="关闭"]', 30000)
               .sleep(300).mouseMove(55, 18).click(0);
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
