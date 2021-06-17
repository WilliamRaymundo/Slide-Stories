class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    console.log(this.slide);
    this.active = 0;


  }

new SlideStories('slide');