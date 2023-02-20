package restaurantebackend.service;

import restaurantebackend.model.Domicile;

import java.util.List;

public interface DomicileService {

    public void saveDomicile(Domicile domicile);

    public List<Domicile> getDomiciles();

    public Domicile getDomicile(Integer id);

    public void deleteDomicile(Integer id);

}
