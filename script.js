var draggables1 = document.querySelectorAll('.myDiv'),
	draggables2 = document.querySelectorAll('.myCirc'),
	special = document.getElementById('special'),
	zone1 = document.querySelector('.dropzone1'),
	zone2 = document.querySelector('.dropzone2'),
	zones = document.querySelectorAll('.dropzone'),
	ol = document.querySelector('ol'),
	ul = document.querySelector('ul'),
	li = document.querySelectorAll('li');

for(i=0;i<draggables1.length;i++){
    drag(draggables1[i], [ zone1, zone2 ]);
}

for(i=0;i<draggables2.length;i++){
    drag(draggables2[i], zones);
}

drag(special, [ zone2 ]);

for(i=0;i<li.length;i++){
    drag(li[i], [ ul, ol ]);
}