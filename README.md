
# Escape-Button

## Version

`0.0.1`

## About

This project is designed to provide navigation tools to minimize footprint (browser history) and safety in the form of an escape button with a functional page that is non-threatening.

## Installation

`npm install escape-button`

## Usage

### Images for Escape Button Page

Images are NOT included in this project. Any screen-shot images will do with
associated web addresses.

The images used in the sample code below come from the following repository:

* [ESCAPE-BUTTON-IMAGES](https://github.com/bob-fornal/escape-button-images)

### Escape Button

The escape code included should be accompanied by a description similar to the following:

> There is an "escape" button that will bring up a generic search to use if you need to
  hide the site in a hurry.

Sample code showing usage ...

```javascript
const EscapeHandler = require('escape-handler');

const images = [
  { file: 'google-header.webp', location: 'https://www.google.com/search?q=coffee&oq=coffee' },
  { file: 'coffee-wikipedia.webp', location: 'https://en.wikipedia.org/wiki/Coffee' },
  { file: 'coffee-nca.webp', location: 'https://www.ncausa.org/About-Coffee/What-is-Coffee' },
  { file: 'coffee-benefits.webp', location: 'https://www.medicalnewstoday.com/articles/270202' },
  { file: 'coffee-amazon.webp', location: 'https://www.amazon.com/coffee/s?k=coffee' },
  { file: 'coffee-peets.webp', location: 'https://www.peets.com/coffee' },
  { file: 'coffee-stumptown.webp', location: 'https://www.stumptowncoffee.com/' },
  { file: 'coffee-footer.webp', location: 'https://www.google.com/search?q=coffee&oq=coffee' }
];

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
