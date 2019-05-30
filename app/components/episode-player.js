import Component from '@glimmer/component'
import { action } from '@ember/object'

export default class EpisodePlayer extends Component {
  @action toggleHelp() {
    this.args.episode.toggleHelp()
  }
}
