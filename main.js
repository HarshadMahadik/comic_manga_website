let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");




menu.onclick = () => {
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.getElementById('search-container');

    // Toggle search box visibility when clicking the search icon
    searchIcon.addEventListener('click', function() {
        searchContainer.style.display = searchContainer.style.display === 'block' ? 'none' : 'block';
    });

    // Hide search box when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!searchContainer.contains(event.target) && event.target !== searchIcon) {
            searchContainer.style.display = 'none';
        }
    });

    // Prevent hiding search box when clicking inside it
    searchContainer.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to heart icons
    var favButtons = document.querySelectorAll('.fav-btn');
    favButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Retrieve manga information from the manga box
            var mangaBox = button.closest('.manga-box');
            var imageSrc = mangaBox.querySelector('.manga-box-img').src;
            var title = mangaBox.querySelector('.manga-title').textContent;
            var type = mangaBox.querySelector('.manga-type').textContent;
            var readLink = mangaBox.querySelector('.read-btn').href;

            // Store manga information in localStorage
            var favouriteManga = {
                imageSrc: imageSrc,
                title: title,
                type: type,
                readLink: readLink
            };

            // Append the manga information to the favourites container
            appendMangaBox(favouriteManga);
        });
    });

    // Function to append manga box to favourites container
    function appendMangaBox(manga) {
        var container = document.getElementById('favorites-container');
        
        var mangaBox = document.createElement('div');
        mangaBox.classList.add('manga-box');

        var img = document.createElement('img');
        img.src = manga.imageSrc;
        img.alt = manga.title;
        img.classList.add('manga-box-img');

        var boxText = document.createElement('div');
        boxText.classList.add('box-text');

        var title = document.createElement('h2');
        title.textContent = manga.title;
        title.classList.add('manga-title');

        var type = document.createElement('span');
        type.textContent = manga.type;
        type.classList.add('manga-type');

        var readLink = document.createElement('a');
        readLink.href = manga.readLink;
        var readIcon = document.createElement('i');
        readIcon.classList.add('fas', 'fa-book-open');
        readLink.appendChild(readIcon);

        var heartIcon = document.createElement('i');
        heartIcon.classList.add('fas', 'fa-heart');

        // Append elements to the manga box
        boxText.appendChild(title);
        boxText.appendChild(type);
        boxText.appendChild(readLink);
        boxText.appendChild(heartIcon);
        mangaBox.appendChild(img);
        mangaBox.appendChild(boxText);

        // Append manga box to the container
        container.appendChild(mangaBox);
    }

    // Retrieve and display favourite manga on page load
    var favouriteManga = JSON.parse(localStorage.getItem('favouriteManga'));
    if (favouriteManga) {
        appendMangaBox(favouriteManga);
    }
});




  var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
   
    breakpoints:{
        280:{
            slidesPerView: 1,
            spaceBetween: 5,
        },
        320 :{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510:{
            slidesPerView: 2,
            spaceBetween: 5,
        },
        758:{
            slidesPerView: 3,
            spaceBetween: 10,
        },
        900:{
            slidesPerView: 4,
            spaceBetween: -600,
        }
        
    }
    
});


// Get the read button icon element
const readBtn = document.getElementById('readBtn');

// Add click event listener to the read button icon
readBtn.addEventListener('click', function(event) {
    // Prevent default behavior of anchor tag
    event.preventDefault();
    
    // Redirect to another page
    window.location.href = 'another-page.html'; // Replace 'another-page.html' with the URL of the page you want to redirect to
});

