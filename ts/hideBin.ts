// Yoinked from yargs

const getProcessArgvBinIndex = () => {
	if (isBundledElectronApp()) return 0;
	return 1;
};
const isBundledElectronApp = () => {
	return isElectronApp() && !process['defaultApp'];
};
const isElectronApp = () => {
	return !!process.versions.electron;
};
export const hideBin = (argv: any[]) => {
	return argv.slice(getProcessArgvBinIndex() + 1);
};
export const getProcessArgvBin = () => {
	return process.argv[getProcessArgvBinIndex()];
};
