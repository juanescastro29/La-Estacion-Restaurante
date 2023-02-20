package restaurantebackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "documentId", unique = true)
    private int userDocumentId;

    @Column(name = "firstName", nullable = false)
    private String userFirstName;

    @Column(name = "lastName", nullable = false)
    private String userLastName;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "phoneNumber", nullable = false, unique = true)
    private String userPhoneNumber;

    @Column(name = "userAddress", nullable = false)
    private String userAddress;

    @Column(name = "userName", nullable = false, unique = true)
    private String userName;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "role", nullable = false)
    private String role;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Booking> bookings;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Domicile> domiciles;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Bonus> bonuses;

    @PreRemove
    public void nullable(){
        bookings.forEach(booking -> booking.setUser(null));
        domiciles.forEach(domicile -> domicile.setUser(null));
        bonuses.forEach(bonus -> bonus.setUser(null));
    }

    public User() {

    }

    public int getUserDocumentId() {
        return userDocumentId;
    }

    public void setUserDocumentId(int userDocumentId) {
        this.userDocumentId = userDocumentId;
    }

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserPhoneNumber() {
        return userPhoneNumber;
    }

    public void setUserPhoneNumber(String userPhoneNumber) {
        this.userPhoneNumber = userPhoneNumber;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public List<Domicile> getDomiciles() {
        return domiciles;
    }

    public void setDomiciles(List<Domicile> domiciles) {
        this.domiciles = domiciles;
    }

    public List<Bonus> getBonuses() {
        return bonuses;
    }

    public void setBonuses(List<Bonus> bonuses) {
        this.bonuses = bonuses;
    }
}

