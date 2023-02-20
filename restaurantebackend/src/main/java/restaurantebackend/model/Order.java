package restaurantebackend.model;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "ordersDetails")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderId")
    private int orderId;
    @ManyToOne
    @JoinColumn(name = "domicileId", referencedColumnName = "domicileId")
    private Domicile domicile;
    @ManyToOne
    @JoinColumn(name = "productId", referencedColumnName = "productId")
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
