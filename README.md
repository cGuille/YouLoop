YouLoop
=======

Google Chrome extension which allows you to play a video forever.

# Installation

Since Google asks anybody who wants to put an extension into the Web Store to pay $5, this extension will not be available on the official Chrome Store. Fuck you Google.

## Packed extension

Just install [the latest release](https://github.com/cGuille/YouLoop/releases) (click on the `YouLoop.crx` green button).

Google does not allow Windows users to install extensions from elsewhere than their Web Store, so if you use this operating system:
- tell Google how annoying they are;
- load the extension from the sources (see the next section below).

## Loading from sources

- download and extract the sources of [the latest release](https://github.com/cGuille/YouLoop/releases);
- follow [Google's instructions](https://developer.chrome.com/extensions/getstarted#unpacked) to load an unpacked extension.

# Troobleshooting

## The button does not appear

Sometimes, the YouLoop button does not appear next to the video title. It seems that the YouLoop script is somehow not loaded. Just reloading the page should make the button come.

## The button appear but it is crossed and it won't work

It means that the video you are watching is not using the HTML5 browser feature. See [the related YouTube page](https://www.youtube.com/html5).
