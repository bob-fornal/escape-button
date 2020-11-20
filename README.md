
# Escape-Button

## Version

`0.0.2`

## About

This project is designed to provide safety in the form of an escape button on a web page with a functional view that is non-threatening.

## Installation

`npm install escape-button`

## Usage

### Demonstration

* Code [HERE](https://github.com/bob-fornal/escape-button-demo)
* Live [HERE](https://escape-button.web.app/)

### Using the Files

Using a `gulpfile.js`, the `index.js` and `escape.css` can be moved to an appropriate location.

```javascript

const gulp = require('gulp');

gulp.task('escape', function() {
  sources = [
    './node_modules/escape-button/index.js',
    './node_modules/escape-button/escape.css'
  ];
  return gulp.src(sources).pipe(gulp.dest('./escape'));
});

gulp.task('copy-escape', gulp.series('escape'));
```

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

For CSS styling, copy the `escape.css` to an appropriate location and use, as follows.

```html
<link rel="stylesheet" href="styles/escape.css" />
```

Here's the minimal JavaScript required.

```javascript
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

const escape = new EscapeHandler(images, [anchor fn], [button text], [exit text]);
```

`EscapeHandler` Options:

* `images`: (REQUIRED) An array of objects containing `{ file: '...', location: '...' }`.
* `anchor function`: (OPTIONAL) Can be used to make the link an `onclick` event.
* `button text`: (OPTIONAL) Defaults to ESCAPE.
* `exit text`: (OPTIONAL) Defaults to EXIT.

An ESCAPE button needs to be created on the page.

```html
<button onclick="escape.trigger()">ESCAPE</button>
```

### HTML

```html
<html>
  <head>
    <link rel="stylesheet" href="./escape/escape.css" />
  </head>

  <body style="background-color: skyblue;">
    <div style="text-align: center">
      <button onclick="escape.trigger()">ESCAPE</button>
    </div>

    <script src="./escape/index.js"></script>
    <script src="./index.js"></script>
  </body>
</html>
```
