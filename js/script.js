// Grace Animal Sanctuary scripts


/*scroll animations */
const revealObserver = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 })
    : null;

function reveal(element) {
    if (!revealObserver) return; // very old browser: content just shows normally
    element.classList.add('reveal');
    revealObserver.observe(element);
}

document.querySelectorAll('main > section').forEach(reveal);


/* ---------- 2. Accordion (jQuery – services.html only) ---------- */
if (window.jQuery) {
    $('.accordion-header').on('click', function () {
        $(this).toggleClass('open');
        $(this).attr('aria-expanded', $(this).hasClass('open'));
        $(this).parent().next('.accordion-panel').slideToggle(250);
    });
}


/* ---------- 3. Animal gallery: dynamic content + search/filter/sort ---------- */
const animals = [
    { name: 'Pippa', breed: 'Border Collie cross', ageMonths: 24, age: '2 years', size: 'Medium', fee: 950,
      image: 'images/pippa.png', alt: 'Pippa, a black and white Border Collie cross standing on grass',
      description: 'Pippa is quick, curious and needs a job to do. She is best suited to an active household with a secure garden.' },
    { name: 'Bandit', breed: 'Beagle', ageMonths: 48, age: '4 years', size: 'Medium', fee: 950,
      image: 'images/bandit.png', alt: 'Bandit, a tricolour Beagle sitting in woodland',
      description: 'Bandit is sociable and gets on with everyone he meets. He follows his nose everywhere, so a properly secured garden is essential.' },
    { name: 'Tumi', breed: 'African village dog', ageMonths: 8, age: '8 months', size: 'Medium', fee: 950,
      image: 'images/tumi.png', alt: 'Tumi, a young tan African village dog sitting outdoors',
      description: 'Tumi was raised in foster care alongside children and cats. He is house-trained and knows sit, down and wait.' },
    { name: 'Skattie', breed: 'Jack Russell cross', ageMonths: 60, age: '5 years', size: 'Small', fee: 950,
      image: 'images/skattie.png', alt: 'Skattie, a white and brown Jack Russell cross standing in a field',
      description: 'Skattie is blind in one eye and it has never slowed her down. She should be approached from her sighted side and suits a home without very small children.' },
    { name: 'Kaya', breed: 'Boerboel cross', ageMonths: 12, age: '1 year', size: 'Large', fee: 950,
      image: 'images/kaya.png', alt: 'Kaya, a large fawn Boerboel cross sitting outdoors',
      description: 'Kaya is a good-natured young dog who has had almost no training and will grow to around 45kg. She needs an experienced owner, not a first-time one.' },
    { name: 'Bella', breed: 'Staffordshire Bull Terrier cross', ageMonths: 84, age: '7 years', size: 'Medium', fee: 450,
      image: 'images/bella.png', alt: 'Bella, a brindle Staffordshire Bull Terrier cross lying in a garden',
      description: 'Bella is affectionate and completely reliable with people. She does not tolerate other dogs and needs to be the only animal in the home.' }
];

const animalList = document.getElementById('animal-list');

function renderAnimals(list) {
    animalList.innerHTML = '';

    if (list.length === 0) {
        animalList.innerHTML = '<p>No animals match your search.</p>';
        return;
    }

    list.forEach(function (animal) {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <h3>${animal.name}</h3>
            <img src="${animal.image}" alt="${animal.alt}" width="600" height="338"
                 loading="lazy" class="lightbox-trigger">
            <ul>
                <li><strong>Breed:</strong> ${animal.breed}</li>
                <li><strong>Age:</strong> ${animal.age}</li>
                <li><strong>Size:</strong> ${animal.size}</li>
                <li><strong>Fee:</strong> R${animal.fee}</li>
            </ul>
            <p>${animal.description}</p>`;
        animalList.appendChild(card);
        reveal(card);
    });
}

function updateAnimals() {
    const term = document.getElementById('animal-search').value.trim().toLowerCase();
    const size = document.getElementById('size-filter').value;
    const sortBy = document.getElementById('sort-by').value;

    const result = animals.filter(function (animal) {
        const matchesText = (animal.name + ' ' + animal.breed).toLowerCase().includes(term);
        const matchesSize = size === 'all' || animal.size === size;
        return matchesText && matchesSize;
    });

    result.sort(function (a, b) {
        if (sortBy === 'age') return a.ageMonths - b.ageMonths;
        if (sortBy === 'fee') return a.fee - b.fee;
        return a.name.localeCompare(b.name);
    });

    renderAnimals(result);
}

if (animalList) {
    document.getElementById('animal-search').addEventListener('input', updateAnimals);
    document.getElementById('size-filter').addEventListener('change', updateAnimals);
    document.getElementById('sort-by').addEventListener('change', updateAnimals);
    updateAnimals();
}


/* ---------- 4. Lightbox (modal) for any image with class="lightbox-trigger" ---------- */
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close image">&times;</button>
    <img src="" alt="">
    <p class="lightbox-caption"></p>`;
document.body.appendChild(lightbox);

function openLightbox(img) {
    lightbox.querySelector('img').src = img.src;
    lightbox.querySelector('img').alt = img.alt;
    lightbox.querySelector('.lightbox-caption').textContent = img.alt;
    lightbox.classList.add('open');
}

function closeLightbox() {
    lightbox.classList.remove('open');
}

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('lightbox-trigger')) openLightbox(event.target);
    else if (event.target === lightbox || event.target.classList.contains('lightbox-close')) closeLightbox();
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeLightbox();
});


