const Happy = ["aww", "dogswearinghats", "animalssmiling"];
const Scared = ["creepy", "abandonedporn", "sweatypalms"];
const Sad = ["gloomyphotos", "gloomyphotos", "gloomyphotos"];
const Hungry = ["foodporn", "food", "pizza"];
const Angry = ["angrycatpics", "mildlyinfuriating"];
const Tired = ["Sleepinganimals", "awwzzz", "animalsbeingsleepy"];
const Excited = ["aww", "dogswearinghats", "animalssmiling"];
const Confused = [
  "sharkswithhumanteeth",
  "catswithpeoplefeet",
  "dogswithcatheads"
];
const moods = [
  "Happy",
  "Scared",
  "Sad",
  "Hungry",
  "Angry",
  "Tired",
  "Excited",
  "Confused"
];

function createButtons() {
  for (i = 0; i < moods.length; i++) {
    var button = document.createElement("a");
    button.classList.add("waves-effect", "waves-light", "btn-large");
    document.getElementById("myMood").appendChild(button);
    button.innerText = moods[i];
    button.id = i;
    myMood = moods[i];
    button.addEventListener("click", changeMood);
  }
}
createButtons();

function changeMood() {
  mood = event.target.innerText;
  accessApi();
}

function accessApi() {
  if (mood == "Happy") {
    return fetch(`https://www.reddit.com/r/${Happy[randomInt(2)]}.json`)
      .then(response => response.json())
      .then(response => response.data.children)
      .then(addImage);
  } else if (mood == "Scared") {
    return fetch(`https://www.reddit.com/r/${Scared[randomInt(2)]}.json`)
      .then(response => response.json())
      .then(response => response.data.children)
      .then(addImage);
  } else if (mood == "Sad") {
    return fetch(`https://www.reddit.com/r/${Sad[randomInt(2)]}.json`)
      .then(response => response.json())
      .then(response => response.data.children)
      .then(addImage);
  } else if (mood == "Hungry") {
    return fetch(`https://www.reddit.com/r/${Hungry[randomInt(2)]}.json`)
      .then(response => response.json())
      .then(response => response.data.children)
      .then(addImage);
  } else if (mood == "Angry") {
    return fetch(`https://www.reddit.com/r/${Angry[randomInt(2)]}.json`)
      .then(response => response.json())
      .then(response => response.data.children)
      .then(addImage);
  } else if (mood == "Tired") {
    return fetch(`https://www.reddit.com/r/${Tired[randomInt(2)]}.json`)
      .then(response => response.json())
      .then(response => response.data.children)
      .then(addImage);
  } else if (mood == "Excited") {
    return fetch(`https://www.reddit.com/r/${Excited[randomInt(2)]}.json`)
      .then(response => response.json())
      .then(response => response.data.children)
      .then(addImage);
  } else if (mood == "Confused") {
    return fetch(`https://www.reddit.com/r/${Confused[randomInt(2)]}.json`)
      .then(response => response.json())
      .then(response => response.data.children)
      .then(addImage);
  }
}

function addImage(data) {
  var imageNumber = data[randomInt(25)].data.preview;
  if (typeof imageNumber == "undefined") {
    addImage(data);
  } else {
    var img = document.getElementById("moodImg");
    img.src = "";
    console.log(data);
    img.src = imageNumber.images[0].source.url;
  }
}

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
