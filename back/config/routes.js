import BreedController from "../controllers/breedController"
import FactController from "../controllers/factController"

export default (server) => {
  server.get(`/api/breeds`, BreedController.getAll)
  server.get(`/api/breeds/:id`, BreedController.getOne)
  server.post(`/api/breeds`, BreedController.insert)
  server.put(`/api/breeds/:id`, BreedController.update)
  server.delete(`/api/breeds/:id`, BreedController.delete)

  server.get(`/api/facts`, FactController.getAll)
  server.get(`/api/facts/:id`, FactController.getOne)
  server.post(`/api/facts`, FactController.insert)
  server.put(`/api/facts/:id`, FactController.update)
  server.delete(`/api/facts/:id`, FactController.delete)
}
