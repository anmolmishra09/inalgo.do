import React from "react";
import "./ImageGallery.css";

function ImageGallery(){

const projects = [
{
image:"https://images.pexels.com/photos/17325393/pexels-photo-17325393.jpeg",
title:"AI SaaS Platform",
tag:"Artificial Intelligence",
desc:"Automation workflows powered by custom AI agents.",
stats:"94% Efficiency"
},
{
image:"https://images.pexels.com/photos/7691733/pexels-photo-7691733.jpeg",
title:"FinTech Dashboard",
tag:"Analytics",
desc:"Real-time financial intelligence and forecasting.",
stats:"2M+ Events"
},
{
image:"https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg",
title:"Cloud Architecture",
tag:"Infrastructure",
desc:"Scalable distributed systems built for growth.",
stats:"99.99 Uptime"
},
{
image:"https://images.pexels.com/photos/5380597/pexels-photo-5380597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
title:"Cyber Security Suite",
tag:"Security",
desc:"Threat monitoring and enterprise protection.",
stats:"24/7 Defense"
},
{
image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
title:"Product Design System",
tag:"UI/UX",
desc:"Conversion-focused digital product experiences.",
stats:"+38% Retention"
},
{
image:"https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop",
title:"Mobile Ecosystem",
tag:"Apps",
desc:"Cross-platform products for millions of users.",
stats:"1M Downloads"
}
];

return(
<section className="showcase-section">

<div className="container">

<div className="showcase-header">
<span className="showcase-badge">
Software Portfolio
</span>

<h2>
Engineering Products That Scale
</h2>

<p>
From AI automation to cloud platforms, explore high-impact
software solutions crafted for growth and innovation.
</p>
</div>


<div className="showcase-stats">

<div className="stat-box">
<h3>120+</h3>
<p>Products Built</p>
</div>

<div className="stat-box">
<h3>35+</h3>
<p>Enterprise Clients</p>
</div>

<div className="stat-box">
<h3>99%</h3>
<p>Delivery Success</p>
</div>

</div>



<div className="showcase-grid">

{projects.map((project,index)=>(

<div className="project-card" key={index}>

<img
src={project.image}
alt={project.title}
/>

<div className="project-overlay">

<span className="project-tag">
{project.tag}
</span>

<h3>
{project.title}
</h3>

<p>
{project.desc}
</p>

<div className="project-footer">
<span>{project.stats}</span>
<button>
View Case Study →
</button>
</div>

</div>

</div>

))}

</div>

</div>

</section>
)

}

export default ImageGallery;