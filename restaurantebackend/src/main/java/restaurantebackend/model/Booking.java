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

    @Column(name = "bookingHour")
    private String bookingHour;

    @Column(name = "bookingStatus")
    private String bookingStatus;

    @ManyToOne
    @JoinColumn(name = "documentId", referencedColumnName = "documentId", nullable = false)
    private User user;

    public Booking() {

    }

    @PrePersist
    public void prePersist(){
        this.bookingStatus = "Activa";
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public String getBookingHour() {
        return bookingHour;
    }

    public void setBookingHour(String bookingHour) {
        this.bookingHour = bookingHour;
    }

    public String getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(String bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
