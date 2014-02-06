describe("Keyboard Support Tests", function() {
  var slider;

  describe("For horizontal sliders where its handle has focus", function() {
    it("moves to the left by the 'step' value when the LEFT arrow key is pressed", function() {
      
    });
    it("moves to the right by the 'step' value when the RIGHT arrow key is pressed", function() {
      
    });
    it("moves to the left by the 'step' value when the DOWN arrow key is pressed", function() {

    });
    it("moves to the right by the 'step' value when the UP arrow key is pressed", function() {

    });
  });

  describe("For vertical sliders where its handle has focus", function() {
    it("moves down by the 'step' value when the LEFT arrow key is pressed", function() {

    });
    it("moves up by the 'step' value when the RIGHT arrow key is pressed", function() {

    });
    it("moves down by the 'step' value when the DOWN arrow key is pressed", function() {

    });
    it("moves up by the 'step' value when the UP arrow key is pressed", function() {

    });
  });

  afterEach(function() {
    if(slider) { slider.slider('destroy'); }
  });
});