/**
 * @author Adrian Mejia
 */

  
describe("TimezoneConvertor", function() {
  it("should load date.js", function() {
    expect(timezoneJS).toBeDefined();
    timezoneJS.timezone.zoneFileBasePath = 'public/tz';
	timezoneJS.timezone.init({async:false}); // need to be sync	
  });
  
  it("should have a ajax library", function() {
    expect($.ajax).toBeDefined();
  });
  
  describe("verify time zones offsets", function() {
  	var nyc;
  	var la;
  	var jp;
	
	nyc = new timezoneJS.Date(2012, 5, 14, 17, 30,'America/New_York');
	la = new timezoneJS.Date(2012, 5, 14, 14, 30,'America/Los_Angeles');
	jp = new timezoneJS.Date(2012,5,15,6,30,'Asia/Tokyo');		
    
    it("offset of 4 for NYC", function() {
    	var tz = nyc.getOffset();
		expect(tz).toEqual(4);  
    });
    
    it("should have an offset of 8 for LA", function() {
      var tz = la.getOffset();
      expect(tz).toEqual(7);
    });
    
    it("should have an offset of 8 for LA", function() {
      var tz = jp.getOffset();
      expect(tz).toEqual(-9);      
    });  	  		    
  });
  
});