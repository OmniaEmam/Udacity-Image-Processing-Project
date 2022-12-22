import app from '../app';
import path from 'path';
import supertest from 'supertest';

const request = supertest(app);

// Test endpoint responses
describe('Test endpoint responses', () => {
  it('should return 200 status code', () => {
    request.get('/', async (res) => {
      expect(res.status).toEqual(200);
    });
  });
});

// Test the Image processing endpoint
describe('Test that the Resized file is generated', () => {
  it('get /resizedImages with status of 200', () => {
    request.post('/resizedImages').expect(200);
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

// Test the path of save image has called
describe('Test the path of save image has called', function () {
  it('should be called', () => {
    app.get('/', async (req, res) => {
      expect(res.sendFile(path.join())).toHaveBeenCalled;
    });
  });
});

//Test the Images

// 1 : newpalmtunnel.jpg
describe('Test the palmtunnel.jpg has resized and save in newpalmtunnel.jpg', () => {
  it('newpalmtunnel.jpg saved in /resizedImages ', () => {
    app.get('/', async (req, res) => {
      expect(
        res.sendFile(path.join('dist', 'resizedImages', 'newpalmtunnel'))
      ).toBeTruthy();
    });
  });
});

// 2 : newencenadaport.jpg
describe('Test the encenadaport.jpg has resized and save in newencenadaport.jpg', () => {
  it('newencenadaport.jpg saved in /resizedImages ', () => {
    app.get('/', async (req, res) => {
      expect(
        res.sendFile(path.join('dist', 'resizedImages', 'newencenadaport'))
      ).toBeTruthy();
    });
  });
});

// 3 : newfjord.jpg
describe('Test the fjord.jpg has resized and save in newfjord.jpg', () => {
  it('newfjord.jpg saved in /resizedImages ', () => {
    app.get('/', async (req, res) => {
      expect(
        res.sendFile(path.join('dist', 'resizedImages', 'newfjord'))
      ).toBeTruthy();
    });
  });
});

// 4 : newicelandwaterfall.jpg
describe('Test the icelandwaterfall.jpg has resized and save in newicelandwaterfall.jpg', () => {
  it('newicelandwaterfall.jpg saved in /resizedImages ', () => {
    app.get('/', async (req, res) => {
      expect(
        res.sendFile(path.join('dist', 'resizedImages', 'newicelandwaterfall'))
      ).toBeTruthy();
    });
  });
});

// 5 : newsantamonica.jpg
describe('Test the santamonica.jpg has resized and save in newsantamonica.jpg', () => {
  it('newsantamonica.jpg saved in /resizedImages ', () => {
    app.get('/', async (req, res) => {
      expect(
        res.sendFile(path.join('dist', 'resizedImages', 'newsantamonica'))
      ).toBeTruthy();
    });
  });
});
