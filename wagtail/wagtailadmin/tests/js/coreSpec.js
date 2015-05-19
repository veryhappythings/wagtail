describe('escapeHtml', function(){

  it('should escape brackets', function() {
    expect(escapeHtml('<h1>')).toBe('&lt;h1&gt;');
  });

});

