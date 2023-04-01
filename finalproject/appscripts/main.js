
alert(welcomeGuest())

function welcomeGuest() {
  let name;
   let guest = prompt("Hello. Please enter your name:", "");
    if (guest == "") {
      name = "Reader";
    } else {
      name = guest;
    }
    return document.getElementById("welcome").innerHTML = "Welcome " + name + ". Let's talk about diversity in fashion." }

  //function for onscroll runway
  function runwayOnscroll() {
    document.getElementById("scroll1").innerHTML = "RUNWAY"}
   // document.getElementById("bg-text").style.visibility = "visible";
  //};
    //if (document.body.scrollTop > 50) {
      //document.getElementById("bg-text").innerHTML = "RUNWAY";
   // } else {
      //document.getElementById("bg-text").innerHTML = "o";
   // }
 //};
  //document.getElementById("scroll1").addEventListener("scroll", runwayOnscroll)
  //document.getElementById("bg-text").innerHTML = "RUNWAY"


 //graphs

 const labelsVogueOutreach = ["USA", "UK", "Canada", "Italy", "Australia", "Others"];
 const vogueOutreach = [46.8, 6.4, 4.5, 2.7, 2.6, 37];

 /*new Chart("vogueOutreach", {
  type: 'pie',
  data: {
    data: vogueOutreach,
    labels: labelsVogueOutreach,
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)',
      'rgb(80, 50, 65)',],
  }
 });

 const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
}; 

 const config = {
  type: 'pie',
  data: data,
}; */

const dataVogue = {
  labels: labelsVogueOutreach,
  datasets: [{
    label: 'Vogue.com Readership around the World',
    data: vogueOutreach,
    backgroundColor: [
      'rgb(30,33,84)',
      'rgb(62,42,101)',
      'rgb(101,54,116',
      'rgb(130,68,121)',
      'rgb(130,68,121)',
      'rgb(150,91,130)',
    ]
  }]
};
new Chart("vogueReadership", {
  type: 'pie',
  data: dataVogue
}
);


//bar graph of models of colour
const labelSeasons= ["Spring 2016", "Fall 2016", "Spring 2017", "Fall 2017", "Spring 2018", "Fall 2018", "Spring 2019", "Fall 2019", "Spring 2020", "Fall 2020", "Spring 2021"];

const dataRace = {
  labels: labelSeasons,
  datasets: [{
    label: 'Models of Colour(%)',
    data: [22.4, 24.7,25.4,27.9,30.2,32.5,36.1,38.8,41.5,40.6,41.3],
    backgroundColor: [
      'rgb(255, 255, 255)',
      'rgb(237,227,221)',
      'rgb(225, 181, 173)',
      'rgb(205,166,167)',
      'rgb(187,141,151)',
      'rgb(169,115,139)',
      'rgb(150,91,130)',
      'rgb(130,68,121)',
      'rgb(101,54,116)',
      'rgb(62,42,101)',
      'rgb(30,33,84)',
    ],
    borderColor: [
      'rgb(255, 255, 255)',
      'rgb(237,227,221)',
      'rgb(225, 181, 173)',
      'rgb(205,166,167)',
      'rgb(187,141,151)',
      'rgb(169,115,139)',
      'rgb(150,91,130)',
      'rgb(130,68,121)',
      'rgb(101,54,116)',
      'rgb(62,42,101)',
      'rgb(30,33,84)',
    ],
    borderWidth: 1
  }]
};
new Chart ("graphRace", {
  type: 'bar',
  data: dataRace,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});

//grah for age
const dataAge = {
  labels: labelSeasons,
  datasets: [{
    label: 'Number of Older Models',
    data: [5, 11, 13, 21, 27, 13, 27, 36, 39, 44, 32],
    backgroundColor: [
      'rgb(255, 255, 255)',
      'rgb(237,227,221)',
      'rgb(225, 181, 173)',
      'rgb(205,166,167)',
      'rgb(187,141,151)',
      'rgb(169,115,139)',
      'rgb(150,91,130)',
      'rgb(130,68,121)',
      'rgb(101,54,116)',
      'rgb(62,42,101)',
      'rgb(30,33,84)',
    ],
    borderColor: [
      'rgb(255, 255, 255)',
      'rgb(237,227,221)',
      'rgb(225, 181, 173)',
      'rgb(205,166,167)',
      'rgb(187,141,151)',
      'rgb(169,115,139)',
      'rgb(150,91,130)',
      'rgb(130,68,121)',
      'rgb(101,54,116)',
      'rgb(62,42,101)',
      'rgb(30,33,84)',
    ],
    borderWidth: 1
  }]
};
new Chart ("graphAge", {
  type: 'bar',
  data: dataAge,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});

//graph for plus size
const dataPlusSize = {
  labels: labelSeasons,
  datasets: [{
    label: 'Number of Plus Size models',
    data: [14, 6, 16, 30, 38, 30, 54, 50, 86, 46, 43],
    backgroundColor: [
      'rgb(255, 255, 255)',
      'rgb(237,227,221)',
      'rgb(225, 181, 173)',
      'rgb(205,166,167)',
      'rgb(187,141,151)',
      'rgb(169,115,139)',
      'rgb(150,91,130)',
      'rgb(130,68,121)',
      'rgb(101,54,116)',
      'rgb(62,42,101)',
      'rgb(30,33,84)',
    ],
    borderColor: [
      'rgb(255, 255, 255)',
      'rgb(237,227,221)',
      'rgb(225, 181, 173)',
      'rgb(205,166,167)',
      'rgb(187,141,151)',
      'rgb(169,115,139)',
      'rgb(150,91,130)',
      'rgb(130,68,121)',
      'rgb(101,54,116)',
      'rgb(62,42,101)',
      'rgb(30,33,84)',
    ],
    borderWidth: 1
  }]
};
new Chart ("graphPlusSize", {
  type: 'bar',
  data: dataPlusSize,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});

//graph for non-binary
const dataNonBinary = {
  labels: labelSeasons,
  datasets: [{
    label: 'Number of Non-Binary/Transgender models',
    data: [6, 8, 10, 12, 49, 64, 91, 56, 46, 21, 20],
    backgroundColor: [
      'rgb(255, 255, 255)',
      'rgb(237,227,221)',
      'rgb(225, 181, 173)',
      'rgb(205,166,167)',
      'rgb(187,141,151)',
      'rgb(169,115,139)',
      'rgb(150,91,130)',
      'rgb(130,68,121)',
      'rgb(101,54,116)',
      'rgb(62,42,101)',
      'rgb(30,33,84)',
    ],
    borderColor: [
      'rgb(255, 255, 255)',
      'rgb(237,227,221)',
      'rgb(225, 181, 173)',
      'rgb(205,166,167)',
      'rgb(187,141,151)',
      'rgb(169,115,139)',
      'rgb(150,91,130)',
      'rgb(130,68,121)',
      'rgb(101,54,116)',
      'rgb(62,42,101)',
      'rgb(30,33,84)',
    ],
    borderWidth: 1
  }]
};
new Chart ("graphNonBinary", {
  type: 'bar',
  data: dataNonBinary,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});