document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", (event) => {
    document.querySelectorAll(".button").forEach((btn) => {
      btn.classList.remove("primary");
      btn.classList.add("secondary");
      btn.classList.add("tertiary");
    });
    event.target.classList.add("primary");
    event.target.classList.remove("secondary");
    event.target.classList.remove("tertiary");
  });
});

// Data for domestic and international places
const domesticData = [
  { location: "Port Blair - The Gateway to the Andamans", imageUrl: "img/pb.webp", rating: 5, description: "Discover Port Blair's charm with Cellular Jail, pristine beaches, vibrant coral reefs, and unforgettable adventures in the Andaman Islands." },
  { location: "Kerala - God's Own Country", imageUrl: "img/kerela.jpg", rating: 5, description: "Experience Kerala's serene backwaters, lush green landscapes, stunning beaches, rich culture, and exotic wildlife for a rejuvenating escape." },
  { location: "Rajasthan - The Land of Royals", imageUrl: "img/rajasthan.webp", rating: 5, description: "Explore Rajasthan's majestic forts, golden deserts, vibrant culture, royal palaces, and timeless heritage for a journey into India's grandeur." },
  { location: "Manali - The Valley of Adventure", imageUrl: "img/manali.webp", rating: 5, description: "Manali offers snow-capped peaks, lush valleys, thrilling adventures, serene temples, and a perfect getaway for nature and peace lovers." },
  { location: "Leh-Ladakh - The Land of High Passes", imageUrl: "img/lad.webp", rating: 5, description: "Explore Leh-Ladakh's stunning landscapes, rugged mountains, crystal-clear lakes, ancient monasteries, and thrilling adventures in a breathtaking Himalayan paradise." },
  { location: "Shimla - The Queen of Hills", imageUrl: "img/shimla.webp", rating: 5, description: "Experience Shimla's colonial charm, lush hills, snow-covered peaks, vibrant markets, and serene vibes for a perfect mountain escape." },
  { location: "Jammu - The Gateway to Paradise", imageUrl: "img/jammu.webp", rating: 5, description: "Discover Jammu's spiritual temples, scenic valleys, historic forts, and vibrant culture, nestled amidst the breathtaking Himalayan foothills." },
  { location: "Kashmir - Paradise on Earth", imageUrl: "img/kashmir.jpg", rating: 5, description: "Immerse in Kashmir's mesmerizing beauty, serene lakes, lush valleys, snow-covered mountains, and enchanting gardens for an unforgettable escape." },
  { location: "Darjeeling - The Queen of the Himalayas", imageUrl: "img/darjelling.webp", rating: 5, description: "Explore Darjeeling's lush tea gardens, stunning sunrise views, toy train rides, and serene monasteries amidst breathtaking Himalayan vistas." }
];

