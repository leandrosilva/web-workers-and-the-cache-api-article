# Web Workers & The Cache API

This is the companion source code for the examples I used on the article ["Chega de esperar: Web Workers e a Cache API"](https://medium.com/pricefy-labs/chega-de-esperar-web-workers-e-a-cache-api-1a324c858a73) posted at [Pricefy Labs](https://medium.com/pricefy-labs) on Medium.

Let's see those [web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) and the [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) at work. Shall we?

## Hands on

After `git checkout `this repository...

### TLS/SSL

You'll need a certificate to spin the server, so:

```
$ mkdir ./_ssl
$ cd ./_ssl
$ openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

### Running

```
$ http-server ./src/ --ssl --cert ./_ssl/cert.pem --key ./_ssl/key.pem
```

Go ahead and open the aplication on your prefered ~~Chrome~~ browser.

## What's next?

Well, don't miss [Pricefy Labs](https://medium.com/pricefy-labs) on Medium.
