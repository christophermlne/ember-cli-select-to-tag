Status: This project is an early stage WIP, at version 0.0.0

# Ember-cli-select-to-tag

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

## Usage

The UI Component can be used in a template like this:

* *Curly brace syntax* (pre Ember 1.13 although this should still work in later versions):  

```javascript
{{menu-to-tag
  text='Your drop-down label text'
  menuData=yourDataSource
}}
```

* *Angle bracket syntax* (Ember 1.13 or later):  

```javascript
<menu-to-tag
  text='Your drop-down label text'
  menuData={{yourDataSource}}
></menu-to-tag>
```

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
