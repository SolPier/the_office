import Component, { tracked } from 'sparkles-component'

export default class EpisodeBlock extends Component {
  toggleHelp() {
    this.args.episode.toggleHelp()
  }
}