const internationalData = [
  { location: "Dubai - The City of Wonders", imageUrl: "img/dubai.webp", rating: 5, description: "Discover Dubai’s futuristic skyline, iconic Burj Khalifa, luxury shopping, desert safaris, vibrant nightlife, and world-class attractions in style." },
  { location: "Thailand - The Land of Smiles", imageUrl: "https://media.istockphoto.com/id/1022233370/photo/young-woman-traveler-with-backpack-traveling-into-beautiful-pagoda-in-wat-chalong-or-chalong.webp?a=1&b=1&s=612x612&w=0&k=20&c=fG9ikOTH3b3qVwUJJlpg8rVpQPM3YlfeeQgc3VmX7tE=", rating: 5, description: "Experience Thailand's rich culture, stunning beaches, delicious street food, and vibrant nightlife in cities like Bangkok and Phuket." },
  { location: "Singapore - The Lion City", imageUrl: "https://media.istockphoto.com/id/591426894/photo/aerial-view-singapore-marina-bay-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=xeXPu66JA7VwL9pCe87bf146kDMsHEK4kBBXSrJEydI=", rating: 5, description: "Explore Singapore's modern skyline, lush gardens, diverse cuisine, and attractions like Marina Bay Sands and Sentosa Island." },
  { location: "Malaysia - Truly Asia", imageUrl: "https://media.istockphoto.com/id/154920259/photo/jetty-on-mabul-island-sipadan-borneo-malaysia.webp?a=1&b=1&s=612x612&w=0&k=20&c=7CchexGsI7xKOApZzaRdBN6Nj426XWUvnkPThl6D0KY=", rating: 5, description: "Discover Malaysia's diverse culture, beautiful landscapes, and vibrant cities like Kuala Lumpur, known for its iconic Petronas Towers." },
  { location: "Maldives - A Tropical Paradise", imageUrl: "img/maldives.webp", rating: 5, description: "Escape to the Maldives, where turquoise waters, pristine beaches, luxurious resorts, and vibrant marine life create a dreamlike retreat." },
  { location: "Bali - Island of the Gods", imageUrl: "https://media.istockphoto.com/id/504985756/photo/bali-water-temple-tanah-lot.webp?a=1&b=1&s=612x612&w=0&k=20&c=sqlFEF23pUk2pDbnwItpAjhj0ROheBdSLFDiYBKcqIE=", rating: 5, description: "Immerse yourself in Bali's stunning landscapes, rich culture, beautiful temples, and vibrant nightlife." },
  { location: "Nepal - The Roof of the World", imageUrl: "https://media.istockphoto.com/id/2059231270/photo/mount-makalu-with-clouds-vooden-bridge-nepal-himalayas.webp?a=1&b=1&s=612x612&w=0&k=20&c=IE0nWGVEZqpuxn4sLSkR0OYzmOwW6s4CeutPdyXP3as=", rating: 5, description: "Experience the breathtaking beauty of the Himalayas, rich culture, and adventure activities like trekking in Nepal." },
  { location: "Bhutan - The Last Shangri-La", imageUrl: "https://media.istockphoto.com/id/506325524/photo/tigers-nest-monastery-in-bhutan.webp?a=1&b=1&s=612x612&w=0&k=20&c=Sbxcl3r3ZyI4Vm4HDcw7glTjUZ9GiDgQRP0zqYESnyY=", rating: 5, description: "Discover Bhutan's stunning landscapes, rich traditions, and the unique concept of Gross National Happiness." }
];

// Added destinationData
const destinationData = [
  { location: "Northeast India - A Hidden Gem", imageUrl: "https://media.istockphoto.com/id/2027951777/photo/giant-buddha-statue-with-bright-blue-sky-at-evening-in-tawang-arunachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=o0wu49cCW3_LuRDBtLGk5gN8fYUQLWDH-hP998aSOY0=", rating: 5, description: "Explore the breathtaking landscapes, rich culture, and diverse tribes of Northeast India, a region known for its natural beauty." },
  { location: "Sikkim - The Land of Mystical Mountains", imageUrl: "https://media.istockphoto.com/id/687689872/photo/buddha-park-rabangla-sikkim.webp?a=1&b=1&s=612x612&w=0&k=20&c=WTGGsTlp0z97R6UoL-JMtZGrpHZFI_l4DHAQA0m8ek0=", rating: 5, description: "Discover Sikkim's stunning landscapes, vibrant monasteries, and the majestic Kanchenjunga, the third highest mountain in the world." },
  { location: "Rishikesh - The Yoga Capital", imageUrl: "https://media.istockphoto.com/id/1270273473/photo/river-ganga-in-rishikesh-during-monsoon.webp?a=1&b=1&s=612x612&w=0&k=20&c=P-TZ8dUZAGGvLHz1e9J9M_DhrCjtNqmFIKLJPmkEgCE=", rating: 5, description: "Experience the spiritual vibes of Rishikesh, known for its yoga retreats, the Ganges River." },
  { location: "Gangtok - The Capital of Sikkim", imageUrl: "https://media.istockphoto.com/id/620960858/photo/tsangmo-lake-in-sikkim-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=7_E1bDzAaMe1CPixuGC7blz1cb9N0zCnh8JFEA62_eg=", rating: 5, description: "Explore Gangtok's beautiful monasteries, stunning views of the Himalayas, and vibrant local culture." },
  { location: "Mussoorie - The Queen of Hills", imageUrl: "https://images.unsplash.com/photo-1583143874828-de3d288be51a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TXVzc29vcmllfGVufDB8fDB8fHww", rating: 5, description: "Enjoy the scenic beauty of Mussoorie, with its lush green hills, colonial architecture, and pleasant weather." },
  { location: "Nainital - The Lake District", imageUrl: "https://images.unsplash.com/photo-1586255028095-d93edb74e412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpbml0YWwlMjBsYWtlfGVufDB8fDB8fHww", rating: 5, description: "Experience the charm of Nainital, famous for its beautiful lakes, pleasant climate, and stunning mountain views." },
  { location: "Leh Ladakh - The Land of High Passes", imageUrl: "https://media.istockphoto.com/id/1155675399/photo/pangong-lake.webp?a=1&b=1&s=612x612&w=0&k=20&c=iuWa4BWFoycpi-__qg7XIO2bOS5hSv2dzD17L9V555U=", rating: 5, description: "Discover the breathtaking landscapes of Leh Ladakh, known for its stunning monasteries, high-altitude lakes, and adventure opportunities." },
  { location: "Kutch - The White Desert", imageUrl: "https://images.unsplash.com/photo-1642187340233-338a02f026f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGt1dGNofGVufDB8fDB8fHww", rating: 5, description: "Explore the unique landscapes of Kutch, famous for its white salt desert, vibrant culture, and traditional handicrafts." },
  { location: "Vaishno Devi - A Spiritual Journey", imageUrl: "https://images.unsplash.com/photo-1711283085126-d0cc54edbfb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhaXNobm8lMjBkZXZpfGVufDB8fDB8fHww", rating: 5, description: "Embark on a spiritual journey to Vaishno Devi, one of the most revered Hindu pilgrimage sites in India." },
  { location: "Kashmir - Paradise on Earth", imageUrl: "img/kashmir.jpg", rating: 5, description: "Experience the breathtaking beauty of Kashmir, known for its stunning landscapes, houseboats, and vibrant gardens." },
  { location: "Shimla-Manali - The Perfect Hill Stations", imageUrl: "https://images.unsplash.com/photo-1711283085126-d0cc54edbfb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhaXNobm8lMjBkZXZpfGVufDB8fDB8fHww", rating: 5, description: "Enjoy the scenic beauty and adventure activities in Shimla and Manali, two of the most popular hill stations in India." },
  { location: "Port Blair - The Gateway to Andaman", imageUrl: "img/pb.webp", rating: 5, description: "Discover the beautiful beaches, rich history, and vibrant marine life in Port Blair, the capital of the Andaman and Nicobar Islands." }
];
// Global variables
let currentData = domesticData;
let currentPage = 1;
const itemsPerPage = 3;