/* ---------- 5. Interactive map (Leaflet – contact.html only) ---------- */
if (document.getElementById('map') && window.L) {
    const map = L.map('map').setView([-33.865, 18.64], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-33.832, 18.648]).addTo(map)
        .bindPopup('<strong>Main Shelter (Adoptions)</strong><br>124 Rescue Road, Durbanville');
    L.marker([-33.900, 18.629]).addTo(map)
        .bindPopup('<strong>Head Office</strong><br>8 Admin Street, Bellville');
}


/* ---------- 6. Form validation helpers  ---------- */
function validateField(field) {
    let message = '';
    if (field.validity.valueMissing) message = 'This field is required.';
    else if (!field.validity.valid) message = field.title || field.validationMessage;

    const errorBox = document.getElementById(field.id + '-error');
    if (errorBox) errorBox.textContent = message;
    field.classList.toggle('invalid', message !== '');
    return message === '';
}

function validateForm(form) {
    let allValid = true;
    form.querySelectorAll('input, select, textarea').forEach(function (field) {
        if (field.willValidate && !validateField(field)) allValid = false;
    });
    return allValid;
}

// re-check a field as the user corrects it
document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('input', function (event) {
        if (event.target.classList.contains('invalid')) validateField(event.target);
    });
});


/* ---------- 7. Enquiry form ---------- */
const KENNEL_SPONSORSHIP_PER_MONTH = 500; // fictional figure – set your own

const enquiryForm = document.getElementById('enquiry-form');

function todayAsText() {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 10); // yyyy-mm-dd in local time
}

function buildEnquiryResponse(data) {
    const name = data.get('fname');
    const interest = data.get('interest');
    const start = new Date(data.get('startDate') + 'T00:00');
    const startText = start.toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long' });

    if (interest === 'sponsor') {
        const months = Number(data.get('months'));
        const total = months * KENNEL_SPONSORSHIP_PER_MONTH;
        return `Thank you, ${name}! Sponsoring a kennel for ${months} month(s) from ${startText} costs R${total} ` +
               `(R${KENNEL_SPONSORSHIP_PER_MONTH} per month), covering food and medical care for one kennel.`;
    }

    if (interest === 'walking') {
        const day = start.getDay(); // 0 = Sunday, 6 = Saturday
        if (day === 0 || day === 6) {
            return `Great news, ${name}! Dog walking runs on weekends, so ${startText} is available.`;
        }
        const nextSaturday = new Date(start);
        nextSaturday.setDate(start.getDate() + (6 - day));
        const saturdayText = nextSaturday.toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long' });
        return `Thanks, ${name}. Dog walking only runs on weekends, so the first available slot is ${saturdayText}.`;
    }

    return `Thanks, ${name}! ${interest === 'cats' ? 'Cat socialisation' : 'Event fundraising'} ` +
           `volunteers are needed from ${startText}. Our volunteer coordinator will email you to confirm.`;
}

if (enquiryForm) {
    const resultBox = document.getElementById('enquiry-result');
    const monthsGroup = document.getElementById('months-group');
    const monthsInput = document.getElementById('months');

    document.getElementById('startDate').min = todayAsText();

    // only show "months" for sponsors
    document.getElementById('interest').addEventListener('change', function () {
        const isSponsor = this.value === 'sponsor';
        monthsGroup.hidden = !isSponsor;
        monthsInput.disabled = !isSponsor;
    });

    enquiryForm.addEventListener('submit', function (event) {
        event.preventDefault();
        resultBox.textContent = '';
        if (!validateForm(enquiryForm)) return;

        const data = new FormData(enquiryForm);
        const response = buildEnquiryResponse(data);

        // AJAX: send the data without leaving the page 
        fetch(enquiryForm.getAttribute('action'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data).toString()
        })
            .then(function (res) {
                if (!res.ok) throw new Error('Status ' + res.status);
                resultBox.textContent = response + ' Your enquiry has been sent to our team.';
                enquiryForm.reset();
                monthsGroup.hidden = true;
                monthsInput.disabled = true;
            })
            .catch(function () {
                resultBox.textContent = response +
                    ' (We could not send your enquiry right now – please email info@graceanimalsanctuary.org.)';
            });
    });
}


/* ---------- 8. Contact form: validate, then build an email ---------- */
const CONTACT_RECIPIENT = 'info@graceanimalsanctuary.org';

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!validateForm(contactForm)) return;

        const typeSelect = document.getElementById('messageType');
        const type = typeSelect.options[typeSelect.selectedIndex].text;
        const name = document.getElementById('contactName').value.trim();

        const subject = `[${type}] Message from ${name}`;
        const body =
            `Name: ${name}\n` +
            `Email: ${document.getElementById('contactEmail').value.trim()}\n` +
            `Phone: ${document.getElementById('contactPhone').value.trim()}\n` +
            `Message type: ${type}\n\n` +
            `${document.getElementById('contactMessage').value.trim()}`;

        window.location.href = `mailto:${CONTACT_RECIPIENT}` +
            `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        document.getElementById('contact-result').textContent =
            'Your email app should now open with your message ready – just press Send.';
    });
}