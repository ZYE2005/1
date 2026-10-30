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
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.285720983612!2d36.28676192450732!3d33.519956273362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e749cc68202d%3A0x481159f9bc1c8c88!2z2KfZhNmF2LHZg9iyINin2YTYq9mC2KfZgdmKINin2YTYudix2KjZiiDYo9io2Ygg2LHZhdin2YbYqQ!5e0!3m2!1sar!2s!4v1792778546349!5m2!1sar!2s",
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
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.37722471006!2d36.282551924507395!3d33.517576673363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e74b9aeb93df%3A0x3f5a073410a04578!2z2K3Yr9mK2YLYqSDYp9mE2KzYp9it2Lg!5e0!3m2!1sar!2s!4v1792780430913!5m2!1sar!2s",
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
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13260.596086574351!2d35.640958312841796!3d33.808467199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f2366897f8fd9%3A0xaf1cbff822ef36ea!2z2KfZhNmF2LnZh9ivINin2YTZiNi32YbZiiDYp9mE2LnYp9mE2Yog2YTZhNmF2YjYs9mK2YLZiQ!5e0!3m2!1sar!2s!4v1792780696159!5m2!1sar!2s",
  },
  {
    id: 3,
    title: "بطولة دمشق الكروية",
    category: "رياضة",
    place: "مدينة الفيحاء الرياضية",
    date: "2026-11-05",
    dateText: "الخميس 5 تشرين الثاني",
    image: "assets/img/sport.svg",
    description:
      "منافسة كروية حماسية بين مختلف الأندية والفرق الرياضية المحلية.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.9541815053026!2d36.30225872450695!3d33.52857687335878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e71898170f6b%3A0xe278aefac80efbae!2z2YXYr9mK2YbYqSDYp9mE2YHZitit2KfYoSDYp9mE2LHZitin2LbZitip!5e0!3m2!1sar!2s!4v1792781022483!5m2!1sar!2s",
  },
  {
    id: 4,
    title: "ملتقى الشام الثقافي",
    category: "ثقافة",
    place: "دار الثقافة والفنون - ساحة الأمويين",
    date: "2026-11-02",
    dateText: "الإثنين 2 تشرين الثاني",
    image: "assets/img/culture.svg",
    description:
      "جلسات حوارية وقراءات أدبية تناقش الهوية والتاريخ الثقافي الدمشقي.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26610.72007485383!2d36.31278426186902!3d33.5185444951712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e0b2fd166793%3A0x1e5a4e39ab5956f3!2z2LPYp9it2Kkg2KfZhNij2YXZiNmK2YrZhg!5e0!3m2!1sar!2s!4v1792780941632!5m2!1sar!2s",
  },
  {
    id: 5,
    title: "أمسية الجاز الشرقي",
    category: "موسيقى",
    place: "المعهد العالي للموسيقى",
    date: "2026-10-27",
    dateText: "الثلاثاء 27 تشرين الأول",
    image: "assets/img/music.svg",
    description: "حفل يمزج بين ألحان الآلات الشرقية وإيقاعات الجاز المعاصرة.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13260.596086574351!2d35.640958312841796!3d33.808467199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f2366897f8fd9%3A0xaf1cbff822ef36ea!2z2KfZhNmF2LnZh9ivINin2YTZiNi32YbZiiDYp9mE2LnYp9mE2Yog2YTZhNmF2YjYs9mK2YLZiQ!5e0!3m2!1sar!2s!4v1792780696159!5m2!1sar!2s",
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
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13303.976450324055!2d36.334829512841786!3d33.527538699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6e5c377c23d%3A0x72e8071356c2e5c2!2z2K3Yr9mK2YLYqSDYp9io2YYg2KfZhNmH2YrYq9mF!5e0!3m2!1sar!2s!4v1792781107013!5m2!1sar!2s",
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
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.8283780632883!2d36.290884524507966!3d33.50584202336766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e0c96da3a2b3%3A0x5f486b26fb0773b7!2z2YXYr9mK2YbYqSDYqti02LHZitmGINin2YTYsdmK2KfYttmK2KnYjCDYo9io2Ygg2K3Yp9mF2K8g2KfZhNi62LLYp9mE2YrYjCDYr9mF2LTZgtiMINiz2YjYsdmK2Kc!5e0!3m2!1sar!2s!4v1792781177108!5m2!1sar!2s",
  },
];

const dotContainer = document.querySelector(".dot");
let currentEvent = 0;
let sliderTransitionTimeout;
let sliderAutoplayTimeout;

const categoriesLinks = document.querySelectorAll(".section-bottom .box");
const containerCard = document.querySelector(".events_card .container");
const selectCategory = document.querySelector(".form-select");
const formControl = document.querySelector(".form-control");
const placeFilter = document.querySelector("#placeFilter");
const topBar = document.querySelector(".topBar");

window.onscroll = () => {
  if (window.scrollY > 600) {
    topBar.style.opacity = "1";
  } else {
    topBar.style.opacity = "0";
  }
};

