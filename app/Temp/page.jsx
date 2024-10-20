"use client"
import React, { useState, useEffect } from 'react';
import './page.css';
const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [startDay, setStartDay] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Indian government holidays for the year 2024
    const holidays = [
        { date: new Date(2024, 0, 26), name: "Republic Day" },
        { date: new Date(2024, 2, 8), name: "Maha Shivaratri" },
        { date: new Date(2024, 2, 29), name: "Holi" },
        { date: new Date(2024, 3, 14), name: "Ram Navami" },
        { date: new Date(2024, 3, 21), name: "Mahavir Jayanti" },
        { date: new Date(2024, 3, 24), name: "Good Friday" },
        { date: new Date(2024, 4, 1), name: "May Day" },
        { date: new Date(2024, 7, 15), name: "Independence Day" },
        { date: new Date(2024, 8, 17), name: "Ganesh Chaturthi" },
        { date: new Date(2024, 9, 2), name: "Gandhi Jayanti" },
        { date: new Date(2024, 9, 12), name: "Dussehra" },
        { date: new Date(2024, 10, 1), name: "Diwali" },
        { date: new Date(2024, 10, 3), name: "Bhai Dooj" },
        { date: new Date(2024, 10, 15), name: "Children's Day" },
        { date: new Date(2024, 11, 25), name: "Christmas Day" },
    ];

    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = new Date(year, month, 1);
        const days = [];

        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        setDaysInMonth(days);
        setStartDay(new Date(year, month, 1).getDay());
    }, [currentDate]);

    useEffect(() => {
        // Add event listener for keyboard shortcuts
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    handlePreviousDay();
                    break;
                case 'ArrowRight':
                    handleNextDay();
                    break;
                case 'ArrowUp':
                    handlePreviousWeek();
                    break;
                case 'ArrowDown':
                    handleNextWeek();
                    break;
                case 'Enter':
                    handleDateClick(selectedDate);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedDate]);

    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const handleYearChange = (e) => {
        const newYear = parseInt(e.target.value, 10);
        const updatedDate = new Date(currentDate.setFullYear(newYear));
        setCurrentDate(updatedDate);
    };

    const handlePreviousDay = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() - 1);
        setSelectedDate(newDate);
    };

    const handleNextDay = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + 1);
        setSelectedDate(newDate);
    };

    const handlePreviousWeek = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() - 7);
        setSelectedDate(newDate);
    };

    const handleNextWeek = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + 7);
        setSelectedDate(newDate);
    };

    const isHoliday = (day) => {
        return holidays.some(holiday => 
            holiday.date.getDate() === day.getDate() &&
            holiday.date.getMonth() === day.getMonth() &&
            holiday.date.getFullYear() === day.getFullYear()
        );
    };

    const getHolidayName = (day) => {
        const holiday = holidays.find(holiday => 
            holiday.date.getDate() === day.getDate() &&
            holiday.date.getMonth() === day.getMonth() &&
            holiday.date.getFullYear() === day.getFullYear()
        );
        return holiday ? holiday.name : '';
    };

    return (
        <div className='Calendar'>
            <div className='header'>
                <button onClick={prevMonth}>&lt;</button>
                <span>
                    {currentDate.toLocaleString('default', { month: 'long' })}{' '}
                    <input 
                        type="number" 
                        value={currentDate.getFullYear()} 
                        onChange={handleYearChange} 
                        style={{ width: '60px', textAlign: 'center' }}
                    />
                </span>
                <button onClick={nextMonth}>&gt;</button>
            </div>
            <div className='day-names'>
                {dayNames.map((day) => (
                    <div key={day} className='day-name'>
                        {day}
                    </div>
                ))}
            </div>
            <div className='days'>
                {Array.from({ length: startDay }).map((_, index) => (
                    <div key={index} className='empty-day'></div>
                ))}
                {daysInMonth.map((day) => (
                    <div
                        key={day}
                        className={`day ${
                            day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() ? 'today' : ''
                        } ${
                            selectedDate && day.toDateString() === selectedDate.toDateString() ? 'selected' : ''
                        } ${
                            isHoliday(day) ? 'holiday' : ''
                        }`}
                        onClick={() => handleDateClick(day)}
                        title={isHoliday(day) ? getHolidayName(day) : ''}
                    >
                        {day.getDate()}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;