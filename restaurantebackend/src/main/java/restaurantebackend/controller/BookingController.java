package restaurantebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurantebackend.model.Booking;
import restaurantebackend.model.Product;
import restaurantebackend.model.User;
import restaurantebackend.service.BookingService;
import restaurantebackend.service.UserService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;
    @Autowired
    private UserService userService;

    @GetMapping("/showBookings/{page}")
    public List<Booking> getBookingsPage(@PathVariable Integer page) {
        ArrayList<Booking> bookingsLimited = new ArrayList<>();
        int elements = 0;
        int startLimit = (6*page)-6;

        for (int i = startLimit; i < bookingService.getBookings().size(); i++) {
            if (elements <= 5) {
                bookingsLimited.add(bookingService.getBookings().get(i));
                elements = elements + 1;
            } else {
                i = bookingService.getBookings().size();
            }
        }

        return bookingsLimited;
    }

    @GetMapping("/showBookings/user/{userId}/{page}")
    public List<Booking> getBookingsUser(@PathVariable Integer userId, @PathVariable Integer page) {
        User user = userService.getUser(userId);
        ArrayList<Booking> bookingsLimited = new ArrayList<>();
        int elements = 0;
        int startLimit = (6*page)-6;

        for (int i = startLimit; i < bookingService.getBookings().size(); i++) {
            if (elements <= 5) {
                bookingsLimited.add(bookingService.getBookings().get(i));
                elements = elements + 1;
            } else {
                i = bookingService.getBookings().size();
            }
        }

        return bookingsLimited;
    }

    @PutMapping("/updateBooking/{bookingId}")
    public ResponseEntity<String> updateBooking(@RequestBody Map<String, String> bookingUpdateData, @PathVariable Integer bookingId) {
        try {
            Booking bookingFound = bookingService.getBooking(bookingId);
            if (bookingUpdateData.get("bookingDate") != "") {
                Date date = new SimpleDateFormat("dd-MM-yyyy").parse(bookingUpdateData.get("bookingDate"));
                bookingFound.setBookingDate(date);
            }

            if (bookingUpdateData.get("bookingHour") != "") {
                bookingFound.setBookingHour(bookingUpdateData.get("bookingHour"));
            }

            bookingService.saveBooking(bookingFound);
            return new ResponseEntity<String>("Booking update successfully", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<String>("Booking not update", HttpStatus.NOT_FOUND);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping("/cancelBooking/{bookingId}")
    public void cancelBooking(@PathVariable Integer bookingId) {
        Booking booking = bookingService.getBooking(bookingId);
        booking.setBookingStatus("Cancelada");
        bookingService.saveBooking(booking);
    }

}
