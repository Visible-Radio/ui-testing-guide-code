import{r as R}from"./index-76fb7be0.js";import{P as a}from"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";var b={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=R,q=Symbol.for("react.element"),O=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,C=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,s){var r,i={},o=null,c=null;s!==void 0&&(o=""+s),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)j.call(t,r)&&!K.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:q,type:e,key:o,ref:c,props:i,_owner:C.current}}m.Fragment=O;m.jsx=N;m.jsxs=N;b.exports=m;var n=b.exports;function h({task:{id:e,title:t,state:s},onArchiveTask:r,onTogglePinTask:i,onEditTitle:o}){return n.jsxs("div",{className:`list-item ${s}`,role:"listitem","aria-label":`task-${e}`,children:[n.jsxs("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[n.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:s==="TASK_ARCHIVED"}),n.jsx("span",{className:"checkbox-custom",onClick:()=>r("ARCHIVE_TASK",e),role:"button","aria-label":`archiveButton-${e}`})]}),n.jsx("label",{htmlFor:"title","aria-label":t,className:"title",children:n.jsx("input",{type:"text",value:t,name:"title",placeholder:"Input title",style:{textOverflow:"ellipsis"},onChange:c=>o(c.target.value,e)})}),s!=="TASK_ARCHIVED"&&n.jsx("button",{className:"pin-button",onClick:()=>i(s,e),id:`pinTask-${e}`,"aria-label":s==="TASK_PINNED"?"unpin":"pin",children:n.jsx("span",{className:"icon-bell"})},`pinTask-${e}`)]})}h.propTypes={task:a.shape({id:a.string.isRequired,title:a.string.isRequired,state:a.string.isRequired}),onArchiveTask:a.func.isRequired,onTogglePinTask:a.func.isRequired,onEditTitle:a.func.isRequired};h.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!0},onTogglePinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!0},onEditTitle:{description:"Event to change the task title",type:{name:"func"},required:!0}}};const H={component:h,title:"Task",argTypes:{onArchiveTask:{action:"onArchiveTask"},onTogglePinTask:{action:"onTogglePinTask"},onEditTitle:{action:"onEditTitle"}}},l={args:{task:{id:"1",title:"Buy milk",state:"TASK_INBOX"}}},p={args:{task:{id:"2",title:"QA dropdown",state:"TASK_PINNED"}}},d={args:{task:{id:"3",title:"Write schema for account menu",state:"TASK_ARCHIVED"}}},w="This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!",u={args:{task:{id:"4",title:w,state:"TASK_INBOX"}}};var k,T,g;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Buy milk',
      state: 'TASK_INBOX'
    }
  }
}`,...(g=(T=l.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var f,_,v;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    task: {
      id: '2',
      title: 'QA dropdown',
      state: 'TASK_PINNED'
    }
  }
}`,...(v=(_=p.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var x,y,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    task: {
      id: '3',
      title: 'Write schema for account menu',
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(A=(y=d.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var E,I,S;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    task: {
      id: '4',
      title: longTitleString,
      state: 'TASK_INBOX'
    }
  }
}`,...(S=(I=u.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const L=["Default","Pinned","Archived","LongTitle"];export{d as Archived,l as Default,u as LongTitle,p as Pinned,L as __namedExportsOrder,H as default};
