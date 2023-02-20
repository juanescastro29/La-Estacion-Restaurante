package restaurantebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import restaurantebackend.model.Booking;
import restaurantebackend.model.Domicile;
import restaurantebackend.service.DomicileService;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/domicile")
public class DomicileController {

    @Autowired
    private DomicileService domicileService;

    @GetMapping("/showDomiciles/{page}")
    public List<Domicile> getDomicilesPage(@PathVariable Integer page) {
        ArrayList<Domicile> domicilesLimited = new ArrayList<>();
        int elements = 0;
        int startLimit = (6*page)-6;

        for (int i = startLimit; i < domicileService.getDomiciles().size(); i++) {
            if (elements <= 5) {
                domicilesLimited.add(domicileService.getDomiciles().get(i));
                elements = elements + 1;
            } else {
                i = domicileService.getDomiciles().size();
            }
        }
        return domicilesLimited;
    }

}
