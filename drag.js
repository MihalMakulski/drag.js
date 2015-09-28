function drag(el, dropzoneElArr){
  el.addEventListener('mousedown', function(e){
    el.style.position = "relative";   
    var startX, startY;
    var rectEl = el.getBoundingClientRect();
    startX = rectEl.left;
    startY = rectEl.top;
    el.classList.add('dragged');  
    el.onmousemove = function(e){ 
     for(i=0; i<dropzoneElArr.length; i++){   
      var rectDropzone = dropzoneElArr[i].getBoundingClientRect();   
      var over = (e.clientX > rectDropzone.left) && (e.clientY > rectDropzone.top);
      var leave = (e.clientX < rectDropzone.left + rectDropzone.width) && (e.clientY  < rectDropzone.top + rectDropzone.height);       
      el.style.left = e.clientX - startX - rectEl.width / 2 + "px";
      el.style.top = e.clientY - startY - rectEl.height / 2 + "px";
      if( over && leave ){
         dropzoneElArr[i].classList.add('active');        
      }else {
         dropzoneElArr[i].classList.remove('active');
      }        
     }
    }; 
    el.onmouseup = function(e){
     for(i=0; i<dropzoneElArr.length; i++){   
      if (dropzoneElArr[i].classList.contains('active')){  
        el.style.position = "static";
        el.style.left = "";
        el.style.top = "";
        dropzoneElArr[i].appendChild(el); 
        dropzoneElArr[i].classList.remove('active');     
      } else {
          el.style.position = "static";
          el.style.left = "";
          el.style.top = "";      
      }   
      el.onmousemove = null;
      el.classList.remove('dragged');
     }
    };
  }, false);
}