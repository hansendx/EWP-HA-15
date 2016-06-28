//posterW = $("#poster").width();

//console.log(posterW);
//$("#PosterTooltipText").width(posterW);


$("#GitTable").DataTable({
	"ajax": "befehle.json",
	"columns":
	[
		{"data": "befehl"},
		{"data": "funktion"}
	],
	"aLengthMenu": [[5], [5]],
	"iDisplayLength": 5
});

/* $.fn.tooltipster('setDefaults', {
	 	   position: 'bottom'
	  });
*/


$(".gitclone").tooltipster(
		{
			content: 'git clone https://github.com/hansendx/EWP-HA-15.git' ,
			position: 'right'
		}			
);

$(".gitadd").tooltipster(
		{
			content: 'git add myscipt.js',
			position: 'right'
		}			
);

$(".gitcommit").tooltipster(
		{
			content: 'git commit -am"first commit"',
			position: 'right'
		}			
);

$(".gitpull").tooltipster(
		{
			content: 'git pull',
			position: 'right'
		}			
);

$(".gitpush").tooltipster(
		{
			content: 'git push',
			position: 'right'
		}			
);
