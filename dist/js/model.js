/*! (c) Philipp König under GPL-3.0 */

"use strict";!function(){var e=+new Date,t={userdata:"https://blockbyte.de/ajax/extensions/userdata"},n={closeTab:function(e,t){chrome.tabs.query({active:!0,currentWindow:!0},function(e){chrome.tabs.remove(e[0].id)})}};chrome.extension.onMessage.addListener(function(e,t,a){return n[e.type]&&n[e.type](e,a),!0});var a=function(){chrome.storage.sync.get(["uuid","installationDate"],function(t){void 0===t.uuid&&chrome.storage.sync.set({uuid:function(){var e=+new Date;return window.performance&&"function"==typeof window.performance.now&&(e+=window.performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)})}()}),void 0===t.installationDate?(e=+new Date,chrome.storage.sync.set({installationDate:e})):e=t.installationDate})},r=function(){chrome.storage.sync.get(null,function(e){if(void 0!==e.uuid&&(void 0===e.lastShareDate||(+new Date-e.lastShareDate)/36e5>12)){chrome.storage.sync.set({lastShareDate:+new Date});var n=function(e){var n=new XMLHttpRequest;n.open("POST",t.userdata,!0);var a=new FormData;a.append("data",JSON.stringify(e)),n.send(a)},a=chrome.runtime.getManifest();"Dev"!==a.version_name&&"update_url"in a||(e.uuid="Dev"),e.extension={name:a.name,version:a.version},void 0!==e.shareUserdata&&"y"===e.shareUserdata?(delete e.lastShareDate,e.lang=chrome.i18n.getUILanguage(),e.ua=navigator.userAgent,n(e)):n({uuid:e.uuid,extension:e.extension,shareUserdata:void 0===e.shareUserdata?"undefined":e.shareUserdata})}})};!function(){a(),r()}()}();