let list=["Home","Explore","Bell","Mail"]
let urls=["./home.html","./about.html","./buy.html"]

let endpoint='https://dev.to/api/articles?username=';

let myref;

function getData(api) {
	fetch(api).then(d => d.json())
	.then(obj => {
		myref=obj
		render(homePageView(obj))
	})
}

function dummyAction(e,vNode) {
	let searchterm=vNode.el[0].value
	getData("https://dev.to/api/articles?username="+searchterm)
}


function render(node) {
	app.innerHTML=""
	app.appendChild(node.el)
}

const pageTitle="Search Dev.to for users"

function homePageView(datasource) {
	let homePage=vStack(
              header(
                     
                     vStack(
                            hStack(
                                   image("./assets/logo.gif").css({height:"40px",marginRight:'20px'}),
                                   text(pageTitle).css({fontWeight:700,fontSize:'1.2rem'})
                     ).css({alignItems:'center'}),
                            form({action:dummyAction},
                                 hStack(
                                        input({action:'',type:'text'}).attr({id:'searchv',name:'searchv',placeholder:'search users'}).css({flex:1}),
                                        button({action:dummyAction},'submit').css({marginLeft:'10px'})
                                 ).css({margin:"6px 0px"})
                                 )
                            )
                     ).css({justifyContent:'flex-start',alignItems:'center',borderBottom:'2px solid #1119'}),
              scrollable('vStack',
                     ...datasource.map(each => vStack(
                                                  hStack(
                                                         text(each.user.name).css({fontWeight:700,marginRight:'10px'}),
                                                         text(each.user.username).css({fontWeight:200,color:'#000a'}),
                                                         ),
                                                  text(each.created_at).css({fontSize:'.8rem'}),
                                                  text(each.title).css({padding:'8px 2px 0px 2px',color:'#666',fontSize:'.95rem'})
                                                ).css({border:'1px solid #1112',padding:'10px 12px'}))
                     ).css({overflowY:'scroll'}),
              spacer(),
              footer(
                     ...list.map(each => hStack(
                     image("./supermarket.png").css({height:"36px",padding:'3px',background:'rgba(50,50,60,.9)',boxSizing:'border-box'}),
                     text(String(each)).css({marginLeft:'5px'})
                     ).css({alignItems:'center'})
                     )
              ).css({minHeight:'40px',alignItems:'center'})
              )

	return homePage
}

getData(endpoint)