topBar.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//Searching for an element that has a class more and attribute data-set.
document.addEventListener("click", (e) => {
  const detailsLink = e.target.closest(".more[data-set]");

  if (!detailsLink) return;

  localStorage.setItem("selectedEventId", detailsLink.dataset.set);
});
// when page load take id to take info
document.addEventListener("DOMContentLoaded", () => {
  const eventDetailsPage = document.querySelector(".event-details-page");

  if (!eventDetailsPage) return;

  const selectedEventId = Number(localStorage.getItem("selectedEventId"));
  const selectedEvent = events.find((event) => event.id === selectedEventId);
  const title = document.querySelector("[data-event-title]");
  const category = document.querySelector("[data-event-category]");
  const image = document.querySelector("[data-event-image]");
  const description = document.querySelector("[data-event-description]");
  const date = document.querySelector("[data-event-date]");
  const place = document.querySelector("[data-event-place]");

  title.textContent = selectedEvent.title;
  category.textContent = selectedEvent.category;
  image.src = selectedEvent.image;
  image.alt = selectedEvent.title;
  description.textContent = selectedEvent.description;
  date.textContent = selectedEvent.dateText;
  place.textContent = selectedEvent.place;
});
//عند التحميل سيحمل الخريطة
document.addEventListener("DOMContentLoaded", () => {
  const eventDetailsPage = document.querySelector(".event-details-page");
  const locationMap = document.querySelector("[data-event-location]");

  if (!eventDetailsPage || !locationMap) return;

  const selectedEventId = Number(localStorage.getItem("selectedEventId"));
  const selectedEvent = events.find((event) => event.id === selectedEventId);

  if (selectedEvent) {
    const mapSource = selectedEvent.location;

    locationMap.src = mapSource;
    locationMap.title = `خريطة موقع ${selectedEvent.title}`;
  }
});
// توجيه التصنيفات إلى صفحة الفعاليات
categoriesLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("category", link.dataset.category);
    window.location.href = "events.html";
  });
});

// توليد نقاط السلايدر
function generateDots() {
  if (!dotContainer) return;

  dotContainer.innerHTML = "";

  for (let i = 0; i < events.length; i++) {
    dotContainer.innerHTML += `<span data-index="${i}"></span>`;
  }

  setupDotListeners();
}

function setupDotListeners() {
  const dots = document.querySelectorAll(".dot span");

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const index = parseInt(e.currentTarget.getAttribute("data-index"), 10);

      dots.forEach((item) => item.classList.remove("active"));
      e.currentTarget.classList.add("active");

      currentEvent = index;
      handle(index);
      scheduleSliderAdvance();
    });
  });

  if (dots.length > 0) {
    dots[0].classList.add("active");
    handle(0);
  }
}

// تغيير محتوى السلايدر
function handle(index) {
  const event = events[index];
  const slider = document.querySelector(".bootom_slider");

  if (!slider || !event) return;

  const imgSlider = slider.querySelector(".img-fluid");
  const textContainer = slider.querySelector(".text_container");
  const paragraphContainer = slider.querySelector(".paragraph_container");
  const dataContainer = slider.querySelector(".data_container");
  const placeContainer = slider.querySelector(".place_container");

  slider.classList.add("is-transitioning");
  clearTimeout(sliderTransitionTimeout);

  sliderTransitionTimeout = setTimeout(() => {
    if (imgSlider) imgSlider.src = event.image;
    if (textContainer) textContainer.innerHTML = event.title;
    if (paragraphContainer) {
      paragraphContainer.innerHTML = event.description;
    }
    if (dataContainer) dataContainer.innerHTML = event.dateText;
    if (placeContainer) placeContainer.innerHTML = event.place;

    slider.classList.remove("is-transitioning");
  }, 180);
}

function scheduleSliderAdvance() {
  clearTimeout(sliderAutoplayTimeout);
  sliderAutoplayTimeout = setTimeout(() => {
    currentEvent = (currentEvent + 1) % events.length;

    const dots = document.querySelectorAll(".dot span");
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentEvent]?.classList.add("active");

    handle(currentEvent);
    scheduleSliderAdvance();
  }, 6000);
}

// تطبيق التصنيف والتاريخ والموقع معًا
function filterEvents() {
  if (!containerCard) return;

  const category = selectCategory?.value || "";
  const date = formControl?.value || "";
  const place = placeFilter?.value || "";

  const filteredEvents = events.filter((event) => {
    const matchesCategory = !category || event.category === category;
    const matchesDate = !date || event.date === date;
    const matchesPlace = !place || event.place === place;

    return matchesCategory && matchesDate && matchesPlace;
  });

  containerCard.innerHTML = "";

  if (filteredEvents.length === 0) {
    containerCard.innerHTML = `
      <p class="no-events text-center py-4 gold">
        لا توجد  فعاليات تطابق خيارات البحث.
      </p>
    `;
    return;
  }

  filteredEvents.forEach((event) => {
    containerCard.innerHTML += `
      <section class="card">
        <img
          src="${event.image}"
          class="card-img-top"
          alt="${event.title}"
        />

        <div class="card-body">
          <h3 class="card-title">${event.title}</h3>

          <div class="event_meta">
            <span>
              <i class="fas fa-calendar"></i>
              ${event.dateText}
            </span>

            <span>
              <i class="fas fa-location-dot"></i>
              ${event.place}
            </span>
          </div>

          <a href="event.html" data-set="${event.id}" class="more">
            التفاصيل
          </a>
        </div>
      </section>
    `;
  });
}

