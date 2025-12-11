/* AnnDaan - Food Donation Platform */
/* script.js */

'use strict';

// --- GLOBAL SCOPE FOR GOOGLE MAPS ---

const donations = [
    {
        id: 1,
        title: 'Surplus Pastries',
        donor: 'Flurys',
        location: 'Park Street',
        kgTotal: 10,
        kgClaimed: 4,
        category: 'Cooked',
        lat: 22.5534,
        lng: 88.3520,
        imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=2866&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Fresh Vegetables',
        donor: 'Local Farmer Market',
        location: 'Salt Lake',
        kgTotal: 50,
        kgClaimed: 15,
        category: 'Raw',
        lat: 22.5852,
        lng: 88.4063,
        imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Cooked Biryani',
        donor: 'Arsalan Restaurant',
        location: 'Park Circus',
        kgTotal: 25,
        kgClaimed: 20,
        category: 'Cooked',
        lat: 22.5414,
        lng: 88.3677,
        imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2787&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Assorted Canned Goods',
        donor: 'Howrah Wholesalers',
        location: 'Howrah',
        kgTotal: 30,
        kgClaimed: 5,
        category: 'Raw',
        lat: 22.5958,
        lng: 88.3426,
        imageUrl: 'https://imgs.search.brave.com/GpSKeyfpM7fgAym8IV2G47B_Ebj8G7LRxLH8zYxP_Ag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMy/ODU2MzMxNy9waG90/by9jYW5uZWQtZ29v/ZHMtb24ta2l0Y2hl/bi1wYW50cnktc2hl/bGYuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWZHMDJqbU9N/UlA0eEhSYlJMWV9q/MUdQVU9DOTdidjgx/UFZWQ0dZYjhQWXM9'
    },
    {
        id: 5,
        title: 'Sweets & Mishti',
        donor: 'Balaram Mullick & Radharaman Mullick',
        location: 'Bhowanipore',
        kgTotal: 8,
        kgClaimed: 8,
        category: 'Cooked',
        lat: 22.5276,
        lng: 88.3465,
        imageUrl: 'https://imgs.search.brave.com/5j8rb3GHHeNkTcpbhg-AFaE5Jvh-6cZl9x3nXsqH59g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE2TnFjS1ZHQUwu/anBn'
    },
    {
        id: 6,
        title: 'Organic Fruits',
        donor: 'Gariahat Market',
        location: 'Gariahat',
        kgTotal: 40,
        kgClaimed: 12,
        category: 'Raw',
        lat: 22.5112,
        lng: 88.3690,
        imageUrl: 'https://images.unsplash.com/photo-1584306670957-acf935f5033c?q=80&w=2874&auto=format&fit=crop'
    }
];

// This function is called by the Google Maps script tag
function initMap() {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer || typeof google === 'undefined') return;

    const isDarkMode = document.body.classList.contains('dark-mode');
    const mapCenter = { lat: 22.5726, lng: 88.3639 }; // Centered on Kolkata

    const darkMapStyle = [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        { featureType: 'administrative.locality', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
        { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
        { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#263c3f' }] },
        { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#6b9a76' }] },
        { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#38414e' }] },
        { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#212a37' }] },
        { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#9ca5b3' }] },
        { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#746855' }] },
        { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#1f2835' }] },
        { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#f3d19c' }] },
        { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#2f3948' }] },
        { featureType: 'transit.station', elementType: 'labels.text.fill', stylers: [{ color: '#d59563' }] },
        { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#17263c' }] },
        { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#515c6d' }] },
        { featureType: 'water', elementType: 'labels.text.stroke', stylers: [{ color: '#17263c' }] }
    ];

    const map = new google.maps.Map(mapContainer, {
        center: mapCenter,
        zoom: 12, // Zoom adjusted for a city view
        styles: isDarkMode ? darkMapStyle : [],
        disableDefaultUI: true,
        zoomControl: true
    });

    const infoWindow = new google.maps.InfoWindow();

    const donationIcon = {
        url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00C805" width="48px" height="48px"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'),
        scaledSize: new google.maps.Size(48, 48),
        anchor: new google.maps.Point(24, 48)
    };

    donations.forEach(donation => {
        const marker = new google.maps.Marker({
            position: { lat: donation.lat, lng: donation.lng },
            map: map,
            icon: donationIcon,
            title: donation.title
        });

        marker.addListener('click', () => {
            const content = `
                <div class="map-infowindow">
                    <h3>${donation.title}</h3>
                    <p>${donation.donor}</p>
                </div>`;
            infoWindow.setContent(content);
            infoWindow.open(map, marker);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM SELECTORS ---
    const donationGrid = document.getElementById('donation-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('donation-modal');
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    // --- CARD RENDERING ---
    const renderCards = (donationsToRender) => {
        if (!donationGrid) return;
        donationGrid.innerHTML = '';
        if (donationsToRender.length === 0) {
            donationGrid.innerHTML = '<p>No donations found for this category.</p>';
            return;
        }
        donationsToRender.forEach(donation => {
            const progressPercentage = (donation.kgClaimed / donation.kgTotal) * 100;
            const card = document.createElement('div');
            card.className = 'donation-card';
            card.innerHTML = `
                <div class="card-image"><img src="${donation.imageUrl}" alt="${donation.title}"></div>
                <div class="card-content">
                    <h3 class="card-title">${donation.title}</h3>
                    <p class="card-donor"><i class="fa-solid fa-store"></i> ${donation.donor} &bull; ${donation.location}</p>
                    <div class="progress-bar-container">
                        <div class="progress-label">
                            <span>${donation.kgClaimed}kg claimed</span>
                            <span>${donation.kgTotal}kg total</span>
                        </div>
                        <div class="progress-bar"><div class="progress-bar-fill" style="width: ${progressPercentage}%;"></div></div>
                    </div>
                </div>`;
            donationGrid.appendChild(card);
        });
    };

    // --- FILTERING ---
    const filterDonations = (filter) => {
        const filteredDonations = (filter === 'All') ? donations : donations.filter(d => d.category === filter);
        renderCards(filteredDonations);
    };

    // --- MODAL ---
    const showModal = () => modal.style.display = 'block';
    const hideModal = () => modal.style.display = 'none';

    // --- THEME HANDLING ---
    const setTheme = (theme) => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        localStorage.setItem('theme', theme);
        if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
            initMap(); // Re-render map with the new theme
        }
    };

    // --- EVENT LISTENERS ---
    themeToggleBtn.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        setTheme(isDarkMode ? 'light' : 'dark');
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterDonations(button.dataset.filter);
        });
    });

    openModalBtn.addEventListener('click', showModal);
    closeModalBtn.addEventListener('click', hideModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) hideModal();
    });

    // --- INITIALIZATION ---
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    document.body.classList.toggle('dark-mode', initialTheme === 'dark');
    localStorage.setItem('theme', initialTheme);

    renderCards(donations);
    // Initial map load is handled by the API callback 'initMap'
});
