package restaurantebackend.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bonuses")
public class Bonus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bonusId")
    private int bonusId;
    @Column(name = "descriptionBonus")
    private String bonusDescription;
    @Column(name = "bonusDate")
    @JsonFormat(pattern="dd-MM-yyyy")
    private Date bonusDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "documentId", referencedColumnName = "documentId", nullable = false)
    private User user;

    public Bonus(){

    }

    public int getBonusId() {
        return bonusId;
    }

    public void setBonusId(int bonusId) {
        this.bonusId = bonusId;
    }

    public String getBonusDescription() {
        return bonusDescription;
    }

    public void setBonusDescription(String bonusDescription) {
        this.bonusDescription = bonusDescription;
    }

    public Date getBonusDate() {
        return bonusDate;
    }

    public void setBonusDate(Date bonusDate) {
        this.bonusDate = bonusDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
