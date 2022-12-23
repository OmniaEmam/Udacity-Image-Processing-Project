# Udacity-Image-Processing-Project
 
## It is an image processing API 
 -resize the images by give the url the parameters

### TO Run The Project 
- Download it on your desktop and follow the instructions
- Run in terminal ```npm start```
- save your own imagges in ```../assets/uploads```
- Use the following URL in your browser and replace 'name','width','height' with your parameters
  ```http://localhost:5000/?name='name'.jpg&width='width'&height='height'``` or sign the 'name' only and your
  image will be 200x200 automatically
- And you will get the resized image in ```../assets/resizedImages```

### To change in code and build the project
- Run ```npm run build``` before ```npm start```

### To test the code 
- Run ```npm run jasmine``` to run the tests cases in ```../src/tests/appSpec.ts```

### To run lint
- Run ```npm run lint``` to run the tests script in ```../package.json```
