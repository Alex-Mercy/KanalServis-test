const ON_SET_DATA = 'ON_SET_DATA';
const SET_DATA = 'SET_DATA';
const SET_LOADED = 'SET_LOADED';
const SET_DATA_FAILURE = 'SET_DATA_FAILURE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_SORT_BY = 'SET_SORT_BY';
const TOGGLE_ORDER = 'TOGGLE_ORDER';
const SET_FILTER = 'SET_FILTER';
const ADD_SEARCH_VALUE = 'SEARCH_VALUE';


const initialState = {
    isLoaded: false,
    data: [],
    error: null,
    currentPage: 1,
    perPage: 10,
    totalCount: 22,
    sortBy: 'name',
    isAscOrder: true,
    filter: 'includes',
    searchValue: ''
};


const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADED: 
            return {
                ...state,
                isLoaded: action.payload,
            };
        case SET_DATA: 
            return {
                ...state,
                data: action.payload,
                isLoaded: true,
            }; 
        case SET_DATA_FAILURE: 
            return {
                ...state,
                error: action.payload,
            }; 
            case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
            case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload,
            };
            case TOGGLE_ORDER:
            return {
                ...state,
                isAscOrder: action.payload,
            };
            case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
            case ADD_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload,
            };
        default:
            return state;
    }

}

export const onSetData= (data) => ({type: ON_SET_DATA, payload: data});
export const setLoaded = (payload) => ({type: SET_LOADED, payload});
export const setData = (data) => ({type: SET_DATA, payload: data})
export const setDataFailure = (error) => ({type: SET_DATA_FAILURE, payload: error});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page});
export const setSortBy = (type) => ({type: SET_SORT_BY, payload: type});
export const toggleOrder = (isAscOrder) => ({type: TOGGLE_ORDER, payload: isAscOrder});
export const setFilter = (filter) => ({type: SET_FILTER, payload: filter});
export const addSearchValue = (value) => ({type: ADD_SEARCH_VALUE, payload: value});


export default tableReducer;