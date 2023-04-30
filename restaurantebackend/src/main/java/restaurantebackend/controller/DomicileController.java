package restaurantebackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import restaurantebackend.model.Domicile;
import restaurantebackend.model.User;
import restaurantebackend.service.DomicileService;
import restaurantebackend.service.UserService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/domicile")
public class DomicileController {

    @Autowired
    private DomicileService domicileService;
    @Autowired
    private UserService userService;

    @PostMapping("/createDomicile")
    public ResponseEntity<Object> addDomicile(@RequestBody Domicile domicile) {
        domicileService.saveDomicile(domicile);
        Map<String, Object> response = new HashMap();
        response.put("domicile", domicileService.getDomiciles().get(domicileService.getDomiciles().size() - 1));
        response.put("text", "Domicile create successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

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

    @GetMapping("/showDomiciles/user/{userId}/{page}")
    public List<Domicile> getDomicilesUser(@PathVariable Integer userId, @PathVariable Integer page) {
        User user =  userService.getUser(userId);
        ArrayList<Domicile> domicilesLimited = new ArrayList<>();
        int elements = 0;
        int startLimit = (6*page)-6;


        for (int i = startLimit; i < user.getDomiciles().size(); i++) {
            if (elements <= 5) {
                domicilesLimited.add(user.getDomiciles().get(i));
                elements = elements + 1;
            } else {
                i = user.getDomiciles().size();
            }
        }

        return domicilesLimited;
    }

    @PutMapping("/cancelDomicile/{domicileId}")
    public void cancelDomicile(@PathVariable Integer domicileId) {
        Domicile domicile = domicileService.getDomicile(domicileId);
        domicile.setDomicileStatus("Cancelado");
        domicileService.saveDomicile(domicile);
    }

}
