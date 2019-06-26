const input0 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}

const input1 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}

const input2 = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}

function validator(http) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^\.*([a-zA-Z0-9]+)(\.*[a-zA-Z0-9]+)*$/g;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messsagePattern = /^([^<>\\&'"])+$/g;

    const expectedHttpProps = ['method', 'uri', 'version', 'message'];
    if (!http.hasOwnProperty(expectedHttpProps[0])) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!http.hasOwnProperty(expectedHttpProps[1])) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!http.hasOwnProperty(expectedHttpProps[2])) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (!http.hasOwnProperty(expectedHttpProps[3])) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    if (!validMethods.includes(http.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!uriPattern.test(http.uri) &&
        (http.uri !== '*' ||
        http.uri !== '')) {

        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!validVersions.includes(http.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (!messsagePattern.test(http.message) &&
        http.message !== '') {

        throw new Error(`Invalid request header: Invalid Message`);
    }

    return http;
}

console.log(validator(input0));
console.log(validator(input1));
console.log(validator(input2));
