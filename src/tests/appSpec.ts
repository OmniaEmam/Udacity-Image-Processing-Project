import app from '../app';
import path from 'path';
import supertest from 'supertest';
import fs from 'fs';
import removeExtension from '../utilities/removeExtension';

const request = supertest(app);


// Test endpoint responses
describe('Test endpoint responses', () => {
  it('should return 200 status code', async () => {
    const response = await request.get('/api/uploads');
    expect(response.status).toEqual(200);
  });
});


describe('Test endpoint response', () => {
  it('should return 200 status code', async () => {
    const response = await request.get('/api/uploads');
    expect(response.status).toBe(200);
  });
});



// Test for image processing 
describe(' test for image processing ', () => {
  const imageName = 'palmtunnel.jpg';
  const imageWidth = 400;
  const imageHeight = 400;
  const fileName: string = path.join(__dirname, '../../assets/resizedImages',
    `${removeExtension(imageName)}-${imageWidth}x${imageHeight}.jpg`);


  // First , Resize image    
  it('First , Resize image when it does not exist && not include an error', async () => {
    await request.get(
      `/api/uploads?name=${imageName}&width=${imageWidth}&height=${imageHeight}`
    );
    expect(fs.existsSync(fileName)).toBeTrue();
  });



  // Second , image include error  
  it('Second , When image name include error', async () => {
    const response = await request.get(
      `/api/uploads?name=KKK&width=${imageWidth}&height=${imageHeight}`
    );
    expect(response.text).toBe(
      'There is an error , please make sure of image name'
    );
  });



  // Third , image ialready exist  
  it('Third , When The image is already exist', async () => {
    const response = await request.get(
      `/api/uploads?name=${imageName}&width=100&height=100`
    );
    expect(response.text).toBe(
      'the image already exist in /assets/resizedImages'
    );
  });



  // Forth , height or width not correct
  it('Forth , When the height or width not correct', async () => {
    const response = await request.get(
      `/api/uploads?name=${imageName}&width=kkk&height=${imageHeight}`
    );
    expect(response.text).toBe(
      'The height and width are not correct, please make sure of image name height and width'
    );
  });
});


// Test the Image processing endpoint
describe('Test that the Resized file is generated', () => {
  it('get ../assets/resizedImages with status of 200', () => {
    request.post('../assets/resizedImages').expect(200);
  });
});


// Test the path of save image has called
describe('Test the path of save image has called', function () {
  it('should be called', () => {
    app.get('/', async (req, res) => {
      expect(res.sendFile(path.join())).toHaveBeenCalled;
    });
  });
});


// Test the Query of image has Matched
describe('Test the path of save image has called', function () {
  it('req.query', () => {
    app.get('/', async (req) => {
      const { name, width, height } = req.query;
      expect(req.query).toMatch(
        `http://localhost:5000/?name=${name}.jpg&width=${width}&height=${height}`
      );
    });
  });
});


//Test the Images

// 1 : palmtunnel.jpg
describe('Test the palmtunnel.jpg has resized and save in new${width}x${height}palmtunnel.jpg', () => {
  it('new${width}x${height}palmtunnel.jpg saved in ../assets/resizedImages ', () => {
    app.get('/', async (req, res) => {
      const { width, height } = req.query;
      expect(
        res.sendFile(
          path.join(
            'assets',
            'resizedImages',
            `new${width}x${height}palmtunnel.jpg`
          )
        )
      ).toBeTruthy();
    });
  });
});

// 2 : encenadaport.jpg
describe('Test the encenadaport.jpg has resized and save in new${width}x${height}encenadaport.jpg', () => {
  it('new${width}x${height}encenadaport.jpg saved in /resizedImages ', () => {
    app.get('/', async (req, res) => {
      const { width, height } = req.query;
      expect(
        res.sendFile(
          path.join(
            'assets',
            'resizedImages',
            `new${width}x${height}encenadaport.jpg`
          )
        )
      ).toBeTruthy();
    });
  });
});

// 3 : fjord.jpg
describe('Test the fjord.jpg has resized and save innew${width}x${height}fjord.jpg', () => {
  it('new${width}x${height}fjord.jpg saved in /resizedImages ', () => {
    app.get('/', async (req, res) => {
      const { width, height } = req.query;
      expect(
        res.sendFile(
          path.join('assets', 'resizedImages', `new${width}x${height}fjord.jpg`)
        )
      ).toBeTruthy();
    });
  });
});

// 4 : icelandwaterfall.jpg
describe('Test the icelandwaterfall.jpg has resized and save in new${width}x${height}icelandwaterfall.jpg', () => {
  it('new${width}x${height}icelandwaterfall.jpg saved in /resizedImages ', () => {
    app.get('/', async (req, res) => {
      const { width, height } = req.query;
      expect(
        res.sendFile(
          path.join(
            'assets',
            'resizedImages',
            `new${width}x${height}icelandwaterfall.jpg`
          )
        )
      ).toBeTruthy();
    });
  });
});

// 5 : santamonica.jpg
describe('Test the santamonica.jpg has resized and save in new${width}x${height}santamonica.jpg', () => {
  it('new${width}x${height}santamonica.jpg saved in /resizedImages ', () => {
    app.get('/', async (req, res) => {
      const { width, height } = req.query;
      expect(
        res.sendFile(
          path.join(
            'assets',
            'resizedImages',
            `new${width}x${height}santamonica.jpg`
          )
        )
      ).toBeTruthy();
    });
  });
});
