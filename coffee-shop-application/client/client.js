async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        'BFGURFug_hytrue45678cfghturterwqdfghjkkklll23435656qwertyyuuuuuuuuuwqasdfg_123qeweryyuyu'
    });
    console.log(JSON.stringify(push));
  }

  if ('serviceWorker' in navigator) {
    addEventListener('load', async () => {
      let sw = await navigator.serviceWorker.register('./worker.js');
      console.log(sw);
    });
  }