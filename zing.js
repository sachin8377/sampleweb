var company={maruti:[],tata:[],mahindra:[]};
company.maruti=[
	{
		model:"swift",
		img:"swift.jpg",
	},
	{
		model:"vitara",
		img:"vitara.jpg",

	},
	{
		model:"maruti800",
        img :"800.jpg",
       
	},
	{
		model:"baleno",
		img:"baleno.jpg",
		
	}
];
company.tata=[
	{
	model:"sumo",
	img:"sumo.jpg",
	
	},
	{
		model:"safari",
		img:"safari.jpg",
		
	},
	{
		model:"hexa",
		img:"hexa.jpg",
		
	},
	{
		model:"indica",
		img:"indica.jpg",
		
	}
];
company.mahindra=[
	{
		model:"scorpio",
		img:"scorpio.jpg",
		
	},
	{
		model:"xuv",
		img:"xuv.jpg",
		
	},
	{
		model:"thar",
		img:"thar.jpg",
		
	},
	{
		model:"xylo",
		img:"xylo.jpg",
		
	}
];


function custom()
{
	var c=document.getElementById('cc').value;
    var he=document.getElementById('content');
	he.innerHTML="";
	for (var i = 0; i < company[c].length; i++)
	 {
	    var div=document.createElement('div');
	    var ig=document.createElement('img');
	    ig.src=company[c][i].img;
	    div.appendChild(ig);
	    var h=document.createElement('h3');
	    h.innerHTML=company[c][i].model;
	    div.appendChild(h);
	    he.appendChild(div);
	}
 };
     
   