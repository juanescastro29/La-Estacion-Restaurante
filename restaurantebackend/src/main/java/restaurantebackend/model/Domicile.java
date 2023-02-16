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


}
