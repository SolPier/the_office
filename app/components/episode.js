import Component, { tracked } from "sparkles-component"
import { later } from '@ember/runloop'

export default class Episode extends Component {
  @tracked episodeIsVisible = false
  @tracked instructionsAreVisible = false
  @tracked hasCopiedLink = false
  subtitleUId = `subtitles-s${this.args.seasonNumber}e${this.args.episode.number}`
  currentUrl = window.location.href

  toggleEpisodeVisibility() {
    this.episodeIsVisible = !this.episodeIsVisible
    this.instructionsAreVisible = false
  }

  toggleInstructions() {
    this.instructionsAreVisible = !this.instructionsAreVisible
  }

  deselectAll() {
    var element = document.activeElement;

    if (element && /INPUT|TEXTAREA/i.test(element.tagName)) {
      if ('selectionStart' in element) {
        element.selectionEnd = element.selectionStart;
      }
      element.blur();
    }

    if (window.getSelection) { // All browsers, except IE <=8
      window.getSelection().removeAllRanges();
    } else if (document.selection) { // IE <=8
      document.selection.empty();
    }
  }

  copySubtitleLinkToClipboard() {
    document.getElementById(this.subtitleUId).select()
    document.execCommand("copy")
    this.deselectAll()

    this.hasCopiedLink = true
    later(this, function() {
      this.hasCopiedLink = false
    }, 1000)
  }
}
