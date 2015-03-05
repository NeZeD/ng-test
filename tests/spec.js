describe('Project homepage', function(){
	browser.get('http://localhost:9000');

	it('should have a casts list', function(){

		// find casts by discussions buttons
		var casts = element.all( by.className( 'discussion-open' ) );

		expect(casts.count()).toEqual(4);
	});

	it( 'should have cast on air', function(){

		var onAir = element( by.className( 'fa-play' ) );
	
		expect( onAir.isPresent() ).toBe( true );

	} );

	it( 'should have discussions', function(){
		var posts = element.all( by.className( 'fa-thumbs-o-up' ) );

		expect( posts.count() ).toBeGreaterThan( 0 );
	} );

	it( 'should open messages popover', function(){
		var msgBtn = element( by.css( '[bs-popover]' ) );
		msgBtn.click();

		var popover = element( by.className( 'popover' ) );
		expect( popover.isPresent() ).toBe( true );

		var msgs = element.all( by.css( '.popover .fa-circle-o, .popover .fa-circle' ) );
		expect( msgs.count() ).toBeGreaterThan( 0 );
	} );
});