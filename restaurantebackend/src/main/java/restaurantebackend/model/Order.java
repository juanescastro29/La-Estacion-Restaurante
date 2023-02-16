package restaurantebackend.model;

import javax.persistence.*;

@Entity
@Table(name = "ordersDetails")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderId")
    private int orderId;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "domicileId", referencedColumnName = "domicileId", nullable = false)
    private Domicile domicile;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "productId", referencedColumnName = "productId", nullable = false)
    private Product product;

}
