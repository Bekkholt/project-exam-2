import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from "@demark-pro/react-booking-calendar";

const MyBookingCalendar = ({ setChosenDates }) => {
  const [bookingDetails, setBookingDetails] = useState();
  let { id } = useParams();

  const [selectedDates, setSelectedDates] = useState([]);
  const handleChange = (e) => {
    setSelectedDates(e);
    setChosenDates(e);
  };

  useEffect(() => {
    async function getData(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setBookingDetails(json.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData(`https://v2.api.noroff.dev/holidaze/venues/${id}?_bookings=true`);
  }, [id]);

  if (!bookingDetails) return <div></div>;

  const reserved = bookingDetails.bookings.map((booking) => {
    return {
      startDate: new Date(booking.dateFrom),
      endDate: new Date(booking.dateTo),
    };
  });

  return (
    <Calendar
      selected={selectedDates}
      onChange={handleChange}
      onOverbook={(e, err) => alert(err)}
      disabled={(date, state) => !state.isSameMonth}
      reserved={reserved}
      variant="booking"
      dateFnsOptions={{ weekStartsOn: 1 }}
      range={true}
      classNamePrefix="calendar"
    />
  );
};

export default MyBookingCalendar;
