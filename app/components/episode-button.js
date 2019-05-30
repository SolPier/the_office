import Component from '@glimmer/component'

export default class EpisodeButton extends Component {
  get isSelected() {
    return this.args.selectedEpisodes.indexOf(this.args.episode) >= 0
  }
}
