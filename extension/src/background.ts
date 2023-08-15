'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message: string = `Hi ${
      sender.tab ? 'Con' : 'Pop'
    }, my name is Bac. I am from Background. It's great to hear from you.`;

    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    // Send a response message
    sendResponse({
      message,
    });
  }
});

// var key: string | undefined;
// var value: string | undefined;

// function mnemonize(info: chrome.contextMenus.OnClickData, tab?: chrome.tabs.Tab) {
//   console.log("You activated mnemonize");
//   console.log("Event looks like this")
//   console.log(info, tab);
//   if (info.selectionText) {
//     if (info.menuItemId === "mnemonizeKey") {
//       key = info.selectionText.trim();
//     } else if (info.menuItemId === "mnemonizeValue"){
//       value = info.selectionText.trim();
//     } else {
//       key = undefined;
//       value = undefined;
//     }
//   }
//   console.log(`Key=${key} value=${value}`);
  
// }

// chrome.runtime.onInstalled.addListener(async function () {
//   let data = await chrome.storage.local.get('MNEMONIZE_DATA');
//   if (data !== null) {

//   }
//   chrome.contextMenus.create({
//     id: "mnemonizeKey",
//     title: "Mnemonize key",
//     contexts: [
//       "selection"
//     ],
//   })
//   chrome.contextMenus.create({
//     id: "mnemonizeValue",
//     title: "Mnemonize value",
//     contexts: [
//       "selection"
//     ],
//   })
//   chrome.contextMenus.create({
//     id: "mnemonizeReset",
//     title: "Reset",
//     contexts: [
//       "selection",
//       "all"
//     ],
//   })
//   chrome.contextMenus.onClicked.addListener(mnemonize)

  // Create one test item for each context type.
  // let contexts = [
  //   'page',
  //   'selection',
  //   'link',
  //   'editable',
  //   'image',
  //   'video',
  //   'audio',
  // ];

  // for (let i = 0; i < contexts.length; i++) {
  //   let context = contexts[i];
  //   let title = "Test '" + context + "' menu item";
  //   chrome.contextMenus.create({
  //     title: title,
  //     contexts: [<chrome.contextMenus.ContextType>context],
  //     id: context,
  //   });
  // }
  // // Create a parent item and two children.
  // let parent = chrome.contextMenus.create({
  //   title: 'Test parent item',
  //   id: 'parent',
  // });
  // chrome.contextMenus.create({
  //   title: 'Child 1',
  //   parentId: parent,
  //   id: 'child1',
  // });
  // chrome.contextMenus.create({
  //   title: 'Child 2',
  //   parentId: parent,
  //   id: 'child2',
  // });

  // // Create a radio item.
  // chrome.contextMenus.create({
  //   title: 'radio',
  //   type: 'radio',
  //   id: 'radio',
  // });

  // // Create a checkbox item.
  // chrome.contextMenus.create({
  //   title: 'checkbox',
  //   type: 'checkbox',
  //   id: 'checkbox',
  // });
// });
