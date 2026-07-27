const phone = "919009071697";
const whatsappText = "Hello RR Tourism, I want more information about your tour packages.";

const iconSvg = {
  plane: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16v-2L8 5V3.5C8 2.7 7.3 2 6.5 2S5 2.7 5 3.5V5L2 7v2l3-.9V14l-2 1.5V17l3.5-1 3.5 1v-1.5L8 14V8.1L21 16Z"/></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-5v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
  grid: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 2.9 6 6.6.9-4.8 4.7 1.1 6.6L12 17.1l-5.8 3.1 1.1-6.6-4.8-4.7 6.6-.9L12 2Z"/></svg>'
};
const serviceIcons = [iconSvg.plane, iconSvg.home, iconSvg.sun, iconSvg.grid];
const starIcons = () => `<span class="star-icons" aria-label="5 star rating">${iconSvg.star.repeat(5)}</span>`;
const internationalWhatsappText = "Hello RR Tourism, I want information about your international tour packages. Please share destination options, prices and available dates.";

const pageLinks = [
  ["Home", "#home"], ["About RR Tourism", "#about"], ["Tour Packages", "#packages"], ["Popular Destinations", "#destinations"],
  ["International Tours", "#international"], ["Holy Places", "#holy-places"], ["Visa Assistance", "#visa-assistance"],
  ["Domestic Tours", "#packages"], ["Honeymoon Packages", "#packages"], ["Family Tours", "#packages"], ["Group Tours", "#packages"],
  ["Adventure Tours", "#packages"], ["Weekend Trips", "#packages"], ["Customized Packages", "#planner"], ["Gallery", "#gallery"],
  ["Travel Blog", "#blog"], ["Customer Reviews", "#reviews"], ["FAQs", "#faqs"], ["Contact Us", "#contact"], ["Online Booking", "#booking"]
];

const aboutFeatures = [
  ["Affordable tour packages", "Well-planned trips with transparent pricing for families, couples and groups."],
  ["Customized travel planning", "Flexible itineraries based on budget, season, comfort and travel pace."],
  ["Comfortable transportation", "Bus, traveller, SUV and pickup support from Mhow and Indore."],
  ["Hotel booking assistance", "Verified stays from budget hotels to premium resorts."],
  ["Experienced coordinators", "Trip support for smooth sightseeing, meals and transfers."],
  ["Customer support", "Helpful communication before, during and after the journey."],
  ["Family and group tours", "Seat planning, rooms, meals and route coordination for larger groups."],
  ["Local pickup options", "Convenient boarding from Mhow, Indore, airport or railway station."]
];

const stats = [
  ["Domestic Destinations", 75, "+"], ["International Destinations", 21, "+"], ["Happy Travellers", 4800, "+"],
  ["Successful Tours", 620, "+"], ["Positive Reviews", 1400, "+"]
];

const services = [
  "Domestic Tour Packages", "Hotel Booking", "Flight Booking Assistance", "Bus and Traveller Booking", "Railway Booking Assistance",
  "Group Tour Management", "Honeymoon Planning", "Family Vacation Planning"
  // "Religious Tours", "Customized Tour Packages", "Local Sightseeing", "Airport and Railway Station Pickup",
  // "International Holiday Packages", "International Honeymoon Packages", "International Family Tours", "International Group Tours",
  // "Corporate International Trips", "International Flight Booking Assistance", "Visa Assistance", "Passport Guidance",
  // "Corporate Trips", "School and College Tours",
  // "Travel Insurance Assistance", "International Hotel Booking", "Airport Transfer Assistance", "Foreign Currency Guidance",
  // "Customized International Itineraries", "International Cruise Packages"
];

const destinationImages = {
  Goa: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
  Manali: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
  Shimla: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=900&q=80",
  Kashmir: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80",
  Ladakh: "https://images.unsplash.com/photo-1581793746485-04698e79a4e8?auto=format&fit=crop&w=900&q=80",
  Kerala: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
  Rajasthan: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
  Udaipur: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=900&q=80",
  Jaipur: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=80",
  Mumbai: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=900&q=80",
  Pune: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80",
  Mahabaleshwar: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  Ayodhya: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=900&q=80",
  Varanasi: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=80",
  "Mathura-Vrindavan": "https://images.unsplash.com/photo-1625123453381-364b80f1c932?auto=format&fit=crop&w=900&q=80",
  Amritsar: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=900&q=80",
  Andaman: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=900&q=80",
  "North-East India": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
  "Indore Nearby": "https://images.unsplash.com/photo-1600100397608-f010a14112b9?auto=format&fit=crop&w=900&q=80"
};

const internationalImages = {
  Dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
  Thailand: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=80",
  Bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
  Singapore: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80",
  Malaysia: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80",
  Maldives: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80",
  "Sri Lanka": "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=900&q=80",
  Nepal: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
  Bhutan: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80",
  Vietnam: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
  Mauritius: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=900&q=80",
  Turkey: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
  Azerbaijan: "https://images.unsplash.com/photo-1601305738427-9b65e0b9d3bf?auto=format&fit=crop&w=900&q=80",
  Georgia: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80",
  Egypt: "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=900&q=80",
  Europe: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80",
  Switzerland: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=900&q=80",
  France: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
  Italy: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=80",
  London: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
  Australia: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80"
};

const destinations = Object.keys(destinationImages).map((name, index) => ({
  name,
  duration: ["3N/4D", "4N/5D", "5N/6D", "6N/7D"][index % 4],
  price: [7999, 9999, 12499, 14999, 18999][index % 5],
  highlights: ["Sightseeing", "Comfort stay", "Local transfers", "Coordinator support"].slice(0, 2 + (index % 3)).join(" | "),
  rating: (4.6 + (index % 4) / 10).toFixed(1),
  image: destinationImages[name]
}));

const internationalDestinations = Object.keys(internationalImages).map((name, index) => ({
  name,
  duration: ["4N/5D", "5N/6D", "6N/7D", "8N/9D"][index % 4],
  price: [45999, 52999, 64999, 79999, 119999][index % 5],
  highlights: ["Flights assistance", "Visa guidance", "Hotel stays", "Sightseeing"].slice(0, 2 + (index % 3)).join(" | "),
  rating: (4.6 + (index % 4) / 10).toFixed(1),
  image: internationalImages[name]
}));


const holyPlaces = [
  {
    name: "Varanasi Kashi Vishwanath",
    faith: "Hindu",
    duration: "3N/4D",
    price: 8999,
    highlights: "Kashi Vishwanath Temple | Ganga Aarti | Sarnath visit",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kashi_Vishwanath_temple.jpg"
  },
  {
    name: "Ayodhya Ram Mandir",
    faith: "Hindu",
    duration: "2N/3D",
    price: 7499,
    highlights: "Ram Mandir | Hanuman Garhi | Saryu Aarti",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ram_Janmbhoomi_Mandir,_Ayodhya_Dham.jpg"
  },
  {
    name: "Ajmer Sharif Dargah",
    faith: "Muslim",
    duration: "2N/3D",
    price: 6999,
    highlights: "Ajmer Sharif | Pushkar optional | Local transfers",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ajmer_Dargah_Main_Entrance.jpg"
  },
  {
    name: "Amritsar Golden Temple",
    faith: "Sikh",
    duration: "3N/4D",
    price: 9999,
    highlights: "Golden Temple | Wagah Border | Jallianwala Bagh",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Golden_Temple,_Amritsar.jpg"
  },
  {
    name: "Goa Basilica & Church Tour",
    faith: "Christian",
    duration: "3N/4D",
    price: 11999,
    highlights: "Basilica of Bom Jesus | Old Goa churches | Beach leisure",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Basilica_of_Bom_Jesus_(Goa).jpg"
  },
  {
    name: "Bodh Gaya Spiritual Tour",
    faith: "Buddhist",
    duration: "3N/4D",
    price: 10999,
    highlights: "Mahabodhi Temple | Monasteries | Peaceful sightseeing",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahabodhitemple.jpg"
  },
  {
    name: "Palitana Jain Temple Yatra",
    faith: "Jain",
    duration: "3N/4D",
    price: 12999,
    highlights: "Shatrunjaya temples | Jain pilgrimage support | Comfortable stay",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/View_of_Palitana_temples.jpg"
  },
  {
    name: "Ujjain Omkareshwar Darshan",
    faith: "Hindu",
    duration: "1N/2D",
    price: 3999,
    highlights: "Mahakaleshwar | Omkareshwar Jyotirlinga | Indore pickup",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahakaleshwar_Temple,_Ujjain.jpg"
  }
];


