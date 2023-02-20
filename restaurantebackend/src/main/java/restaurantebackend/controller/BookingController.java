package restaurantebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import restaurantebackend.model.Booking;
import restaurantebackend.model.Product;
import restaurantebackend.service.BookingService;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

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

}
