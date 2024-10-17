"use client"
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import './page.css';

const CollegeCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tooltip, setTooltip] = useState(null);

  const publicHolidays = [
    { name: 'New Year’s Day', date: '2024-01-01' },
    { name: 'Republic Day', date: '2024-01-26' },
    { name: 'Independence Day', date: '2024-08-15' },
    { name: 'Gandhi Jayanti', date: '2024-10-02' },
    { name: 'Diwali', date: '2024-11-12' },
    { name: 'Christmas', date: '2024-12-25' },
  ];

  useEffect(() => {
    // Fetch events from the backend
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events'); // Backend API route for events
        setEvents([...publicHolidays, ...response.data]);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  // Check if a date has an event or holiday
  const getEventForDate = (date) => {
    return events.find(
      (event) => new Date(event.date || event.event_date).toDateString() === date.toDateString()
    );
  };

  // Highlight event, holiday, or current date
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const event = getEventForDate(date);
      if (event) {
        return event.is_public_holiday ? 'holiday' : 'admin-event';
      }
      if (date.toDateString() === new Date().toDateString()) {
        return 'current-date';
      }
    }
    return null;
  };

  // Handle date selection
  const onDateChange = (date) => {
    setSelectedDate(date);
    const event = getEventForDate(date);
    if (event) {
      setTooltip({
        date: date.toDateString(),
        name: event.name,
        description: event.description || '',
      });
    } else {
      setTooltip(null);
    }
  };

  return (
    <div className="calendar-container">
      <Calendar
        value={selectedDate}
        onClickDay={onDateChange}
        tileClassName={tileClassName} // Highlight events, holidays, and current date
      />

      {/* Tooltip to show event/holiday details */}
      {tooltip && (
        <div className="tooltip">
          <h3>{tooltip.name}</h3>
          <p>{tooltip.description}</p>
          <small>{tooltip.date}</small>
        </div>
      )}
    </div>
  );
};

export default CollegeCalendar;
