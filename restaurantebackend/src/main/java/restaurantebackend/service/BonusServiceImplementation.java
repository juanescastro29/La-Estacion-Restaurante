package restaurantebackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurantebackend.model.Bonus;
import restaurantebackend.repository.BonusRepository;

import java.util.List;

@Service
public class BonusServiceImplementation implements BonusService {

    @Autowired
    private BonusRepository bonusRepository;


    @Override
    public void saveBonus(Bonus bonus) {
        bonusRepository.save(bonus);
    }

    @Override
    public List<Bonus> getBonuses() {
        return bonusRepository.findAll();
    }

    @Override
    public Bonus getBonus(Integer id) {
        return bonusRepository.findById(id).get();
    }

    @Override
    public void deleteBonus(Integer id) {
        bonusRepository.deleteById(id);
    }
}
