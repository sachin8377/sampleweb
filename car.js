
 var select = document.getElementById("selectmodel");
var car = {
	"maruti": [], 
	"tata": [], 
	"mahindra": [], 
};


car.maruti.push({
	model: '800',
	image: 'url()',
	color: 'blue',
});
car.maruti.push({
	model:'swift',
	image:'',
	color:'red',
});
car.tata.push({
	model:'sumo',
	image:'',
	color:'red',
});

car.tata.push({
	model:'safari',
	image:'',
	color:'white'
});
car.mahindra.push({  
	model:scorpio,
	image:'',
	color:'black',
});

for(maruti in car) {
    var opt = car[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);

}

function dynamic(){
    var output = document.getElementById('output');
    var i=1;
    var val="";
    while(i<=car.length)
    {

        if(!document.getElementById('timedrpact'+i))
        {
            var ele = document.createElement("div");
            ele.setAttribute("id","timedrpact"+i);
            ele.setAttribute("class","inner");
            ele.innerHTML="<img src= cc.jpg>"+i;
            output.appendChild(ele);
            
        }
        i++;
        

    }
};