const saySomething = () => {
  alert("something from renderer.js");
};

setInterval(function() {
  function r(el, deg) {
    el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
  }
  var d = new Date()
  r(sec, 6*d.getSeconds())  
  r(min, 6*(d.getMinutes()%60) + d.getSeconds()/10)
  r(hour, 30*(d.getHours()%12) + d.getMinutes()/2)
}, 1000);