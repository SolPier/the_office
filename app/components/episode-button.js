import Component, { tracked } from 'sparkles-component'

export default class EpisodeButton extends Component {
  @tracked('args')
  get isSelected() {
    return this.args.selectedEpisodes.indexOf(this.args.episode) >= 0
  }
}