// Function to render cards with pagination
const renderCards = (data) => {
  const container = document.getElementById("card-container");
  container.innerHTML = "";  // Clear previous cards

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  if (paginatedData.length === 0) {
    container.innerHTML = `<p>No results found</p>`;
    return;
  }

  paginatedData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.location}">
        <h3>${item.location}</h3>
        <div class="stars">${"★".repeat(item.rating)}</div>
        <p>${item.description}</p>
        <div class="card-buttons">
          <button class="button book-now">Book Now</button>
        </div>
      `;
    container.appendChild(card);

    // Add event listener to the "Book Now" button
    card.querySelector(".book-now").addEventListener("click", () => {
      // Scroll to the form section smoothly
      document.getElementById('form-section').scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
});
  

  renderPagination(data);
};

// Function to render pagination controls
const renderPagination = (data) => {
  const paginationContainer = document.getElementById("pagination-container");
  paginationContainer.innerHTML = "";  // Clear existing pagination buttons

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const prevButton = document.createElement("button");
  prevButton.className = "pagination-button";
  prevButton.innerHTML = "&#8592;";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderCards(currentData);
    }
  });
  paginationContainer.appendChild(prevButton);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.className = `pagination-number ${currentPage === i ? "active" : ""}`;
    pageButton.textContent = i;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderCards(currentData);
    });
    paginationContainer.appendChild(pageButton);
  }

  const nextButton = document.createElement("button");
  nextButton.className = "pagination-button";
  nextButton.innerHTML = "&#8594;";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderCards(currentData);
    }
  });
  paginationContainer.appendChild(nextButton);
};

// Event listeners for Domestic and International buttons
document.getElementById("domestic-button").addEventListener("click", () => {
  currentData = domesticData;
  currentPage = 1;
  renderCards(currentData);
});

document.getElementById("international-button").addEventListener("click", () => {
  currentData = internationalData;
  currentPage = 1;
  renderCards(currentData);
});

// Event listener for Destination button
document.getElementById("destination-button").addEventListener("click", () => {
  currentData = destinationData;
  currentPage = 1;
  renderCards(currentData);
});

// Initial render with Domestic data
document.addEventListener("DOMContentLoaded", () => {
  renderCards(domesticData);
});
