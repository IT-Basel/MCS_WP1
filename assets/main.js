/**
 * ملف JavaScript الرئيسي لدليل فعاليات المدينة
 * يحتوي على جميع الوظائف المطلوبة للموقع
 */

// بيانات وهمية للفعاليات
const eventsData = [
    {
        id: 1,
        title: "مهرجان الربيع الثقافي",
        category: "culture",
        date: "2023-05-15",
        endDate: "2023-05-20",
        location: "حديقة المدينة المركزية",
        description: "مهرجان سنوي يجمع فنون الأدب والموسيقى والرسم بمشاركة فنانين محليين ودوليين.",
        image: "event1.jpg",
        featured: true,
        organizer: "وزارة الثقافة"
    },
    {
        id: 2,
        title: "ماراثون المدينة الخيري",
        category: "sports",
        date: "2023-05-22",
        location: "شاطئ المدينة",
        description: "ماراثون خيري لمسافة 10 كم و5 كم بمشاركة آلاف العدائين لدعم المشاريع التعليمية.",
        image: "event2.jpg",
        featured: true,
        organizer: "نادي المدينة الرياضي"
    },
    {
        id: 3,
        title: "حفلة أوركسترا المدينة",
        category: "music",
        date: "2023-05-18",
        location: "مسرح المدينة الوطني",
        description: "أمسية موسيقية مع أوركسترا المدينة السيمفونية بقيادة المايسترو الشهير.",
        image: "event3.jpg",
        featured: true,
        organizer: "دار الأوبرا الوطنية"
    },
    {
        id: 4,
        title: "معرض الكتاب المستعمل",
        category: "culture",
        date: "2023-05-25",
        endDate: "2023-05-28",
        location: "ساحة المعارض",
        description: "معرض للكتاب المستعمل يضم آلاف العناوين بأسعار رمزية تبدأ من ريال واحد.",
        image: "event4.jpg",
        featured: false,
        organizer: "جمعية حب القراءة"
    },
    {
        id: 5,
        title: "بطولة كرة القدم للأحياء",
        category: "sports",
        date: "2023-06-01",
        endDate: "2023-06-10",
        location: "ملعب المدينة الرياضي",
        description: "بطولة كرة القدم السنوية للأحياء بمشاركة 32 فريقاً تمثل أحياء المدينة.",
        image: "event5.jpg",
        featured: false,
        organizer: "بلدية المدينة"
    },
    {
        id: 6,
        title: "مهرجان الألعاب العائلية",
        category: "family",
        date: "2023-05-27",
        location: "منتزه العائلة",
        description: "مهرجان للألعاب والأنشطة العائلية مع مسابقات وجوائز قيمة للكبار والصغار.",
        image: "event6.jpg",
        featured: false,
        organizer: "شركة ألعاب المدينة"
    },
    {
        id: 7,
        title: "ندوة ريادة الأعمال",
        category: "business",
        date: "2023-05-30",
        location: "فندق المدينة الدولي",
        description: "ندوة متخصصة في ريادة الأعمال بمشاركة خبراء ومستثمرين محليين ودوليين.",
        image: "event1.jpg",
        featured: false,
        organizer: "غرفة التجارة"
    },
    {
        id: 8,
        title: "ورشة الفن التشكيلي",
        category: "culture",
        date: "2023-06-05",
        location: "مركز الفنون التشكيلية",
        description: "ورشة عمل تطبيقية في الفن التشكيلي للمبتدئين والمتوسطين.",
        image: "event2.jpg",
        featured: false,
        organizer: "مركز الفنون"
    }
];

// بيانات الفعاليات البارزة
const featuredEvents = eventsData.filter(event => event.featured);

// خريطة الألوان للفئات
const categoryColors = {
    "culture": "primary",
    "sports": "success",
    "music": "warning",
    "family": "info",
    "business": "secondary",
    "education": "danger"
};

// أسماء الفئات بالعربية
const categoryNames = {
    "culture": "ثقافة",
    "sports": "رياضة",
    "music": "موسيقى",
    "family": "عائلي",
    "business": "أعمال",
    "education": "تعليم"
};

/**
 * تحميل أحدث الفعاليات في الصفحة الرئيسية
 */
