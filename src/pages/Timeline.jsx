
import React from 'react';

// CSS styles
const styles = {
    mainContent: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    filler: {}
};

const Timeline = () => {
    return (
        <div style={styles.mainContent} className="main-content">
            <div className="vertical-timeline">
                <div className="timeline-item">
                    <div className="timeline-box">
                        <h3>Atlantis Timeline</h3>
                        <p></p>
                    </div>
                </div>
            </div>
            {/* Button for adding/removing events  */}
            <button id="modifyTimelineBtn" onClick={() => handleModifyTimeline()}>Modify Timeline</button>
            
            {/* There's also a line in Navbar.jsx that calls loadEvents(), for some reason you need both lol */}
            {window.addEventListener('load', loadEvents)}
        </div>
    );
};

export default Timeline;

// Function to prompt for password
function promptForPassword() {
    return prompt("Enter password to modify timeline:");
}

// Function to add a new event to the timeline
function addEvent(eventName, eventDate) {
    const timeline = document.querySelector('.vertical-timeline');
    const newTimelineItem = document.createElement('div');
    newTimelineItem.className = 'timeline-item';
    newTimelineItem.innerHTML = `
        <div className="timeline-box">
            <h3>${eventName}</h3>
            <p>${eventDate}</p>
        </div>`;
    timeline.appendChild(newTimelineItem);
}

// Function to remove the last event from the timeline
function removeEvent() {
    const timeline = document.querySelector('.vertical-timeline');
    const lastTimelineItem = timeline.lastElementChild;
    if (lastTimelineItem) {
        timeline.removeChild(lastTimelineItem);
    } else {
        alert("No events to remove!");
    }
}

// Function to load events from localStorage
function loadEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.forEach(event => {
        addEvent(event.name, event.date);
    });
}

// Function for managing events on timeline
function handleModifyTimeline() {
    const password = promptForPassword();
    if (password === "Mhdocs123") {
        const action = prompt("Enter 'add' to add an event or 'remove' to remove an event:");
        if (action === "add") {
            const eventName = prompt("Enter event name:");
            const eventDate = prompt("Enter event date:");
            addEvent(eventName, eventDate);
            // Save event to localStorage
            const events = JSON.parse(localStorage.getItem('events')) || [];
            events.push({ name: eventName, date: eventDate });
            localStorage.setItem('events', JSON.stringify(events));
        } else if (action === "remove") {
            removeEvent();
            // Remove last event from localStorage
            const events = JSON.parse(localStorage.getItem('events')) || [];
            events.pop();
            localStorage.setItem('events', JSON.stringify(events));
        } else {
            alert("Invalid action!");
        }
    } else {
        alert("Incorrect password!");
    }
}
