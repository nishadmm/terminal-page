const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('.about-content');
const contactContent = document.querySelector('.contact-content');

about.addEventListener('click', () => {
  new WinBox({
    title: 'About Me',
    width: '400px',
    height: '400px',
    top: '50',
    left: '50',
    right: '50',
    bottom: '50',
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground("rgb(44, 44, 44)");
    },
  });
});

contact.addEventListener('click', () => {
  new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top: '150',
    left: '250',
    right: '50',
    bottom: '50',
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground("rgb(44, 44, 44)");
    },
  });
});
