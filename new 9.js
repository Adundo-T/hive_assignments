var weeklyTemps = {
  data: [],

  // Adds a week's worth of temperatures (array of 7 numbers)
  addWeek: function(tempsArray) {
    if (tempsArray.length === 7) {
      this.data.push(tempsArray);
    } else {
      console.log("Each week must have 7 days of temperatures.");
    }
  },

  // Calculates and displays the monthly average temperature
  monthlyAverage: function() {
    var total = 0, count = 0;
    for (var i = 0; i < this.data.length; i++) {
      for (var j = 0; j < this.data[i].length; j++) {
        total += this.data[i][j];
        count++;
      }
    }
    var avg = total / count;
    console.log("Monthly average temperature: " + avg.toFixed(2));
  },

  // Calculates and displays a specific week's average
  weekAverage: function(weekIndex) {
    if (weekIndex < 0 || weekIndex >= this.data.length) {
      console.log("Invalid week index.");
      return;
    }
    var week = this.data[weekIndex];
    var total = 0;
    for (var i = 0; i < week.length; i++) {
      total += week[i];
    }
    var avg = total / week.length;
    console.log("Week " + (weekIndex + 1) + " average: " + avg.toFixed(2));
  },

  // Displays the average temperature for each week
  allWeekAverages: function() {
    for (var i = 0; i < this.data.length; i++) {
      this.weekAverage(i);
    }
  }
};
