import Controller from "./Controller"
import EmojiService from "./../services/emojiService"
import { EmojiModel } from "./../models/index"
const emojiService = new EmojiService(EmojiModel)

class EmojiController extends Controller {
  constructor(service) {
    super(service)
  }
}

export default new EmojiController(emojiService)
