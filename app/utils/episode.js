import EmberObject from '@ember/object';
import { task, timeout } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking'

export default EmberObject.extend({
  // const data
  season: null,
  number: null,
  id: null,
  name: null,
  videoUrl: null,
  subtitlesVersion: null,

  // mutable data
  @tracked isDisplayingHelp: false,
  @tracked hasJustBeenSelected: true,

  declareEpisodeAsSelected() {
    this.hasJustBeenSelected = true
    this.ageSelectionStatus.perform()
  },

  declareEpisodeAsUnselected() {
    this.hasJustBeenSelected = false
    this.isDisplayingHelp = false
  },

  toggleHelp() {
    this.isDisplayingHelp = !this.isDisplayingHelp
  },

  ageSelectionStatus: task(function*() {
    yield timeout(50).then(() => {
      this.hasJustBeenSelected = false
    })
  }).restartable()
})
