import process = require('process');

function output(str: string):void {
	process.stdout.write(`${str}\n`);
}

output('A Happy New Year 2017!');
