// Get the button that opens the modal
var btn = document.querySelectorAll("a.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}


var reset = document.querySelectorAll("chartReset");

let a = [100, 97, 80, 75, 72, 70,100, 97, 80, 75, 72, 70,100, 97, 80, 75, 72, 70, 71, 72];
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: b,
        datasets: [{
            data: a,


            borderWidth: 1
        }]
    },


    options: {
      pan: {
         enabled: true,
         mode: "xy",
         speed: 5,
         threshold: 100,
        
       },
       zoom: {
      
         //threshold: 10,
         enabled: true,
         //drag: true,
         mode: "xy",
         limits: {
           max: 100,
           min: 5
         },
      },
      // responsive: true,
   //    legend: {
   //       display: false
   //   },
      title: {
         display: true,
         text: 'My Weight Over The Last Couple of Years',
         fontSize: 25,
         padding: 20,
         speed: 2,
       },
        scales: {
            yAxes: [{
                ticks: {
                    min: 50,
                    max: 110,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Weight',
                }
            }]
        }
   },


});

window.resetZoom = function() {
   window.myChart.resetZoom();
};