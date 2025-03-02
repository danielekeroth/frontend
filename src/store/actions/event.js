import { makeActionCreator } from '../../helper/Store';

export const EventTypes = {
    FETCH_ALL: 'Event/FETCH_ALL',
    FETCH_ALL_FAILED: 'Event/FETCH_ALL_FAILED',
    FETCH_ALL_SUCCEEDED: 'Event/FETCH_ALL_SUCCEEDED',
    FETCH_FILTERED: 'Event/FETCH_FILTERED',
    FETCH_FILTERED_SUCCESS: 'Event/FETCH_FILTERED_SUCCESS',
    FETCH_FILTERED_FAIL: 'Event/FETCH_FILTERED_FAIL',
    SET_DEFAULT_PARAMS_VALUES: 'Event/SET_DEFAULT_PARAMS_VALUES',
    RESET_DEFAULT_PARAMS_VALUES: 'Event/RESET_DEFAULT_PARAMS_VALUES',
    FETCH_HOME_EVENTS: 'Event/FETCH_HOME_EVENTS',
    FETCH_HOME_EVENTS_SUCCESS: 'Event/FETCH_HOME_EVENTS_SUCCESS',
    FETCH_HOME_EVENTS_FAIL: 'Event/FETCH_HOME_EVENTS_FAIL',
    FETCH_TAGS: 'Event/FETCH_TAGS',
    FETCH_TAGS_SUCCESS: 'Event/FETCH_TAGS_SUCCESS',
    FETCH_TAGS_FAIL: 'Event/FETCH_TAGS_FAIL',
};

const fetchAll = makeActionCreator(EventTypes.FETCH_ALL);

const fetchAllSucceeded = makeActionCreator(EventTypes.FETCH_ALL_SUCCEEDED, {
    events: null,
});

const fetchAllFailed = makeActionCreator(EventTypes.FETCH_ALL_FAILED);

// Live events (filtered)
const initiateFetchFilteredEvents = (params = {}) => {
    return {
        type: EventTypes.FETCH_FILTERED,
        payload: params,
    };
};
const fetchFilteredEventsSuccess = payload => ({
    type: EventTypes.FETCH_FILTERED_SUCCESS,
    payload,
});
const fetchFilteredEventsFail = () => ({
    type: EventTypes.FETCH_FILTERED_FAIL,
});

const setDefaultParamsValues = payload => ({
    type: EventTypes.SET_DEFAULT_PARAMS_VALUES,
    payload,
});

const resetDefaultParamsValues = payload => ({
    type: EventTypes.RESET_DEFAULT_PARAMS_VALUES,
    payload,
});

const fetchHomeEvents = makeActionCreator(EventTypes.FETCH_HOME_EVENTS, {
    eventType: null,
    page: null,
    count: null,
});

const fetchHomeEventsSuccess = makeActionCreator(EventTypes.FETCH_HOME_EVENTS_SUCCESS, {
    eventType: null,
    page: null,
    count: null,
    events: [],
});

const fetchHomeEventsFail = makeActionCreator(EventTypes.FETCH_HOME_EVENTS_FAIL);

const fetchTags = makeActionCreator(EventTypes.FETCH_TAGS, {
    params: {},
});

const fetchTagsSuccess = makeActionCreator(EventTypes.FETCH_TAGS_SUCCESS, {
    tags: [],
});

const fetchTagsFail = makeActionCreator(EventTypes.FETCH_TAGS_FAIL);

export const EventActions = {
    fetchAll,
    fetchAllSucceeded,
    fetchAllFailed,
    initiateFetchFilteredEvents,
    fetchFilteredEventsSuccess,
    fetchFilteredEventsFail,
    setDefaultParamsValues,
    resetDefaultParamsValues,
    fetchHomeEvents,
    fetchHomeEventsSuccess,
    fetchHomeEventsFail,
    fetchTags,
    fetchTagsSuccess,
    fetchTagsFail,
};
