import Component, { tracked } from "sparkles-component"
import { later } from '@ember/runloop'

export default class Episode extends Component {
  @tracked episodeIsVisible = false

  toggleEpisodeVisibility() {
    this.episodeIsVisible = !this.episodeIsVisible
  }
}
