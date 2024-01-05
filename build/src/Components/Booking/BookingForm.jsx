// BookingForm.jsx

import React, { useState } from 'react';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [passengersNumber, setPassengersNumber] = useState('');

  const generatePassengerOptions = (maxPassengers) => {
    const options = [];
    for (let i = 1; i <= maxPassengers; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { name, roomNumber, time, date});
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="roomNumber" className="form-label">
          Room Number:
        </label>
        <input
          type="text"
          className="form-control"
          id="roomNumber"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="time" className="form-label">
          Time:
        </label>
        <input
          type="time"
          className="form-control"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date:
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="passengersNumber" className="form-label">
          Number of Passengers:
        </label>
        <select
          className="form-select"
          id="passengersNumber"
          value={passengersNumber}
          onChange={(e) => setPassengersNumber(e.target.value)}
          required
        >
          <option value="">Select number of passengers</option>
          {generatePassengerOptions(10)} {/* Adjust the range as needed */}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit Booking
      </button>
    </form>
  );
};

export default BookingForm;
