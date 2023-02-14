## 표현식 expression

값을 만들어내는 단위

## 문장 Statement

코드를 실행하는 단위 ('문'이라는 들어가면 다 문장의 일종이라고 생각하면 됨)

## 키워드

자바스크립트가 만들어질 때 정한 특별한 의미의 '키워드'

- await; break; case; catch; class; const; continue; debugger; default ; delete; do; else; export ; true; 등

## 식별자

프로그래밍 언어에서 이름을 붙일 때 사용하는 단어. 주로 변수명이나 함수명 등으로 사용됨

1. 키워드 사용 금지
2. 숫자로 시작 금지
3. 특수문자는 \_와 $만 허용 (단일 사용 가능)
4. 공백 문자 금지

사용 가능한 식별자 : alpha, alpha10, _alpha, $alpha, Alpha, ALPHA, _, $ 등
사용 불가능한 식별자 : break, 273alpha, has space 등

### 식별자 이름 관례 (camelCase)

createMap
createRequest
createImageBitmap
customElement
removeAll

### 대문자로 시작하면 클래스

Array
Number
Component
Pet

모두 다 대문자면 클래스 아님.
문법적으로 틀리진 않았지만 관례적으로 클래스가 아닌 '상수'로 인식하게 됨.

소문자라면 뒤에 ()가 붙으면 함수, 아니면 변수
다른 식별자와 함께 사용되면 속성, 다른 식별자와 함께 사용됐는데 ()도 붙으면 메소드

#### 문제 풀이

alert() => 함수
prompt() => 함수
input => 변수
Array.length => 속성
Math.PI => 속성
Math.abs() => 메소드

#### 연습

https://github.com/facebook/react/blob/main/scripts/release/utils.js

- 키워드 = const색깔, 하늘색(조건문 등에 사용됨), true/false 등
- 나머지 = 식별자

<!-- <script>
'use strict';

const {exec} = require('child-process-promise');
const {createPatch} = require('diff');
const {hashElement} = require('folder-hash');
const {existsSync, readFileSync, writeFileSync} = require('fs');
const {readJson, writeJson} = require('fs-extra');
const http = require('request-promise-json');
const logUpdate = require('log-update');
const {join} = require('path');
const createLogger = require('progress-estimator');
const prompt = require('prompt-promise');
const theme = require('./theme');
const {stablePackages, experimentalPackages} = require('../../ReactVersions');

// https://www.npmjs.com/package/progress-estimator#configuration
const logger = createLogger({
storagePath: join(\_\_dirname, '.progress-estimator'),
});

const addDefaultParamValue = (optionalShortName, longName, defaultValue) => {
let found = false;
for (let i = 0; i < process.argv.length; i++) {
const current = process.argv[i];
if (current === optionalShortName || current.startsWith(`${longName}=`)) {
found = true;
break;
}
}

if (!found) {
process.argv.push(`${longName}=${defaultValue}`);
}
};

const confirm = async message => {
const confirmation = await prompt(theme`\n{caution ${message}} (y/N) `);
prompt.done();
if (confirmation !== 'y' && confirmation !== 'Y') {
console.log(theme`\n{caution Release cancelled.}`);
process.exit(0);
}
};

const execRead = async (command, options) => {
const {stdout} = await exec(command, options);

return stdout.trim();
};

const extractCommitFromVersionNumber = version => {
// Support stable version format e.g. "0.0.0-0e526bcec-20210202"
// and experimental version format e.g. "0.0.0-experimental-0e526bcec-20210202"
const match = version.match(/0\.0\.0\-([a-z]+\-){0,1}([^-]+).+/);
if (match === null) {
throw Error(`Could not extra commit from version "${version}"`);
}
return match[2];
};

const getArtifactsList = async buildID => {
const jobArtifactsURL = `https://circleci.com/api/v1.1/project/github/facebook/react/${buildID}/artifacts`;
const jobArtifacts = await http.get(jobArtifactsURL, true);
return jobArtifacts;
};

const getBuildInfo = async () => {
const cwd = join(\_\_dirname, '..', '..');

const isExperimental = process.env.RELEASE_CHANNEL === 'experimental';

const branch = await execRead('git branch | grep \\\* | cut -d " " -f2', {
cwd,
});
const commit = await execRead('git show -s --no-show-signature --format=%h', {
cwd,
});
const checksum = await getChecksumForCurrentRevision(cwd);
const dateString = await getDateStringForCommit(commit);
const version = isExperimental
? `0.0.0-experimental-${commit}-${dateString}`
: `0.0.0-${commit}-${dateString}`;

// Only available for Circle CI builds.
// https://circleci.com/docs/2.0/env-vars/
const buildNumber = process.env.CIRCLE_BUILD_NUM;

// React version is stored explicitly, separately for DevTools support.
// See updateVersionsForNext() below for more info.
const packageJSON = await readJson(
join(cwd, 'packages', 'react', 'package.json')
);
const reactVersion = isExperimental
? `${packageJSON.version}-experimental-${commit}-${dateString}`
: `${packageJSON.version}-${commit}-${dateString}`;

return {branch, buildNumber, checksum, commit, reactVersion, version};
};

const getChecksumForCurrentRevision = async cwd => {
const packagesDir = join(cwd, 'packages');
const hashedPackages = await hashElement(packagesDir, {
encoding: 'hex',
files: {exclude: ['.DS_Store']},
});
return hashedPackages.hash.slice(0, 7);
};

