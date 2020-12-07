
		function vStack(...args) {
			let vstack=new Swift(args)
		vstack.init('div')
		.css({display:'flex',flexDirection:'column',height:'100%;',width:'100%'})

		return vstack
		}

		function hStack(...args) {

			let hstack=new Swift(args)
		hstack.init('div')
		.css({display:'flex',flexDirection:'row'})

		return hstack
		}

		function text(args) {
			let text=new Swift(args)
		text.init('p')
		text.css({margin:0,padding:0})
		return text
		}
		function h(args) {
			let h=new Swift(args)
		h.init('h2')
		h.css({margin:0,padding:0})
		return h
		}
		function input(opts,args) {
			let input=new Swift(args)
		input.init('input')
		input.css({margin:0,padding:'5px'})
		if(opts.type==='search') {
			input.attr({class:'searchBox'})
		} else if(opts.type==='checkbox') {
			input.attr({type:'checkbox'})
		} else if(opts.type==='text') {
			input.attr({type:'textBox'})
		}
		return input
		}

		function image(src,w) {
			let img=new Swift()
		img.init('img')
		src?img.attr({src:src}):'';
		w?img.css({width:w+'px'}):"";

		return img
		}
		function spacer() {
			let spc=new Swift()
			spc.init('div')
			spc.css({flex:1,height:'100%'})

			return spc
		}

		function header(...args) {
			let h=new Swift(args)
			h.init('div')
			.css({display:'flex',padding:'0px 12px',justifyContent:'space-between'})

			return h
		}
		function footer(...args) {
			let f=new Swift(args)
			f.init('div')
			.css({display:'flex',justifyContent:'space-around',background:'#333',color:'#fffa'})

			return f
		}
		function nav(...args) {
			let nav=new Swift(args)
			nav.init('nav')
			nav.css({display:'flex'})

			return nav
		}
		function Link(url,txt,...args) {
			let a=new Swift(args)
			a.init('a')
			.css({margin:'0px 12px'})
			a.attr({href:url})
			a.el.textContent=txt

			return a
		}
		function select(opts,...args) {
			let select=new Swift(args)
			select.init('select')
			select.css({})
			select.attr({name:opts.name||'',id:opts.id||''})
			select.el.onchange=(e) => {opts.action(e,select)}
			return select
		}
		function option(opts,val,...args) {
			let option=new Swift(args)
			option.init('option')
			option.css({})
			option.attr({value:opts.val})
			option.el.textContent=opts.val
						
			option.selected=function() {
			this.attr({selected:"true"})
		}

			if(opts.selected) {
				option.selected()
			}
			
			
			return option
		}
		function form(opts,...args) {
			let formel=new Swift(args)
			formel.init('form')
			formel.el.onsubmit=function(e) {
				e.preventDefault()
				let fdata=new FormData(this);
				opts.action(e,formel)
			}
			return formel
		}

		function button(opts,str,...args) {
			let sButton=new Swift(args)
			sButton.init('button')
			sButton.el.textContent=str
			sButton.css({cursor:"pointer"})
			sButton.el.onchange=(e) => {opts.action(e,sButton)}
			return sButton
		}
		function scrollable(type,...args) {
				let stack=new Swift(args)
			stack.init('div')
			.css({display:'flex',height:'100%;',width:'100%'})

			if(type==='vstack'||type==='vStack') {stack.css({flexDirection:'column',overflowY:'scroll'})}
			else if(type==='hstack'||type==='hStack') {stack.css({overflowX:'scroll'})}

				function addScroll(){
  var curYPos, curXPos, curDown;

  let ref=stack.el

  ref.addEventListener('mousemove', function(e){ 
    if(curDown){
      ref.scrollBy(curXPos - e.pageX, (curYPos - e.pageY)/4);
    }
  });

  ref.addEventListener('mousedown', function(e){ 
    curYPos = e.pageY; 
    curXPos = e.pageX; 
    curDown = true; 
  });

  ref.addEventListener('mouseup', function(e){ 
    curDown = false; 
  });
}
addScroll()

			return stack
		}