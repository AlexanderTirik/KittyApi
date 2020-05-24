import Controller from  './Controller';
import FactService from  "./../services/factService";
import {FactModel} from  "./../models/index";
const factService = new FactService(
  FactModel
);

class FactController extends Controller {

  constructor(service) {
    super(service);
  }

}

export default new FactController(factService);