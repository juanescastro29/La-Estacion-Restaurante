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

    public Order() {

    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public Domicile getDomicile() {
        return domicile;
    }

    public void setDomicile(Domicile domicile) {
        this.domicile = domicile;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
