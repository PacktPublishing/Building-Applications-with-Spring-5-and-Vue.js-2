# How to run the code

You will need to put the code under a HTTP server to run the code inside this folder. Opening `index.html` directly as a file in a browser won't work.

If you do not have a HTTP server installed, you can use the following command to install `http-server`, which is a simple and easy-to-use command-line HTTP server.

```
npm install http-server -g
```

Once it is installed, switch to each stage folder and run `http-server` and open URL http://localhost:8080 in your browser. For example, to run the stage1 code, you can do with the following steps.

```bash
$ cd stage1
$ http-server
```

You can specify the port number to be other than `8080`. For example, with command `http-server -p 3030`, port `3030` will be used.
