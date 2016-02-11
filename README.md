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

redact('Visa: 4242424242424242');
//=> 'Visa:'

redact('SSN: 000-00-0000');
//=> 'SSN:'

redact('IP Address: 192.168.0.1');
//=> 'IP Address: ';
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

##### stripSSN

Type: `boolean`  
Default: `true`

##### stripCreditCard

Type: `boolean`  
Default: `true`

##### stripIpAddress

Type: `boolean`  
Default: `true`

##### redactString

Type: `string`  
Default: `''`


