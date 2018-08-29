# **DEBOUNCE-DECORATOR**

  * [About](#about)
  * [Install](#install)
  * [API](#api)
  * [Usage](#usage)
  * [License](#license)
  

## **ABOUT**

Simple function debounce decorator written in Typescript. 
* Has no dependencies.
* Very tiny < 1kb
* Very easy to use

An live example of function use: [Live Example](https://zgrybus.github.io/debounce-decorator-ts/)

## **INSTALL**

Install package by npm

```npm
  npm install --save-dev debounce-decorator-ts
```


## **API**

**SYNTAX**

```javascript
   @debounceFn(debounceTime, timeoutPropertyName);
```


**Properties**

* `debounceTime`  
**Action**: Setting debounceTimer  
**Default value**: `100` (ms)  
**Argument type**: number ( miliseconds )  

* `timeoutPropertyName`  
**Action**: Setting timeout property name ( for clearTimeout )  
**Default value**: `'timeoutFn'`  
**Argument type**: string   


## **USAGE**


**Basic usage**

```javascript
    import { debounceFn } from "debounce-decorator-ts";

    class MyClass {
    	constructor() {
    	    window.addEventListener('resize', this.onResizeFn.bind(this));
    	}
    	
    	@debounceFn()
    	private onResizeFn(e: Event): void {
    	    console.log('resized!');
    	}
    }

    const myClass = new MyClass;
```


**Override default properties value**

```javascript
    import { debounceFn } from "debounce-decorator-ts";

    class MyClass {
    	constructor() {
    	    window.addEventListener('resize', this.onResizeFn.bind(this));
    	}
    	
    	@debounceFn(1000, 'myCustomTimeoutPropertyName')
    	private onResizeFn(e: Event): void {
    	    console.log('resized!');
    	}
    }

    const myClass = new MyClass;
```


## **LICENSE**


[MIT](https://en.wikipedia.org/wiki/MIT_License) License
