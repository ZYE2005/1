const events = [
  {
    id: 0,
    title: "معرض التراث الدمشقي",
    category: "ثقافة",
    place: "المركز الثقافي العربي - أبو رمانة",
    date: "2026-11-15",
    dateText: "الأحد 15 تشرين الثاني",
    image: "assets/img/culture.svg",
    description:
      "معرض يوثق الحرف اليدوية العريقة والصناعات التقليدية الخاصة بمدينة دمشق.",
  },

  {
    id: 1,
    title: "مهرجان الخريف العائلي",
    category: "عائلي",
    place: "منتزه الجاحظ - أبو رمانة",
    date: "2026-11-10",
    dateText: "الثلاثاء 10 تشرين الثاني",
    image: "assets/img/family.svg",
    description:
      "فعالية عائلية تتضمن مسابقات حركية ورسم على الوجوه وعروض ترفيهية للأطفال.",
  },

  {
    id: 2,
    title: "أنغام شرقية وطربية",
    category: "موسيقى",
    place: "المعهد العالي للموسيقى",
    date: "2026-11-08",
    dateText: "الأحد 8 تشرين الثاني",
    image: "assets/img/music.svg",
    description:
      "حفل موسيقي يستعرض المعزوفات الشرقية والتراثية بقيادة الفرقة الوطنية.",
  },

  {
    id: 3,
    title: "بطولة دمشق الكروية",
    category: "رياضة",
    place: "مدينة الفيهاء الرياضية - أوتستراد العدوي",
    date: "2026-11-05",
    dateText: "الخميس 5 تشرين الثاني",
    image: "assets/img/sport.svg",
    description:
      "منافسة كروية حماسية بين مختلف الأندية والفرق الرياضية المحلية.",
  },

  {
    id: 4,
    title: "ملتقى الشام الثقافي",
    category: "ثقافة",
    place: "دار الثقافة والفنون (الأوبرا) - ساحة الأمويين",
    date: "2026-11-02",
    dateText: "الإثنين 2 تشرين الثاني",
    image: "assets/img/culture.svg",
    description:
      "جلسات حوارية وقراءات أدبية تناقش الهوية والتاريخ الثقافي الدمشقي.",
  },

  {
    id: 5,
    title: "أمسية الجاز الشرقي",
    category: "موسيقى",
    place: "قاعة رضا سعيد - دمشق",
    date: "2026-10-27",
    dateText: "الثلاثاء 27 تشرين الأول",
    image: "assets/img/music.svg",
    description: "حفل يمزج بين ألحان الآلات الشرقية وإيقاعات الجاز المعاصرة.",
  },

  {
    id: 6,
    title: "يوم العائلة الدمشقي",
    category: "عائلي",
    place: "حديقة التجارة",
    date: "2026-10-24",
    dateText: "السبت 24 تشرين الأول",
    image: "assets/img/family.svg",
    description:
      "يوم مليء بالألعاب والأنشطة الترفيهية لجميع أفراد العائلة في أجواء لطيفة.",
  },

  {
    id: 7,
    title: "ماراثون دمشق الخيري",
    category: "رياضة",
    place: "مدينة تشرين الرياضية - البرامكة",
    date: "2026-10-18",
    dateText: "الأحد 18 تشرين الأول",
    image: "assets/img/sport.svg",
    description:
      "شاركوا في فعالية رياضية مفتوحة يعود ريعها لدعم المبادرات المجتمعية.",
  },
];

let dotContainer = document.querySelector(".dot");
let currentEvent = 0;
let sliderTransitionTimeout;
// GeneratDots Slider
function GeneratDots() {
  for (let i = 0; i < events.length; i++) {
    dotContainer.innerHTML += `
       <span data-id="${events[i].id}"></span>
      `;
  }

  setupDotListeners();
}

function setupDotListeners() {
  let dots = document.querySelectorAll(".dot span");

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      let id = parseInt(e.target.getAttribute("data-id"));

      dots.forEach((d) => d.classList.remove("active"));

      //  أضافة كلاس active
      e.target.classList.add("active");

      currentEvent = id;

      handle(id);
    });
  });

  // تفعيل كلاس ال active لاول نقطة وعرض اول حدث
  if (dots.length > 0) {
    dots[0].classList.add("active");
    handle(0);
  }
}

function handle(id) {
  let event = events[id];
  let slider = document.querySelector(".bootom_slider");

  if (!slider) {
    return;
  }

  let imgSlider = slider.querySelector(".img-fluid");
  let text_container = slider.querySelector(".text_container");
  let paragraph_container = slider.querySelector(".paragraph_container");
  let data_container = slider.querySelector(".data_container");
  let place_container = slider.querySelector(".place_container");

  slider.classList.add("is-transitioning");
  clearTimeout(sliderTransitionTimeout);
  sliderTransitionTimeout = setTimeout(() => {
    imgSlider.src = event.image;
    text_container.innerHTML = event.title;
    paragraph_container.innerHTML = event.description;
    data_container.innerHTML = event.dateText;
    place_container.innerHTML = event.place;
    slider.classList.remove("is-transitioning");
  }, 180);
}

document.addEventListener("DOMContentLoaded", () => {
  if (!dotContainer) {
    return;
  }

  GeneratDots();

  // تمرير تلقائي
  setInterval(() => {
    currentEvent = (currentEvent + 1) % events.length;

    let dots = document.querySelectorAll(".dot span");
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentEvent].classList.add("active");

    handle(currentEvent);
  }, 6000);
});
