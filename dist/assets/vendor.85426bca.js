function v(){}function j(t){return t()}function S(){return Object.create(null)}function i(t){t.forEach(j)}function O(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let d;function L(t,e){return d||(d=document.createElement("a")),d.href=e,t===d.href}function P(t){return Object.keys(t).length===0}function Q(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function q(t){t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function V(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function B(t){return document.createTextNode(t)}function W(){return B(" ")}function X(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function M(t){return Array.from(t.childNodes)}function Y(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let p;function f(t){p=t}const l=[],A=[],_=[],N=[],T=Promise.resolve();let y=!1;function z(){y||(y=!0,T.then(C))}function $(t){_.push(t)}const b=new Set;let h=0;function C(){const t=p;do{for(;h<l.length;){const e=l[h];h++,f(e),D(e.$$)}for(f(null),l.length=0,h=0;A.length;)A.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];b.has(n)||(b.add(n),n())}_.length=0}while(l.length);for(;N.length;)N.pop()();y=!1,b.clear(),f(t)}function D(t){if(t.fragment!==null){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}const F=new Set;function G(t,e){t&&t.i&&(F.delete(t),t.i(e))}function H(t,e,n,o){const{fragment:c,on_mount:m,on_destroy:a,after_update:g}=t.$$;c&&c.m(e,n),o||$(()=>{const u=m.map(j).filter(O);a?a.push(...u):i(u),t.$$.on_mount=[]}),g.forEach($)}function I(t,e){const n=t.$$;n.fragment!==null&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){t.$$.dirty[0]===-1&&(l.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,n,o,c,m,a,g=[-1]){const u=p;f(t);const r=t.$$={fragment:null,ctx:null,props:m,update:v,not_equal:c,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:S(),dirty:g,skip_bound:!1,root:e.target||u.$$.root};a&&a(r.root);let x=!1;if(r.ctx=n?n(t,e.props||{},(s,k,...w)=>{const E=w.length?w[0]:k;return r.ctx&&c(r.ctx[s],r.ctx[s]=E)&&(!r.skip_bound&&r.bound[s]&&r.bound[s](E),x&&J(t,s)),k}):[],r.update(),x=!0,i(r.before_update),r.fragment=o?o(r.ctx):!1,e.target){if(e.hydrate){const s=M(e.target);r.fragment&&r.fragment.l(s),s.forEach(q)}else r.fragment&&r.fragment.c();e.intro&&G(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),C()}f(u)}class tt{$destroy(){I(this,1),this.$destroy=v}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}$set(e){this.$$set&&!P(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{tt as S,W as a,V as b,X as c,Y as d,U as e,L as f,R as g,Q as h,Z as i,q as j,v as n,K as s,B as t};
