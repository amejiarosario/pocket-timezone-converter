describe("test libraries", function(){
	
	it("jQuery library loaded", function(){
		expect($).toBeDefined();
	});
			
	it("timezoneJS library loaded", function(){
		expect(timezoneJS).toBeDefined();
	});
});

describe("date converter",function(){
	var nyc;
	var la;
	var jp;
	
	beforeEach(function(){
		// load files
		timezoneJS.timezone.zoneFileBasePath = '/tz';
		timezoneJS.timezone.init();
		
		nyc = new timezoneJS.Date(2012, 5, 14, 17, 30,'America/New_York');
		la = new timezoneJS.Date(2012, 5, 14, 14, 30,'America/Los_Angeles');
		jp = new timezoneJS.Date(2012,5,15,6,30,'Asia/Tokyo');
	});
	
	/*
	it("has the right timezone offset for new york", function(){
		var tz = nyc.getOffset();
		expect(tz).toEqual(5);
	});
	
	it("has the right timezone offset for L.A.", function(){
		var tz = la.getOffset();
		expect(tz).toEqual(8);
	});

	it("has the right timezone offset for Tokyo", function(){
		var tz = la.getOffset();
		expect(tz).toEqual(-9);
	});
	*/
});
