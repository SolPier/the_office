import Component, { tracked } from "sparkles-component"

export default class Intro extends Component {
  @tracked isExpanded = false

  toggleIsExpanded() {
    this.isExpanded = !this.isExpanded;
  }
}
