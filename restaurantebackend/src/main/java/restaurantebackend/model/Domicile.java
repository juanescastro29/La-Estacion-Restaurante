package restaurantebackend.model;

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
    private Date domicileDate;
    @Column(name = "domicileCost")
    private double domicileCost;
    @OneToMany(mappedBy = "domicile")
    @JsonIgnore
    private List<Order> ordersDetails;

    public Domicile() {

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

    public List<Order> getOrdersDetails() {
        return ordersDetails;
    }

    public void setOrdersDetails(List<Order> ordersDetails) {
        this.ordersDetails = ordersDetails;
    }
}
