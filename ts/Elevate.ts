#!/usr/bin/env node

// PS1 files cannot be executed from CMD, so this exists as a middleman

import { exec } from 'child_process';
import * as fs from 'fs';
import { resolve } from 'path';
import { hideBin } from './hideBin';

process.title = '<-> ElevateJS <->';

const dir = fs.mkdtempSync(`${process.env.TEMP || __dirname}/ElevateTS.`);
const file = resolve(`${dir}/Elevate.ps1`);
const fileContents = fs.readFileSync(
	resolve(__dirname, '..', 'ps/Elevate.min.ps1')
);

fs.writeFileSync(file, fileContents);

const psCommand = `powershell ${file} ${hideBin(process.argv)
	.join(' ')
	.split('"')
	.join('""')}`;

// console.log(`Executing: ${psCommand}`);

exec(psCommand, (err, stdout, stderr) => {
	if (err) {
		console.error(err);
	}
	console.log(stdout || '');
	if (stderr != '') {
		console.error(stderr);
	}

	if (!err) {
		fs.unlinkSync(file);
		fs.rmdirSync(dir);
	}
});
