var urlparse = require('url');

// URL´s split

var params = urlparse.parse(
    'http://user:pass@host.com:8080/p/a/t/h?query=string#hash', true
);
console.dir(params);

// rebuild URL with replaced parameters

delete params.host;
params.hostname = 'sniffer.org';

delete params.search;
params.query = {key1: 'value1', key2: 'value2'};

console.log(urlparse.format(params));