function loadLatestEvents() {
    const container = document.getElementById('latestEvents');
    if (!container) return;
    
    // عرض أول 6 فعاليات فقط
    const latestEvents = eventsData.slice(0, 6);
    
    let html = '';
    latestEvents.forEach(event => {
        const categoryName = categoryNames[event.category] || event.category;
        const categoryColor = categoryColors[event.category] || 'secondary';
        
        html += `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card event-card shadow-sm h-100">
                <img src="assets/img/${event.image}" class="card-img-top" alt="${event.title}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="badge bg-${categoryColor}">${categoryName}</span>
                        <small class="text-muted">${formatDate(event.date)}</small>
                    </div>
                    <h5 class="card-title fw-bold">${event.title}</h5>
                    <p class="card-text text-muted">${event.description.substring(0, 100)}...</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <small class="text-muted"><i class="fas fa-map-marker-alt me-1"></i> ${event.location}</small>
                        <a href="event.html?id=${event.id}" class="btn btn-outline-primary btn-sm">تفاصيل</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
}

/**
 * تحميل جميع الفعاليات في صفحة الفعاليات
 */
function loadEvents(filteredEvents = null) {
    const container = document.getElementById('eventsContainer');
    const countElement = document.getElementById('count');
    if (!container || !countElement) return;
    
    const eventsToShow = filteredEvents || eventsData;
    
    let html = '';
    eventsToShow.forEach(event => {
        const categoryName = categoryNames[event.category] || event.category;
        const categoryColor = categoryColors[event.category] || 'secondary';
        
        html += `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card event-card shadow-sm h-100">
                <img src="assets/img/${event.image}" class="card-img-top" alt="${event.title}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="badge bg-${categoryColor}">${categoryName}</span>
                        <small class="text-muted">${formatDate(event.date)}</small>
                    </div>
                    <h5 class="card-title fw-bold">${event.title}</h5>
                    <p class="card-text text-muted">${event.description.substring(0, 80)}...</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <small class="text-muted"><i class="fas fa-map-marker-alt me-1"></i> ${event.location}</small>
                        <a href="event.html?id=${event.id}" class="btn btn-outline-primary btn-sm">تفاصيل</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
    countElement.textContent = eventsToShow.length;
    
    // إظهار أو إخفاء زر "تحميل المزيد"
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (loadMoreContainer) {
        if (eventsToShow.length >= eventsData.length) {
            loadMoreContainer.style.display = 'none';
        } else {
            loadMoreContainer.style.display = 'block';
        }
    }
}

/**
 * تطبيق الفلاتر في صفحة الفعاليات
 */
function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const dateFilter = document.getElementById('dateFilter').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    
    let filteredEvents = eventsData;
    
    // فلترة حسب التصنيف
    if (categoryFilter !== 'all') {
        filteredEvents = filteredEvents.filter(event => event.category === categoryFilter);
    }
    
    // فلترة حسب التاريخ
    if (dateFilter !== 'all') {
        const today = new Date();
        const nextWeek = new Date();
        nextWeek.setDate(today.getDate() + 7);
        const nextMonth = new Date();
        nextMonth.setMonth(today.getMonth() + 1);
        
        filteredEvents = filteredEvents.filter(event => {
            const eventDate = new Date(event.date);
            
            switch(dateFilter) {
                case 'today':
                    return isSameDay(eventDate, today);
                case 'week':
                    return eventDate >= today && eventDate <= nextWeek;
                case 'month':
                    return eventDate >= today && eventDate <= nextMonth;
                case 'upcoming':
                    return eventDate >= today;
                default:
                    return true;
            }
        });
    }
    
    // فلترة حسب البحث
    if (searchInput) {
        filteredEvents = filteredEvents.filter(event => 
            event.title.toLowerCase().includes(searchInput) || 
            event.description.toLowerCase().includes(searchInput) ||
            event.location.toLowerCase().includes(searchInput)
        );
    }
    
    // تحديث الفلاتر النشطة
    updateActiveFilters(categoryFilter, dateFilter, searchInput);
    
    // عرض الفعاليات المفلترة
    loadEvents(filteredEvents);
}

/**
 * تحديث الفلاتر النشطة المعروضة
 */
function updateActiveFilters(category, date, search) {
    const activeFiltersContainer = document.getElementById('activeFilters');
    if (!activeFiltersContainer) return;
    
    let html = '';
    
    if (category !== 'all') {
        const categoryName = categoryNames[category] || category;
        html += `<span class="badge bg-primary p-2">التصنيف: ${categoryName} <i class="fas fa-times ms-1" onclick="removeFilter('category')"></i></span>`;
    }
    
    if (date !== 'all') {
        const dateNames = {
            'today': 'اليوم',
            'week': 'هذا الأسبوع',
            'month': 'هذا الشهر',
            'upcoming': 'القادمة'
        };
        html += `<span class="badge bg-success p-2">التاريخ: ${dateNames[date] || date} <i class="fas fa-times ms-1" onclick="removeFilter('date')"></i></span>`;
    }
    
    if (search) {
        html += `<span class="badge bg-warning p-2">البحث: "${search}" <i class="fas fa-times ms-1" onclick="removeFilter('search')"></i></span>`;
    }
    
    activeFiltersContainer.innerHTML = html;
}

/**
 * إزالة فلتر معين
 */
function removeFilter(filterType) {
    switch(filterType) {
        case 'category':
            document.getElementById('categoryFilter').value = 'all';
            break;
        case 'date':
            document.getElementById('dateFilter').value = 'all';
            break;
        case 'search':
            document.getElementById('searchInput').value = '';
            break;
    }
    
    applyFilters();
}

/**
 * تحميل المزيد من الفعاليات
 */
function loadMoreEvents() {
    // في هذه النسخة البسيطة، نعيد تحميل جميع الفعاليات
    // في تطبيق حقيقي، سنقوم بجلب المزيد من الخادم
    alert('سيتم تحميل المزيد من الفعاليات في النسخة الكاملة من التطبيق');
}

/**
 * تحميل تفاصيل الفعالية في صفحة التفاصيل
 */
function loadEventDetails() {
    // الحصول على معرّف الفعالية من URL
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id') || 1;
    
    // البحث عن الفعالية في البيانات
    const event = eventsData.find(e => e.id == eventId) || eventsData[0];
    
    // تحديث عناصر الصفحة
    if (document.getElementById('eventTitle')) {
        document.getElementById('eventTitle').textContent = event.title;
    }
    
    if (document.getElementById('eventCategory')) {
        const categoryName = categoryNames[event.category] || event.category;
        document.getElementById('eventCategory').textContent = categoryName;
    }
    
    if (document.getElementById('eventDate')) {
        let dateText = formatDate(event.date);
        if (event.endDate) {
            dateText += ` إلى ${formatDate(event.endDate)}`;
        }
        document.getElementById('eventDate').textContent = dateText;
    }
    
    if (document.getElementById('eventLocation')) {
        document.getElementById('eventLocation').textContent = event.location;
    }
    
    if (document.getElementById('eventOrganizer')) {
        document.getElementById('eventOrganizer').textContent = event.organizer;
    }
    
    if (document.getElementById('eventImage')) {
        document.getElementById('eventImage').src = `assets/img/${event.image}`;
        document.getElementById('eventImage').alt = event.title;
    }
}

/**
 * تحميل الفعاليات ذات الصلة
 */
function loadRelatedEvents() {
    const container = document.getElementById('relatedEvents');
    if (!container) return;
    
    // الحصول على معرّف الفعالية الحالية
    const urlParams = new URLSearchParams(window.location.search);
    const currentEventId = urlParams.get('id') || 1;
    
    // الحصول على تصنيف الفعالية الحالية
    const currentEvent = eventsData.find(e => e.id == currentEventId) || eventsData[0];
    
    // فلترة الفعاليات بنفس التصنيف (باستثناء الفعالية الحالية)
    const relatedEvents = eventsData.filter(event => 
        event.category === currentEvent.category && event.id != currentEventId
    ).slice(0, 3); // عرض 3 فعاليات فقط
    
    if (relatedEvents.length === 0) {
        // إذا لم توجد فعاليات بنفس التصنيف، اعرض أي فعاليات أخرى
        const otherEvents = eventsData.filter(event => event.id != currentEventId).slice(0, 3);
        displayRelatedEvents(otherEvents, container);
        return;
    }
    
    displayRelatedEvents(relatedEvents, container);
}

/**
 * عرض الفعاليات ذات الصلة
 */
function displayRelatedEvents(events, container) {
    let html = '';
    
    events.forEach(event => {
        const categoryName = categoryNames[event.category] || event.category;
        
        html += `
        <div class="mb-3">
            <div class="d-flex align-items-start">
                <img src="assets/img/${event.image}" class="rounded me-3" alt="${event.title}" width="80" height="80" style="object-fit: cover;">
                <div>
                    <h6 class="fw-bold mb-1">${event.title}</h6>
                    <p class="text-muted small mb-1"><i class="fas fa-calendar-alt me-1"></i> ${formatDate(event.date)}</p>
                    <a href="event.html?id=${event.id}" class="btn btn-outline-primary btn-sm">تفاصيل</a>
                </div>
            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
}

/**
 * إضافة الفعالية إلى التقويم
 */
function addToCalendar() {
    // في تطبيق حقيقي، ستقوم هذه الوظيفة بإنشاء ملف .ics للتقويم
    // هنا نعرض رسالة بسيطة
    alert('تمت إضافة الفعالية إلى التقويم بنجاح!');
}

/**
 * مشاركة الفعالية
 */
function shareEvent() {
    // في تطبيق حقيقي، ستقوم هذه الوظيفة بفتح خيارات المشاركة
    // هنا نعرض رسالة بسيطة
    alert('سيتم مشاركة الفعالية في النسخة الكاملة من التطبيق');
}

/**
 * إرسال نموذج إضافة فعالية جديدة
 */
function submitNewEvent() {
    const eventName = document.getElementById('eventName').value.trim();
    const eventCategory = document.getElementById('eventCategory').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventLocation = document.getElementById('eventLocation').value.trim();
    const eventDescription = document.getElementById('eventDescription').value.trim();
    
    // التحقق من الحقول المطلوبة
    if (!eventName || !eventCategory || !eventDate || !eventLocation || !eventDescription) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    // إغلاق النافذة المنبثقة
    const modal = bootstrap.Modal.getInstance(document.getElementById('addEventModal'));
    modal.hide();
    
    // إظهار رسالة نجاح
    alert('تم إرسال الفعالية بنجاح! سيتم مراجعتها من قبل فريقنا قبل النشر.');
    
    // إعادة تعيين النموذج
    document.getElementById('addEventForm').reset();
}

/**
 * إرسال نموذج تسجيل الحضور
 */
function submitRegistration() {
    const regName = document.getElementById('regName').value.trim();
    const regEmail = document.getElementById('regEmail').value.trim();
    
    // التحقق من الحقول المطلوبة
    if (!regName || !regEmail) {
        alert('يرجى ملء الحقول المطلوبة (الاسم والبريد الإلكتروني)');
        return;
    }
    
    // التحقق من صيغة البريد الإلكتروني
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(regEmail)) {
        alert('يرجى إدخال بريد إلكتروني صحيح');
        return;
    }
    
    // إغلاق النافذة المنبثقة
    const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    modal.hide();
    
    // زيادة عدد المسجلين
    const attendeeCount = document.getElementById('attendeeCount');
    if (attendeeCount) {
        let count = parseInt(attendeeCount.textContent);
        attendeeCount.textContent = count + 1;
    }
    
    // إظهار رسالة نجاح
    alert(`تم تسجيل حضورك بنجاح ${regName}! سيصلك تأكيد على بريدك الإلكتروني: ${regEmail}`);
    
    // إعادة تعيين النموذج
    document.getElementById('registrationForm').reset();
}

/**
 * تنسيق التاريخ
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-SA', options);
}

/**
 * التحقق مما إذا كان التاريخين في نفس اليوم
 */
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}

/**
 * تهيئة الموقع عند تحميل الصفحة
 */
function initializeSite() {
    // إضافة تأثير سلس للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // جعل شريط التنقل شفافاً عند التمرير
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
}

// تهيئة الموقع عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initializeSite);