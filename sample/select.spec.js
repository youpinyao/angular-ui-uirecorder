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

    it('url: http://0.0.0.0:8686/#!/components/data-entry/select', async function(){
        await driver.url(_(`http://0.0.0.0:8686/#!/components/data-entry/select`));
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('scrollTo: 0, 90', async function(){
        await driver.scrollTo(0, 90);
    });

    it('click: i.switch-appearance, 23, 8, 0', async function(){
        await driver.sleep(300).wait('i.switch-appearance', 30000)
               .sleep(300).mouseMove(23, 8).click(0);
    });

    it('click: i.switch-appearance, 23, 8, 0', async function(){
        await driver.sleep(300).wait('i.switch-appearance', 30000)
               .sleep(300).mouseMove(23, 8).click(0);
    });

    it('click: div:nth-child(2) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > input[type="text"]:nth-child(1), 158, 10, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > input[type="text"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(158, 10).click(0);
    });

    it('scrollTo: 0, 173', async function(){
        await driver.scrollTo(0, 173);
    });

    it('scrollElementTo: div.show > div.ma-dropdown-container-content, 0, 32', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content', 30000)
               .sleep(300).scrollElementTo(0, 32);
    });

    it('click: 6662 ( div.show > div.ma-dropdown-container-content > div:nth-child(3), 76, 20, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content > div:nth-child(3)', 30000)
               .sleep(300).mouseMove(76, 20).click(0);
    });

    it('click: input.ng-touched, 167, 20, 0', async function(){
        await driver.sleep(300).wait('input.ng-touched', 30000)
               .sleep(300).mouseMove(167, 20).click(0);
    });

    it('click: 清空 ( div.show > div.ma-dropdown-buttons > div.primary, 26, 3, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-buttons > div.primary', 30000)
               .sleep(300).mouseMove(26, 3).click(0);
    });

    it('click: div:nth-child(3) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > input[type="text"]:nth-child(1), 90, 22, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > input[type="text"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(90, 22).click(0);
    });

    it('click: div.show > div.ma-dropdown-search-bar > div.ng-isolate-scope > input[type="text"]:nth-child(1), 100, 25, 0', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-search-bar > div.ng-isolate-scope > input[type="text"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(100, 25).click(0);
    });

    it('sendKeys: 1', async function(){
        await driver.sendKeys('1');
    });

    it('click: 13 ( div.show > div.ma-dropdown-container-content > div:nth-child(4), 68, 27, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content > div:nth-child(4)', 30000)
               .sleep(300).mouseMove(68, 27).click(0);
    });

    it('click: div:nth-child(3) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > input[type="text"].ng-touched, 134, 19, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > input[type="text"].ng-touched', 30000)
               .sleep(300).mouseMove(134, 19).click(0);
    });

    it('click: div.ma-input-arrow-up > input[type="text"].ng-touched, 67, 14, 0', async function(){
        await driver.sleep(300).wait('div.ma-input-arrow-up > input[type="text"].ng-touched', 30000)
               .sleep(300).mouseMove(67, 14).click(0);
    });

    it('click: div:nth-child(4) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ng-scope, 123, 14, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(4) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ng-scope', 30000)
               .sleep(300).mouseMove(123, 14).click(0);
    });

    it('click: 6662 ( div.show > div.ma-dropdown-container-content > div:nth-child(3), 67, 21, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content > div:nth-child(3)', 30000)
               .sleep(300).mouseMove(67, 21).click(0);
    });

    it('click: 6661 ( div.show > div.ma-dropdown-container-content > div:nth-child(2), 71, 24, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content > div:nth-child(2)', 30000)
               .sleep(300).mouseMove(71, 24).click(0);
    });

    it('click: 6663 ( div.show > div.ma-dropdown-container-content > div:nth-child(4), 51, 27, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content > div:nth-child(4)', 30000)
               .sleep(300).mouseMove(51, 27).click(0);
    });

    it('click: API ( //h3[text()="API"], 291, 31, 0 )', async function(){
        await driver.sleep(300).wait('//h3[text()="API"]', 30000)
               .sleep(300).mouseMove(291, 31).click(0);
    });

    it('click: 13 6662 6661 6663 ( div:nth-child(4) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down, 210, 22, 0 )', async function(){
        await driver.sleep(300).wait('div:nth-child(4) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down', 30000)
               .sleep(300).mouseMove(210, 22).click(0);
    });

    it('click: 清空 ( div.show > div.ma-dropdown-buttons > div.primary, 18, 8, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-buttons > div.primary', 30000)
               .sleep(300).mouseMove(18, 8).click(0);
    });

    it('click: div:nth-child(4) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ng-scope, 198, 8, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(4) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ng-scope', 30000)
               .sleep(300).mouseMove(198, 8).click(0);
    });

    it('click: 6661 ( div.show > div.ma-dropdown-container-content > div:nth-child(2), 84, 23, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content > div:nth-child(2)', 30000)
               .sleep(300).mouseMove(84, 23).click(0);
    });

    it('click: 6662 ( div.show > div.ma-dropdown-container-content > div:nth-child(3), 77, 12, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content > div:nth-child(3)', 30000)
               .sleep(300).mouseMove(77, 12).click(0);
    });

    it('click: 6663 ( div.show > div.ma-dropdown-container-content > div:nth-child(4), 68, 4, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content > div:nth-child(4)', 30000)
               .sleep(300).mouseMove(68, 4).click(0);
    });

    it('click: 6661 6662 6663 6660 ... ( div.p > div:nth-child(4) > div:nth-child(2), 350, 23, 0 )', async function(){
        await driver.sleep(300).wait('div.p > div:nth-child(4) > div:nth-child(2)', 30000)
               .sleep(300).mouseMove(350, 23).click(0);
    });

    it('click: div:nth-child(4) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ma-select-multiple-result > div:nth-child(3) > i.icon-closecircle, 10, 6, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(4) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ma-select-multiple-result > div:nth-child(3) > i.icon-closecircle', 30000)
               .sleep(300).mouseMove(10, 6).click(0);
    });

    it('click: div:nth-child(4) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ma-select-multiple-result > div:nth-child(2) > i.icon-closecircle, 6, 5, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(4) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ma-select-multiple-result > div:nth-child(2) > i.icon-closecircle', 30000)
               .sleep(300).mouseMove(6, 5).click(0);
    });

    it('click: div:nth-child(4) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ma-select-multiple-result > div.ng-scope > i.icon-closecircle, 8, 9, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(4) > div:nth-child(2) > div.ma-select > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ma-select-multiple-result > div.ng-scope > i.icon-closecircle', 30000)
               .sleep(300).mouseMove(8, 9).click(0);
    });

    it('click: div:nth-child(5) > div:nth-child(2) > div.is-multiple > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ng-scope, 95, 26, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(5) > div:nth-child(2) > div.is-multiple > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ng-scope', 30000)
               .sleep(300).mouseMove(95, 26).click(0);
    });

    it('scrollTo: 0, 405', async function(){
        await driver.scrollTo(0, 405);
    });

    it('scrollTo: 0, 354', async function(){
        await driver.scrollTo(0, 354);
    });

    it('click: div.show > div.ma-dropdown-search-bar > div.ng-isolate-scope > input[type="text"]:nth-child(1), 96, 13, 0', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-search-bar > div.ng-isolate-scope > input[type="text"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(96, 13).click(0);
    });

    it('sendKeys: 1', async function(){
        await driver.sendKeys('1');
    });

    it('click: 13 ( div.show > div.ma-dropdown-container-content > div:nth-child(4), 85, 13, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content > div:nth-child(4)', 30000)
               .sleep(300).mouseMove(85, 13).click(0);
    });

    it('click: 13 10 11 12 13 14 15... ( div:nth-child(5) > div:nth-child(2), 302, 29, 0 )', async function(){
        await driver.sleep(300).wait('div:nth-child(5) > div:nth-child(2)', 30000)
               .sleep(300).mouseMove(302, 29).click(0);
    });

    it('click: div:nth-child(5) > div:nth-child(2) > div.is-multiple > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ma-select-multiple-result > div.ng-scope > i.icon-closecircle, 6, 4, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(5) > div:nth-child(2) > div.is-multiple > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ma-select-multiple-result > div.ng-scope > i.icon-closecircle', 30000)
               .sleep(300).mouseMove(6, 4).click(0);
    });

    it('click: div:nth-child(5) > div:nth-child(2) > div.is-multiple > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ng-scope, 66, 15, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(5) > div:nth-child(2) > div.is-multiple > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ng-scope', 30000)
               .sleep(300).mouseMove(66, 15).click(0);
    });

    it('click: div.show > div.ma-dropdown-search-bar > div.ng-isolate-scope > input[type="text"].ng-touched, 68, 18, 0', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-search-bar > div.ng-isolate-scope > input[type="text"].ng-touched', 30000)
               .sleep(300).mouseMove(68, 18).click(0);
    });

    it('sendKeys: 3', async function(){
        await driver.sendKeys('3');
    });

    it('click: 33 ( div.show > div.ma-dropdown-container-content > div:nth-child(4), 69, 2, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content > div:nth-child(4)', 30000)
               .sleep(300).mouseMove(69, 2).click(0);
    });

    it('click: 33 30 31 32 33 34 35... ( div:nth-child(5) > div:nth-child(2), 294, 21, 0 )', async function(){
        await driver.sleep(300).wait('div:nth-child(5) > div:nth-child(2)', 30000)
               .sleep(300).mouseMove(294, 21).click(0);
    });

    it('click: 33 ( div:nth-child(5) > div:nth-child(2) > div.is-multiple > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ma-select-multiple-result, 100, 16, 0 )', async function(){
        await driver.sleep(300).wait('div:nth-child(5) > div:nth-child(2) > div.is-multiple > div[type="text"].ma-input-arrow-down > div:nth-child(4) > div.ma-select-multiple-result', 30000)
               .sleep(300).mouseMove(100, 16).click(0);
    });

    it('click: 清空 ( div.show > div.ma-dropdown-buttons > div.primary, 37, 12, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-buttons > div.primary', 30000)
               .sleep(300).mouseMove(37, 12).click(0);
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
