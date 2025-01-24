const images = [
    '../img/Gallery/image46.jpeg',
    '../img/Gallery/image47.jpeg',
    '../img/Gallery/image48.jpeg',
    '../img/Gallery/image49.jpeg',
    '../img/Gallery/image50.jpeg',
    '../img/Gallery/image51.jpeg',
    '../img/Gallery/image52.jpeg',
    '../img/Gallery/image8.jpeg',
    '../img/Gallery/image36.jpeg',
    '../img/Gallery/image22.jpeg',
    '../img/Gallery/image5.jpeg',
    '../img/Gallery/image14.jpeg',
    '../img/Gallery/image61.jpeg',
    '../img/Gallery/image59.jpeg',
    '../img/Gallery/image66.jpeg',
    '../img/Gallery/image12.jpeg',
    '../img/Gallery/image41.jpeg',
    '../img/Gallery/image3.jpeg',
    '../img/Gallery/image55.jpeg',
    '../img/Gallery/image19.jpeg',
    '../img/Gallery/image60.jpeg',
    '../img/Gallery/image18.jpeg',
    '../img/Gallery/image2.jpeg',
    '../img/Gallery/image40.jpeg',
    '../img/Gallery/image9.jpeg',
    '../img/Gallery/image10.jpeg',
    '../img/Gallery/image34.jpeg',
    '../img/Gallery/image4.jpeg',
    '../img/Gallery/image11.jpeg',
    '../img/Gallery/image20.jpeg',
    '../img/Gallery/image7.jpeg',
    '../img/Gallery/image15.jpeg',
    '../img/Gallery/image29.jpeg',
    '../img/Gallery/image38.jpeg',
    '../img/Gallery/image23.jpeg',
    '../img/Gallery/image35.jpeg',
    '../img/Gallery/image28.jpeg',
    '../img/Gallery/image37.jpeg',
    '../img/Gallery/image45.jpeg',
    '../img/Gallery/image53.jpeg',
    '../img/Gallery/image54.jpeg',
    '../img/Gallery/image56.jpeg',
    '../img/Gallery/image57.jpeg',
    '../img/Gallery/image58.jpeg',
    '../img/Gallery/image62.jpeg',
    '../img/Gallery/image63.jpeg',
    '../img/Gallery/image64.jpeg',
    '../img/Gallery/image65.jpeg',
    '../img/Gallery/image39.jpeg',
    '../img/Gallery/image6.jpeg',
    '../img/Gallery/image26.jpeg',
    '../img/Gallery/image17.jpeg',
    '../img/Gallery/image44.jpeg',
    '../img/Gallery/image43.jpeg',
    '../img/Gallery/image13.jpeg',
    '../img/Gallery/image21.jpeg',
    '../img/Gallery/image32.jpeg',
    '../img/Gallery/image39.jpeg',
    '../img/Gallery/image16.jpeg',
]


const imageContainer = document.getElementById('imagesContainer');

const imagesToRender = (window.location.pathname === '/' || window.location.pathname === '/index.html') ? images.slice(0, 8) : images;

imagesToRender.map((src, index) => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-sm-6 col-md-6 col-lg-3 col-xl-3';
    
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = src;
    img.className = 'img-fluid w-100 rounded'; // Set width to 100% and remove height to maintain aspect ratio
    img.style.height = '200px'; // Set a fixed height for uniformity
    img.alt = `Image ${index + 1}`;
    
    const galleryContent = document.createElement('div');
    galleryContent.className = 'gallery-content';
    
    const galleryInfo = document.createElement('div');
    galleryInfo.className = 'gallery-info';
    
    const enquireLink = document.createElement('a');
    enquireLink.href = 'contact.html';
    enquireLink.className = 'btn-hover text-white';
    enquireLink.innerHTML = `Enquire Now <i class="fa fa-arrow-right ms-2"></i>`;
    
    galleryInfo.appendChild(enquireLink);
    galleryContent.appendChild(galleryInfo);
    galleryItem.appendChild(img);
    galleryItem.appendChild(galleryContent);
    
    const galleryPlusIcon = document.createElement('div');
    galleryPlusIcon.className = 'gallery-plus-icon';
    
    const plusLink = document.createElement('a');
    plusLink.href = src;
    plusLink.setAttribute('data-lightbox', `gallery-${index + 1}`);
    plusLink.className = 'my-auto';
    plusLink.innerHTML = `<i class="fas fa-plus fa-2x text-white"></i>`;
    
    galleryPlusIcon.appendChild(plusLink);
    galleryItem.appendChild(galleryPlusIcon);
    colDiv.appendChild(galleryItem);
    
    imageContainer.appendChild(colDiv);
});
