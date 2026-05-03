function worldTour(day) {
  if (day <= 0) {
    console.log("Your journey hasn't started yet!");
  } else if (day <= 30) {
    console.log("You are exploring Asia 🌏");
  } else if (day <= 60) {
    console.log("You are visiting Europe 🇪🇺");
  } else if (day <= 90) {
    console.log("You are traveling across North America 🇺🇸");
  } else if (day <= 120) {
    console.log("You are discovering South America 🌎");
  } else if (day <= 150) {
    console.log("You are enjoying Africa 🐘");
  } else if (day <= 180) {
    console.log("You are exploring Australia 🇦🇺");
  } else {
    console.log("Journey completed! 🎉 Welcome back home.");
  }
}

// Test cases
worldTour(10);
worldTour(75);
worldTour(160);
worldTour(200);