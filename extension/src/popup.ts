'use strict';

import './popup.css';

(async function () {
  // We will make use of Storage API to get and store `count` value
  // More information on Storage API can we found at
  // https://developer.chrome.com/extensions/storage

  // To get storage access, we have to mention it in `permissions` property of manifest.json file
  // More information on Permissions can we found at
  // https://developer.chrome.com/extensions/declare_permissions
  // const counterStorage = {
  //   get: (cb: (count: number) => void) => {
  //     chrome.storage.sync.get(['count'], (result) => {
  //       cb(result.count);
  //     });
  //   },
  //   set: (value: number, cb: () => void) => {
  //     chrome.storage.sync.set(
  //       {
  //         count: value,
  //       },
  //       () => {
  //         cb();
  //       }
  //     );
  //   },
  // };

  // function setupCounter(initialValue = 0) {
  //   document.getElementById('counter')!.innerHTML = initialValue.toString();

  //   document.getElementById('incrementBtn')!.addEventListener('click', () => {
  //     updateCounter({
  //       type: 'INCREMENT',
  //     });
  //   });

  //   document.getElementById('decrementBtn')!.addEventListener('click', () => {
  //     updateCounter({
  //       type: 'DECREMENT',
  //     });
  //   });
  // }

  // function updateCounter({ type }: { type: string }) {
  //   counterStorage.get((count: number) => {
  //     let newCount: number;

  //     if (type === 'INCREMENT') {
  //       newCount = count + 1;
  //     } else if (type === 'DECREMENT') {
  //       newCount = count - 1;
  //     } else {
  //       newCount = count;
  //     }

  //     counterStorage.set(newCount, () => {
  //       document.getElementById('counter')!.innerHTML = newCount.toString();

  //       // Communicate with content script of
  //       // active tab by sending a message
  //       chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //         const tab = tabs[0];

  //         chrome.tabs.sendMessage(
  //           tab.id!,
  //           {
  //             type: 'COUNT',
  //             payload: {
  //               count: newCount,
  //             },
  //           },
  //           (response) => {
  //             console.log('Current count value passed to contentScript file');
  //           }
  //         );
  //       });
  //     });
  //   });
  // }

  // function restoreCounter() {
  //   // Restore count value
  //   counterStorage.get((count: number) => {
  //     if (typeof count === 'undefined') {
  //       // Set counter value as 0
  //       counterStorage.set(0, () => {
  //         setupCounter(0);
  //       });
  //     } else {
  //       setupCounter(count);
  //     }
  //   });
  // }

  // document.addEventListener('DOMContentLoaded', restoreCounter);

  // // Communicate with background file by sending a message
  // chrome.runtime.sendMessage(
  //   {
  //     type: 'GREETINGS',
  //     payload: {
  //       message: 'Hello, my name is Pop. I am from Popup.',
  //     },
  //   },
  //   (response) => {
  //     console.log(response.message);
  //   }
  // );

  const form = document.getElementById('mnemonicForm');
  form?.addEventListener(
    "submit", async (e) => {
      e.preventDefault()
      console.log(`Form triggered with`, e);
      const key = (<HTMLInputElement>document.getElementById('key')).value;
      const value = (<HTMLInputElement>document.getElementById('value')).value
      console.log(`Key=${key};Value=${value}`);
      let toSet = {key, value}
      console.log("We are setting", toSet);
      await chrome.storage.sync.set(toSet)
    }
  )
  
  const mnemonics = [
    {key: "Mina", value: "me", mnemonic: "Mina is me"},
    {key: "Sina", value: "you", mnemonic: "Sina is you"},
  ]

  function showAndUpdate(elem: HTMLElement) {
    if ($(elem).attr('id') === 'review') {
      console.log("You have ", mnemonics.length, "mnemonics");
      if (mnemonics.length > 0) {
        mnemonics.forEach(
          ({key, value, mnemonic}) => {
            $('#mnemonicsList').append(`<li>${key}:${value}:${mnemonic}</li>`)
          }
        )
        console.log('SHOWING on #noMnemonicsPlaceholder');
        $('#noMnemonicsPlaceholder').hide();
        $('#mnemonicsList').show();
      }
    }
    $(elem).show();
  }

  $('.switch').on('click', function (e) {
    e.preventDefault();
    const text = $(this).text().toLowerCase();
    console.log(text);
    $('.page').each((i, e) => { 
      if ($(e).attr('id') === text) {
        showAndUpdate(e)
      } else {
        $(e).hide();
      }
    })
    return false;
  })
  


})();
