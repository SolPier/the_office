import Component, { tracked } from "sparkles-component"

export default class Episode extends Component {
  @tracked instructionsAreVisible = false

  toggleInstructions() {
    this.instructionsAreVisible = !this.instructionsAreVisible
  }
}
