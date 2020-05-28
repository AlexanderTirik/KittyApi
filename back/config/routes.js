import BreedController from "../controllers/breedController"
import FactController from "../controllers/factController"
import EmojiController from "../controllers/emojiController"
import ImageController from "../controllers/imageController"

export default (server) => {
  server.get(`/api/breeds`, BreedController.getAll)
  server.get(`/api/breeds/:id`, BreedController.getOne)
  server.get(`/api/breeds/random/:limit`, BreedController.getRandom)
  server.post(`/api/breeds`, BreedController.insert)
  server.put(`/api/breeds/:id`, BreedController.update)
  server.delete(`/api/breeds/:id`, BreedController.delete)

  server.get(`/api/facts`, FactController.getAll)
  server.get(`/api/facts/:id`, FactController.getOne)
  server.get(`/api/facts/random/:limit`, FactController.getRandom)
  server.post(`/api/facts`, FactController.insert)
  server.put(`/api/facts/:id`, FactController.update)
  server.delete(`/api/facts/:id`, FactController.delete)

  server.get(`/api/emojis`, EmojiController.getAll)
  server.get(`/api/emojis/:id`, EmojiController.getOne)
  server.get(`/api/emojis/random/:limit`, EmojiController.getRandom)
  server.post(`/api/emojis`, EmojiController.insert)
  server.put(`/api/emojis/:id`, EmojiController.update)
  server.delete(`/api/emojis/:id`, EmojiController.delete)

  server.get(`/api/images/:breed`, ImageController.getRandomImage)
}
