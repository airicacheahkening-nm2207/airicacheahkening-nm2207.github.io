
//to have a popup asking for visitors to key in their name
alert(welcomeGuest())

//function where the popup will prompt the visitor to key in name. if visitor does now, he/she is referred to as 'reader'
function welcomeGuest() {
  let name;
   let guest = prompt("Hello. Please enter your name:", "");
    if (guest == "") {
      name = "Reader";
    } else {
      name = guest;
    }
    return document.getElementById("welcome").innerHTML = "Welcome " + name + ". Let's talk about diversity in fashion." }

 //graphs
 //graph for piechart on vogue/com's readership
 const labelsVogueOutreach = ["USA", "UK", "Canada", "Italy", "Australia", "Others"];
 const vogueOutreach = [46.8, 6.4, 4.5, 2.7, 2.6, 37];


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


//vogue skintone scatterplot
//keying in of data
const skinToneData = {
  datasets: [
    {
    label: 'Darkness Value',
    data: [
      {x:0.139, y: 1, color: '#F8D2BE', Model: 'Jessica Chastain'},
      {x:0.142, y: 1, color: '#EFD0C5', Model: 'Claire Foy'},
      {x:0.143, y: 1, color: '#ECCDC9', Model: 'Amy Adams'},
      {x:0.165, y: 1, color: '#ECD1BD', Model: 'Daria Werbowy'},
      {x:0.183, y: 3, color: '#DFCCC0', Model: 'Lady Gaga'},
      {x:0.199, y: 2, color: '#EAC3AE', Model: 'Katy Perry'},
      {x:0.204, y: 2, color: '#E3C1B2', Model: 'Adele'},
      {x:0.204, y: 1, color: '#E1C5B4', Model: 'Emma Watson'},
      {x:0.207, y: 1, color: '#EFC5A4', Model: 'Claire Danes'},
      {x:0.211, y: 3, color: '#EAC4A7', Model: 'Anne Hathaway'},
      {x:0.211, y: 2, color: '#DDCBB4', Model: 'Michelle Williams'},
      {x:0.223, y: 1, color: '#E0C1AC', Model: 'Lena Dunham'},
      {x:0.226, y: 3, color: '#E6BAA4', Model: 'Emma Stone'},
      {x:0.228, y: 1, color: '#D4C0B5', Model: 'Priscilla Presley'},
      {x:0.239, y: 2, color: '#E2BFA0', Model: 'Jennifer Connelly'},
      {x:0.243, y: 1, color: '#D5BBAC', Model: 'Riley Keough'},
      {x:0.243, y: 1, color: '#E4BD9D', Model: 'Amy Schumer'},
      {x:0.243, y:3, color:'#E6BD9A', Model: 'Carey Mulligan'},
      {x:0.244, y:2, color:'#E8B398', Model: 'Alicia Vikander'},
      {x:0.245, y:1, color:'#D6BAAA', Model: 'Rachel McAdams'},
      {x:0.246, y:2, color:'#EAAA95', Model: 'Dakota Johnson'},
      {x:0.250, y:1, color:'#DBBCA2', Model: 'Melenia Trump'},
      {x:0.260, y:1, color:'#E1B297', Model: 'Kim Kardashian'},
      {x:0.262, y:3, color:'#D5B2A2', Model: 'Rooney Mara'},
      {x:0.268, y:4, color:'#E0B694', Model: 'Natalia Vodianova'},
      {x:0.268, y:1, color:"#D6B79E", Model: 'Kristen Stewart'},
      {x:0.272, y:1, color:'#CEAFA4', Model: 'Winona Ryder'},
      {x:0.273, y:1, colour:"#DEAC94", Model: 'Bridget hALL'},
      {x:0.276, y:1, color:'#D2B59F', Model: 'Lisa-Marie Presley'},
      {x:0.276, y:1, color:'#DBAF95', Model: 'Amal Clooney'},
      {x:0.278, y:2, color:'#DCB393', Model: 'Meryl Streep'},
      {x:0.279, y:3, color:'#DDAA91', Model: 'Taylor Swift'},
      {x:0.280, y:2, color:'#DDAE90', Model: 'Kate Winslet'},
      {x:0.283, y:2, color:'#E3A58A', Model: 'Cara Delevingne'},
      {x:0.286, y:2, color:'#D2A999', Model: 'Julianne Moore'},
      {x:0.286, y:1, color:'#D2A999', Model: 'Elle Fanning'},
      {x:0.289, y:1, color:'#DCB08D', Model: 'Frankie Rayder'},
      {x:0.290, y:2, color:'#CFA999', Model: 'Catherine Zeta-Jones'},
      {x:0.292, y:1, color:'#DBAA8E', Model: 'Britney Spears'},
      {x:0.294, y:5, color:'#D6AD91', Model: 'Keira Knightley'},
      {x:0.298, y:7, color:'#CEAF96', Model: 'Nicole Kidman'},
      {x:0.300, y:3, color:'#DCA087', Model: 'Kendall Jenner'},
      {x:0.303, y:3, color:'#D4AD8D', Model: 'Drew Barrymore'},
      {x:0.304, y:2, color:'#D2A58F', Model: 'Angela Lindvall'},
      {x:0.307, y:3, color:'#D5A58B', Model: 'Jennifer Lawrence'},
      {x:0.308, y:1, color:'#D1A38F', Model: 'Daisy Ridley'},
      {x:0.309, y:4, color:'#D2A88D', Model: 'Natalie Portman'},
      {x:0.312, y:1, color:'#DDA681', Model: 'Kate Upton'},
      {x:0.312, y:5, color:'#D5A888', Model: 'Gwyneth Paltrow'},
      {x:0.314, y:4, color:'#CBA991', Model: 'Renee Zellweger'},
      {x:0.314, y:1, color:'#D1A48C', Model: 'Jessica Biel'},
      {x:0.315, y:5, color:'#C6A895', Model: 'Cate Blanchett'},
      {x:0.316, y:2, color:'#D6AE86', Model: 'Kirsten Dunst'},
      {x:0.316, y:6, color:'#D8A884', Model: 'Charlize Theron'},
      {x:0.317, y:4, color:'#D4A687', Model: 'Sienna Miller'},
      {x:0.318, y:1, color:'#D99C82', Model: 'Emily Blunt'},
      {x:0.324, y:1, color:'#CBA78D', Model: 'Madonna'},
      {x:0.326, y:1, color:'#DB997C', Model: 'Vanessa Axente'},
      {x:0.330, y:9, color:'#D29F82', Model: 'Rachel Weisz'},
      {x:0.331, y:5, color:'#CB9E89', Model: 'Gisele Bundchen'},
      {x:0.334, y:5, color:'#CCA586', Model: 'Angelina Jolie'},
      {x:0.336, y:1, color:'#D59B7C', Model: 'Kate Hudson'},
      {x:0.338, y:3, color:'#C6A08A', Model: 'Amanda Seyfried'},
      {x:0.340, y:1, color:'#D3A87D', Model: 'Amber Valletta'},
      {x:0.340, y:1, color:'#D6967A', Model: 'Maggie Rizer'},
      {x:0.340, y:1, color:'#CDA182', Model: 'Fei Fei Sun'},
      {x:0.342, y:1, color:'#D5AA7A', Model: 'Anna Jagodzinska'},
      {x:0.342, y:2, color:'#C19E8D', Model: 'Scarlett Johansson'},
      {x:0.344, y:2, color:'#CAA083', Model: 'Jennifer Lopez'},
      {x:0.347, y:2, color:'#CEA57E', Model: 'Uma Thurman'},
      {x:0.348, y:2, color:'#C99F82', Model: 'Gwen Stefani'},
      {x:0.349, y:1, color:'#D59376', Model: 'Azizona Muse'},
      {x:0.350, y:2, color:'#CA9A81', Model: 'Linda Evangelista'},
      {x:0.350, y:1, color:'#D49476', Model: 'Andreea Diaconu'},
      {x:0.352, y:1, color:'#C79B83', Model: 'Karolina Kurkova'},
      {x:0.353, y:1, color:'#D29277', Model: 'Edie Campbell'},
      {x:0.355, y:1, color:'#C39E86', Model: 'Demi Moore'},
      {x:0.359, y:2, color:'#D78E6F', Model: 'Karlie Kloss'},
      {x:0.359, y:4, color:'#CD9778', Model: 'Carmen Kass'},
      {x:0.361, y:1, color:'#C99C7C', Model: 'Sasha Pivovarova'},
      {x:0.364, y:1, color:'#C79A7D', Model: 'Doutzen Kroes'},
      {x:0.364, y:1, color:'#D29F72', Model: 'Margot Robbie'},
      {x:0.366, y:1, color:'#CAA378', Model: 'Saoirse Ronan'},
      {x:0.367, y:2, color:'#CF9273', Model: 'Carolyn Murphy'},
      {x:0.369, y:5, color:'#C3977E', Model: 'Reese Witherspoon'},
      {x:0.369, y:1, color:'#C3976E', Model: 'Hilary Rhoda'},
      {x:0.376, y:4, color:'#C69477', Model: 'Sandra Bullock'},
      {x:0.377, y:1, color:'#CE966F', Model: 'Selena Gomez'},
      {x:0.378, y:1, color:'#DB8861', Model: 'Vittoria Ceretti'},
      {x:0.379, y:6, color:'#C39A78', Model: 'Sarah Jessica Parker'},
      {x:0.383, y:5, color:'#C89371', Model: 'Penelope Cruz'},
      {x:0.383, y:5, color:'#C78371', Model: 'Rihanna'},
      {x:0.390, y:1, color:'#C29774', Model: 'Caroline Tretini'},
      {x:0.391, y:1, color:'#D09466', Model: 'Tina Fey'},
      {x:0.392, y:3, color:'#C49571', Model: 'Blake Lively'},
      {x:0.394, y:3, color:'#BF9475', Model: 'Marion Cotillard'},
      {x:0.402, y:1, color:'#C6876A', Model: 'Zendaya'},
      {x:0.403, y:1, color:'#C09070', Model: 'Debra Messing'},
      {x:0.407, y:1, color:'#BD8F70', Model: 'Lily Donaldson'},
      {x:0.410, y:4, color:'#C08E6B', Model: 'Jennifer Aniston'},
      {x:0.411, y:2, color:'#B69275', Model: 'Kate Moss'},
      {x:0.414, y:1, color:'#BB8A6F', Model: 'Salma Hayek'},
      {x:0.416, y:2, color:'#AE8D7A', Model: 'Christy Turlington'},
      {x:0.429, y:3, color:'#C97E59', Model: 'Gigi Hadid'},
      {x:0.439, y:1, color:'#C87955', Model: 'Liu Wen'},
      {x:0.440, y:2, color:'#A88C74', Model: 'Cameron Diaz'},
      {x:0.442, y:1, color:'#C77955', Model: 'Marlon Jones'},
      {x:0.445, y:1, color:'#D0724A', Model: 'Ashley Graham'},
      {x:0.446, y:1, color:'#B88162', Model: 'Ruth Negga'},
      {x:0.448, y:1, color:'#B18A67', Model: 'Brooke Shields'},
      {x:0.454, y:4, color:'#B37D62', Model: 'Beyonce'},
      {x:0.458, y:2, color:'#B07E63', Model: 'Halle Berry'}, 
      {x:0.472, y:1, color:'#B77156', Model: 'Joan Smalls'},
      {x:0.481, y:1, color:'#AD705B', Model: 'Ashley Judd'},
      {x:0.484, y:1, color:'#A67D61', Model: 'Kate Bosworth'},
      {x:0.496, y:2, color:'#AE7B52', Model: 'Liya Kebede'},
      {x:0.507, y:1, color:'#A67955', Model: 'Jennifer Hudson'},
      {x:0.513, y:1, color:'#BA673E', Model: 'Adowoa Aboah'},
      {x:0.535, y:2, color:'#AE5E3E', Model: 'Imaan Hammam'},
      {x:0.554, y:3, color:'#A16241', Model: 'Michelle Obama'},
      {x:0.584, y:3, color:'#925841', Model: 'Serena Williams'},
      {x:0.673, y:4, color:'#6B413B', Model: 'Lupita Nyongo'}
  ],
    backgroundColor: function(context) {
      return context.dataset.data[context.dataIndex].color;
    },
    pointRadius: 5,
    pointHoverRadius: 3,
    pointHitRadius: 6,
  },
  ],
};