const internationalHolyPlaces = [
  { name: "Makkah Umrah Package", faith: "Muslim", duration: "7N/8D", price: 69999, highlights: "Umrah guidance | Makkah stay | Madinah optional", image: "assets/holy/makkah-kaaba.jpg", fallback: "assets/holy/makkah-kaaba.jpg" },
  { name: "Vatican City Pilgrimage", faith: "Christian", duration: "5N/6D", price: 129999, highlights: "St. Peter's Basilica | Vatican Museums | Rome churches", image: "assets/holy/vatican-basilica.jpg", fallback: "assets/holy/vatican-basilica.jpg" },
  { name: "Jerusalem Holy Land Tour", faith: "Multi-faith", duration: "6N/7D", price: 149999, highlights: "Old City | Western Wall | Church visits | Dome views", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Jerusalem-2013-Temple_Mount-Dome_of_the_Rock-Detail_01.jpg/960px-Jerusalem-2013-Temple_Mount-Dome_of_the_Rock-Detail_01.jpg" },
  { name: "Lumbini Buddhist Circuit", faith: "Buddhist", duration: "4N/5D", price: 52999, highlights: "Maya Devi Temple | Monasteries | Nepal assistance", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Lumbini%2C_Maya_Devi_Temple.jpg/960px-Lumbini%2C_Maya_Devi_Temple.jpg" },
  { name: "Kartarpur Sahib Darshan", faith: "Sikh", duration: "3N/4D", price: 39999, highlights: "Kartarpur Sahib | Amritsar connection | Document guidance", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Gurdwara_Darbar_Sahib_Kartarpur_d.jpg/960px-Gurdwara_Darbar_Sahib_Kartarpur_d.jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Darbar_sahib_kartarpur.jpg/960px-Darbar_sahib_kartarpur.jpg" },
  { name: "Pashupatinath Nepal Yatra", faith: "Hindu", duration: "4N/5D", price: 45999, highlights: "Pashupatinath Temple | Kathmandu sightseeing | Local transfers", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Pashupatinath_Temple%2C_Kathmandu%2C_Nepal_(2).jpg/960px-Pashupatinath_Temple%2C_Kathmandu%2C_Nepal_(2).jpg", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Pashupatinath_Temple%2C_Kathmandu%2C_Nepal.jpg/960px-Pashupatinath_Temple%2C_Kathmandu%2C_Nepal.jpg" }
];

const packages = [
  {
    title: "Goa Beach Escape", destination: "Goa", category: ["Domestic", "Budget", "Couple", "Weekend"], duration: "4N/5D", price: 9999,
    hotel: "3 Star beach-side hotel", meals: "Breakfast included", transport: "AC bus / train assistance",
    sightseeing: "North Goa, South Goa, cruise evening", itinerary: "Day 1 Arrival | Day 2 North Goa | Day 3 South Goa | Day 4 Leisure | Day 5 Return",
    inclusions: "Hotel, breakfast, transfers, sightseeing", exclusions: "Personal expenses, entry tickets, lunch/dinner", cancellation: "Free date change up to 10 days before travel.",
    dates: "Every Friday", seats: 18, badges: ["Best Seller", "Special Discount"], image: destinationImages.Goa
  },
  {
    title: "Manali Snow Valley", destination: "Manali", category: ["Domestic", "Family", "Adventure", "Premium"], duration: "5N/6D", price: 14999,
    hotel: "Valley-view deluxe hotel", meals: "Breakfast and dinner", transport: "Volvo + local cab",
    sightseeing: "Solang Valley, Atal Tunnel, Mall Road", itinerary: "Day 1 Volvo | Day 2 Manali local | Day 3 Solang | Day 4 Atal Tunnel | Day 5 Leisure | Day 6 Return",
    inclusions: "Stay, meals, transfers, sightseeing", exclusions: "Adventure activity charges", cancellation: "Partial refund as per hotel and transport policy.",
    dates: "Weekly departures", seats: 12, badges: ["Limited Seats"], image: destinationImages.Manali
  },
  {
    title: "Kashmir Heaven Tour", destination: "Kashmir", category: ["Domestic", "Premium", "Honeymoon", "Family"], duration: "6N/7D", price: 24999,
    hotel: "Srinagar hotel + houseboat", meals: "Breakfast and dinner", transport: "Private cab",
    sightseeing: "Gulmarg, Pahalgam, Sonmarg, Dal Lake", itinerary: "Srinagar | Gulmarg | Pahalgam | Sonmarg | Houseboat | Return",
    inclusions: "Hotels, meals, cab, shikara ride", exclusions: "Flights, gondola tickets, union cabs", cancellation: "Seasonal cancellation charges may apply.",
    dates: "Custom dates available", seats: 10, badges: ["Early Bird Offer"], image: destinationImages.Kashmir
  },
  {
    title: "Kerala Backwater Bliss", destination: "Kerala", category: ["Domestic", "Honeymoon", "Family", "Premium"], duration: "5N/6D", price: 21999,
    hotel: "Munnar resort + Alleppey houseboat", meals: "Breakfast and houseboat meals", transport: "Private cab",
    sightseeing: "Munnar, Thekkady, Alleppey", itinerary: "Cochin | Munnar | Thekkady | Alleppey | Cochin",
    inclusions: "Stay, meals, cab, sightseeing", exclusions: "Flights, personal activities", cancellation: "Date changes subject to availability.",
    dates: "Daily on request", seats: 14, badges: ["Best Seller"], image: destinationImages.Kerala
  },
  {
    title: "Rajasthan Royal Circuit", destination: "Rajasthan", category: ["Domestic", "Group", "Family", "Corporate"], duration: "6N/7D", price: 18999,
    hotel: "Heritage-style hotels", meals: "Breakfast included", transport: "Tempo traveller / coach",
    sightseeing: "Jaipur, Jodhpur, Udaipur, Pushkar", itinerary: "Jaipur | Jodhpur | Udaipur | Pushkar | Return",
    inclusions: "Hotels, breakfast, coach, guide support", exclusions: "Monument tickets and meals not mentioned", cancellation: "Group cancellation as per booking stage.",
    dates: "Monthly fixed departures", seats: 22, badges: ["Group Deal"], image: destinationImages.Rajasthan
  },
  {
    title: "Ayodhya Varanasi Darshan", destination: "Ayodhya & Varanasi", category: ["Domestic", "Religious", "Budget", "School"], duration: "4N/5D", price: 8999,
    hotel: "Clean standard hotel", meals: "Breakfast and dinner", transport: "Bus / train assistance",
    sightseeing: "Ram Mandir, Kashi Vishwanath, Ganga Aarti", itinerary: "Ayodhya | Varanasi | Sarnath | Return",
    inclusions: "Stay, meals, transfers, coordinator", exclusions: "VIP darshan, personal donations", cancellation: "Seat transfer possible before final charting.",
    dates: "Festival and weekend batches", seats: 30, badges: ["Limited Seats"], image: destinationImages.Varanasi
  },
  {
    title: "Dubai City & Desert Holiday", destination: "Dubai", country: "UAE", category: ["International", "Family", "Group"], duration: "4N/5D", price: 64999,
    departure: "Indore / Mumbai / Delhi", hotel: "4 Star city hotel", meals: "Breakfast included", transport: "Airport transfers and SIC tours",
    airportTransfers: "Included", sightseeing: "Burj Khalifa, desert safari, marina cruise, city tour", visa: "Tourist visa assistance available", flight: "Flight assistance available",
    insurance: "Travel insurance assistance available", tourManager: "Available for groups", overview: "A vibrant international break with skyline views, shopping, desert adventure and family-friendly sightseeing.",
    itinerary: "Day 1 Arrival and marina evening | Day 2 Dubai city tour and Burj Khalifa | Day 3 Desert safari | Day 4 Shopping and optional parks | Day 5 Return",
    inclusions: "Hotel, breakfast, airport transfers, sightseeing, visa documentation support", exclusions: "Flights, visa fee, tourism dirham, personal expenses", cancellation: "International supplier cancellation charges apply.",
    guidelines: "Valid passport, confirmed tickets and travel insurance recommended.", documents: "Passport, photo, PAN, bank statement, employment or business proof as applicable.",
    passport: "Minimum 6 months validity from return date recommended.", currency: "UAE Dirham", weather: "Warm city weather; light clothes recommended.", dates: "Weekly departures", seats: 16, badges: ["Best Seller"], image: internationalImages.Dubai
  },
  {
    title: "Bali Island Honeymoon", destination: "Bali", country: "Indonesia", category: ["International", "Honeymoon", "Couple"], duration: "5N/6D", price: 72999,
    departure: "Mumbai / Delhi / Ahmedabad", hotel: "4 Star resort or private villa", meals: "Breakfast included", transport: "Private airport transfers",
    airportTransfers: "Private transfers included", sightseeing: "Ubud, Kintamani, Tanah Lot, beach clubs", visa: "Visa-on-arrival guidance", flight: "Flight assistance available",
    insurance: "Travel insurance assistance available", tourManager: "On-call coordinator", overview: "A romantic island escape with couple-friendly stays, temple visits, beaches and private experiences.",
    itinerary: "Day 1 Arrival and room decoration | Day 2 Ubud and Kintamani | Day 3 Water sports and beach time | Day 4 Tanah Lot sunset | Day 5 Leisure | Day 6 Return",
    inclusions: "Hotel, breakfast, transfers, sightseeing, honeymoon decoration support", exclusions: "Flights, visa-on-arrival fee, personal expenses", cancellation: "Villa and flight cancellation as per supplier rules.",
    guidelines: "Carry passport, return tickets and hotel vouchers.", documents: "Passport, photos, tickets, hotel confirmation and insurance copy.",
    passport: "Minimum 6 months validity from travel date.", currency: "Indonesian Rupiah", weather: "Tropical weather; light clothes and rain cover recommended.", dates: "Custom dates available", seats: 10, badges: ["Special Discount"], image: internationalImages.Bali
  },
  {
    title: "Thailand Fun Escape", destination: "Thailand", country: "Thailand", category: ["International", "Group", "Adventure"], duration: "5N/6D", price: 57999,
    departure: "Mumbai / Delhi / Ahmedabad", hotel: "3 or 4 Star hotels", meals: "Breakfast included", transport: "Airport transfers and local tours",
    airportTransfers: "Included", sightseeing: "Bangkok, Pattaya, Coral Island, city temples", visa: "Visa guidance available", flight: "Flight assistance available",
    insurance: "Travel insurance assistance available", tourManager: "Available for fixed departures", overview: "A lively group-friendly international trip with beaches, nightlife, shopping and sightseeing.",
    itinerary: "Day 1 Bangkok to Pattaya | Day 2 Coral Island | Day 3 Leisure | Day 4 Bangkok city tour | Day 5 Shopping | Day 6 Return",
    inclusions: "Hotels, breakfast, transfers, island tour, city tour", exclusions: "Flights, visa fee, optional activities", cancellation: "Airline and hotel rules apply after confirmation.",
    guidelines: "Respect local guidelines and carry ID documents during tours.", documents: "Passport, photos, tickets, hotel vouchers and insurance.",
    passport: "Minimum 6 months validity recommended.", currency: "Thai Baht", weather: "Humid tropical weather; pack comfortable clothes.", dates: "Monthly group departures", seats: 20, badges: ["Limited Seats"], image: internationalImages.Thailand
  },
  {
    title: "Maldives Water Villa Break", destination: "Maldives", country: "Maldives", category: ["International", "Honeymoon", "Premium"], duration: "4N/5D", price: 119999,
    departure: "Mumbai / Delhi", hotel: "Beach villa and water villa options", meals: "Breakfast and dinner or all-inclusive options", transport: "Speedboat / seaplane transfers",
    airportTransfers: "Resort transfers included as per package", sightseeing: "Island stay, snorkeling, sunset cruise options", visa: "Visa-on-arrival guidance", flight: "Flight assistance available",
    insurance: "Travel insurance assistance available", tourManager: "Resort support and RR Tourism coordination", overview: "A premium island holiday with turquoise water, romantic stays and relaxed luxury.",
    itinerary: "Day 1 Arrival at resort | Day 2 Beach villa leisure | Day 3 Water villa experience | Day 4 Optional cruise or snorkeling | Day 5 Return",
    inclusions: "Resort stay, selected meals, transfers, honeymoon freebies as per resort", exclusions: "Flights, green tax if not included, paid activities", cancellation: "Strict resort cancellation rules may apply.",
    guidelines: "Check resort meal plan and transfer timings before booking.", documents: "Passport, return tickets, resort voucher, insurance copy.",
    passport: "Minimum 6 months validity recommended.", currency: "Maldivian Rufiyaa / USD accepted at resorts", weather: "Warm beach weather with seasonal showers.", dates: "Daily on request", seats: 8, badges: ["Best Seller"], image: internationalImages.Maldives
  },
  {
    title: "Singapore Malaysia Explorer", destination: "Singapore & Malaysia", country: "Singapore / Malaysia", category: ["International", "Family", "Group"], duration: "6N/7D", price: 89999,
    departure: "Mumbai / Delhi / Ahmedabad", hotel: "3 or 4 Star hotels", meals: "Breakfast included", transport: "Airport transfers and coach tours",
    airportTransfers: "Included", sightseeing: "Singapore city, Sentosa, Kuala Lumpur, Genting", visa: "Visa assistance available", flight: "Flight assistance available",
    insurance: "Travel insurance assistance available", tourManager: "Available for groups", overview: "A balanced family tour covering clean city experiences, entertainment zones and Malaysia highlights.",
    itinerary: "Day 1 Singapore arrival | Day 2 City and Sentosa | Day 3 Universal optional | Day 4 Kuala Lumpur | Day 5 Genting | Day 6 Leisure | Day 7 Return",
    inclusions: "Hotels, breakfast, transfers, sightseeing and documentation support", exclusions: "Flights, visa fees, optional tickets", cancellation: "Supplier cancellation rules apply.",
    guidelines: "Carry confirmed hotel vouchers, tickets and sufficient funds.", documents: "Passport, photos, bank statement, employment proof and travel plan.",
    passport: "Minimum 6 months validity required.", currency: "Singapore Dollar / Malaysian Ringgit", weather: "Warm, humid and suitable for light clothing.", dates: "Fixed and custom departures", seats: 18, badges: ["Early Bird Offer"], image: internationalImages.Singapore
  },
  {
    title: "Europe Dream Circuit", destination: "Europe", country: "France / Switzerland / Italy", category: ["International", "Premium", "Family"], duration: "9N/10D", price: 189999,
    departure: "Mumbai / Delhi", hotel: "3 or 4 Star hotels", meals: "Breakfast and selected Indian dinners", transport: "Coach and train assistance",
    airportTransfers: "Included as per itinerary", sightseeing: "Paris, Swiss Alps, Venice, Rome highlights", visa: "Schengen visa documentation assistance", flight: "Flight assistance available",
    insurance: "Schengen travel insurance assistance", tourManager: "Tour manager available on fixed departures", overview: "A premium multi-country holiday for travellers who want Europe's classic cities and landscapes.",
    itinerary: "Day 1 Paris | Day 2 Eiffel and city | Day 3 Switzerland | Day 4 Mt Titlis optional | Day 5 Lucerne | Day 6 Venice | Day 7 Florence/Pisa | Day 8 Rome | Day 9 Vatican optional | Day 10 Return",
    inclusions: "Hotels, breakfast, transfers, guided city tours, visa documentation support", exclusions: "Flights, visa fee, city tax, optional excursions", cancellation: "Strict international cancellation and visa-stage charges apply.",
    guidelines: "Apply early for Schengen visa and maintain document consistency.", documents: "Passport, photos, bank statement, ITR, employment proof, leave letter, insurance, tickets and hotel plan.",
    passport: "Minimum 6 months validity and blank pages required.", currency: "Euro / Swiss Franc", weather: "Varies by country; layered clothing recommended.", dates: "Seasonal departures", seats: 24, badges: ["Limited Seats"], image: internationalImages.Europe
  }
];

const offers = [
  "Summer Vacation Packages", "Monsoon Special Tours", "Winter Holiday Packages", "Honeymoon Offers",
  "Family Tour Discounts", "Group Booking Discounts", "Weekend Getaway Offers", "Festival Tour Packages"
];

const visaServices = [
  "Passport guidance", "Tourist visa assistance", "Flight booking support", "International hotel booking",
  "Travel insurance assistance", "Airport pickup and drop", "Foreign exchange guidance", "Destination travel guidelines",
  "Documentation support", "Customized trip planning"
];

const honeymoonPackages = [
  ["Maldives Honeymoon", internationalImages.Maldives], ["Bali Honeymoon", internationalImages.Bali], ["Dubai Honeymoon", internationalImages.Dubai],
  ["Thailand Honeymoon", internationalImages.Thailand], ["Singapore Honeymoon", internationalImages.Singapore], ["Mauritius Honeymoon", internationalImages.Mauritius],
  ["Switzerland Honeymoon", internationalImages.Switzerland], ["Europe Honeymoon", internationalImages.Europe]
];

const gallery = [
  ["Beach Trips", "assets/gallery-pdf/page-01.jpg", "Sunset beach moment from RR Tourism trip"],
  ["Student Tours", "assets/gallery-pdf/page-02.jpg", "Student group enjoying a destination walk"],
  ["Student Tours", "assets/gallery-pdf/page-03.jpg", "Student batch group photo"],
  ["Group Tours", "assets/gallery-pdf/page-04.jpg", "Group photo at a waterfront destination"],
  ["Travel Moments", "assets/gallery-pdf/page-05.jpg", "Outdoor travel activity with guests"],
  ["Travel Moments", "assets/gallery-pdf/page-06.jpg", "Guests enjoying evening travel venue"],
  ["Heritage & Religious", "assets/gallery-pdf/page-07.jpg", "Group visit at heritage church"],
  ["Heritage & Religious", "assets/gallery-pdf/page-08.jpg", "Group visit at historic fort"],
  ["Beach Trips", "assets/gallery-pdf/page-09.jpg", "Group beach memory"],
  ["Heritage & Religious", "assets/gallery-pdf/page-10.jpg", "Temple visit group photo"],
  ["Group Tours", "assets/gallery-pdf/page-11.jpg", "Large group seating during trip"],
  ["Group Tours", "assets/gallery-pdf/page-12.jpg", "Group at resort walkway"],
  ["Beach Trips", "assets/gallery-pdf/page-13.jpg", "Beach walk travel moment"],
  ["Beach Trips", "assets/gallery-pdf/page-14.jpg", "Beach activity with travellers"],
  ["Beach Trips", "assets/gallery-pdf/page-15.jpg", "Sand activity at beach destination"],
  ["Student Tours", "assets/gallery-pdf/page-16.jpg", "Student group close-up memory"],
  ["Group Tours", "assets/gallery-pdf/page-17.jpg", "Group travel ride selfie"],
  ["Heritage & Religious", "assets/gallery-pdf/page-18.jpg", "Heritage church visit"],
  ["Travel Moments", "assets/gallery-pdf/page-19.jpg", "Guests at indoor travel venue"],
  ["Travel Moments", "assets/gallery-pdf/page-20.jpg", "Outdoor group travel memory"]
];

const reviews = [
  ["Priya Sharma", "Kashmir", "Family Package", "March 2026", "RR Tourism planned our family trip beautifully. Hotels, cab and sightseeing were comfortable, and every detail was explained clearly.", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80", ""],
  ["Ankit Jain", "Goa", "Group Package", "February 2026", "The Goa package from Indore was affordable and fun. Quick WhatsApp support made the whole booking feel very easy.", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", ""],
  ["Nisha Verma", "Kerala", "Honeymoon Package", "January 2026", "Our honeymoon itinerary had a great balance of relaxation and sightseeing. The houseboat stay was the highlight.", "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80", ""],
  ["Sample Review - Rohan Mehta", "Dubai", "International Family Package", "Sample travel date", "Sample Review: The international planning flow felt clear, with helpful guidance for flights, hotel options and visa documents.", "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=300&q=80", "Sample Review"],
  ["Sample Review - Aditi Rao", "Maldives", "International Honeymoon Package", "Sample travel date", "Sample Review: The resort suggestions, private transfer guidance and honeymoon add-ons were presented professionally.", "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=300&q=80", "Sample Review"]
];

const blogs = [
  {
    title: "Top 7 Weekend Trips from Indore",
    text: "Short, refreshing routes for families and friend groups.",
    image: destinationImages["Indore Nearby"],
    details: "Weekend travellers from Indore can plan short breaks to Maheshwar, Mandu, Ujjain, Omkareshwar, Pachmarhi, Choral and nearby resort stays. Keep the itinerary light, start early, pre-book rooms during holidays and choose private transport for family comfort. RR Tourism can arrange pickup, hotel options, sightseeing and a relaxed return plan."
  },
  {
    title: "How to Plan a Budget Goa Tour",
    text: "Smart choices for hotels, transfers, meals and sightseeing.",
    image: destinationImages.Goa,
    details: "A budget Goa tour works best when dates are flexible, hotels are booked away from peak beach lanes and sightseeing is grouped by North Goa and South Goa routes. Plan breakfast-included stays, shared transfers where practical and keep one leisure day for beaches or cruise options. RR Tourism helps compare hotel categories, transport and activity add-ons before booking."
  },
  {
    title: "Best Season for Kashmir and Manali",
    text: "Snow, flowers, pleasant weather and what to pack.",
    image: destinationImages.Kashmir,
    details: "Kashmir is loved in spring for flowers, summer for family sightseeing and winter for snow views. Manali is best for pleasant mountain weather from March to June and snow experiences during winter. Carry layers, comfortable shoes, ID proofs and keep buffer time during high season because weather can affect road movement."
  }
];

const weather = [
  ["Goa", "29 C", "Beach weather, carry cottons and sunscreen."],
  ["Manali", "14 C", "Cool evenings, pack jackets."],
  ["Kerala", "27 C", "Humid and green, ideal for backwaters."],
  ["Rajasthan", "32 C", "Sunny heritage days, hydrate well."],
  ["Dubai", "34 C", "Warm city weather, plan outdoor time wisely."],
  ["Bali", "28 C", "Tropical weather, carry light cottons."],
  ["Maldives", "30 C", "Beach weather with possible seasonal showers."],
  ["Europe", "18 C", "Weather varies, layered clothing is useful."]
];

const weatherLocations = [
  ["Goa", 15.2993, 74.1240],
  ["Manali", 32.2396, 77.1887],
  ["Kerala", 9.9312, 76.2673],
  ["Rajasthan", 26.9124, 75.7873],
  ["Dubai", 25.2048, 55.2708],
  ["Bali", -8.4095, 115.1889],
  ["Maldives", 4.1755, 73.5093],
  ["Europe", 48.8566, 2.3522]
];

const fallbackWeather = [
  ["Goa", "29 C", "Live weather unavailable. Beach weather often needs cottons and sunscreen."],
  ["Manali", "14 C", "Live weather unavailable. Cool evenings often need jackets."],
  ["Kerala", "27 C", "Live weather unavailable. Humid green weather is common."],
  ["Rajasthan", "32 C", "Live weather unavailable. Sunny heritage days need hydration."],
  ["Dubai", "34 C", "Live weather unavailable. Plan outdoor time wisely."],
  ["Bali", "28 C", "Live weather unavailable. Tropical weather needs light cottons."],
  ["Maldives", "30 C", "Live weather unavailable. Beach weather may include seasonal showers."],
  ["Europe", "18 C", "Live weather unavailable. Layered clothing is useful."]
];

const faqs = [
  ["Do you provide pickup from Mhow and Indore?", "Yes, pickup can be arranged from Mhow, Indore, airport or railway station depending on the package."],
  ["Can packages be customized?", "Yes. Dates, hotels, transport, meals, room category and sightseeing can be customized."],
  ["How are bookings confirmed?", "Booking enquiries are sent directly to RR Tourism on WhatsApp for confirmation and next steps."],
  ["Does RR Tourism organize international trips?", "Yes, RR Tourism supports international holidays with hotel, flight, visa, insurance, transfer and sightseeing assistance."],
  ["Does RR Tourism guarantee visa approval?", "No. Visa approval depends on the embassy or consulate. RR Tourism provides documentation and application assistance only."],
  ["Do you manage school, college and corporate tours?", "Yes, group movement, seating, rooms, meals and coordinators can be planned for larger batches."],
  ["Are brochures downloadable?", "Package cards include download itinerary actions, ready to link to PDF brochures."]
];

const rupee = value => `Rs ${Number(value).toLocaleString("en-IN")}`;
const whatsappUrl = message => `https://wa.me/${phone}?text=${encodeURIComponent(message || whatsappText)}`;
const fallbackTravelImage = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80";

const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;"
}[char]));

function packageWhatsAppMessage(pkg, prefix = "I want to book this package") {
  return `Hello RR Tourism,\n${prefix}.\n\nPackage: ${pkg.title}\nDestination: ${pkg.destination}\nDuration: ${pkg.duration}\nStarting Price: ${rupee(pkg.price)}\nTravel Dates: ${pkg.dates}\n\nPlease share availability and complete details.`;
}

function packageDetailsHtml(pkg) {
  const isInternational = pkg.category.includes("International");
  return `<div class="modal-header">
    <img src="${pkg.image}" alt="${escapeHtml(pkg.title)}" />
    <div>
      <p class="eyebrow">${isInternational ? "International Package" : "Tour Package"}</p>
      <h2>${pkg.title}</h2>
      <p>${pkg.destination} | ${pkg.duration} | Starting ${rupee(pkg.price)}</p>
    </div>
  </div>
  <div class="modal-grid">
    <div><strong>Hotel</strong><span>${pkg.hotel}</span></div>
    <div><strong>Meals</strong><span>${pkg.meals}</span></div>
    <div><strong>Transport</strong><span>${pkg.transport}</span></div>
    <div><strong>Sightseeing</strong><span>${pkg.sightseeing}</span></div>
    <div><strong>Dates</strong><span>${pkg.dates}</span></div>
    <div><strong>Seats</strong><span>${pkg.seats} seats</span></div>
  </div>
  <div class="modal-copy">
    ${pkg.overview ? `<h3>Overview</h3><p>${pkg.overview}</p>` : ""}
    <h3>Day-wise itinerary</h3><p>${pkg.itinerary}</p>
    ${isInternational ? `<h3>International assistance</h3><p><strong>Departure:</strong> ${pkg.departure}</p><p><strong>Visa:</strong> ${pkg.visa}</p><p><strong>Flight:</strong> ${pkg.flight}</p><p><strong>Insurance:</strong> ${pkg.insurance}</p><p><strong>Passport:</strong> ${pkg.passport}</p><p><strong>Required documents:</strong> ${pkg.documents}</p>` : ""}
    <h3>Inclusions</h3><p>${pkg.inclusions}</p>
    <h3>Exclusions</h3><p>${pkg.exclusions}</p>
    <h3>Cancellation</h3><p>${pkg.cancellation}</p>
  </div>
  <div class="modal-actions">
    <a class="btn primary" href="#contact" data-modal-close data-enquiry="${pkg.title}">Enquiry</a>
    <button class="btn secondary" data-download="${pkg.title}">Download Itinerary</button>
    <a class="btn whatsapp" target="_blank" rel="noopener noreferrer" href="${whatsappUrl(packageWhatsAppMessage(pkg))}">WhatsApp Booking</a>
  </div>`;
}

function openModal(html) {
  const modal = document.getElementById("contentModal");
  document.getElementById("modalContent").innerHTML = html;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("contentModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setPackageEnquiry(title) {
  const message = `I want more information about ${title}. Please share availability, final price and itinerary.`;
  const textarea = document.querySelector("#contactForm textarea");
  if (textarea) textarea.value = message;
  location.hash = "contact";
  setTimeout(() => textarea?.focus(), 250);
}

function readBlobAsDataUrl(blob) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

async function downloadBrandedItinerary(title) {
  const pkg = packages.find(item => item.title === title);
  if (!pkg) return;
  let logoData = window.RR_LOGO_DATA_URI || "assets/rr-tourism-logo.png";
  try {
    if (!window.RR_LOGO_DATA_URI) {
      const logoBlob = await fetch("assets/rr-tourism-logo.png").then(res => res.blob());
      logoData = await readBlobAsDataUrl(logoBlob);
    }
  } catch (error) {
    logoData = window.RR_LOGO_DATA_URI || "assets/rr-tourism-logo.png";
  }
  const printDate = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${pkg.title} - RR Tourism Itinerary</title>
  <style>body{font-family:Arial,sans-serif;color:#173052;line-height:1.6;padding:32px}.itinerary-header{display:flex;gap:18px;align-items:center;border-bottom:3px solid #2468ff;padding-bottom:18px;margin-bottom:22px}.itinerary-logo{width:90px;height:auto;object-fit:contain;display:block}h1{color:#2468ff;margin:0}.badge{display:inline-block;background:#ff8a2a;color:#fff;padding:6px 10px;border-radius:999px;font-weight:700}.box{border:1px solid #d8e8ff;border-radius:18px;padding:18px;margin:16px 0}@media print{.itinerary-logo{display:block!important;visibility:visible!important}}</style></head>
  <body><header class="itinerary-header"><img src="${logoData}" alt="RR Tourism Logo" class="itinerary-logo"><div><h1>RR Tourism</h1><p>Mhow-Indore, Madhya Pradesh</p><p>WhatsApp: +91 90090 71697</p></div></header><h1>${pkg.title}</h1><p class="badge">${pkg.destination} | ${pkg.duration} | Starting ${rupee(pkg.price)}</p><p><strong>Download/Print date:</strong> ${printDate}</p>
  <div class="box"><h2>Itinerary</h2><p>${pkg.itinerary}</p></div><div class="box"><h2>Hotel, Meals & Transport</h2><p><strong>Hotel:</strong> ${pkg.hotel}</p><p><strong>Meals:</strong> ${pkg.meals}</p><p><strong>Transport:</strong> ${pkg.transport}</p></div>
  <div class="box"><h2>Inclusions</h2><p>${pkg.inclusions}</p><h2>Exclusions</h2><p>${pkg.exclusions}</p><h2>Cancellation Policy</h2><p>${pkg.cancellation}</p></div>
  <p>RR Tourism, Mhow-Indore | WhatsApp: +91 90090 71697 | Email: Info@rrtourism.com</p></body></html>`;
  const blob = new Blob([html], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${pkg.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-rr-tourism-itinerary.html`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function renderQuickPages() {
  document.getElementById("quickPages").innerHTML = pageLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("");
}

function renderAbout() {
  document.getElementById("aboutFeatures").innerHTML = aboutFeatures.map(([title, text]) => `<div class="feature-pill"><strong>${title}</strong><span>${text}</span></div>`).join("");
  document.getElementById("stats").innerHTML = stats.map(([label, target, suffix]) => `<div class="stat"><strong data-count="${target}">0</strong><span>${label} ${suffix}</span></div>`).join("");
}

function renderServices() {
  document.getElementById("servicesGrid").innerHTML = services.map((service, index) => `
    <article class="service-card reveal">
      <div class="service-icon">${serviceIcons[index % serviceIcons.length]}</div>
      <strong>${service}</strong>
      <span>Reliable support, clear communication and RR Tourism coordination from enquiry to return.</span>
    </article>`).join("");
}

function packageCard(pkg) {
  const isInternational = pkg.category.includes("International");
  const internationalDetails = isInternational ? `
        <div class="detail-block"><strong>Destination overview</strong><p>${pkg.overview}</p></div>
        <p><strong>Departure:</strong> ${pkg.departure}</p>
        <p><strong>Airport transfers:</strong> ${pkg.airportTransfers}</p>
        <p><strong>Visa assistance:</strong> ${pkg.visa}</p>
        <p><strong>Flight assistance:</strong> ${pkg.flight}</p>
        <p><strong>Travel insurance:</strong> ${pkg.insurance}</p>
        <p><strong>Tour manager:</strong> ${pkg.tourManager}</p>
        <p><strong>Passport:</strong> ${pkg.passport}</p>
        <p><strong>Currency:</strong> ${pkg.currency}</p>
        <p><strong>Local weather:</strong> ${pkg.weather}</p>
        <p><strong>Important guidelines:</strong> ${pkg.guidelines}</p>
        <p><strong>Required documents:</strong> ${pkg.documents}</p>` : "";
  const whatsAppMessage = packageWhatsAppMessage(pkg);
  return `<article class="package-card reveal" data-category="${pkg.category.join(" ")}">
    <div class="badge-row">${pkg.badges.map(b => `<span class="badge">${b}</span>`).join("")}</div>
    <img src="${pkg.image}" alt="${pkg.title}" loading="lazy" />
    <div class="card-body">
      <h3>${pkg.title}</h3>
      <div class="meta"><span>${pkg.destination}</span><span>${pkg.duration}</span><span>${pkg.dates}</span><span>${pkg.seats} seats</span></div>
      <div class="price">Starting ${rupee(pkg.price)}</div>
      <div class="package-highlights">
        <div><strong>Hotel</strong><span>${pkg.hotel}</span></div>
        <div><strong>Meals</strong><span>${pkg.meals}</span></div>
        <div><strong>Transport</strong><span>${pkg.transport}</span></div>
        <div><strong>Sightseeing</strong><span>${pkg.sightseeing}</span></div>
      </div>
      <details class="package-details">
        <summary>Full package details</summary>
        <div class="package-details-content">
          <div class="detail-block"><strong>Day-wise itinerary</strong><p>${pkg.itinerary}</p></div>
          ${internationalDetails}
          <p><strong>Inclusions:</strong> ${pkg.inclusions}</p>
          <p><strong>Exclusions:</strong> ${pkg.exclusions}</p>
          <p><strong>Cancellation:</strong> ${pkg.cancellation}</p>
        </div>
      </details>
      <div class="card-actions">
        <button class="btn primary" data-enquiry="${pkg.title}">Enquiry</button>
        <button class="btn secondary" data-download="${pkg.title}">Download Itinerary</button>
        <a class="btn whatsapp" target="_blank" rel="noopener noreferrer" href="${whatsappUrl(whatsAppMessage)}">WhatsApp Booking</a>
        <button class="btn coral" data-package-details="${pkg.title}">View Details</button>
      </div>
    </div>
  </article>`;
}

function renderPackageFilters() {
  const cats = [
    ["All", "All Packages"], ["Domestic", "Domestic Tours"], ["International", "International Tours"], ["Honeymoon", "Honeymoon Tours"],
    ["Family", "Family Tours"], ["Group", "Group Tours"], ["Adventure", "Adventure Tours"], ["Religious", "Religious Tours"], ["Weekend", "Weekend Tours"]
  ];
  document.getElementById("packageFilters").innerHTML = cats.map(([cat, label], i) => `<button class="${i === 0 ? "active" : ""}" data-filter="${cat}">${label}</button>`).join("");
}

function renderPackages(filter = "All", query = "") {
  const q = query.toLowerCase();
  const list = packages.filter(pkg => (filter === "All" || pkg.category.includes(filter)) && JSON.stringify(pkg).toLowerCase().includes(q));
  document.getElementById("packageGrid").innerHTML = list.map(packageCard).join("") || `<p>No packages found. Try another filter.</p>`;
  observeReveals();
}

function renderDestinations() {
  document.getElementById("destinationGrid").innerHTML = destinations.map(dest => `
    <article class="destination-card reveal">
      <div class="badge-row"><span class="badge">${dest.duration}</span></div>
      <img src="${dest.image}" alt="${dest.name}" loading="lazy" />
      <div class="card-body">
        <h3>${dest.name}</h3>
        <div class="rating">${starIcons()} ${dest.rating}</div>
        <p>${dest.highlights}</p>
        <div class="price">From ${rupee(dest.price)}</div>
        <div class="card-actions">
          <a class="btn primary" href="#packages">View Package</a>
          <a class="btn coral" href="#booking">Book Now</a>
        </div>
      </div>
    </article>`).join("");
}

function renderInternationalDestinations() {
  document.getElementById("internationalGrid").innerHTML = internationalDestinations.map(dest => `
    <article class="destination-card reveal">
      <div class="badge-row"><span class="badge">${dest.duration}</span></div>
      <img src="${dest.image}" alt="${dest.name}" loading="lazy" />
      <div class="card-body">
        <h3>${dest.name}</h3>
        <div class="rating">${starIcons()} ${dest.rating}</div>
        <p>${dest.highlights}</p>
        <div class="price">From ${rupee(dest.price)}</div>
        <div class="card-actions">
          <a class="btn primary" href="#packages">View Package</a>
          <a class="btn whatsapp" target="_blank" rel="noopener noreferrer" href="${whatsappUrl(internationalWhatsappText)}">WhatsApp</a>
        </div>
      </div>
    </article>`).join("");
}

function renderVisaServices() {
  document.getElementById("visaGrid").innerHTML = visaServices.map((service, index) => `
    <article class="service-card reveal">
      <div class="service-icon">${serviceIcons[index % serviceIcons.length]}</div>
      <strong>${service}</strong>
      <span>Documentation-aware support for international travel planning from enquiry to departure.</span>
    </article>`).join("");
}

function renderHoneymoonPackages() {
  const highlights = "Couple-friendly hotels | Private airport transfers | Candlelight dinner | Romantic room decoration | Island tours | Couple activities | Personalized honeymoon itinerary";
  document.getElementById("honeymoonGrid").innerHTML = honeymoonPackages.map(([title, image], index) => `
    <article class="package-card reveal">
      <div class="badge-row"><span class="badge">${index % 2 ? "Limited Seats" : "Best Seller"}</span></div>
      <img src="${image}" alt="${title}" loading="lazy" />
      <div class="card-body">
        <h3>${title}</h3>
        <div class="meta"><span>International Honeymoon</span><span>${index % 2 ? "5N/6D" : "4N/5D"}</span><span>Custom dates</span></div>
        <div class="price">Starting ${rupee([119999, 72999, 64999, 57999, 89999, 109999, 149999, 189999][index])}</div>
        <div class="itinerary"><strong>Romantic highlights:</strong> ${highlights}</div>
        <div class="card-actions">
          <a class="btn primary" href="#planner">Plan Honeymoon</a>
          <a class="btn whatsapp" target="_blank" rel="noopener noreferrer" href="${whatsappUrl(internationalWhatsappText)}">WhatsApp</a>
        </div>
      </div>
    </article>`).join("");
}

function renderOffers() {
  document.getElementById("offerGrid").innerHTML = offers.map((offer, i) => `
    <article class="offer-card reveal">
      <span class="badge">${i % 2 ? "Special Discount" : "Early Bird Offer"}</span>
      <h3>${offer}</h3>
      <p>Save more with colorful seasonal departures from Mhow and Indore.</p>
      <div class="countdown" data-hours="${36 + i * 7}"><span>00d</span><span>00h</span><span>00m</span></div>
    </article>`).join("");
}


function renderHolyPlaces(filter = "All") {
  const filters = ["All", ...new Set(holyPlaces.map(place => place.faith))];
  document.getElementById("holyFilters").innerHTML = filters.map((faith, index) => `<button class="${(filter === faith || (filter === "All" && index === 0)) ? "active" : ""}" data-holy="${faith}">${faith === "All" ? "All Holy Places" : faith + " Places"}</button>`).join("");
  const list = filter === "All" ? holyPlaces : holyPlaces.filter(place => place.faith === filter);
  document.getElementById("holyGrid").innerHTML = list.map(place => `
    <article class="destination-card reveal">
      <div class="badge-row"><span class="badge">${place.faith}</span></div>
      <img src="${place.image}" alt="${place.name} holy place tour by RR Tourism" loading="lazy" />
      <div class="card-body">
        <h3>${place.name}</h3>
        <div class="meta"><span>${place.duration}</span><span>${place.faith} Tour</span></div>
        <p>${place.highlights}</p>
        <div class="price">From ${rupee(place.price)}</div>
        <div class="card-actions">
          <a class="btn primary" href="#contact" data-enquiry="${place.name}">Send Enquiry</a>
          <a class="btn whatsapp" target="_blank" rel="noopener noreferrer" href="${whatsappUrl(`Hello RR Tourism, I want information about ${place.name} holy place tour.`)}">WhatsApp</a>
        </div>
      </div>
    </article>`).join("");
  observeReveals();
}


function renderInternationalHolyPlaces(filter = "All") {
  const filters = ["All", ...new Set(internationalHolyPlaces.map(place => place.faith))];
  document.getElementById("internationalHolyFilters").innerHTML = filters.map((faith, index) => `<button class="${(filter === faith || (filter === "All" && index === 0)) ? "active" : ""}" data-international-holy="${faith}">${faith === "All" ? "All International Holy Trips" : faith + " Trips"}</button>`).join("");
  const list = filter === "All" ? internationalHolyPlaces : internationalHolyPlaces.filter(place => place.faith === filter);
  document.getElementById("internationalHolyGrid").innerHTML = list.map(place => `
    <article class="destination-card reveal">
      <div class="badge-row"><span class="badge">International</span><span class="badge">${place.faith}</span></div>
      <img src="${place.image}" data-fallback="${place.fallback || fallbackTravelImage}" alt="${place.name} international holy trip by RR Tourism" loading="lazy" />
      <div class="card-body">
        <h3>${place.name}</h3>
        <div class="meta"><span>${place.duration}</span><span>${place.faith}</span></div>
        <p>${place.highlights}</p>
        <div class="price">From ${rupee(place.price)}</div>
        <div class="card-actions">
          <a class="btn primary" href="#contact" data-enquiry="${place.name}">Send Enquiry</a>
          <a class="btn whatsapp" target="_blank" rel="noopener noreferrer" href="${whatsappUrl(`Hello RR Tourism, I want information about ${place.name}.`)}">WhatsApp</a>
        </div>
      </div>
    </article>`).join("");
  observeReveals();
}

function renderGallery(filter = "All") {
  const categories = ["All", ...new Set(gallery.map(item => item[0]))];
  document.getElementById("galleryFilters").innerHTML = categories.map((cat, i) => `<button class="${(filter === cat || (filter === "All" && i === 0)) ? "active" : ""}" data-gallery="${cat}">${cat}</button>`).join("");
  const list = filter === "All" ? gallery : gallery.filter(item => item[0] === filter);
  document.getElementById("galleryGrid").innerHTML = list.map(([cat, image, alt], i) => `
    <div class="gallery-item reveal" data-image="${image}">
      <img src="${image}" alt="${alt || `${cat} by RR Tourism`}" loading="lazy" />
      <span>${cat}${cat.includes("Videos") ? " Play" : ""}</span>
    </div>`).join("");
  observeReveals();
}

let reviewIndex = 0;
function renderReview() {
  const [name, destination, type, date, text, image, label] = reviews[reviewIndex];
  document.getElementById("reviewCard").innerHTML = `
    <img src="${image}" alt="${name}" />
    <div>
      <div class="stars">${starIcons()}</div>
      <h3>${name}</h3>
      <p><strong>${destination}</strong> | ${type} | ${date}</p>
      ${label ? `<span class="badge">${label}</span>` : ""}
      <p>${text}</p>
    </div>`;
}

function renderBlogWeatherFaq() {
  document.getElementById("blogGrid").innerHTML = blogs.map((blog, index) => `
    <article class="blog-card reveal"><img src="${blog.image}" alt="${blog.title}" loading="lazy"><div class="card-body"><h3>${blog.title}</h3><p>${blog.text}</p><button class="btn secondary" data-blog="${index}">Read Trip</button></div></article>`).join("");
  renderWeatherCards(fallbackWeather, "Loading live weather...");
  document.getElementById("faqList").innerHTML = faqs.map(([q, a]) => `<div class="faq-item reveal"><button>${q}</button><p>${a}</p></div>`).join("");
}

function renderWeatherCards(items, status = "Live weather") {
  document.getElementById("weatherGrid").innerHTML = items.map(([place, temp, note]) => `<div class="weather-card reveal"><strong>${place}</strong><h3>${temp}</h3><span>${note}</span><small>${status}</small></div>`).join("");
  observeReveals();
}

async function updateWeather() {
  const results = await Promise.all(weatherLocations.map(async ([place, lat, lon]) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Weather request failed for ${place}`);
    const data = await response.json();
    const current = data.current || {};
    const temp = Number(current.temperature_2m);
    const humidity = Number(current.relative_humidity_2m);
    const wind = Number(current.wind_speed_10m);
    return [place, Number.isFinite(temp) ? `${Math.round(temp)} C` : "N/A", `Current conditions: humidity ${Number.isFinite(humidity) ? `${humidity}%` : "N/A"}, wind ${Number.isFinite(wind) ? `${wind} km/h` : "N/A"}.`];
  }));
  renderWeatherCards(results, `Updated ${new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}`);
}

function setupBooking() {
  const select = document.getElementById("bookingPackage");
  select.innerHTML = `<option value="">Select a tour package</option>` + packages.map((pkg, i) => `<option value="${i}">${pkg.title} - ${rupee(pkg.price)}</option>`).join("");
  document.getElementById("internationalDestination").innerHTML += internationalDestinations.map(dest => `<option>${dest.name}</option>`).join("");
  const buildBookingMessage = () => {
    const pkg = packages[select.value];
    return `Hello RR Tourism,\nI want to submit a booking enquiry.\n\nBooking Type: ${document.getElementById("bookingScope").value}\nPackage: ${pkg ? pkg.title : "Not selected"}\nInternational Destination: ${document.getElementById("internationalDestination").value || "Not selected"}\nTravel Date: ${document.getElementById("bookingDate").value || "Not selected"}\nLead Traveller: ${document.getElementById("travellerName").value || "Not provided"}\nMobile: ${document.getElementById("travellerPhone").value || "Not provided"}\nPickup: ${document.getElementById("pickup").value}\nRoom: ${document.getElementById("room").selectedOptions[0].textContent}\nFlight: ${document.getElementById("flightNeed").selectedOptions[0].textContent}\nTransfer: ${document.getElementById("transferNeed").selectedOptions[0].textContent}\nInsurance: ${document.getElementById("insuranceNeed").selectedOptions[0].textContent}\nPassport Status: ${document.getElementById("passportStatus").value || "Not provided"}\nVisa Status: ${document.getElementById("visaStatus").value}\nEstimate: ${document.getElementById("bookingTotal").textContent}\n\nPlease confirm availability and final price.`;
  };
  const updateWhatsApp = () => {
    document.getElementById("bookingWhatsappBtn").href = whatsappUrl(buildBookingMessage());
  };
  const update = () => {
    const pkg = packages[select.value];
    const room = Number(document.getElementById("room").value || 0);
    const transfer = Number(document.getElementById("transferNeed").value || 0);
    const extras = [...document.querySelectorAll(".extra:checked")].reduce((sum, el) => sum + Number(el.value), 0);
    const total = pkg ? pkg.price + room + transfer + extras : 0;
    document.getElementById("selectedPackageName").textContent = pkg ? pkg.title : "Choose a package";
    document.getElementById("bookingTotal").textContent = rupee(total);
    updateWhatsApp();
  };
  ["bookingScope", "internationalDestination", "bookingPackage", "bookingDate", "travellerName", "travellerPhone", "passportStatus", "visaStatus", "pickup", "room", "flightNeed", "transferNeed", "insuranceNeed"].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener("change", update);
    el.addEventListener("input", update);
  });
  document.querySelectorAll(".extra").forEach(el => el.addEventListener("change", update));
  update();
  return { buildBookingMessage };
}

function plannerWhatsAppMessage(form) {
  const data = new FormData(form);
  const lines = [
    "Hello RR Tourism,",
    "I want a customized trip plan.",
    "",
    `Name: ${data.get("name") || "Not provided"}`,
    `Mobile: ${data.get("mobile") || "Not provided"}`,
    `Email: ${data.get("email") || "Not provided"}`,
    `Trip Scope: ${data.get("tripScope") || "Not selected"}`,
    `Country: ${data.get("country") || "Not selected"}`,
    `Departure City: ${data.get("departureCity") || "Not selected"}`,
    `Passport: ${data.get("passport") || "Not selected"}`,
    `Visa Required: ${data.get("visaRequired") || "Not selected"}`,
    `Starting Location: ${data.get("start") || "Not provided"}`,
    `Destination: ${data.get("destination") || "Not provided"}`,
    `Travel Dates: ${data.get("dates") || "Flexible"}`,
    `Duration: ${data.get("duration") || "Not provided"}`,
    `Adults: ${data.get("adults") || "0"}`,
    `Children: ${data.get("children") || "0"}`,
    `Budget: ${data.get("budget") || "Not selected"}`,
    `Hotel: ${data.get("hotel") || "Not selected"}`,
    `Flight: ${data.get("flight") || "Not selected"}`,
    `Meal: ${data.get("meal") || "Not selected"}`,
    `Transport: ${data.get("transport") || "Not selected"}`,
    `Trip Type: ${data.get("type") || "Not selected"}`,
    `Special Requirements: ${data.get("requirements") || "None"}`,
    "",
    "Please share a suitable itinerary and price."
  ];
  return lines.join("\n");
}

function submitReviewHtml() {
  return `<div class="modal-copy">
    <p class="eyebrow">Customer Review</p>
    <h2>Submit Your Review</h2>
    <form class="modal-form" id="reviewForm">
      <input name="name" placeholder="Your full name" required />
      <input name="destination" placeholder="Destination visited" required />
      <input name="type" placeholder="Package type, e.g. Family or Honeymoon" required />
      <input name="date" placeholder="Travel month / date" required />
      <textarea name="text" placeholder="Write your travel experience" required></textarea>
      <button class="btn primary" type="submit">Submit Review</button>
    </form>
  </div>`;
}

function setupInteractions() {
  const header = document.getElementById("siteHeader");
  const toTop = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
    toTop.classList.toggle("show", window.scrollY > 600);
    document.querySelectorAll(".hero-float").forEach((el, i) => el.style.transform = `translateY(${window.scrollY * (0.03 + i * 0.015)}px)`);
  });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const mainNav = document.getElementById("mainNav");
  const navToggle = document.getElementById("navToggle");
  const setMobileNav = open => {
    mainNav.classList.toggle("open", open);
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  navToggle.addEventListener("click", () => setMobileNav(!mainNav.classList.contains("open")));
  document.querySelectorAll(".main-nav a").forEach(a => a.addEventListener("click", () => setMobileNav(false)));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") setMobileNav(false);
  });
  document.querySelectorAll("[data-nav-filter]").forEach(link => link.addEventListener("click", () => {
    const filter = link.dataset.navFilter;
    const button = [...document.querySelectorAll("#packageFilters button")].find(btn => btn.dataset.filter === filter);
    if (button) {
      document.querySelectorAll("#packageFilters button").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderPackages(filter, document.getElementById("packageSearch").value);
    }
  }));

  document.getElementById("packageFilters").addEventListener("click", e => {
    if (!e.target.matches("button")) return;
    document.querySelectorAll("#packageFilters button").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    renderPackages(e.target.dataset.filter, document.getElementById("packageSearch").value);
  });
  document.getElementById("packageSearch").addEventListener("input", e => {
    const active = document.querySelector("#packageFilters .active")?.dataset.filter || "All";
    renderPackages(active, e.target.value);
  });
  document.getElementById("galleryFilters").addEventListener("click", e => {
    if (e.target.matches("button")) renderGallery(e.target.dataset.gallery);
  });
  document.getElementById("holyFilters")?.addEventListener("click", e => {
    if (e.target.matches("button")) renderHolyPlaces(e.target.dataset.holy);
  });
  document.getElementById("internationalHolyFilters")?.addEventListener("click", e => {
    if (e.target.matches("button")) renderInternationalHolyPlaces(e.target.dataset.internationalHoly);
  });
  document.getElementById("galleryGrid").addEventListener("click", e => {
    const item = e.target.closest(".gallery-item");
    if (!item) return;
    document.getElementById("lightboxImage").src = item.dataset.image;
    document.getElementById("lightbox").classList.add("open");
  });
  document.getElementById("closeLightbox").addEventListener("click", () => document.getElementById("lightbox").classList.remove("open"));
  document.getElementById("closeModal").addEventListener("click", closeModal);
  document.getElementById("contentModal").addEventListener("click", e => {
    if (e.target.id === "contentModal" || e.target.dataset.modalClose !== undefined) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  document.getElementById("prevReview").addEventListener("click", () => { reviewIndex = (reviewIndex + reviews.length - 1) % reviews.length; renderReview(); });
  document.getElementById("nextReview").addEventListener("click", () => { reviewIndex = (reviewIndex + 1) % reviews.length; renderReview(); });
  setInterval(() => { reviewIndex = (reviewIndex + 1) % reviews.length; renderReview(); }, 5500);

  document.getElementById("faqList").addEventListener("click", e => {
    if (e.target.matches("button")) e.target.parentElement.classList.toggle("open");
  });

  document.querySelectorAll("form").forEach(form => form.addEventListener("submit", e => {
    e.preventDefault();
    if (form.id === "plannerForm") {
      const url = whatsappUrl(plannerWhatsAppMessage(form));
      document.getElementById("plannerMessage").innerHTML = `Trip plan ready. <a href="${url}" target="_blank" rel="noopener noreferrer">Continue on WhatsApp</a>.`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
    if (form.id === "bookingForm") {
      document.getElementById("bookingMessage").textContent = "Booking enquiry prepared for WhatsApp. Please send the message to confirm details.";
      window.open(document.getElementById("bookingWhatsappBtn").href, "_blank", "noopener,noreferrer");
    }
    if (form.id === "contactForm") {
      const fields = [...form.querySelectorAll("input, textarea")].map(el => el.value.trim());
      const url = whatsappUrl(`Hello RR Tourism,\nI want to send an enquiry.\n\nName: ${fields[0] || "Not provided"}\nMobile: ${fields[1] || "Not provided"}\nEmail: ${fields[2] || "Not provided"}\nMessage: ${fields[3] || "Not provided"}`);
      document.getElementById("contactMessage").innerHTML = `Thank you. <a href="${url}" target="_blank" rel="noopener noreferrer">Send this enquiry on WhatsApp</a>.`;
    }
    if (form.id === "newsletterForm") alert("Subscribed to RR Tourism travel updates.");
    if (form.id === "heroSearch") location.hash = "packages";
  }));

  document.body.addEventListener("click", e => {
    if (e.target.dataset.download) downloadBrandedItinerary(e.target.dataset.download);
    if (e.target.dataset.packageDetails) {
      const pkg = packages.find(item => item.title === e.target.dataset.packageDetails);
      if (pkg) openModal(packageDetailsHtml(pkg));
    }
    if (e.target.dataset.enquiry) setPackageEnquiry(e.target.dataset.enquiry);
    if (e.target.dataset.blog) {
      const blog = blogs[Number(e.target.dataset.blog)];
      if (blog) openModal(`<div class="modal-header"><img src="${blog.image}" alt="${escapeHtml(blog.title)}" /><div><p class="eyebrow">Travel Blog & Tips</p><h2>${blog.title}</h2><p>${blog.text}</p></div></div><div class="modal-copy"><p>${blog.details}</p><a class="btn whatsapp" target="_blank" rel="noopener noreferrer" href="${whatsappUrl(`Hello RR Tourism, I read ${blog.title}. Please help me plan a trip.`)}">Plan on WhatsApp</a></div>`);
    }
  });
  document.body.addEventListener("submit", e => {
    if (e.target.id !== "reviewForm") return;
    e.preventDefault();
    const data = new FormData(e.target);
    reviews.unshift([
      data.get("name"),
      data.get("destination"),
      data.get("type"),
      data.get("date"),
      data.get("text"),
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=80",
      "New Review"
    ]);
    reviewIndex = 0;
    renderReview();
    closeModal();
  });
  document.getElementById("submitReviewBtn").addEventListener("click", () => openModal(submitReviewHtml()));
}


function setupStaticIcons() {
  document.querySelectorAll(".star-icons").forEach(el => {
    if (!el.innerHTML.trim()) el.innerHTML = iconSvg.star.repeat(5);
  });
}

function setupMediaFallbacks() {
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = "true";
      const isLogo = (img.alt || "").toLowerCase().includes("logo") || img.className.toString().includes("logo");
      img.src = isLogo ? (window.RR_LOGO_DATA_URI || "assets/favicon.png") : (img.dataset.fallback || fallbackTravelImage);
    });
  });
  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    heroVideo.autoplay = true;
    heroVideo.muted = true;
    heroVideo.loop = true;
    heroVideo.playsInline = true;
    heroVideo.poster = heroVideo.poster || fallbackTravelImage;
  }
}

function animateCounters(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting || entry.target.dataset.done) return;
    entry.target.dataset.done = "true";
    const target = Number(entry.target.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 70));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      entry.target.textContent = current.toLocaleString("en-IN");
    }, 24);
  });
}

let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }), { threshold: .12 });
  }
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

function startCountdowns() {
  setInterval(() => {
    document.querySelectorAll(".countdown").forEach(box => {
      const started = Number(box.dataset.started || Date.now());
      box.dataset.started = started;
      const total = Number(box.dataset.hours) * 3600000;
      const left = Math.max(0, total - (Date.now() - started));
      const days = Math.floor(left / 86400000);
      const hours = Math.floor((left % 86400000) / 3600000);
      const mins = Math.floor((left % 3600000) / 60000);
      box.innerHTML = `<span>${days}d</span><span>${hours}h</span><span>${mins}m</span>`;
    });
  }, 1000);
}

function setupCustomCursor() {
  const cursor = document.getElementById("travelCursor");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  if (!cursor || !finePointer.matches) return;

  document.body.classList.add("cursor-enabled");
  let frame;
  let pointerX = -100;
  let pointerY = -100;

  const drawCursor = () => {
    cursor.style.setProperty("--cursor-x", `${pointerX}px`);
    cursor.style.setProperty("--cursor-y", `${pointerY}px`);
    frame = null;
  };

  window.addEventListener("pointermove", event => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    cursor.classList.add("is-visible");
    cursor.classList.toggle("is-hovering", Boolean(event.target.closest("a, button, input, select, textarea, summary, [role='button']")));
    if (!frame) frame = requestAnimationFrame(drawCursor);
  });
  document.documentElement.addEventListener("mouseleave", () => cursor.classList.remove("is-visible"));
  document.documentElement.addEventListener("mouseenter", () => cursor.classList.add("is-visible"));
}

function finishLoading() {
  const loader = document.getElementById("loader");
  const startedAt = Number(document.body.dataset.loadingStarted || performance.now());
  document.body.dataset.loadingStarted = startedAt;
  let finished = false;

  const hideLoader = () => {
    if (finished) return;
    finished = true;
    const delay = Math.max(0, 850 - (performance.now() - startedAt));
    setTimeout(() => {
      loader.classList.add("hide");
      loader.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-loading");
    }, delay);
  };

  if (document.readyState === "complete") hideLoader();
  else window.addEventListener("load", hideLoader, { once: true });
  setTimeout(hideLoader, 2400);
}

function init() {
  setupCustomCursor();
  renderQuickPages();
  renderAbout();
  renderServices();
  renderPackageFilters();
  renderPackages();
  renderOffers();
  renderDestinations();
  renderInternationalDestinations();
  renderVisaServices();
  renderHoneymoonPackages();
  renderGallery();
  renderHolyPlaces();
  renderInternationalHolyPlaces();
  renderReview();
  renderBlogWeatherFaq();
  setupBooking();
  setupInteractions();
  setupStaticIcons();
  setupMediaFallbacks();
  observeReveals();
  startCountdowns();
  updateWeather().catch(() => renderWeatherCards(fallbackWeather, "Live weather unavailable"));
  setInterval(() => updateWeather().catch(() => renderWeatherCards(fallbackWeather, "Live weather unavailable")), 900000);
  new IntersectionObserver(animateCounters, { threshold: .4 }).observe(document.querySelector("[data-count]"));
  document.querySelectorAll("[data-count]").forEach(el => new IntersectionObserver(animateCounters, { threshold: .4 }).observe(el));
  finishLoading();
}

document.addEventListener("DOMContentLoaded", init);







