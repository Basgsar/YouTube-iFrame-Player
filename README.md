# YouTube iFrame Player
======================

## Description

This browser extension replaces the original YouTube player with an iFrame version, allowing for a more customizable and flexible video playback experience.

## Features

* Replaces the original YouTube player with an iFrame player
* Supports autoplay and enables JavaScript API
* Preserves timestamp from URL (e.g. `t=123`)

## How it works

The extension injects a content script into YouTube pages, which extracts the video ID and timestamp from the URL. It then creates an iFrame element with the extracted video ID and timestamp, and replaces the original player with the iFrame.

## Installation

To install this extension, follow these steps:

1. Create a new directory for the extension and add the `manifest.json` and `contentScript.js` files to it.
2. Go to the Chrome extensions page by typing `chrome://extensions/` in the address bar.
3. Enable developer mode by toggling the switch in the top-right corner.
4. Click "Load unpacked" and select the directory containing the extension files.
5. The extension should now be active and replace the original YouTube player with an iFrame player.

## Notes

* This extension only works on YouTube pages.
* The iFrame player may not support all features of the original YouTube player.
* This extension is for personal use only and should not be distributed or sold.
