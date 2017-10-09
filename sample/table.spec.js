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

    it('url: http://0.0.0.0:8686/#!/components/data-display/table', async function(){
        await driver.url(_(`http://0.0.0.0:8686/#!/components/data-display/table`));
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('scrollTo: 0, 56', async function(){
        await driver.scrollTo(0, 56);
    });

    it('click: 全选 ( //div[text()="全选"], 63, 20, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="全选"]', 30000)
               .sleep(300).mouseMove(63, 20).click(0);
    });

    it('click: 全不选 ( //div[text()="全不选"], 48, 16, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="全不选"]', 30000)
               .sleep(300).mouseMove(48, 16).click(0);
    });

    it('scrollTo: 0, 82', async function(){
        await driver.scrollTo(0, 82);
    });

    it('click: 选择部分 ( //div[text()="选择部分"], 56, 17, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="选择部分"]', 30000)
               .sleep(300).mouseMove(56, 17).click(0);
    });

    it('click: 不选择部分 ( //div[text()="不选择部分"], 69, 17, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="不选择部分"]', 30000)
               .sleep(300).mouseMove(69, 17).click(0);
    });

    it('scrollTo: 0, 189', async function(){
        await driver.scrollTo(0, 189);
    });

    it('click: table.main-table > tbody.tr-content > tr:nth-child(1) > td:nth-child(1) > div.ng-scope > label[id="ck_"].ng-not-empty > i.ma-checkbox-appearance, 10, 11, 0', async function(){
        await driver.sleep(300).wait('table.main-table > tbody.tr-content > tr:nth-child(1) > td:nth-child(1) > div.ng-scope > label[id="ck_"].ng-not-empty > i.ma-checkbox-appearance', 30000)
               .sleep(300).mouseMove(10, 11).click(0);
    });

    it('click: table.main-table > tbody.tr-content > tr:nth-child(2) > td:nth-child(1) > div.ng-scope > label[id="ck_"].ng-not-empty > i.ma-checkbox-appearance, 6, 7, 0', async function(){
        await driver.sleep(300).wait('table.main-table > tbody.tr-content > tr:nth-child(2) > td:nth-child(1) > div.ng-scope > label[id="ck_"].ng-not-empty > i.ma-checkbox-appearance', 30000)
               .sleep(300).mouseMove(6, 7).click(0);
    });

    it('click: table.main-table > tbody.tr-content > tr:nth-child(3) > td:nth-child(1) > div.ng-scope > label[id="ck_"].ng-not-empty > i.ma-checkbox-appearance, 9, 7, 0', async function(){
        await driver.sleep(300).wait('table.main-table > tbody.tr-content > tr:nth-child(3) > td:nth-child(1) > div.ng-scope > label[id="ck_"].ng-not-empty > i.ma-checkbox-appearance', 30000)
               .sleep(300).mouseMove(9, 7).click(0);
    });

    it('click: label.has-sub > i.ma-checkbox-appearance, 11, 13, 0', async function(){
        await driver.sleep(300).wait('label.has-sub > i.ma-checkbox-appearance', 30000)
               .sleep(300).mouseMove(11, 13).click(0);
    });

    it('click: div.mb-20 > div.ma-table > div.data-table > div:nth-child(1) > div.main-table-container > table.ng-table > thead:nth-child(1) > tr.ng-table-sort-header > th:nth-child(1) > div > label[id="ck_all"][type="checkbox"].ng-isolate-scope > i.ma-checkbox-appearance, 11, 13, 0', async function(){
        await driver.sleep(300).wait('div.mb-20 > div.ma-table > div.data-table > div:nth-child(1) > div.main-table-container > table.ng-table > thead:nth-child(1) > tr.ng-table-sort-header > th:nth-child(1) > div > label[id="ck_all"][type="checkbox"].ng-isolate-scope > i.ma-checkbox-appearance', 30000)
               .sleep(300).mouseMove(11, 13).click(0);
    });

    it('scrollTo: 0, 215', async function(){
        await driver.scrollTo(0, 215);
    });

    it('click: div.mb-20 > div.ma-table > div.data-table > div:nth-child(1) > div.main-table-container > table.ng-table > thead:nth-child(1) > tr.ng-table-sort-header > th:nth-child(1) > div > label[id="ck_all"][type="checkbox"].ng-not-empty > i.ma-checkbox-appearance, 6, 7, 0', async function(){
        await driver.sleep(300).wait('div.mb-20 > div.ma-table > div.data-table > div:nth-child(1) > div.main-table-container > table.ng-table > thead:nth-child(1) > tr.ng-table-sort-header > th:nth-child(1) > div > label[id="ck_all"][type="checkbox"].ng-not-empty > i.ma-checkbox-appearance', 30000)
               .sleep(300).mouseMove(6, 7).click(0);
    });

    it('click: table.main-table > tbody.tr-content > tr:nth-child(2) > td:nth-child(1) > div.ng-scope > label[id="ck_"].ng-isolate-scope > i.ma-checkbox-appearance, 8, 8, 0', async function(){
        await driver.sleep(300).wait('table.main-table > tbody.tr-content > tr:nth-child(2) > td:nth-child(1) > div.ng-scope > label[id="ck_"].ng-isolate-scope > i.ma-checkbox-appearance', 30000)
               .sleep(300).mouseMove(8, 8).click(0);
    });

    it('scrollTo: 0, 1010', async function(){
        await driver.scrollTo(0, 1010);
    });

    it('scrollTo: 0, 1329', async function(){
        await driver.scrollTo(0, 1329);
    });

    it('scrollElementTo: div:nth-child(6) > div.ma-table > div.data-table > div:nth-child(1) > div.main-table-container, 0, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(6) > div.ma-table > div.data-table > div:nth-child(1) > div.main-table-container', 30000)
               .sleep(300).scrollElementTo(0, 0);
    });

    it('scrollTo: 0, 1115', async function(){
        await driver.scrollTo(0, 1115);
    });

    it('scrollTo: 0, 983', async function(){
        await driver.scrollTo(0, 983);
    });

    it('scrollTo: 0, 774', async function(){
        await driver.scrollTo(0, 774);
    });

    it('click: div.float-left-table > div > table.ng-table > thead:nth-child(1) > tr.ng-table-sort-header > th:nth-child(1) > div > label[id="ck_all"][type="checkbox"].ng-not-empty > i.ma-checkbox-appearance, 4, 12, 0', async function(){
        await driver.sleep(300).wait('div.float-left-table > div > table.ng-table > thead:nth-child(1) > tr.ng-table-sort-header > th:nth-child(1) > div > label[id="ck_all"][type="checkbox"].ng-not-empty > i.ma-checkbox-appearance', 30000)
               .sleep(300).mouseMove(4, 12).click(0);
    });

    it('click: 2 ( div.mb-20 > div.ma-table > div.data-table > div:nth-child(1) > div.main-table-container > div:nth-child(2) > div > div.ng-table-pager > ul.ng-table-pagination > li:nth-child(4) > a.ng-scope, 10, 16, 0 )', async function(){
        await driver.sleep(300).wait('div.mb-20 > div.ma-table > div.data-table > div:nth-child(1) > div.main-table-container > div:nth-child(2) > div > div.ng-table-pager > ul.ng-table-pagination > li:nth-child(4) > a.ng-scope', 30000)
               .sleep(300).mouseMove(10, 16).click(0);
    });

    it('scrollTo: 0, 699', async function(){
        await driver.scrollTo(0, 699);
    });

    it('click: 1 ( div.mb-20 > div.ma-table > div.data-table > div:nth-child(1) > div.main-table-container > div:nth-child(2) > div > div.ng-table-pager > ul.ng-table-pagination > li:nth-child(3) > a.ng-scope, 9, 16, 0 )', async function(){
        await driver.sleep(300).wait('div.mb-20 > div.ma-table > div.data-table > div:nth-child(1) > div.main-table-container > div:nth-child(2) > div > div.ng-table-pager > ul.ng-table-pagination > li:nth-child(3) > a.ng-scope', 30000)
               .sleep(300).mouseMove(9, 16).click(0);
    });

    it('click: div.mb-20 > div.ma-table > div.data-table > div:nth-child(1) > form.form-inline > div.page-select-form-group > div[id="pageSizeBinding"].ma-select > div[type="text"].ma-input-arrow-down > input[type="text"]:nth-child(1), 59, 17, 0', async function(){
        await driver.sleep(300).wait('div.mb-20 > div.ma-table > div.data-table > div:nth-child(1) > form.form-inline > div.page-select-form-group > div[id="pageSizeBinding"].ma-select > div[type="text"].ma-input-arrow-down > input[type="text"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(59, 17).click(0);
    });

    it('click: 30 条 / 页 ( div.show > div.ma-dropdown-container-content > div:nth-child(3) > span, 26, 8, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content > div:nth-child(3) > span', 30000)
               .sleep(300).mouseMove(26, 8).click(0);
    });

    it('click: input.ng-touched, 40, 15, 0', async function(){
        await driver.sleep(300).wait('input.ng-touched', 30000)
               .sleep(300).mouseMove(40, 15).click(0);
    });

    it('click: 20 条 / 页 ( div.show > div.ma-dropdown-container-content > div:nth-child(2) > span, 26, 4, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content > div:nth-child(2) > span', 30000)
               .sleep(300).mouseMove(26, 4).click(0);
    });

    it('click: input.ng-touched, 43, 10, 0', async function(){
        await driver.sleep(300).wait('input.ng-touched', 30000)
               .sleep(300).mouseMove(43, 10).click(0);
    });

    it('click: 10 条 / 页 ( div.show > div.ma-dropdown-container-content > div:nth-child(1) > span, 24, 12, 0 )', async function(){
        await driver.sleep(300).wait('div.show > div.ma-dropdown-container-content > div:nth-child(1) > span', 30000)
               .sleep(300).mouseMove(24, 12).click(0);
    });

    it('click: input.ng-touched, 48, 19, 0', async function(){
        await driver.sleep(300).wait('input.ng-touched', 30000)
               .sleep(300).mouseMove(48, 19).click(0);
    });

    it('click: 左右漂浮table ( //h4[text()="左右漂浮table"], 506, 8, 0 )', async function(){
        await driver.sleep(300).wait('//h4[text()="左右漂浮table"]', 30000)
               .sleep(300).mouseMove(506, 8).click(0);
    });

    it('scrollTo: 0, 0', async function(){
        await driver.scrollTo(0, 0);
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