//scatterplot code
new Chart ("skinTones", {
  type: 'scatter',
  data: skinToneData,
  options: {
    title: {
      display: true,
      text: ["Skin Tones of Models on Vogue Magine Covers 2000=2019"],
      fontFamily: "GFS Didot"
  },
  //code to include customised tooltip (tooltip with model's name)
    plugins:{
      tooltip: {
        callbacks: {
          label: (context) => {
            console.log(context.raw.Model)
            return `${context.label}, Model: ${context.raw.Model}`;
          }
        }
      }
    },
    scales: {
        y: {
          title: {
            display: true,
            text: 'Number of Covers'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Darkness Value'
          }
      }
    }
  }
});




//labels for the all bargraphs that follow
const labelSeasons= ["Spring 2016", "Fall 2016", "Spring 2017", "Fall 2017", "Spring 2018", "Fall 2018", "Spring 2019", "Fall 2019", "Spring 2020", "Fall 2020", "Spring 2021"];

//bar graph of models of colour
//keying in data
const dataRace = {
  labels: labelSeasons,
  datasets: [{
    label: 'Models of Colour(%)',
    data: [22.4, 24.7,25.4,27.9,30.2,32.5,36.1,38.8,41.5,40.6,41.3],
    backgroundColor: [
      'rgb(237,227,221)',
      'rgb(235, 221, 221)',
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
      'rgb(237,227,221)',
      'rgb(235, 221, 221)',
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
}; //graph for models of colour
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


//bargraph for age
//keying in data
const dataAge = {
  labels: labelSeasons,
  datasets: [{
    label: 'Number of Older Models',
    data: [5, 11, 13, 21, 27, 13, 27, 36, 39, 44, 32],
    backgroundColor: [
      'rgb(237,227,221)',
      'rgb(235, 221, 221)',
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
      'rgb(237,227,221)',
      'rgb(235, 221, 221)',
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
};//graph for elder models
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


//bargraph for plus size
//keying in data
const dataPlusSize = {
  labels: labelSeasons,
  datasets: [{
    label: 'Number of Plus Size models',
    data: [14, 6, 16, 30, 38, 30, 54, 50, 86, 46, 43],
    backgroundColor: [
      'rgb(237,227,221)',
      'rgb(235, 221, 221)',
      'rgb(225, 181, 173)',
      'rgb(205,166,167)',
      'rgb(187,141,151)',
      'rgb(169,115,139)',
      'rgb(150,91,130)',
      'rgb(130,68,121)',
      'rgb(101,54,116)',
      'rgb(62,42,101)',
      'rgb(30,33,84)'
    ],
    borderColor: [
      'rgb(237,227,221)',
      'rgb(235, 221, 221)',
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
};//graph for plus size models
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


//bargraph for non-binary
//keying in data
const dataNonBinary = {
  labels: labelSeasons,
  datasets: [{
    label: 'Number of Non-Binary/Transgender models',
    data: [6, 8, 10, 12, 49, 64, 91, 56, 46, 21, 20],
    backgroundColor: [
      'rgb(237,227,221)',
      'rgb(235, 221, 221)',
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
      'rgb(237,227,221)',
      'rgb(235, 221, 221)',
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
};//graph for plus size models
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


//bargraph with button for plus size models
//labels
const labels2 = ["New York FW", "London Fashion Week", "Milan Fashion Week", "Paris Fashion Week"]

//keying in data
const data = {
  labels: labels2,
  datasets: [{ //dataset[0]
    label: 'Number of Plus-Size Models (SS2019)',
    data: [49, 45, 15, 33],
    backgroundColor: [
      'rgb(225, 181, 173)',
      'rgb(225, 181, 173)',
      'rgb(225, 181, 173)',
      'rgb(225, 181, 173)',
    ],
    borderColor: [
      'rgb(255, 255, 255)',
      'rgb(255, 255, 255)',
      'rgb(255, 255, 255)',
      'rgb(255, 255, 255)',
    ],
    borderWidth: 1
  }]
};//graph for the plsu size seasons
var plusSeasons = new Chart ("plusSeasons", {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
 },
});

//function to add the data of FW 2020 on click
function addFWSeason() {
  plusSeasons.data.datasets.push({
    label: 'Number of Plus-Size Models (FW2020) ',
    data: [31, 71, 14, 40],
    backgroundColour: [
      'rgb(187,141,151)',
      'rgb(187,141,151)',
      'rgb(187,141,151)',
      'rgb(187,141,151)',
    ],
    borderColor: [
      'rgb(187,141,151)',
      'rgb(187,141,151)',
      'rgb(187,141,151)',
      'rgb(187,141,151)',
    ],
    borderWidth: 1
  });
  plusSeasons.update();
};

//function to remove the data of FW 2020 on click
function removeFWSeason() {
  plusSeasons.data.datasets.splice(1, 1);
  plusSeasons.update();
}



//magazine or slideshow (from w3 schools)
// for vogue magazine slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//function for the transitioning of slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}