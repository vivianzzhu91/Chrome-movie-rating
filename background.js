// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// setTimeout(function(){ appendMovieElement()}, 3000);


// chrome.webNavigation.onCompleted.addListener(function(details) {
//     chrome.tabs.executeScript(details.tabId, {
//         // code: 'appendMovieElement();'
//     });
// }, {
//     url: [{
//         // Runs on example.com, example.net, but also example.foo.com
//         hostContains: 'youtube.com'
//     }],
// });


// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({color: '#3aa757'}, function() {
//     console.log("The color is green.");
//   });
// });
// chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//       chrome.declarativeContent.onPageChanged.addRules([{
//         conditions: [new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: {hostEquals: 'developer.chrome.com'},
//         })
//         ],
//             actions: [new chrome.declarativeContent.ShowPageAction()]
//       }]);
//     });