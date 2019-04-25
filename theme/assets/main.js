function setNavActiveState() {
  const navlinkSelector = document.querySelector(
    'a.nav-link[href="' + this.location.pathname + '"]'
  );
  if (navlinkSelector) {
    let classnav = navlinkSelector.className;
    classnav = classnav.concat(' active');
    navlinkSelector.className = classnav;
  }
}

(function() {
  setNavActiveState();

  if (document.querySelector('#slider-personal-container')) {
    tns({
      container: '#slider-personal-container',
      mouseDrag: true,
      loop: false,
      nav: true,
      controlsContainer: '#slider-personal-controls',
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  }

  if (document.querySelector('#slider-team-container')) {
    tns({
      container: '#slider-team-container',
      mouseDrag: true,
      loop: false,
      nav: true,
      controlsContainer: '#slider-team-controls',
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  }

  if (document.querySelector('#slider-personal-container')) {
    tns({
      container: '#slider-startup-container',
      mouseDrag: true,
      loop: false,
      nav: true,
      controlsContainer: '#slider-startup-controls',
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  }

  if (document.getElementById('blueimp-gallery-links')) {
    document.getElementById('blueimp-gallery-links').onclick = function(event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = { index: link, event: event },
        links = this.getElementsByTagName('a');
      blueimp.Gallery(links, options);
    };
  }
})();
