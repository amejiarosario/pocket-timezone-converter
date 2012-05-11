describe("Timezone Convertor Pluggin", function() {
	describe("libraries loaded properly", function() {
		it("should be loaded along with timezoneJS", function() {
			expect(timezoneJS).toBeDefined();
			//expect(target).toBeDefined();
		});
	});
	describe("plugin convertion", function() {
		var nyc, fl, ks, ut, la; // U.S. time zones
		var dr, br, sp, moscow, mumbai, jp, sydney; // elsewhere  
		beforeEach(function() {
			nyc = new timezoneJS.Date(2012, 5, 14, 17, 30, 'America/New_York');
			la = new timezoneJS.Date(2012, 5, 14, 14, 30, 'America/Los_Angeles');
			jp = new timezoneJS.Date(2012, 5, 15, 6, 30, 'Asia/Tokyo');
		});
		it("should convert from nyc to tokyo", function() {
			var tzdt = nyc.convertTo('Asia/Tokyo');
			expect(tzdt.toString()).toEqual(jp.toString());
		});
	});
	
}); 