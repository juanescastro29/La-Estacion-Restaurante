package restaurantebackend.service;

import restaurantebackend.model.Booking;

import java.util.List;

public interface BookingService {

    public void saveBooking(Booking booking);

    public List<Booking> getBookings();

    public Booking getBooking(Integer id);

    public void deleteBooking(Integer id);

}
