import {render, RenderPosition} from '../render.js';
import TripsListFilter from '../view/trips-list-filter.js';
import SortingTrips from '../view/sorting-trips.js';
import NewEventForm from '../view/new-event-form.js';
import TripsEventsList from '../view/trips-events-list.js';
import TripsEvent from '../view/trips-event.js';
import EventEditorForm from '../view/event-editor-form.js';

export default class Presenter {

  tripsEventsContainer = new TripsEventsList();

  constructor() {
    this.mainHeader = document.querySelector('.page-header');
    this.siteHeaderElement = this.mainHeader.querySelector('.trip-controls__filters');
    this.siteMain = document.querySelector('.page-main');
    this.mainContainer = this.siteMain.querySelector('.trip-events');
  }

  renderTripsEvents() {
    for (let i = 0; i < 3; i++) {
      render(new TripsEvent(), this.tripsEventsContainer.getElement());
    }
  }

  init() {
    render(this.tripsEventsContainer, this.mainContainer);
    render(new TripsListFilter(), this.siteHeaderElement);
    render(new NewEventForm(), this.mainContainer, RenderPosition.AFTERBEGIN);
    render(new SortingTrips(), this.mainContainer, RenderPosition.AFTERBEGIN);
    this.renderTripsEvents();
    render(new EventEditorForm(), this.mainContainer);
  }
}
