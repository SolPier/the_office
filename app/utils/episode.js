import EmberObject from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default EmberObject.extend({
  // const data
  season: null,
  number: null,
  id: null,
  name: null,
  videoUrl: null,
  subtitlesVersion: null,

  // state data
  displayingHelp: false,
  hasJustBeenSelected: true,

  declareEpisodeAsSelected() {
    this.set('hasJustBeenSelected', true)
    this.ageSelectionStatus.perform()
  },

  declareEpisodeAsUnselected() {
    this.set('hasJustBeenSelected', false)
    this.set('displayingHelp', false)
  },

  toggleHelp() {
    this.set('displayingHelp', !this.displayingHelp)
  },

  ageSelectionStatus: task(function*() {
    yield timeout(50).then(() => {
      this.set('hasJustBeenSelected', false)
    })
  }).restartable()
})
