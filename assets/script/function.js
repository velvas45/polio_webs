export function toggleMenu() {
  const sidebar = document.querySelector("#sidebar");
  const barIconOne = document.querySelector("#bar1");
  const barIconTwo = document.querySelector("#bar2");

  const stateActive = !barIconOne.classList.contains("change-icon");

  if (stateActive) {
    sidebar.classList.add("active-sidebar");
    barIconOne.classList.add("change-icon");
    barIconTwo.classList.add("change-icon");
  } else {
    sidebar.classList.remove("active-sidebar");
    barIconOne.classList.remove("change-icon");
    barIconTwo.classList.remove("change-icon");
  }
}

export function onChoiceYear(value, cb) {
  const data_dummy = [
    {
      value_bigest: 28,
      value_image: "img-one.png",
      value_subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta sodales leo vitae vestibulum. Nullam vel posuere nisi. Donec in lobortis arcu. 1",
      value_title:
        "A design team building a curated marketplace for UI designers. ONE",
    },
    {
      value_bigest: 29,
      value_image: "img-two.png",
      value_subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta sodales leo vitae vestibulum. Nullam vel posuere nisi. Donec in lobortis arcu. 2",
      value_title:
        "A design team building a curated marketplace for UI designers. TWO",
    },
    {
      value_bigest: 30,
      value_image: "img-three.png",
      value_subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta sodales leo vitae vestibulum. Nullam vel posuere nisi. Donec in lobortis arcu. 3",
      value_title:
        "A design team building a curated marketplace for UI designers. THREE",
    },
    {
      value_bigest: 31,
      value_image: "img-four.png",
      value_subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta sodales leo vitae vestibulum. Nullam vel posuere nisi. Donec in lobortis arcu. 4",
      value_title:
        "A design team building a curated marketplace for UI designers. FOUR",
    },
    {
      value_bigest: 32,
      value_image: "img-two.png",
      value_subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta sodales leo vitae vestibulum. Nullam vel posuere nisi. Donec in lobortis arcu. 5",
      value_title:
        "A design team building a curated marketplace for UI designers. FIVE",
    },
  ];

  switch (value) {
    case "2018":
      cb(data_dummy[0], value);
      break;
    case "2019":
      cb(data_dummy[1], value);
      break;
    case "2020":
      cb(data_dummy[2], value);
      break;
    case "2021":
      cb(data_dummy[3], value);
      break;
    case "2022":
      cb(data_dummy[4], value);
      break;

    default:
      break;
  }
}

export function insertDataToHTML(data, value) {
  // dom
  const imageTag = document.querySelector("#image-content");
  const titleTag = document.querySelector("#content-random-title");
  const subTitleTag = document.querySelector("#content-random-subtitle");
  const numberTag = document.querySelector("#content-random-number");
  const selectTag = document.querySelector("#select-year");

  //   inject src image tag
  imageTag.src = `./assets/images/${data.value_image}`;
  //   inject title
  titleTag.textContent = data.value_title;
  //   inject subtitle
  subTitleTag.textContent = data.value_subtitle;
  //   inject title
  numberTag.textContent = data.value_bigest;

  //   inject value
  selectTag.value = value;
}
