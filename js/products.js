  // i18next Initialization
  i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                "home": "Home",
                "products": "Products",
                "comfort": "Comfort",
                "safety": "Safety",
                "style": "Style",
                "about": "About",
                "contact": "Contact Us",
                "contact_us": "Contact Us",
                "products_title": "Products - Mekezo",
                "our_products": "Our Products",
                "products_intro": "Browse our complete collection of premium car accessories.",
                "comfort_accessories": "Comfort Accessories",
                "seat_cushion_title": "Ergonomic Seat Cushion",
                "seat_cushion_desc": "Designed to provide support and reduce fatigue during long drives.",
                "floor_mats_title": "Premium Floor Mats",
                "floor_mats_desc": "Protect your car's interior with these durable and easy-to-clean mats.",
                "neck_pillow_title": "Neck Support Pillow",
                "neck_pillow_desc": "Provides comfort and support for your neck during long trips.",
                "car_organizer_title": "Car Organizer",
                "car_organizer_desc": "Keep your car tidy with this multi-compartment organizer.",
                "safety_gear": "Safety Gear",
                "dashcam_title": "HD Dashcam",
                "dashcam_desc": "Capture every moment on the road with crystal-clear HD recording.",
                "tire_monitor_title": "Tire Pressure Monitoring System",
                "tire_monitor_desc": "Keep your tires at optimal pressure for safety and efficiency.",
                "escape_tool_title": "Emergency Escape Tool",
                "escape_tool_desc": "Essential tool for breaking windows and cutting seatbelts in emergencies.",
                "safety_vest_title": "Reflective Safety Vest",
                "safety_vest_desc": "High-visibility vest for safety during roadside emergencies.",
                "style_upgrades": "Style Upgrades",
                "alloy_wheels_title": "Alloy Wheels",
                "alloy_wheels_desc": "Elevate your vehicle’s look with our durable and stylish alloy wheels.",
                "led_headlights_title": "LED Headlight Bulbs",
                "led_headlights_desc": "Improve visibility and style with bright and energy-efficient LED lights.",
                "decals_title": "Custom Car Decals",
                "decals_desc": "Personalize your vehicle with custom decals and stickers.",
                "lighting_kit_title": "Ambient Lighting Kit",
                "lighting_kit_desc": "Add a touch of style with customizable interior lighting.",
                "copyright": "Mekezo. All rights reserved.",
                "no_products": "No products found in Airtable.",
                "fetch_error": "Failed to load products. Please try again later.",
                "miscellaneous": "Miscellaneous"
            }
        },
        am: {
            translation: {
                "home": "ቤት",
                "products": "ምርቶች",
                "comfort": "ምቾት",
                "safety": "ደህንነት",
                "style": "ስታይል",
                "about": "ስለ እኛ",
                "contact": "ያግኙን",
                "contact_us": "ያግኙን",
                "products_title": "ምርቶች - መከዞ",
                "our_products": "የእኛ ምርቶች",
                "products_intro": "የእኛን ፕሪሚየም የመኪና መለዋወጫዎች ሙሉ ስብስብ ያስሱ።",
                "comfort_accessories": "የምቾት መለዋወጫዎች",
                "seat_cushion_title": "ኤርጎኖሚክ የመቀመጫ ትራስ",
                "seat_cushion_desc": "ለረጅም ጊዜ መንዳት ድጋፍ ለመስጠት እና ድካምን ለመቀነስ የተነደፈ።",
                "floor_mats_title": "ፕሪሚየም የወለል ምንጣፎች",
                "floor_mats_desc": "የመኪናዎን ውስጠኛ ክፍል በእነዚህ ዘላቂ እና ለማጽዳት ቀላል በሆኑ ምንጣፎች ይጠብቁ።",
                "neck_pillow_title": "የአንገት ድጋፍ ትራስ",
                "neck_pillow_desc": "ለረጅም ጉዞዎች ለአንገትዎ ምቾት እና ድጋፍ ይሰጣል።",
                "car_organizer_title": "የመኪና አደራጅ",
                "car_organizer_desc": "በዚህ ባለብዙ-ክፍል አደራጅ መኪናዎን ንፁህ ያድርጉት።",
                "safety_gear": "የደህንነት መሣሪያዎች",
                "dashcam_title": "ኤች ዲ ዳሽካም",
                "dashcam_desc": "በመንገድ ላይ ያለውን እያንዳንዱን ቅጽበት በግልጽ በሆነ ኤች ዲ ቀረጻ ይያዙ።",
                "tire_monitor_title": "የጎማ ግፊት መከታተያ ስርዓት",
                "tire_monitor_desc": "ለደህንነት እና ቅልጥፍና ጎማዎችዎን በተሻለ ግፊት ያቆዩ።",
                "escape_tool_title": "የአስቸኳይ ጊዜ ማምለጫ መሣሪያ",
                "escape_tool_desc": "በድንገተኛ ሁኔታዎች መስኮቶችን ለመስበር እና የመቀመጫ ቀበቶዎችን ለመቁረጥ አስፈላጊ መሣሪያ።",
                "safety_vest_title": "አንጸባራቂ የደህንነት ቀሚስ",
                "safety_vest_desc": "ለመንገድ ዳር ድንገተኛ ሁኔታዎች የደህንነት ከፍተኛ ታይነት ቀሚስ።",
                "style_upgrades": "የስታይል ማሻሻያዎች",
                "alloy_wheels_title": "የአሎይ ጎማዎች",
                "alloy_wheels_desc": "በእኛ ዘላቂ እና ቅጥ ያጣ የአሎይ ጎማዎች የተሽከርካሪዎን መልክ ያሳድጉ።",
                "led_headlights_title": "ኤል ኢ ዲ የፊት መብራቶች",
                "led_headlights_desc": "በብሩህ እና ኃይል ቆጣቢ ኤል ኢ ዲ መብራቶች ታይነትን እና ስታይልን ያሻሽሉ።",
                "decals_title": "ብጁ የመኪና ዲካሎች",
                "decals_desc": "በብጁ ዲካሎች እና ተለጣፊዎች ተሽከርካሪዎን ያብጁ።",
                "lighting_kit_title": "የአካባቢ ብርሃን ኪት",
                "lighting_kit_desc": "በሚበጅ የውስጥ ብርሃን የስታይል ስሜት ይጨምሩ።",
                "copyright": "መከዞ. ሁሉም መብቶች የተጠበቁ ናቸው.",
                "no_products": "በAirtable ውስጥ ምርቶች አልተገኙም።",
                "fetch_error": "ምርቶችን መጫን አልተሳካም። እባክዎ ቆይተው ይሞክሩ።",
                "miscellaneous": "የተለያዩ"
            }
        }
    }
}, function(err, t) {
    updateContent();
});

