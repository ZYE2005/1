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
    place: "مدينة الفيحاء الرياضية",
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
    place: "دار الثقافة والفنون - ساحة الأمويين",
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
    place: "المعهد العالي للموسيقى",
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

const dotContainer = document.querySelector(".dot");
let currentEvent = 0;
let sliderTransitionTimeout;

const categoriesLinks = document.querySelectorAll(".section-bottom .box");
const containerCard = document.querySelector(".events_card .container");
const selectCategory = document.querySelector(".form-select");
const formControl = document.querySelector(".form-control");
const placeFilter = document.querySelector("#placeFilter");
const topBar = document.querySelector(".topBar");

window.onscroll = ()=>{
  if(window.scrollY > 600){
    topBar.style.opacity = "1"
  }else{
      topBar.style.opacity = "0"
  }
}

topBar.addEventListener("click",()=>{
 window.scrollTo({
  top: 0,
  behavior: "smooth"
});
})


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

    // تغيير السلايدر تلقائيًا كل 6 ثوانٍ
    setInterval(() => {
      currentEvent = (currentEvent + 1) % events.length;

      const dots = document.querySelectorAll(".dot span");

      if (dots.length > 0) {
        dots.forEach((dot) => dot.classList.remove("active"));
        dots[currentEvent].classList.add("active");
        handle(currentEvent);
      }
    }, 6000);
  }
});
