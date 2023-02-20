package restaurantebackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurantebackend.model.Booking;
import restaurantebackend.repository.BookingRepository;

import java.util.List;

@Service
public class BookingServiceImplementation implements BookingService{

    @Autowired
    private BookingRepository bookingRepository;


    @Override
    public void saveBooking(Booking booking) {
        bookingRepository.save(booking);
    }

    @Override
    public List<Booking> getBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public Booking getBooking(Integer id) {
        return bookingRepository.findById(id).get();
    }

    @Override
    public void deleteBooking(Integer id) {
        bookingRepository.deleteById(id);
    }

}
