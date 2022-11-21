# Worker API

Web Workers are a simple means for web content to run scripts in background threads.
The worker thread can perform tasks without interfering with the user interface.
In addition, they can perform I/O using XMLHttpRequest or fetch.
Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code.


### Dedicated workers

A dedicated worker is only accessible by the script that called it

```
if (window.Worker) {
  // …
}

const myWorker = new Worker('worker.js');

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}

second.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}

myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log('Message received from worker');
}

myWorker.terminate();
```

### Shared workers

```
const myWorker = new SharedWorker('worker.js');
```

### ServiceWorker

Service workers are a fundamental part of a PWA.
They enable fast loading (regardless of the network), offline access, push notifications, and other capabilities.
Mainly used to cache static files.

```
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

// …

registerServiceWorker();
```
```

const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/style.css",
      "/app.js",
      "/image-list.js",
      "/star-wars-logo.jpg",
      "/gallery/bountyHunters.jpg",
      "/gallery/myLittleVader.jpg",
      "/gallery/snowTroopers.jpg",
    ])
  );
});
```
