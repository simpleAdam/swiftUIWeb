let {Swift,,StyledComponent} = require('./base.js')

it('imports with require',() => {
	let divView=new Swift();
	divView.init('div')
	expect(divView.el.tagName).toBe('DIV')
})