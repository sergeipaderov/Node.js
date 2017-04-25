var argv = require('minimist')(process.argv.slice(2));

console.dir(argv);

console.log(
	"Hello, dear "
	+ ((process.env['NODE_ENV'] == 'dev') ? "developer " : "user ")
	+ process.platform
	+ (argv['debug'] ? ". Debug mode on." : "")
	);