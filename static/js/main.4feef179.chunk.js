(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={feedback__statsList:"Statistics_feedback__statsList__6LCe4",positive:"Statistics_positive__cwiix",negative:"Statistics_negative__1r20W"}},,function(e,t,n){e.exports={feedback__buttons:"FeedbackOptions_feedback__buttons__2g9SA",feedback__button:"FeedbackOptions_feedback__button__bpSXP"}},,,function(e,t,n){e.exports={container:"Feedback_container__1qRlv"}},function(e,t,n){e.exports={title:"Section_title__1IKP8"}},function(e,t,n){e.exports={message:"Notification_message__rVcTV"}},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(9),i=n.n(s),o=(n(18),n(19),n(2)),r=n(3),b=n(5),d=n(4),l=(n(20),n(10)),u=n(11),j=n.n(u),f=n(8),h=n.n(f),p=n(0),_=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(p.jsx)("div",{className:h.a.feedback__buttons,children:t.map((function(e){return Object(p.jsx)("button",{className:h.a.feedback__button,type:"button",onClick:function(){return n(e)},children:e},e)}))})},v=n(6),O=n.n(v),g=function(e){var t=e.values,n=e.totalCount,a=e.percentage;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("ul",{className:O.a.feedback__statsList,children:[Object(p.jsxs)("li",{children:["Good: ",t.good]}),Object(p.jsxs)("li",{children:["Neutral: ",t.neutral]}),Object(p.jsxs)("li",{children:["Bad: ",t.bad]}),Object(p.jsxs)("li",{children:["Total: ",n]}),Object(p.jsxs)("li",{children:["Positive feedback:"," ",Object(p.jsxs)("span",{className:a>=50?O.a.positive:O.a.negative,children:[a,"%"]})]})]})})},k=n(12),x=n.n(k),m=function(e){var t=e.title,n=void 0===t?"":t,a=e.children;return Object(p.jsxs)(p.Fragment,{children:[n&&Object(p.jsx)("h2",{className:x.a.title,children:n}),a]})},F=n(13),P=n.n(F),N=function(e){var t=e.message;return Object(p.jsx)("p",{className:P.a.message,children:t})},S=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.options=Object.keys(e.state),e.handleIncrement=function(t){e.setState((function(e){return Object(l.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:j.a.container,children:[Object(p.jsx)(m,{title:"Please leave feedback",children:Object(p.jsx)(_,{options:this.options,onLeaveFeedback:this.handleIncrement})}),Object(p.jsx)(m,{title:"Statistics",children:this.countTotalFeedback()>0?Object(p.jsx)(g,{values:this.state,totalCount:this.countTotalFeedback(),percentage:this.countPositiveFeedbackPercentage()}):Object(p.jsx)(N,{message:"No feedback given"})})]})}}]),n}(a.Component);S.defaultProps={good:0,neutral:0,bad:0};var y=S,C=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=(e.good,e.neutral,e.bad);return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(y,{defaultProps:t})})})}}]),n}(a.Component),L=C,T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root")),T()}],[[22,1,2]]]);
//# sourceMappingURL=main.4feef179.chunk.js.map