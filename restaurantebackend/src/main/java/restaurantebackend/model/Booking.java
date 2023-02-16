package restaurantebackend.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookingId")
    private int bookingId;
    @Column(name = "bookingDate")
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date bookingDate;


}
