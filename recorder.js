const type = process.argv[2];

var fs = require('fs');
var path = require('path');
var program = require('commander');
var UIRecorder = require('uirecorder');

var pkg = require('uirecorder/package.json');

function map(val) {
    var objMap = {};
    val.split(',').forEach(function(item){
        var arrItem = item.split(/\s*=\s*/);
        objMap[arrItem[0]] = arrItem[1]?arrItem[1]:true;
    });
    return objMap;
}

// stdout log
var rawStdoutWrite = process.stdout.write;
fs.writeFileSync('uirecorder.log', '')
process.stdout.write = function(string, encoding, fileDescriptor) {
    var nocolor = string.replace(/(\[\d+[mdc]|\[K)/gi, '');
    fs.appendFileSync('uirecorder.log', nocolor)
    rawStdoutWrite.apply(process.stdout, arguments);
}

console.log(("    __  ______   ____                           __         \n\
   / / / /  _/  / __ \\___  _________  _________/ /__  _____\n\
  / / / // /   / /_/ / _ \\/ ___/ __ \\/ ___/ __  / _ \\/ ___/\n\
 / /_/ // /   / _, _/  __/ /__/ /_/ / /  / /_/ /  __/ /    \n\
 \\____/___/  /_/ |_|\\___/\\___/\\____/_/   \\__,_/\\___/_/    v"+pkg.version).green);
console.log('');
console.log('Official Site: http://uirecorder.com'.cyan);
console.log('------------------------------------------------------------------\n'.green);

program
    .version(pkg.version)
    .option('-l, --lang <en|zh-cn|zh-tw>', 'change language')
    .option('--no-color', 'disable colors')
    .option('-m --mobile', 'mobile mode')
    .option('-d --debug', 'debug mode')
    .option('-r --raw', 'save raw cmds')
    .option('--device [value]', 'set mobile device name');

var cmd = null;

program.command('init')
    .description('Init UIRecorder config file')
    .action(function(){
        cmd = 'init';
        UIRecorder.init({
            locale: program.lang,
            mobile: program.mobile,
            debug: program.debug
        });
    });

program.command('start')
    .description('Start recorder')
    .action(function(){
        cmd = 'start'
        UIRecorder.start({
            locale: program.lang,
            cmdFilename: program.args.length === 2 ? program.args[0] : '',
            mobile: program.mobile,
            debug: program.debug,
            raw: program.raw,
            mobileDevice: program.device
        });
    });

program.parse(process.argv);
UIRecorder.checkUpdate(program.lang);

if(cmd === null){
    // default command
    var rootPath = getRootPath();

    var configPath = 'config.json';
    var configFile = path.resolve(rootPath + '/' + configPath);
    var configJson = {};

    if(fs.existsSync(configFile)){
        UIRecorder.start({
            locale: program.lang,
            cmdFilename: program.args.length === 1 ? program.args[0] : '',
            mobile: program.mobile,
            debug: program.debug,
            raw: program.raw,
            mobileDevice: program.device
        });
    }
    else{
        console.log(configPath.bold+' '+__('file_missed').red);
        console.log('');
        UIRecorder.init({
            locale: program.lang,
            mobile: program.mobile,
            debug: program.debug
        });
    }

}

// get test root
function getRootPath(){
    var rootPath = path.resolve('.');
    while(rootPath){
        if(fs.existsSync(rootPath + '/config.json')){
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

