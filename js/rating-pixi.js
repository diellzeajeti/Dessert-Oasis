// Initializing PIXI Application
let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    transparent: true
  });
  document.getElementById('video-container').appendChild(app.view);
  
  const videoPath = './img/rating-video.mp4'; 
  const videoTexture = PIXI.Texture.from(videoPath);
  
  const videoSprite = new PIXI.Sprite(videoTexture);
  videoSprite.width = app.screen.width;
  videoSprite.height = app.screen.height;
  app.stage.addChild(videoSprite);
  
  // PIXI Blur filter
  const blurFilter = new PIXI.filters.BlurFilter();
  blurFilter.blur = 5; 
  videoSprite.filters = [blurFilter];
  
  // Video autoplay 
  videoTexture.baseTexture.resource.source.loop = true;
  videoTexture.baseTexture.resource.source.muted = true;
  videoTexture.baseTexture.resource.source.play();
  
  // Window resize
  window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    videoSprite.width = app.screen.width;
    videoSprite.height = app.screen.height;
  });
  