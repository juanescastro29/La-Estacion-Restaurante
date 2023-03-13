package restaurantebackend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "domiciles")
public class Domicile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "domicileId", unique = true)
    private int domicileId;

    @Column(name = "domicileDate")
    @JsonFormat(pattern="dd-MM-yyyy HH:mm", timezone="GMT-5")
    private Date domicileDate;

    @Column(name = "domicileCost")
    private double domicileCost;

    @Column(name = "domicileStatus")
    private String domicileStatus;

    @OneToMany(mappedBy = "domicile")
    @JsonIgnore
    private List<Order> ordersDetails;

    @ManyToOne
    @JoinColumn(name = "documentId", referencedColumnName = "documentId")
    private User user;

    public Domicile() {

    }

    @PrePersist
    public void prePersist() {
        this.domicileDate = new Date();
        this.domicileStatus = "Activo";
    }

    public int getDomicileId() {
        return domicileId;
    }

    public void setDomicileId(int domicileId) {
        this.domicileId = domicileId;
    }

    public Date getDomicileDate() {
        return domicileDate;
    }

    public void setDomicileDate(Date domicileDate) {
        this.domicileDate = domicileDate;
    }

    public double getDomicileCost() {
        return domicileCost;
    }

    public void setDomicileCost(double domicileCost) {
        this.domicileCost = domicileCost;
    }

    public String getDomicileStatus() {
        return domicileStatus;
    }

    public void setDomicileStatus(String domicileStatus) {
        this.domicileStatus = domicileStatus;
    }

    public List<Order> getOrdersDetails() {
        return ordersDetails;
    }

    public void setOrdersDetails(List<Order> ordersDetails) {
        this.ordersDetails = ordersDetails;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
