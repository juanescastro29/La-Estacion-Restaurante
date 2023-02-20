package restaurantebackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import restaurantebackend.model.Domicile;
import restaurantebackend.repository.DomicileRepository;

import java.util.List;

@Service
public class DomicileServiceImplementation implements DomicileService{

    @Autowired
    private DomicileRepository domicileRepository;

    @Override
    public void saveDomicile(Domicile domicile) {
        domicileRepository.save(domicile);
    }

    @Override
    public List<Domicile> getDomiciles() {
        return domicileRepository.findAll();
    }

    @Override
    public Domicile getDomicile(Integer id) {
        return domicileRepository.findById(id).get();
    }

    @Override
    public void deleteDomicile(Integer id) {
        domicileRepository.deleteById(id);
    }

}
