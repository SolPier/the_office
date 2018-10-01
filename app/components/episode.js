import Component, { tracked } from "sparkles-component";

export default class Episode extends Component {
  @tracked isExpanded = false

  toggleIsExpanded() {
    this.isExpanded = !this.isExpanded
  }
}
