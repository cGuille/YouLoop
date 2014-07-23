(function () {
    'use strict';

    var elt_video = document.querySelector('video');

    var BTN_SIZE = '20px';
    var BTN_TOOLTIP_CLICKABLE = 'YouLoop It!';
    var BTN_TOOLTIP_NON_CLICKABLE = 'Stop the infinite loop, this is driving me crazy.';

    var elt_container = document.getElementById('watch-headline-title');
    var elt_youloop = document.createElement('div');
    var img_url = 'url("' + chrome.extension.getURL("icon.png") + '")';

    elt_youloop.style.display = 'inline-block';
    elt_youloop.style.width = BTN_SIZE;
    elt_youloop.style.height = BTN_SIZE;
    elt_youloop.style.background = img_url;
    elt_youloop.style.backgroundPosition = 'center';

    elt_container.appendChild(elt_youloop);

    if (!elt_video) {
        console.error('YouLoop: could not find the video element.');
        return;
    }

    elt_youloop.enable = function () {
        this.style.backgroundPosition = 'top';
        this.title = BTN_TOOLTIP_NON_CLICKABLE;
        this.enabled = true;
    };
    elt_youloop.disable = function () {
        this.style.backgroundPosition = 'bottom';
        this.title = BTN_TOOLTIP_CLICKABLE;
        this.enabled = false;
    };
    elt_youloop.switchEnable = function () {
        elt_youloop.enabled ? elt_youloop.disable() : elt_youloop.enable();
    }
    elt_youloop.addEventListener('click', function () {
        elt_youloop.switchEnable();
        if (elt_video.paused && elt_youloop.enabled) {
            elt_video.play();
        }
    }, false);

    elt_youloop.disable();
    elt_youloop.style.cursor = 'pointer';

    elt_video.addEventListener('ended', function () {
        if (elt_youloop.enabled) {
            elt_video.play();
        }
    }, false);
}());
