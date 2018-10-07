import Component, { tracked } from "sparkles-component"

export default class Episode extends Component {
  @tracked episodeIsVisible = false

  toggleEpisodeVisibility() {
    this.episodeIsVisible = !this.episodeIsVisible
  }
}
