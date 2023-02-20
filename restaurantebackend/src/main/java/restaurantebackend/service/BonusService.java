package restaurantebackend.service;

import restaurantebackend.model.Bonus;

import java.util.List;

public interface BonusService {

    public void saveBonus(Bonus bonus);

    public List<Bonus> getBonuses();

    public Bonus getBonus(Integer id);

    public void deleteBonus(Integer id);

}
