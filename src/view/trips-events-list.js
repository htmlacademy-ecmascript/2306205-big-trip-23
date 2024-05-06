import {createElement} from '../render.js';

const createTripsEventslistTemplate = () =>
  '<ul class="trip-events__list"></ul>';

export default class TripsEventsList {

  getTemplate() {
    return createTripsEventslistTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
