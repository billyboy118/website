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

var ctx = document.getElementById('myChart').getContext('2d');



   weights = [];
   date = [];


ab = d3.csv("weight.csv", function(data) {
  for (var i = 0; i < data.length; i++) {
    weights.push(parseFloat(data[i].Weight));
    let reformat = new Date(data[i].Date);
    date.push(reformat.toLocaleDateString());
  }

  myChart = new Chart(ctx, {
  
    type: 'line',
    data: {
        labels: date, 
        datasets: [{
            data: weights,
            borderWidth: 1,
        }],
    },
    options: {
      pan: {
        enabled: true,
        mode: "xy",
        speed: 1,
        threshold: 100,
      },
      zoom: {
        speed: 1,
        enabled: true,
        mode: "x",
      },
      responsive: true,
      legend: {
        display: false,
      },
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
                  min: 75,
                  max: 105,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Weight (Kg)',
                }
            }],
            xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Weigh in day',
                },
                ticks: {
                  maxTicksLimit: 10,
                  // fixedStepSize: 100,
                },
                
            }]
        }
   },
});
});
window.resetZoom = function() {
   window.myChart.resetZoom();
};
