import { exec } from 'child_process';

const run = exec(`node . cmd /k echo Test`, (err, sout, serr) => {
	console.log(err, sout, serr);
});
