import React from "react";
import "./HubVisualization.css";

const nodes = [
{id:"trigger",label:"Create User",sub:"form submission",x:80,y:260,type:"trigger"},
{id:"agent",label:"AI Agent",sub:"Tools Agent",x:320,y:260,type:"agent"},
{id:"condition",label:"Is a manager?",sub:"",x:570,y:260,type:"decision"},
{id:"slack1",label:"Add to channel",sub:"Invite channel",x:760,y:150,type:"slack"},
{id:"slack2",label:"Update profile",sub:"updateProfile user",x:760,y:350,type:"slack"},
{id:"llm",label:"Anthropic",sub:"Chat Model",x:180,y:500,type:"tool"},
{id:"memory",label:"Postgres",sub:"Chat Memory",x:320,y:500,type:"tool"},
{id:"entra",label:"Microsoft Entra",sub:"ID",x:510,y:500,type:"tool"},
{id:"jira",label:"Jira",sub:"Software",x:650,y:500,type:"tool"}
];

const connections = [
["trigger","agent"],
["agent","condition"],
["condition","slack1"],
["condition","slack2"],
["agent","llm"],
["agent","memory"],
["agent","entra"],
["agent","jira"]
];

function Node({node}) {
return(
<div
className={`flow-node ${node.type}`}
style={{
left:node.x,
top:node.y
}}
>
<div className="node-icon">
{node.type==="trigger" && "⚡"}
{node.type==="agent" && "🤖"}
{node.type==="decision" && "⚙"}
{node.type==="slack" && "💬"}
{node.type==="tool" && "◈"}
</div>

<div className="node-text">
<h4>{node.label}</h4>
<p>{node.sub}</p>
</div>

</div>
)
}

export default function HubVisualization(){
return(
<section className="workflow-section">

<div className="workflow-heading">
<span className="workflow-badge">
AI Workflow Automation
</span>

<h2>Build Intelligent Agent Flows</h2>

<p>
Automated orchestration with AI agents,
tools, memory and enterprise integrations.
</p>
</div>

<div className="workflow-responsive">

<div className="workflow-canvas">

<svg viewBox="0 0 1000 650" className="flow-svg">

{connections.map((c,i)=>{
const from=nodes.find(n=>n.id===c[0]);
const to=nodes.find(n=>n.id===c[1]);

const x1=from.x+90;
const y1=from.y+35;

const x2=to.x;
const y2=to.y+35;

const curve=`
M ${x1} ${y1}
C ${x1+90} ${y1},
${x2-90} ${y2},
${x2} ${y2}
`;

return(
<g key={i}>
<path
d={curve}
className={`flow-line ${i>=4 ? "dashed flow-animate" : "flow-animate"}`}
/>

<circle r="4" className="data-pulse">
<animateMotion
dur="3s"
repeatCount="indefinite"
path={curve}
/>
</circle>

</g>
)
})}

</svg>

{nodes.map(node=>(
<Node key={node.id} node={node}/>
))}

<div className="workflow-responsive">
   <div className="workflow-canvas">

   </div>
</div>

</div>
</div>

</section>
)
}