// كل فلتر يعيد تطبيق الفلاتر الثلاثة
selectCategory?.addEventListener("change", filterEvents);
formControl?.addEventListener("change", filterEvents);
placeFilter?.addEventListener("change", filterEvents);

// التشغيل عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const savedCategory = localStorage.getItem("category");

  if (savedCategory && selectCategory) {
    selectCategory.value = savedCategory;
  }

  filterEvents();
  localStorage.removeItem("category");

  if (dotContainer) {
    generateDots();
    scheduleSliderAdvance();
  }
});
//عند تحميل الصفحة يأخذ العنصر بالأي دي المذكور
document.addEventListener("DOMContentLoaded", () => {
  const relatedEventsContainer = document.querySelector(
    ".related-events-container",
  );

  if (!relatedEventsContainer) return;

  const selectedEventId = Number(localStorage.getItem("selectedEventId"));
  const selectedEvent = events.find((event) => event.id === selectedEventId);

  //يفلتر الاحداث حسب الاي دي ويخزنها حيث يأخذ الاحداث ذات اي دي مختلف
  const availableEvents = events.filter(
    (event) => event.id !== selectedEvent.id,
  );
  //يفلتر الحداث حسب التصنيف
  const relatedEvents = availableEvents.filter(
    (event) => event.category === selectedEvent.category,
  );
  //يرتب الاحداث حسب القدم

  const latestEvents = availableEvents.slice(0, 5);
  //يبدء بتوليد الكروت

  //ينشئ الكارد حسب البوتستراب

  const relatedEventgroup = document.querySelector(".related-events-group");
  const latestEventgroup = document.querySelector(".latest-events-group");
  const latestEventsRow = document.createElement("div");
  latestEventsRow.className =
    "row latest-events-cards row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 ";
  latestEventgroup.appendChild(latestEventsRow);

  const relatedEventsRow = document.createElement("div");
  relatedEventsRow.className =
    "row related-events-cards row-cols-1 row-cols-md-2 row-cols-xl-3 g-4";
  relatedEventgroup.appendChild(relatedEventsRow);

  latestEvents.forEach((e) => {
    const latestEventSection = document.createElement("div");
    latestEventSection.className = "col";
    latestEventSection.innerHTML = `
        <div class="card related-event-card">
          <img src="${e.image}" class="card-img-top" alt="${e.title}">
          <div class="card-body d-flex flex-column">
            <h4 class="card-title">${e.title}</h4>
            <div class="related-event-meta mt-auto">
              <p class="mb-2">
                <i class="fas fa-calendar"></i>
                ${e.dateText}
              </p>
              <p class="mb-3">
                <i class="fas fa-location-dot"></i>
                ${e.place}
              </p>
            </div>
            <a href="event.html" data-set="${e.id}" class="related-event-link btn btn-sm">
               التفاصيل
            </a>
          </div>
        </div>`;
    latestEventsRow.appendChild(latestEventSection);
  });
  relatedEvents.forEach((e) => {
    const relatedEventSection = document.createElement("div");
    relatedEventSection.className = "col";
    relatedEventSection.innerHTML = `
        <article class="card related-event-card">
          <img src="${e.image}" class="card-img-top" alt="${e.title}">
          <div class="card-body d-flex flex-column">
            <h4 class="card-title">${e.title}</h4>
            <div class="related-event-meta mt-auto">
              <p class="mb-2">
                <i class="fas fa-calendar"></i>
                ${e.dateText}
              </p>
              <p class="mb-3">
                <i class="fas fa-location-dot"></i>
                ${e.place}
              </p>
            </div>
            <a href="event.html" data-set="${e.id}" class="related-event-link btn btn-sm">
              التفاصيل
            </a>
          </div>
        </article>`;
    relatedEventsRow.appendChild(relatedEventSection);
  });
});
//
document.addEventListener("click", (event) => {
  const relatedEventLink = event.target.closest(
    ".related-event-link[data-set]",
  );

  if (!relatedEventLink) return;

  localStorage.setItem("selectedEventId", relatedEventLink.dataset.set);
});

const addToCalendar = document.querySelector(".event-details-addbtn");
addToCalendar?.addEventListener("click", () => {
  const alert = document.createElement("div");
  alert.className = `form-alert alert alert-info alert-dismissible fade show position-fixed top-0 end-0 m-3 shadow`;
  alert.setAttribute("role", "alert");
  alert.style.zIndex = "4000";
  alert.style.minWidth = "min(320px, calc(100vw - 2rem))";
  alert.style.textAlign = "right";
  const title = document.createElement("p");
  title.textContent = "تم الإضافة إلى التقويم";
  alert.appendChild(title);
  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "btn-close";
  closeButton.addEventListener("click", () => alert.remove());
  alert.appendChild(closeButton);

  document.body.appendChild(alert);

  setTimeout(() => alert.remove(), 6000);
});