const getDateStringForCommit = async commit => {
let dateString = await execRead(
`git show -s --no-show-signature --format=%cd --date=format:%Y%m%d ${commit}`
);

// On CI environment, this string is wrapped with quotes '...'s
if (dateString.startsWith("'")) {
dateString = dateString.substr(1, 8);
}

return dateString;
};

const getCommitFromCurrentBuild = async () => {
const cwd = join(\_\_dirname, '..', '..');

// If this build includes a build-info.json file, extract the commit from it.
// Otherwise fall back to parsing from the package version number.
// This is important to make the build reproducible (e.g. by Mozilla reviewers).
const buildInfoJSON = join(
cwd,
'build',
'oss-experimental',
'react',
'build-info.json'
);
if (existsSync(buildInfoJSON)) {
const buildInfo = await readJson(buildInfoJSON);
return buildInfo.commit;
} else {
const packageJSON = join(
cwd,
'build',
'oss-experimental',
'react',
'package.json'
);
const {version} = await readJson(packageJSON);
return extractCommitFromVersionNumber(version);
}
};

const getPublicPackages = isExperimental => {
const packageNames = Object.keys(stablePackages);
if (isExperimental) {
packageNames.push(...experimentalPackages);
}
return packageNames;
};

const handleError = error => {
logUpdate.clear();

const message = error.message.trim().replace(/\n +/g, '\n');
const stack = error.stack.replace(error.message, '');

console.log(theme`{error ${message}}\n\n{path ${stack}}`);
process.exit(1);
};

const logPromise = async (promise, text, estimate) =>
logger(promise, text, {estimate});

const printDiff = (path, beforeContents, afterContents) => {
const patch = createPatch(path, beforeContents, afterContents);
const coloredLines = patch
.split('\n')
.slice(2) // Trim index file
.map((line, index) => {
if (index <= 1) {
return theme.diffHeader(line);
}
switch (line[0]) {
case '+':
return theme.diffAdded(line);
case '-':
return theme.diffRemoved(line);
case ' ':
return line;
case '@':
return null;
case '\\':
return null;
}
})
.filter(line => line);
console.log(coloredLines.join('\n'));
return patch;
};

// Convert an array param (expected format "--foo bar baz")
// to also accept comma input (e.g. "--foo bar,baz")
const splitCommaParams = array => {
for (let i = array.length - 1; i >= 0; i--) {
const param = array[i];
if (param.includes(',')) {
array.splice(i, 1, ...param.split(','));
}
}
};

// This method is used by both local Node release scripts and Circle CI bash scripts.
// It updates version numbers in package JSONs (both the version field and dependencies),
// As well as the embedded renderer version in "packages/shared/ReactVersion".
// Canaries version numbers use the format of 0.0.0-<sha>-<date> to be easily recognized (e.g. 0.0.0-01974a867-20200129).
// A separate "React version" is used for the embedded renderer version to support DevTools,
// since it needs to distinguish between different version ranges of React.
// It is based on the version of React in the local package.json (e.g. 16.12.0-01974a867-20200129).
// Both numbers will be replaced if the "next" release is promoted to a stable release.
const updateVersionsForNext = async (cwd, reactVersion, version) => {
const isExperimental = reactVersion.includes('experimental');
const packages = getPublicPackages(isExperimental);
const packagesDir = join(cwd, 'packages');

// Update the shared React version source file.
// This is bundled into built renderers.
// The promote script will replace this with a final version later.
const sourceReactVersionPath = join(cwd, 'packages/shared/ReactVersion.js');
const sourceReactVersion = readFileSync(
sourceReactVersionPath,
'utf8'
).replace(/export default '[^']+';/, `export default '${reactVersion}';`);
writeFileSync(sourceReactVersionPath, sourceReactVersion);

// Update the root package.json.
// This is required to pass a later version check script.
{
const packageJSONPath = join(cwd, 'package.json');
const packageJSON = await readJson(packageJSONPath);
packageJSON.version = version;
await writeJson(packageJSONPath, packageJSON, {spaces: 2});
}

for (let i = 0; i < packages.length; i++) {
const packageName = packages[i];
const packagePath = join(packagesDir, packageName);

    // Update version numbers in package JSONs
    const packageJSONPath = join(packagePath, 'package.json');
    const packageJSON = await readJson(packageJSONPath);
    packageJSON.version = version;

    // Also update inter-package dependencies.
    // Next releases always have exact version matches.
    // The promote script may later relax these (e.g. "^x.x.x") based on source package JSONs.
    const {dependencies, peerDependencies} = packageJSON;
    for (let j = 0; j < packages.length; j++) {
      const dependencyName = packages[j];
      if (dependencies && dependencies[dependencyName]) {
        dependencies[dependencyName] = version;
      }
      if (peerDependencies && peerDependencies[dependencyName]) {
        peerDependencies[dependencyName] = version;
      }
    }

    await writeJson(packageJSONPath, packageJSON, {spaces: 2});

}
};

module.exports = {
addDefaultParamValue,
confirm,
execRead,
getArtifactsList,
getBuildInfo,
getChecksumForCurrentRevision,
getCommitFromCurrentBuild,
getDateStringForCommit,
getPublicPackages,
handleError,
logPromise,
printDiff,
splitCommaParams,
theme,
updateVersionsForNext,
};
</script> -->

## 코드의 구조

주어 + 동사 + 목적어
I love you => 나는 사랑한다 너를

console.log('안녕하세요');
-> console이 log한다. '안녕하세요'를

동사 + 목적어 -> 명령문
Love you => 사랑해라 너를

alert('안녕하세요');
-> alert해라. '안녕하세요'를.
