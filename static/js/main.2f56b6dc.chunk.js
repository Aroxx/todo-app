(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,function(e,t,n){e.exports={Item:"ListItem_Item__16uu1",Text:"ListItem_Text__30jaG",Checkbox:"ListItem_Checkbox__2lUXM",Complete:"ListItem_Complete__3Cy-T",Hidden:"ListItem_Hidden__29I0R"}},,,function(e,t,n){e.exports={Add:"AddButton_Add__2IS6I",Disabled:"AddButton_Disabled__ew23M"}},function(e,t,n){e.exports={Filter:"FilterList_Filter__2S_5k",Checkbox:"FilterList_Checkbox__8fTpv"}},function(e,t,n){e.exports={Todo:"Todo_Todo__2BFrb",Header:"Todo_Header__1manS"}},,,,function(e,t,n){e.exports={Controls:"ListControls_Controls__8ENam"}},function(e,t,n){e.exports={Close:"CloseButton_Close__e7Zsd"}},function(e,t,n){e.exports={List:"ListItems_List__2HQjf"}},,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),s=n.n(a),o=n(8),l=n.n(o),c=(n(21),n(3)),r=n(9),d=n(10),u=n(15),m=n(14),p=n(11),h=n.n(p),j=n(5),b=n.n(j),f=function(e){return e.inputValue.length>2?Object(i.jsx)("div",{className:b.a.Add,onClick:e.addItem,children:"Add"}):Object(i.jsx)("div",{className:b.a.Disabled,children:"Add"})},x=n(6),I=n.n(x),_=function(e){return Object(i.jsxs)("div",{className:I.a.Filter,children:[Object(i.jsx)("p",{children:"Display Only Active Items:"}),Object(i.jsx)("input",{className:I.a.Checkbox,type:"checkbox",onClick:e.clicked})]})},O=function(e){return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsxs)("div",{className:h.a.Controls,children:[Object(i.jsx)("input",{type:"text",value:e.inputValue,onChange:function(t){return e.changed(t)}}),Object(i.jsx)(f,{addItem:e.addItem,inputValue:e.inputValue})]}),Object(i.jsx)(_,{clicked:function(){return e.clicked()}})]})},g=n(2),C=n.n(g),v=n(12),y=n.n(v),k=function(e){return Object(i.jsx)("div",{className:y.a.Close,onClick:e.deleteItem})},w=function(e){var t=null;return t=e.complete&&e.activeOnly?[C.a.Hidden,C.a.Item].join(" "):e.complete?[C.a.Complete,C.a.Item].join(" "):C.a.Item,Object(i.jsxs)("div",{className:t,children:[Object(i.jsx)("input",{className:C.a.Checkbox,type:"checkbox",id:e.id,onClick:e.toggleCompletion}),Object(i.jsx)("p",{className:C.a.Text,children:e.name}),Object(i.jsx)(k,{deleteItem:e.deleteItem})]},e.id)},H=n(13),A=n.n(H),L=function(e){return Object(i.jsx)("div",{className:A.a.List,children:e.items.map((function(t,n){return Object(i.jsx)(w,{id:t.id,name:t.name,complete:t.complete,activeOnly:e.activeOnly,deleteItem:function(){return e.deleteItem(n)},toggleCompletion:function(){return e.toggleCompletion(t.id)}},t.id)}))})},N=n(7),T=n.n(N),S=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).inputChangedHandler=function(e){i.setState({newInputItem:e.target.value})},i.addItemHandler=function(){var e={id:Math.floor(1e8*Math.random()),complete:!1,name:i.state.newInputItem},t=[].concat(Object(c.a)(i.state.items),[e]);i.setState({items:t,newInputItem:""})},i.deleteItemHandler=function(e){var t=Object(c.a)(i.state.items);t.splice(e,1),i.setState({items:t})},i.toggleCompletionHandler=function(e){var t=Object(c.a)(i.state.items);t.forEach((function(t){t.id===e&&(t.complete=!t.complete)})),i.setState({items:t})},i.toggleFilterHandler=function(){i.setState((function(e){return{filterActiveOnly:!e.filterActiveOnly}}))},i.state={items:[{id:0,complete:!1,name:'"Many a false step was made by standing still." - Fortune Cookie'},{id:1,complete:!1,name:'"Your mind will take the shape of what you frequently hold in thought." - Marcus Aurelius'},{id:2,complete:!1,name:"\"In the beginner's mind there are many possibilities; In the expert's, there are few.\" - Zen Master Shunryu Suzuki"},{id:3,complete:!1,name:"Thisisareallylongstringthatlikestocauseheadachesandgenerallyjustruinyourhappinesswhenstylingwithcss"},{id:4,complete:!1,name:"\"To a disciple who was forever complaining about others, the Master said, 'If it is peace you want, seek to change yourself, not other people. It is easier to protect your feet with slippers than to carpet the whole of the earth.'\u201d - Anthony de Mello"}],newInputItem:"",filterActiveOnly:!1},i}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:T.a.Todo,children:[Object(i.jsx)("div",{className:T.a.Header,children:"TODO List"}),Object(i.jsx)(L,{items:this.state.items,deleteItem:this.deleteItemHandler,toggleCompletion:this.toggleCompletionHandler,activeOnly:this.state.filterActiveOnly}),Object(i.jsx)(O,{inputValue:this.state.newInputItem,changed:this.inputChangedHandler,addItem:this.addItemHandler,clicked:this.toggleFilterHandler})]})}}]),n}(a.Component);var F=function(){return Object(i.jsx)(S,{})};l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.2f56b6dc.chunk.js.map