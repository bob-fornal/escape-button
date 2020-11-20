
class EscapeHandler {
  constructor (images = [], btnText = 'ESCAPE', exitText = 'EXIT') {
    this.btnElement = btnElement;
    this.images = images;
    this.btnText = btnText;
    this.exitText = exitText;

    this.images = [];

    this.cover = document.createElement('div');
    this.cover.classList.add('cover-wrapper');
    
    const body = document.querySelector('body');
    body.appendChild(this.cover);

    this.inner = document.createElement('div');
    this.inner.classList.add('cover-content');

    this.appendAllImages();
    this.appendExit();

    this.cover.appendChild(inner);
  }

  trigger() {
    const state = [...this.cover.classlist].includes('visible');

    if (state === true) {
      this.cover.classList.remove('visible');
      this.cover.scrollTop = 0;
    } else {
      this.cover.classList.add('visible');
      this.cover.scrollTop = 0;
    }
  }

  appendAllImages() {
    this.images.forEach(image => this.appendImage(image));
  }

  appendImage(image) {
      const imgWrapper = document.createElement('div');
      const imageLocation = `images/scramble/${ image.file }`;

      const anchor = document.createElement('a');
      anchor.setAttribute('href', '#');
      anchor.setAttribute('onclick', `anchor.navigate(event, '${ image.location }')`);
    
      const img = document.createElement('img');
      img.setAttribute('src', imageLocation);
    
      anchor.appendChild(img);
      imgWrapper.appendChild(anchor);
      
      this.inner.appendChild(imgWrapper);
  }

  appendExit() {
    const exit = document.createElement('div');
    exit.classList.add('exit-scramble');
    exit.innerText = this.exitText;
    exit.onclick = scramble.trigger;
    inner.appendChild(exit);
  }
}

class HideNavigationHandler {
  constructor() {}

  navigate(event, location) {
    event.preventDefault();
    window.location.replace(location);
    return false;
  };
}

module.exports = EscapeHandler;
module.exports = HideNavigationHandler;