// Update Content Function
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const i18nValues = el.getAttribute('data-i18n').split(';');
        i18nValues.forEach(value => {
            if (value.startsWith('[')) {
                const match = value.match(/\[(.+)\](.+)/);
                if (match) {
                    const attr = match[1];
                    const key = match[2];
                    el.setAttribute(attr, i18next.t(key));
                }
            } else {
                el.innerHTML = i18next.t(value);
            }
        });
    });
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.title = i18next.t('products_title');
}

// Language Switcher
document.getElementById('language-select').addEventListener('change', function() {
    i18next.changeLanguage(this.value, function() {
        updateContent();
        renderProducts();
    });
});

// Theme Toggle
document.getElementById('theme-icon').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.classList.remove('fa-moon');
        this.classList.add('fa-sun');
        this.setAttribute('aria-label', 'Switch to light mode');
    } else {
        this.classList.remove('fa-sun');
        this.classList.add('fa-moon');
        this.setAttribute('aria-label', 'Switch to dark mode');
    }
});

// Airtable Fetch and Render
let productsData = [];
fetch('https://api.airtable.com/v0/appufYLt1wjHScUPZ/Table%201', {
    headers: {
        'Authorization': 'Bearer patSrV4DClRIQ4eNM.e81e0ca11890a602ec0caafc4fe940cc212ff4855dacd9d2173e35bf082c3d3b'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    productsData = data.records;
    renderProducts();
})
.catch(error => {
    console.error('Error fetching products:', error);
    const containers = ['#airtable-comfort', '#airtable-safety', '#airtable-style', '#airtable-misc'];
    containers.forEach(id => {
        document.querySelector(id).innerHTML = '<p data-i18n="fetch_error">Failed to load products. Please try again later.</p>';
    });
});

function renderProducts() {
const lang = i18next.language;
const comfortContainer = document.querySelector('#airtable-comfort');
const safetyContainer = document.querySelector('#airtable-safety');
const styleContainer = document.querySelector('#airtable-style');
const miscContainer = document.querySelector('#airtable-misc');
[comfortContainer, safetyContainer, styleContainer, miscContainer].forEach(container => {
if (container) container.innerHTML = '';
});
if (productsData.length === 0) {
comfortContainer.innerHTML = '<p data-i18n="no_products">No products found in Airtable.</p>';
return;
}
productsData.forEach(product => {
const fields = product.fields;
const name = fields[`Name_${lang}`] || fields.Name || 'Unnamed Product';
const description = fields[`Description_${lang}`] || fields.Description || 'No description available';
const category = (fields.Category || 'Other').toLowerCase();
const imageUrl = fields.Image && fields.Image[0] ? fields.Image[0].url : '/image/placeholder.jpg';
const price = fields.Price ? 'ETB ' + fields.Price : 'Contact for price';
const videoAttachment = fields.Video && fields.Video[0] ? fields.Video[0].url : ''; // Updated for attachment field
let targetContainer;
switch (category) {
    case 'comfort':
        targetContainer = comfortContainer;
        break;
    case 'safety':
        targetContainer = safetyContainer;
        break;
    case 'style':
        targetContainer = styleContainer;
        break;
    default:
        targetContainer = miscContainer;
        break;
}
if (targetContainer) { 
    targetContainer.innerHTML += `
        <div class="col-12 col-sm-6 col-lg margin_bottom">
            <div class="card product-card" data-category="${category}" data-bs-toggle="modal" data-bs-target="#productModal" data-product="${product.id}">
                <img src="${imageUrl}" class="card-img-top" alt="${name}" loading="lazy">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${description}</p>
                    <p class="card-text"><strong>Price: </strong>${price}</p>
                    ${videoAttachment ? `<p><a href="${videoAttachment}" target="_blank">Watch Video</a></p>` : ''}
                </div>
            </div>
        </div>
    `;
}
});
}

// Modal Content Population
// Modal Content Population
document.addEventListener('click', function(event) {
const card = event.target.closest('.product-card');
if (card) {
const productId = card.getAttribute('data-product');
let product = productsData.find(p => p.id === productId);
if (product) {
    const fields = product.fields;
    const name = fields[`Name_${i18next.language}`] || fields.Name || 'Unnamed Product';
    const description = fields[`Description_${i18next.language}`] || fields.Description || 'No description available';
    const imageUrl = fields.Image && fields.Image[0] ? fields.Image[0].url : null;
    const price = fields.Price ? 'ETB ' + fields.Price : 'Contact for price';
    const videoAttachment = fields.Video && fields.Video[0] ? fields.Video[0].url : '';
    let modalContent = `
        <h3>${name}</h3>
    `;
    // Include image only if it exists and is not a placeholder
    if (imageUrl && imageUrl !== '/image/placeholder.jpg') {
        modalContent += `
            <img src="${imageUrl}" alt="${name}" style="width:100%; max-width:500px; margin-bottom:20px;" loading="lazy">
        `;
    }
    modalContent += `  <p>${description}</p>
    <p><strong>Price: </strong>${price}</p>
    `;

    // Include video if it exists
    if (videoAttachment) {
        modalContent += `
            <div>
                <h4>Product Video</h4>
                <video controls style="width:100%; max-width:500px;">
                    <source src="${videoAttachment}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `;
    }
    document.getElementById('modal-content').innerHTML = modalContent;
}
}
});
// Search and Filter Functionality
document.getElementById('search-input').addEventListener('input', filterProducts);
document.getElementById('category-filter').addEventListener('change', filterProducts);

function filterProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const productName = card.querySelector('.card-title').textContent.toLowerCase();
        const productCategory = card.getAttribute('data-category');
        const matchesSearch = productName.includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || productCategory === selectedCategory;
        card.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
    });
}

// Social Sharing (Basic Implementation)
document.getElementById('share-product').addEventListener('click', function() {
    const title = document.querySelector('#productModalLabel').textContent;
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({
            title: title,
            text: 'Check out this product from Mekezo!',
            url: url
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard: ' + url);
        }).catch(err => {
            console.error('Could not copy text: ', err);
            alert('Sharing not supported. Copy this link manually: ' + url);
        });
    }
});