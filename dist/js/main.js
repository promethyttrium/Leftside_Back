/*! Leftside Back v1.3.1 | (c) Philipp König under GPL-3.0 */
"use strict";!function(){var a={windowed:20,maximized:1},b=function(){var b=0!==window.screenX||0!==window.screenY||window.screen.availWidth!==window.innerWidth;return a[b?"windowed":"maximized"]};chrome.storage.sync.get("pxTolerance",function(b){"undefined"!=typeof b.pxTolerance&&("string"==typeof b.pxTolerance&&0===b.pxTolerance.search(/^\d+$/)&&(b.pxTolerance='{"windowed":20,"maximized":'+b.pxTolerance+"}"),a=JSON.parse(b.pxTolerance))}),document.addEventListener("mousedown",function(a){a.pageX<b()&&0===a.button&&window.history.back()},{passive:!0})}();