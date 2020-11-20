
class EscapeHandler {
  constructor (images = [], anchorFn = null, btnText = 'ESCAPE', exitText = 'EXIT') {
    this.images = images;
    this.anchorFn = anchorFn;
    this.btnText = btnText;
    this.exitText = exitText;

    this.cover = document.createElement('div');
    this.cover.classList.add('cover-wrapper');
    
    const body = document.querySelector('body');
    body.appendChild(this.cover);

    this.inner = document.createElement('div');
    this.inner.classList.add('cover-content');

    this.appendAllImages();
    this.appendExit();

    this.cover.appendChild(this.inner);
  }

  trigger() {
    const state = [...this.cover.classList].includes('visible');

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

    const anchor = document.createElement('a');
    if (this.anchorFn === null) {
      anchor.setAttribute('href', image.location);
    } else {
      anchor.setAttribute('href', '#');
      anchor.setAttribute('onclick', this.anchorFn(image));
    }
  
    const img = document.createElement('img');
    img.setAttribute('src', image.file);
  
    anchor.appendChild(img);
    imgWrapper.appendChild(anchor);
    
    this.inner.appendChild(imgWrapper);
  }

  appendExit() {
    const exit = document.createElement('div');
    exit.classList.add('exit-scramble');
    exit.innerText = this.exitText;
    exit.onclick = this.trigger.bind(this);
    this.inner.appendChild(exit);
  }
}
