// This is important just so you know and learn when a web worker is instantiated,
// not much beyond that.
if (!self.name) {
    self.name = `ww-${crypto.randomUUID()}`;
}

onmessage = (event) => {
    console.log(`Downloader: Message received from main script (${self.name})`);

    // Some house keeping
    const uuid = event.data[0];
    if (!uuid) {
        postMessage({ error: { message: "UUID cannot be null" } });
        return;
    }
    const url = event.data[1];
    if (!url) {
        postMessage({ error: { message: "URL cannot be null" } });
        return;
    }

    // Notify we are about to start the download working
    postMessage({ message: `Donwloading "${url}"`, isDone: false });

    // Open the cache called "assets"
    caches.open("assets").then(cache => {
        //  Check if the given URL was already downloaded
        cache.match(url).then(res => {
            // Yay! Not need to download, we got it from cache
            if (res) {
                console.log(`(${uuid}) Downloader: Work is unnecessary (cache)`);
                postMessage({ message: `Done`, isDone: true });
                return;
            }

            // If there wasn't a response from cache, go ahead and download it to cache
            cache.add(url)
                .then(() => {
                    console.log(`(${uuid}) Downloader: Work is done`);
                    postMessage({ message: `Done`, isDone: true });
                })
                .catch(reason => postMessage({ error: reason }));
        });
    });
}

onerror = (event) => {
    console.error(`(${uuid}) Downloader:`, event);
}