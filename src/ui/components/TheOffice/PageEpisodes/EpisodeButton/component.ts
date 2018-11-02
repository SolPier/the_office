import Component, { tracked } from '@glimmer/component'

export default class EpisodeButton extends Component {
  @tracked
  get isSelected() {
    return this.args.selectedEpisodes.indexOf(this.args.episode) >= 0
  }
}
