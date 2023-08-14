// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// // A generic onclick callback function.
// chrome.contextMenus.onClicked.addListener(genericOnClick);

// // A generic onclick callback function.
// function genericOnClick(info) {
//   switch (info.menuItemId) {
//     case 'radio':
//       // Radio item function
//       console.log('Radio item clicked. Status:', info.checked);
//       break;
//     case 'checkbox':
//       // Checkbox item function
//       console.log('Checkbox item clicked. Status:', info.checked);
//       break;
//     default:
//       // Standard context menu item function
//       console.log('Standard context menu item clicked.');
//   }
// }
// chrome.runtime.onInstalled.addListener(function () {
//   // Create one test item for each context type.
//   let contexts = [
//     'page',
//     'selection',
//     'link',
//     'editable',
//     'image',
//     'video',
//     'audio'
//   ];
//   for (let i = 0; i < contexts.length; i++) {
//     let context = contexts[i];
//     let title = "Test '" + context + "' menu item";
//     chrome.contextMenus.create({
//       title: title,
//       contexts: [context],
//       id: context
//     });
//   }

//   // Create a parent item and two children.
//   let parent = chrome.contextMenus.create({
//     title: 'Test parent item',
//     id: 'parent'
//   });
//   chrome.contextMenus.create({
//     title: 'Child 1',
//     parentId: parent,
//     id: 'child1'
//   });
//   chrome.contextMenus.create({
//     title: 'Child 2',
//     parentId: parent,
//     id: 'child2'
//   });

// Create a radio item.
// chrome.contextMenus.create({
//   title: 'radio',
//   type: 'radio',
//   id: 'radio'
// });

// Create a checkbox item.

// chrome.runtime.onInstalled.addListener(() => {
//     var bkg = chrome.extension.getBackgroundPage();
//     const print = bkg.console.log
//     let contextMenuItem = {
//         id: "mnemonize",
//         title: "Mnemonize",
//         contexts: ["selection"],
//     };
//     chrome.contextMenus.create(contextMenuItem, selectKey);
//     function selectKey(info) {
//         print(info)
//     }
// });
console.log("This is a popup!")

const print = console.log

print("HELLO WORLD!")

async function logMovies() {
    const response = await fetch("https://tornikeo.requestcatcher.com/", {
        method: "POST"
    });
    print(response);
}

chrome.action.onClicked.addListener(function (tab) {
    if (tab.url.startsWith('http')) {
      chrome.debugger.attach({ tabId: tab.id }, '1.2', function () {
        chrome.debugger.sendCommand(
          { tabId: tab.id },
          'Network.enable',
          {},
          function () {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
            }
          }
        );
      });
    } else {
      console.log('Debugger can only be attached to HTTP/HTTPS pages.');
    }
  });
  
  chrome.debugger.onEvent.addListener(function (source, method, params) {
    if (method === 'Network.responseReceived') {
      console.log('Response received:', params.response);
      // Perform your desired action with the response data
    }
  });
  
  // Intentionally create an invalid item, to show off error checking in the
  // create callback.
  //   chrome.contextMenus.create(
  //     { title: 'Oops', parentId: 999, id: 'errorItem' },
  //     function () {
  //       if (chrome.runtime.lastError) {
  //         console.log('Got expected error: ' + chrome.runtime.lastError.message);
  //       }
  //     }
  //   );
  // });
  