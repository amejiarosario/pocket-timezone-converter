describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should load the libraries", function(){
  	var tuMadrina;
  	expect(player).toBeDefined();
  	expect(song).toBeDefined();
  	expect(timezoneJS).toBeDefined();
  	expect($).toBeDefined();
  	expect(tuMadrina).toBeUndefined();
  });
  
  it("should have ajax available", function(){
  	expect($.ajax).toBeDefined();
  });
  /*
  it("should load the rules", function(){
  	//timezoneJS.timezone.zoneFileBasePath = '/tz';
  	//timezoneJS.timezone.init();
  });
  */

it("has the right timezone offset for new york", function() {
	timezoneJS.timezone.zoneFileBasePath = '/public/tz';
  	timezoneJS.timezone.init({ async: false });
	var nyc = new timezoneJS.Date(2012, 5, 14, 17, 30,'America/New_York');
	var tz = nyc.getOffset();
	expect(tz).toEqual(4);
});



  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrow("song is already playing");
    });
  });
});