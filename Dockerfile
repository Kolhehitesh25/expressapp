from node
workdir /src
copy . . 
run npm install express
expose 3000
cmd node server.js