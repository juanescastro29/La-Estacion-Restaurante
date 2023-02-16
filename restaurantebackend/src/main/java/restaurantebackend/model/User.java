package restaurantebackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "documentId", unique = true)
    private String userDocumentId;
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
    private List<Adoption> adoptions;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Sponsorship> sponsorships;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Donation> donations;

    public User() {
    }

}

