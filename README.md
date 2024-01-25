# webGPT
WebGPT is a project built based on the <a scr="https://expressjs.com">expressJS</a> nodejs framework and the <a src="https://platform.openai.com/docs/overview">Openai Api</a> for nodeJs, to intergrate ChatGPT into a simple self hosted webserver. This server can be hosted locally on your home network, or port forwarded to the internet. 

To set it up:
Make sure you have <a src="https://nodejs.org/en">NodeJS</a> and <a scr="https://expressjs.com">expressJS</a> installed on your machine.
clone this git repository into a file on your server. I am using a raspberry pi for mine, but you can use any computer, (the only limitation is that the start.SH script only works on linux machines, and you WILL have to change the filepath for your index.js script). 
then in index.js, change the main filepath to be the filepath to the file where the root file for the project is , (the file where the readme and start script are stored), and then run index.js.
the server should start on your machines IP at port 8080. If this is hosted on your local machine, you can go to localhost:8080 in your browser and go from there, and if it is on a server running on your network, you will have to go to that servers local ip at port 8080.

