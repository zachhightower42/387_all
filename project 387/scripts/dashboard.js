/**
 * dashboard.js
 * Adds event listeners to dropdown elements on the page to show and hide their content when the user hovers over them.
 * This function is called when the DOM content has finished loading.
 */
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseenter', () => {
      dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!dropdown.matches(':hover') && !dropdownContent.matches(':hover')) {
          dropdownContent.style.display = 'none';
        }
      }, 100);
    });

    // Add event listener to the dropdown content
    dropdownContent.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!dropdown.matches(':hover') && !dropdownContent.matches(':hover')) {
          dropdownContent.style.display = 'none';
        }
      }, 100);
    });
  });

  const eventsContainer = document.querySelector('.events-container');
  const showLikedEventsBtn = document.getElementById('showLikedEventsBtn');
  let showingLiked = false;
  let events = [
    { 
      title: 'Spring Concert', 
      time: 'April 15, 2024, 7:00 PM', 
      location: 'The Grove', 
      description: 'Annual spring concert featuring popular artists.',
      liked: false 
    },

  ];

  function renderEvents(eventsToRender) {

    eventsContainer.innerHTML = '';

    eventsToRender.forEach((event, index) => {
      const eventCard = document.createElement('div');
      eventCard.className = 'event-card collapsed';
      const { date, time } = formatDateTime(event.time);
      eventCard.innerHTML = `
        <h2>${event.title}</h2>
        <div class="event-details">
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <p class="event-description"><strong>Description:</strong> ${event.description}</p>
          <div>
            <button class="like-btn ${event.liked ? 'liked' : ''}">${event.liked ? 'Liked' : 'Like'}</button>
            <button class="delete-btn">Delete</button>
            <button class="edit-btn">Edit</button>
          </div>
        </div>
      `;

      // Add delete button handler
      const deleteBtn = eventCard.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        events.splice(index, 1);
        renderEvents(showingLiked ? events.filter(event => event.liked) : events);
      });

      // Add back the click handler for collapsing/uncollapsing
      eventCard.addEventListener('click', function(e) {

        if (!e.target.classList.contains('like-btn') && !e.target.classList.contains('delete-btn')) {
          e.stopPropagation();
          this.classList.toggle('collapsed');
        }
      });

      const likeBtn = eventCard.querySelector('.like-btn');
      likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        event.liked = !event.liked;
        console.log(`Event ${event.title} liked status: ${event.liked}`);
        likeBtn.textContent = event.liked ? 'Liked' : 'Like';
        likeBtn.classList.toggle('liked');
      });
    // Add edit button handler
    const editBtn = eventCard.querySelector('.edit-btn');
    editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
          
        // Store the index and log initial state
        const currentIndex = index;
        console.log('Edit button clicked for event:', event);
        console.log('Current events array:', events);
        console.log('Editing event at index:', currentIndex);
          
        // Populate the modal form with current event data
        document.getElementById('eventName').value = event.title;
        document.getElementById('eventDescription').value = event.description;
        document.getElementById('eventLocation').value = event.location;
          
        // Split datetime into date and time
        const dateTime = new Date(event.time);
        document.getElementById('eventDate').value = dateTime.toISOString().split('T')[0];
        document.getElementById('eventTime').value = dateTime.toTimeString().slice(0,5);
          
        console.log('Modal populated with event data');
        modal.style.display = 'block';
          
        // Create a new submit handler for the edit operation
      createEventForm.onsubmit = (e) => {
          e.preventDefault();
            
          // Get the form values
          const updatedTitle = document.getElementById('eventName').value;
          const updatedDescription = document.getElementById('eventDescription').value;
          const updatedLocation = document.getElementById('eventLocation').value;
          const updatedDate = document.getElementById('eventDate').value;
          const updatedTime = document.getElementById('eventTime').value;

          // Check if all fields are empty
          if (!updatedTitle && !updatedDescription && !updatedLocation && !updatedDate && !updatedTime) {
              // Remove the event instead of updating it
              events.splice(currentIndex, 1);
          } else {
              // Update the event with the new values
              events[currentIndex] = {
                  title: updatedTitle,
                  description: updatedDescription,
                  location: updatedLocation,
                  time: `${updatedDate} ${updatedTime}`,
                  liked: event.liked
              };
          }

          // Render the updated events
          const eventsToRender = showingLiked ? events.filter(event => event.liked) : events;
          renderEvents(eventsToRender);
          modal.style.display = 'none';
          createEventForm.reset();
      };
  });
  eventsContainer.appendChild(eventCard);
  });

  }  showLikedEventsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showingLiked = !showingLiked;
    console.log('Show Liked Events clicked. Showing liked only:', showingLiked);
    
    showLikedEventsBtn.textContent = showingLiked ? 'Show All Events' : 'Show Liked Events';
    showLikedEventsBtn.classList.toggle('active', showingLiked);
    
    const filteredEvents = showingLiked ? events.filter(event => {
      console.log(`Filtering event ${event.title}, liked status: ${event.liked}`);
      return event.liked;
    }) : events;
    
    console.log('Filtered events:', filteredEvents);
    renderEvents(filteredEvents);
  });

  // Initial render
  renderEvents(events);

  // Event creation functionality
  const modal = document.getElementById('eventModal');
  const createEventBtn = document.getElementById('createEventBtn');
  const closeBtn = document.querySelector('.close');
  const createEventForm = document.getElementById('createEventForm');

  createEventBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Create Event button clicked');
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  createEventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('eventName').value;
    const description = document.getElementById('eventDescription').value;
  
    // Validate title length (10 words AND 20 characters)
    const titleWords = title.trim().split(/\s+/);
    if (titleWords.length > 10) {
        alert('Title must be 10 words or less');
        return;
    }
    if (title.length > 25) {
        alert('Title must be 20 characters or less');
        return;
    }
  
    // Validate description length (200 words AND 500 characters)
    const descriptionWords = description.trim().split(/\s+/);
    if (descriptionWords.length > 200) {
        alert('Description must be 200 words or less');
        return;
    }
    if (description.length > 500) {
        alert('Description must be 500 characters or less');
        return;
    }

    const newEvent = {
      title: title,
      description: description,
      location: document.getElementById('eventLocation').value,
      time: `${document.getElementById('eventDate').value} ${document.getElementById('eventTime').value}`,
      liked: false
    };
    events.push(newEvent);
    renderEvents(events);
    modal.style.display = 'none';
    createEventForm.reset();
  });});
function formatDateTime(dateTimeStr) {
  const date = new Date(dateTimeStr);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  
  return { date: formattedDate, time: formattedTime };
}
