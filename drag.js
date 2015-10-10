function drag(el, dropzoneElArr){

  var startX, startY, rectEl;

  function startDrag(ev) {
    rectEl = el.getBoundingClientRect()
    el.style.position = "relative";   
    startX = rectEl.left;
    startY = rectEl.top;
    el.classList.add('dragged');  
    el.addEventListener('mousemove', dragged, false);
  }

  function dragged(ev) {
    for(i=0; i<dropzoneElArr.length; i++){   
      var rectDropzone = dropzoneElArr[i].getBoundingClientRect();   
      var over = (ev.clientX > rectDropzone.left) && (ev.clientY > rectDropzone.top);
      var leave = (ev.clientX < rectDropzone.left + rectDropzone.width) && (ev.clientY  < rectDropzone.top + rectDropzone.height);       
      el.style.left = ev.clientX - startX - rectEl.width / 2 + "px";
      el.style.top = ev.clientY - startY - rectEl.height / 2 + "px";
      if( over && leave ){
         dropzoneElArr[i].classList.add('active');        
      }else {
         dropzoneElArr[i].classList.remove('active');
      }        
    }
  }

  function endDrag(ev){
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
      el.classList.remove('dragged');
      el.removeEventListener('mousemove', dragged, false);
    }
  }

  el.addEventListener('mousedown', startDrag, false);
  el.addEventListener('mouseup', endDrag, false);

}