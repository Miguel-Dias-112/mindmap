(this.webpackJsonpmindmap=this.webpackJsonpmindmap||[]).push([[0],[,,,,,,,function(e,t,o){e.exports=o.p+"static/media/edit.1010ae47.svg"},function(e,t,o){e.exports=o.p+"static/media/delete(1).e82e8055.svg"},function(e,t,o){e.exports=o.p+"static/media/download.44a7cc48.svg"},function(e,t,o){e.exports=o.p+"static/media/mais2.b8e42767.svg"},function(e,t,o){e.exports=o.p+"static/media/upload.18925198.svg"},function(e,t,o){e.exports=o.p+"static/media/reset2.7735a64d.svg"},function(e,t,o){e.exports=o.p+"static/media/conect.6c11ba04.svg"},function(e,t,o){e.exports=o.p+"static/media/reset.e6116f23.svg"},function(e,t,o){e.exports=o.p+"static/media/delete.66161689.svg"},function(e,t,o){e.exports=o.p+"static/media/mais.0175db1d.svg"},,function(e,t,o){},function(e,t,o){e.exports=o.p+"static/media/select_edit.dbfb673c.svg"},function(e,t,o){e.exports=o.p+"static/media/select_download.3743be15.svg"},function(e,t,o){e.exports=o.p+"static/media/select_delete.3bd9cc0e.svg"},function(e,t,o){e.exports=o.p+"static/media/conect2.d89502c5.svg"},function(e,t,o){},function(e,t,o){},function(e,t,o){e.exports=o.p+"static/media/Titulo2.e4856551.svg"},,function(e,t,o){e.exports=o.p+"static/media/snifer.79631e4b.svg"},function(e,t,o){e.exports=o(35)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var s=o(0),a=o.n(s),n=o(6),i=o.n(n),r=o(2),l=o(3),c=o(1),d=o(5),p=o(4),u=o(25),h=o.n(u),m=(o(18),o(7)),f=o.n(m),v=(o(19),o(20),o(21),o(10)),_=o.n(v),b=o(8),g=o.n(b),j=o(9),y=o.n(j),x=o(11),k=o.n(x),E=o(12),w=o.n(E),O=function(e){Object(d.a)(o,e);var t=Object(p.a)(o);function o(e){var s;return Object(r.a)(this,o),(s=t.call(this,e)).state={nome:"","n\xf3s":[],id:s.props.id,texto:"on"},s.corpo=a.a.createRef(),s.texto=a.a.createRef(),s.loca\u00e7\u00e3o=a.a.createRef(),s.edit=s.edit.bind(Object(c.a)(s)),s.remove=s.remove.bind(Object(c.a)(s)),s.download=s.download.bind(Object(c.a)(s)),s.seleciona=s.seleciona.bind(Object(c.a)(s)),s.click=s.click.bind(Object(c.a)(s)),s}return Object(l.a)(o,[{key:"seleciona",value:function(e){var t=document.getElementById("ul");this.setState({nome:this.props.nome});for(var o=this.corpo.current,s=this.props.projeto,a=this.state.id,n=this.texto.current,i=0;i<t.children.length;i++){var r=t.children[i];r.children[0].children[0].style="background-color:white",r.children[0].children[1].children[0].src=f.a,r.children[0].children[2].children[0].src=y.a,r.children[0].children[3].children[0].src=g.a,r.children[0].style.borderBottom="  1px solid rgba(210,210,210,2)"}void 0!=s&&s.id==a&&void 0!=n&&(n.style.color="#F99245",o.style.borderBottom=" 1px solid #F99245")}},{key:"click",value:function(){var e=this,t=this.props.Deus;null!=this.state.id&&(t.carregar_projeto(this.state.id),window.setTimeout((function(){e.seleciona()}),0))}},{key:"download",value:function(){var e,t=document.createElement("a"),o=(this.state.n\u00f3s,this.state.nome);console.log(this.props.projeto),e=JSON.stringify(this.props.projeto),console.log(e),t.href="data:attachment/text,"+encodeURI(e),t.target="_blank",t.download=o+".mmd",t.click()}},{key:"edit",value:function(e){var t=this.state.nome,o=this.texto.current;t=window.prompt("Novo nome"),o.innerText=t;var s=this.props.projetos;s[this.state.id].nome=t,console.log(s)}},{key:"remove",value:function(e){console.log("antes");var t=this.props.Deus;this.setState({id:null}),t.exclui_projeto(this.state.id)}},{key:"componentDidMount",value:function(){this.seleciona(!0)}},{key:"render",value:function(){var e=this.state.nome;return a.a.createElement("li",{ref:this.loca\u00e7\u00e3o,class:"files_li"},a.a.createElement("div",{onClick:this.click,ref:this.corpo,className:"files_div_list"},a.a.createElement("span",{ref:this.texto,className:"files_div_list_texto"},e),a.a.createElement("div",{onClick:this.edit,className:"files_div_list_btn"},"   ",a.a.createElement("img",{className:"files_div_list_img",src:y.a})),a.a.createElement("div",{onClick:this.download,className:"files_div_list_btn"},a.a.createElement("img",{className:"files_div_list_img",src:g.a})),a.a.createElement("div",{onClick:this.remove,className:"files_div_list_btn"}," ",a.a.createElement("img",{className:"files_div_list_img",src:f.a}))))}}]),o}(a.a.Component),D=function(e){Object(d.a)(o,e);var t=Object(p.a)(o);function o(e){var s;return Object(r.a)(this,o),(s=t.call(this,e)).filtrar=function(){var e,t,o;for(console.log("sa"),e=this.refs.input.value.toUpperCase(),t=this.refs.list.getElementsByTagName("li"),console.log(t),o=0;o<t.length;o++){var s=t[o].children[0].getElementsByTagName("span")[0];(s.textContent||s.innerText).toUpperCase().indexOf(e)>-1?t[o].style.display="":t[o].style.display="none"}},s.novo_projeto=function(){var e=window.prompt("novo s:"),t=s.props.Deus,o=t.cria_projeto(e);t.carregar_projeto(o),s.atualizar(s.props.projetos)},s.atualizar=function(e){var t=this;this.setState({projetos:[]}),window.setTimeout((function(){t.setState({projetos:e})}),10),console.log("atualizei")}.bind(Object(c.a)(s)),s.state={projetos:[],texto:"on"},s.upload=s.upload.bind(Object(c.a)(s)),s.novo_projeto=s.novo_projeto.bind(Object(c.a)(s)),s}return Object(l.a)(o,[{key:"clear",value:function(){this.props.Deus.resetar_projetos(),this.atualizar([])}},{key:"upload",value:function(){console.log("s"),console.log(this.props["cria_novoN\xf3"]);this.novo_projeto;var e=document.createElement("input");e.type="file",e.click(),e.onchange=function(e){this.props["cria_novoN\xf3"];var t=new FileReader;t.onload=function(){var e=t.result,o=JSON.parse(e),s=this.props.Deus.upar_projeto(o.nome,o.nos);console.log(o),this.props.Deus.carregar_projeto(s)}.bind(this),t.readAsText(e.target.files[0])}.bind(this)}},{key:"componentDidMount",value:function(){var e=this.props.projetos;this.setState({projetos:e}),this.props.amarra\u00e7\u00e3o(this.atualizar)}},{key:"componentDidUpdate",value:function(){this.props.projetos}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{class:"files_main"},a.a.createElement("div",{class:"files_div_h1"},a.a.createElement("span",{class:"files_h1"},"projetos:")),a.a.createElement("div",{class:"files_explorer"},a.a.createElement("ul",{id:"ul",ref:"list",class:"files_list"},this.state.projetos.map((function(t){return a.a.createElement(O,{Deus:e.props.Deus,nome:t.nome,projetos:e.state.projetos,projeto:e.props.projeto_selecionado,nos:t.nos,id:t.id})})))),a.a.createElement("div",{class:"files_tollbar"},this.props.test,a.a.createElement("div",{class:"files_bot\xe3o",onClick:function(){return e.novo_projeto()},style:{right:"0px"}},a.a.createElement("img",{class:"files_img",src:_.a})),a.a.createElement("div",{class:"files_bot\xe3o",onClick:this.upload.bind(this),style:{right:"40px"}},a.a.createElement("img",{class:"files_img",src:k.a})),a.a.createElement("div",{class:"files_bot\xe3o",onClick:this.clear.bind(this),style:{right:"80px"}},a.a.createElement("img",{class:"files_img",src:w.a})),a.a.createElement("input",{ref:"input",onKeyUp:function(){return e.filtrar()},class:"files_searchBar"})))}}]),o}(a.a.Component),I=o(13),C=o.n(I),S=(o(22),o(14)),z=o.n(S),N=o(15),T=o.n(N),M=(o(33),o(16)),B=o.n(M),U=o(26),H=o.n(U),R=(o(23),o(24),function(e){Object(d.a)(o,e);var t=Object(p.a)(o);function o(e){var s;return Object(r.a)(this,o),(s=t.call(this,e)).nova_conex\u00e3o=function(){document.getElementById("workbanch_main");var e=document.getElementById("canvas").getContext("2d");e.beginPath(),e.strokeStyle="#4169e1",e.fillStyle="#FF0000";var t=s.no_html.current,o=s.props.Deus.elementoInicial.current,a=parseInt(t.style.left.replace("px","")),n=parseInt(t.style.top.replace("px","")),i=t.offsetWidth/2,r=t.offsetHeight/2,l=[a+i,n+r];console.log(o.style.left);var c=parseInt(o.style.left.replace("px","")),d=(o.offsetWidth,parseInt(o.style.top.replace("px",""))),p=(o.offsetHeight,[c+i,d+r]),u=s.props.projeto_selecionado.nos,h=s.props.id;u.forEach((function(e){e.id==o.id&&e.conexoes.push(parseInt(h)),e.id==h&&e.conexoes.push(parseInt(o.id))})),console.log(l),console.log(p)},s.clear=function(){this.props.files[this.props.projeto_sel.index].n\u00f3s=[];var e=document.getElementById("workbanch_main"),t=e.children[0];t.getContext("2d").clearRect(0,0,t.width,t.height),e.innerHTML="",e.appendChild(t),console.log(e.children)},s.mouseefect=function(e){console.log(e),e.currentTarget.style.border="solid 1px royalblue"},s.mouseefect2=function(e){e.currentTarget.style.border="solid 1px white"},s.ver="",s.no_html=a.a.createRef(),s.drag=a.a.createRef(),s.state={value:!0,toolbar_mode:"select",click:"",elementos_conectados:[]},s.onmousedown=s.onmousedown.bind(Object(c.a)(s)),s.onmouseup=s.onmouseup.bind(Object(c.a)(s)),s.nova_conex\u00e3o=s.nova_conex\u00e3o.bind(Object(c.a)(s)),s}return Object(l.a)(o,[{key:"onmouseup",value:function(){this.props.Deus.seleciona_no(""),console.log("desleciona no")}},{key:"onmousedown",value:function(e){var t=this.props.toolbarmode,o=this.props.Deus,s=this.props.projeto_selecionado.nos,a=this.props.id;switch(t){case"select":o.seleciona_no(this.props.id),console.log("no selecionado"),console.log(this.props.id);break;case"delete ":var n=a;s.forEach((function(e){if(e.id==n){var t=s.indexOf(e);s.splice(t,1)}var o=e.conexoes,a=o.indexOf(n);console.log("conexoes"),console.log(a),console.log(o),-1!=a&&o.splice(a,1)})),o.carregar_projeto(this.props.id_proj),this.props.atualiza_toolbarmode("select");break;case"do_a_connection":if(console.log("sss"),""==o.elementoInicial)o.elementoInicial=this.no_html;else{this.nova_conex\u00e3o();var i=this.props.Deus.elementoInicial.current,r=this.no_html.current;this.props.desenhador(i,r),this.props.desenhador(r,i),this.props.atualiza_toolbarmode("select"),o.elementoInicial=""}}}},{key:"conection_mode",value:function(){this.setState({toolbar_mode:"do_a_connection"})}},{key:"delete_mode",value:function(){this.setState({toolbar_mode:"delete"})}},{key:"componentDidMount",value:function(){var e=this.props.texto,t=this.props.id,o=this.drag.current,s=document.getElementById(t),a=!1,n=!1;if(function(t){try{new URL(t);console.log("Valid URL!"),a=!0;var o=(s=e,H.a.ajax({type:"HEAD",url:s,async:!1}).status);200==o?(a=!1,n=!0):404==o&&(a=!0,n=!1)}catch(i){console.log("Invalid URL!")}var s}(e),n){var i=document.createElement("img");s.appendChild(i),i.src=e,i.className="img_No",o.style.backgroundColor="rgb(249, 146, 69)",s.style.borderColor="rgb(249, 146, 69)"}if(a)if(e.includes("www.youtube.com/watch?v=")){var r=document.createElement("img"),l=e.indexOf("?v="),c=e.indexOf("&",l),d=e.slice(l+3,c);-1==c&&(d=e.slice(l+3)),s.appendChild(r),console.log("http://img.youtube.com/vi/"+d+"/0.jpg"),r.src="http://img.youtube.com/vi/"+d+"/0.jpg",r.onclick=function(){var t=document.createElement("a");t.href=e,t.target="_blank",t.click()},o.style.backgroundColor="red",s.style.borderColor="red",r.className="img_No"}else{var p=document.createElement("a");p.href=e,s.appendChild(p),p.innerText=e,p.target="_blank",p.className="link_no"}if(0==n&&0==a){var u=document.createElement("textarea");u.style.border="none",s.appendChild(u),u.innerText=e}}},{key:"render",value:function(){return console.log(this.props.texto),a.a.createElement("div",{onMouseUp:this.onmouseup,ref:this.no_html,className:"n\xf3",id:this.props.id},a.a.createElement("div",{onMouseDown:this.onmousedown,className:"drag",ref:this.drag}))}}]),o}(a.a.Component)),W=function(e){Object(d.a)(o,e);var t=Object(p.a)(o);function o(e){var s;return Object(r.a)(this,o),(s=t.call(this,e)).pos=0,s.state={screenx:window.innerWidth,screeny:window.innerHeight,down:!1,pos:[],"n\xf3s":"",nos:[]},s.handleMouseMove=s.handleMouseMove.bind(Object(c.a)(s)),s.handleMouseUp=s.handleMouseUp.bind(Object(c.a)(s)),s.atualiza=s.atualiza.bind(Object(c.a)(s)),s}return Object(l.a)(o,[{key:"componentDidMount",value:function(){console.log("nos"),console.log(this.state.nos),this.props.amarra\u00e7\u00e3o(this.atualiza);var e=this.refs.canvas,t=(e.getContext("2d"),this.state.screeny-6*this.state.screeny/100);e.height=t,this.refs.workbanch.scrollTo(0,0),window.onresize=function(){this.state.screeny;this.setState({screenx:window.innerWidth,screeny:window.innerHeight}),this.refs.workbanch.scrollTo(0,0)}.bind(this)}},{key:"desenhaConexao",value:function(e,t){var o=this.refs.canvas.getContext("2d");o.beginPath(),o.strokeStyle="#4169e1",console.log("elemetnos"),console.log(e),console.log(t);var s=parseInt(e.style.left),a=parseInt(e.style.top),n=parseInt(t.style.left),i=parseInt(t.style.top),r=e.offsetWidth/2,l=e.offsetHeight/2,c=t.offsetWidth/2,d=t.offsetHeight/2,p=[parseInt(s+r),parseInt(a+l)],u=[parseInt(n+c),parseInt(i+d)],h=p[1]+u[1];o.moveTo(p[0],p[1]),o.lineTo(p[0],.5*h),o.stroke(),o.moveTo(p[0],.5*h),o.lineTo(u[0],.5*h),o.stroke(),o.moveTo(p[0],.5*h),o.lineTo(u[0],i[1]),o.stroke()}},{key:"handleMouseMove",value:function(e){var t=this,o=this.refs.canvas,s=this.props.projeto_selecionado;if(""!=this.props.nohtml_selecionado){var a=6*this.state.screeny/100,n=this.props.no_selecionado,i=document.getElementById(n),r=parseInt(e.nativeEvent.clientX)-50,l=e.nativeEvent.clientY,c=i.offsetWidth/2,d=l-a-i.offsetHeight/2,p=r-c;i.style.left=p+"px",i.style.top=d+"px";var u=o.getContext("2d");u.clearRect(0,0,o.width,o.height),u.beginPath(),this.pos={x:p,y:d},s.nos.forEach((function(e){var o=e.id,s=e.conexoes,a=document.getElementById(o);s.forEach((function(e){var o=document.getElementById(e);t.props.desenhador(a,o)}))}))}}},{key:"handleMouseUp",value:function(){var e=this,t=this.props.projeto_selecionado;"undefined"!==typeof t&&t.nos.forEach((function(o){o.id==e.props.no_selecionado&&(o.pos={x:e.pos.x,y:e.pos.y},console.log(t))}))}},{key:"atualiza",value:function(e){var t=this;this.state.nos;this.setState({nos:[]}),window.setTimeout((function(){t.setState({nos:e})}),1),console.log("reodei aqui"),console.log(e)}},{key:"render",value:function(){var e=this,t=this.state.screeny-6*this.state.screeny/100;return a.a.createElement("div",{ref:"workbanch",id:"workbanch_main",class:"workbanch_main",style:{height:t,width:this.state.screenx-372+"px"},className:"workbanch_main",onMouseUp:this.handleMouseUp,onMouseDown:this.down,onMouseMove:this.handleMouseMove},this.state.nos.map((function(t){return a.a.createElement(R,{seleciona_no:e.props.seleciona_no,projeto_selecionado:e.props.projeto_selecionado,atualiza_toolbarmode:e.props.atualiza_toolbarmode,Deus:e.props.Deus,toolbarmode:e.props.toolbarmode,id:t.id,desenhador:e.props.desenhador,id_proj:e.props.id_proj,texto:t.texto})})),a.a.createElement("canvas",{ref:"canvas",id:"canvas",class:"workbanch_canvas",height:t+"px",width:this.state.screenx-372+"px"}))}}]),o}(a.a.Component),P=function(e){Object(d.a)(o,e);var t=Object(p.a)(o);function o(e){var s;return Object(r.a)(this,o),(s=t.call(this,e)).nova_conex\u00e3o=function(e,t){var o=document.getElementById("workbanch_main").firstChild.getContext("2d");o.beginPath(),o.strokeStyle="#4169e1",e.conex\u00f5es.push([t.div,t.id]),t.conex\u00f5es.push([e.div,e.id]);var s=[parseInt(t.div.style.left.replace("px",""))+t.div.offsetWidth/2,parseInt(t.div.style.top.replace("px",""))+e.div.offsetHeight/2],a=[parseInt(e.div.style.left.replace("px",""))+e.div.offsetWidth/2,parseInt(e.div.style.top.replace("px",""))+t.div.offsetHeight/2];console.log(e.div.style.top+"|"+t.div.style.top),o.moveTo(s[0],s[1]),o.lineTo(a[0],a[1]),console.log("s"),o.stroke()},s.clear=function(){this.props.Deus.resetar_nos()},s.mouseefect=function(e){console.log(e),e.currentTarget.style.border="solid 1px royalblue"},s.mouseefect2=function(e){e.currentTarget.style.border="solid 1px white"},s.state={value:!0,toolbar_mode:"select",click:""},s.novo=s.novo.bind(Object(c.a)(s)),s.nova_conex\u00e3o=s.nova_conex\u00e3o.bind(Object(c.a)(s)),s}return Object(l.a)(o,[{key:"novo",value:function(e,t){document.getElementById("workbanch_main");this.props.Deus.criar_nos(e,[])}},{key:"conection_mode",value:function(){this.props.atualiza_toolbarmode("do_a_connection"),console.log("modo conexao")}},{key:"delete_mode",value:function(){this.props.atualiza_toolbarmode("delete ")}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{class:"toolbar_main"},a.a.createElement("div",{class:"toolbar_container"},a.a.createElement("div",{class:"toolbar_bot\xe3o",ref:"btn1",onClick:function(){return e.novo(window.prompt("novo n\xf3:"))},style:{top:"10px"}},a.a.createElement("img",{class:"toolbar_img",height:"28",width:"30",src:B.a})),a.a.createElement("div",{class:"toolbar_bot\xe3o",ref:"btn2",onClick:this.clear.bind(this),style:{top:"130px"}},a.a.createElement("img",{class:"toolbar_img",height:"28",width:"30",src:z.a})),a.a.createElement("div",{class:"toolbar_bot\xe3o",ref:"btn3",onClick:this.conection_mode.bind(this),style:{top:"90px"}},a.a.createElement("img",{class:"toolbar_img",height:"28",width:"30",src:C.a})),a.a.createElement("div",{class:"toolbar_bot\xe3o",ref:"btn4",onClick:this.delete_mode.bind(this),style:{top:"50px"}},a.a.createElement("img",{class:"toolbar_img",height:"28",width:"30",src:T.a}))))}}]),o}(a.a.Component),F=o(27),J=o.n(F),L=(o(34),function(e){Object(d.a)(o,e);var t=Object(p.a)(o);function o(e){var s;return Object(r.a)(this,o),(s=t.call(this,e)).resetar=!1,s.Deus={elementoInicial:"",upar_projeto:function(e,t){var o=this,s=this.state.projetos,a={nome:e,nos:t,id:this.state.lastid},n=0;return t.forEach((function(e){e<n&&(n=e.id+1)})),s.push(a),this.setState({projetos:s}),this.setState({lastid:this.state.lastid+1}),this.setState({noid:n}),this.setState({toolbarmode:"select"}),window.setTimeout((function(){o.atualizaNos(a.nos),o.atualizaProjetos(s)}),1),window.setTimeout((function(){o.Deus.carregar_projeto(a.id)}),2),this.state.lastid},resetar_projetos:function(){this.setState({projetos:[]})},exclui_projeto:function(e){var t=this,o=this.state.projetos;console.log("valores"),o.forEach((function(s){if(s.id==e){var a=o.indexOf(s),n=o.splice(a,1);t.setState({projetos:o}),t.setState({projeto_selecionado:null}),t.atualizaProjetos(o),console.log([s,o,n,e,a])}}))},cria_projeto:function(e){console.log("aqui");var t=this.state.projetos,o={nome:e,nos:[],id:this.state.lastid};return t.push(o),this.setState({projetos:t}),this.setState({lastid:this.state.lastid+1}),console.log(this.state.projetos),this.state.lastid},carregar_projeto:function(e){var t=this,o=this.state.projetos,s="",a=[];console.log([o,s,e]),o.forEach((function(n){if(n.id==e){a=(s=n).nos;var i=o.indexOf(s);t.setState({projeto_selecionado:i})}})),this.atualizaNos(a),window.setTimeout((function(){var e=document.getElementById("canvas"),o=e.getContext("2d"),s=e.width,n=e.height;o.clearRect(0,0,s,n);var i=0;a.forEach((function(e){var o=document.getElementById(e.id);o.style.left=e.pos.x+"px",o.style.top=e.pos.y+"px",console.log("htmlsssss"),console.log(o),i<e.id&&(i=e.id),e.conexoes.forEach((function(e){var s=document.getElementById(e);t.desenhador(o,s),t.desenhador(s,o)}))})),t.setState({noid:i+1})}),10)},resetar_nos:function(){var e=this.state.projetos;if(void 0!==e[this.state.projeto_selecionado]){e[this.state.projeto_selecionado].nos=[];this.setState({projetos:e}),this.setState({nos:[]}),this.atualizaNos([])}},criar_nos:function(e,t){var o=this.state.projeto_selecionado,s=this.state.noid,a=this.state.projetos;if(void 0!==a[o]){var n=this.state.projetos[o];a[o].nos.push({texto:e,conexoes:t,id:s,pos:{x:0,y:0}}),this.setState({noid:s+1}),this.setState({projetos:a}),this.setState({toolbarmode:"select"}),this.atualizaNos(n.nos),this.Deus.carregar_projeto(o)}},seleciona_no:function(e){this.setState({"n\xf3_selecionado":e}),console.log("aqui"),console.log(e)}},s.atualizaNos="",s.atualizaProjetos="",s.amarra\u00e7\u00e3o=function(e){this.atualizaNos=e,console.log(this.atualizaNos)},s.amarra\u00e7\u00e3o2=function(e){this.atualizaProjetos=e,console.log(this.atualizaNos)},s.atualiza_projetos=function(e,t){this.setState({projetos:e}),this.setState({projeto_selecionado:t})}.bind(Object(c.a)(s)),s.atualiza_toolbarmode=function(e){this.setState({toolbarmode:e}),console.log(this.state)}.bind(Object(c.a)(s)),s.atualiza_n\u00f3s=function(e){this.setState({projetos:e})}.bind(Object(c.a)(s)),s.mousemove="0",s.Deus.resetar_projetos=s.Deus.resetar_projetos.bind(Object(c.a)(s)),s.Deus.criar_nos=s.Deus.criar_nos.bind(Object(c.a)(s)),s.Deus.carregar_projeto=s.Deus.carregar_projeto.bind(Object(c.a)(s)),s.Deus.seleciona_no=s.Deus.seleciona_no.bind(Object(c.a)(s)),s.Deus.resetar_nos=s.Deus.resetar_nos.bind(Object(c.a)(s)),s.Deus.exclui_projeto=s.Deus.exclui_projeto.bind(Object(c.a)(s)),s.Deus.upar_projeto=s.Deus.upar_projeto.bind(Object(c.a)(s)),s.Deus.cria_projeto=s.Deus.cria_projeto.bind(Object(c.a)(s)),s.amarra\u00e7\u00e3o=s.amarra\u00e7\u00e3o.bind(Object(c.a)(s)),s.amarra\u00e7\u00e3o2=s.amarra\u00e7\u00e3o2.bind(Object(c.a)(s)),s.state={toolbarmode:"",projetos:[],projeto_selecionado:0,lastid:0,seleciona_no:"","cria_n\xf3":"","cria_conex\xe3o":"",nos:[],"n\xf3_selecionado":"",no_selecionado:"",noid:1},s}return Object(l.a)(o,[{key:"desenhador",value:function(e,t){var o=document.getElementById("canvas").getContext("2d");o.beginPath(),o.strokeStyle="#4169e1",console.log("elemetnos"),console.log(e),console.log(t);var s=parseInt(e.style.left),a=parseInt(e.style.top),n=parseInt(t.style.left),i=parseInt(t.style.top),r=e.offsetWidth/2,l=e.offsetHeight/2,c=t.offsetWidth/2,d=t.offsetHeight/2,p=[parseInt(s+r),parseInt(a+l)],u=[parseInt(n+c),parseInt(i+d)];console.log(u),console.log(p);var h=p[1]+u[1];o.moveTo(p[0],p[1]),o.lineTo(p[0],.5*h),o.stroke(),o.moveTo(p[0],.5*h),o.lineTo(u[0],.5*h),o.stroke(),o.moveTo(p[0],.5*h),o.lineTo(u[0],i[1]),o.stroke()}},{key:"componentDidMount",value:function(){var e=this,t=document.createElement("img");t.src=J.a,t.className="snifer",window.setInterval((function(){var o=e.state.projeto_selecionado,s=e.state.projetos,a=document.getElementById("workbanch_main"),n=s[o];console.log(s),void 0===n||null===n?a.contains(t)||a.appendChild(t):a.contains(t)&&a.removeChild(t)}),200)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.state.projetos[this.state.projeto_selecionado];return a.a.createElement("div",{ref:"app",className:"App"},a.a.createElement("div",{class:"blocker"},"resolu\xe7\xe3o n\xe3o suportada"),a.a.createElement("div",{class:"top"},a.a.createElement("img",{className:"img",src:h.a})),a.a.createElement("div",{class:"body2"},a.a.createElement(D,{mexemouse:this.mousemove,projetos:this.state.projetos,Deus:this.Deus,"amarra\xe7\xe3o":this.amarra\u00e7\u00e3o2,projeto_selecionado:e,atualizaProjetos:this}),a.a.createElement(W,{Deus:this.Deus,projeto_selecionado:e,id_proj:this.state.projeto_selecionado,nohtml_selecionado:this.state.n\u00f3_selecionado,no_selecionado:this.state.n\u00f3_selecionado,atualiza_toolbarmode:this.atualiza_toolbarmode,toolbarmode:this.state.toolbarmode,"amarra\xe7\xe3o":this.amarra\u00e7\u00e3o,desenhador:this.desenhador}),a.a.createElement(P,{"select_n\xf3":this.selocina_n\u00f3,"cria_novoN\xf3":this.atualiza_n\u00f3s,files:this.state.projetos,projeto_selecionado:e,Deus:this.Deus,atualiza_toolbarmode:this.atualiza_toolbarmode})))}}]),o}(a.a.Component));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null)),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.9488d124.chunk.js.map