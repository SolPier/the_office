import Component, { tracked } from 'sparkles-component'

export default class SeasonButton extends Component {
  @tracked('args')
  get isSelected() {
    return this.args.number == this.args.selectedSeason
  }
}
