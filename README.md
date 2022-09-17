# What is this?  
This is the actual selfhostable service that provides Minibase  
  
# Deployment  
Run these commands in a shell:  
```sh
git clone https://github.com/minibase-baas/service # Make sure you have git installed
cd service
npm i # Make sure you have node and npm installed
npm run build
cd build
node .
```  
  
# Notes
 - DO NOT update `chalk` from 4.1.2 or build errors will occur  
 - This doesn't provide a GUI, this is just the API, the GUI is in minibase-baas/gui  