
# Escape-Button

[USE](https://dev.to/therealdanvega/creating-your-first-npm-package-2ehf)

## About



## Installation

`npm install escape-button`

## Usage

### Images for Escape Button Page



### Escape Button

The escape code included should be accompanied by a description similar to the following:

> There is an "escape" button that will bring up a generic search to use if you need to
  hide the site in a hurry.

Sample code showing usage ...

```javascript
const EscapeHandler = require('escape-handler');

const images = [];

const escape = new EscapeHandler(images);
```

`EscapeHandler` Options:

* `images`: (REQUIRED) An array of objects containing `{ file: '...', location: '...' }`
* `button text`: (OPTIONAL) Defaults to ESCAPE.
* `exit text`: (OPTIONAL) Defaults to EXIT.

An ESCAPE button needs to be created on the page.

```html
<button onclick="escape.trigger()">ESCAPE</button>
```

### Hiding Navigation

The navigation code included should be accompanied by a description similar to the following:

> This site was made with your safety in mind. The browser history will only show one link to
  this site. If a link is followed off this site, there will be nothing in the history to show
  you were here.

The navigation should be used like this ...

```javascript
const HideNavigationHandler = require('escape-handler');
const anchor = new HideNavigationHandler();
```

```html
<a href="#" onclick="anchor.navigate(event, 'index.html')">Home</a>
```
