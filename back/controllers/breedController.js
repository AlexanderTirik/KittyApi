import Controller from  './Controller';
import BreedService from  "./../services/breedService";
import {BreedModel} from  "./../models/index";
const breedService = new BreedService(
  BreedModel
);

class BreedController extends Controller {

  constructor(service) {
    super(service);
  }

}

export default new BreedController(breedService);