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
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let c = ['jan', 'feb', 'march', 'april', 'may', 'jan', 'feb', 'march', 'april', 'may', 'jan', 'feb', 'march', 'april', 'may','jan', 'feb', 'march', 'april', 'may'];
let z = ['2020/2/11', '12/2/2020', '13/3/2020', '19/5/2021', '30/7/2021','11/2/2020', '12/2/2020', '13/3/2020', '19/5/2021', '30/7/2021','11/2/2020', '12/2/2020', '13/3/2020', '19/5/2021', '30/7/2021','11/2/2020', '12/2/2020', '13/3/2020', '19/5/2021', '30/7/2021']
let p = ['2020/2/11', '2020/2/15', '2020/3/11','2020/3/19','2020/4/11','2020/4/19','2020/5/11','2020/5/29','2020/7/11','2020/8/11','2020/2/11', '2021/2/15','2021/3/11','2021/3/19','2021/4/11','2021/4/19','2021/5/11','2021/5/29','2021/7/11','2021/8/11']

let dates = [];

for (var i = 0; i < 20; i++) {
  let a = new Date(p[i]);
  a = a.toLocaleDateString()
  dates.push(a);
};

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates, 
        datasets: [{
            data: a,
            borderWidth: 1
        }],
    },
    options: {
      pan: {
        enabled: true,
        mode: "xy",
        speed: .5,
        threshold: 100,
      },
      zoom: {
        speed: .5,
        enabled: true,
        mode: "x",
          // limits: {
          //   max: 110,
          //   min: 10,
          // },
      },
      responsive: true,
      legend: {
        display: false
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
                  min: 50,
                  max: 110,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Weight',
                }
            }],
        }
   },
});
window.resetZoom = function() {
   window.myChart.resetZoom();
};