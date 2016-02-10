# redact-me [![Build Status](https://travis-ci.org/soleo/redact-me.svg?branch=master)](https://travis-ci.org/soleo/redact-me)

A utility collection of redacting email address, phone number or something you don't want to show to others

## Install

```
$ npm install --save redact-me
```


## Usage

```js
const redact = require('redact-me');

redact('email username@example.com');
//=> 'email'

redact('phone 123-456-7890');
//=> 'phone'
```


## API

### redact(str, [options])

#### str

Type: `string`

String to redact info from.

#### options

##### stripEmail

Type: `boolean`  
Default: `true`

##### stripPhone

Type: `boolean`  
Default: `true`

##### redactString

Type: `string`  
Default: `''`


