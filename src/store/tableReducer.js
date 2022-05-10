const ON_SET_DATA = 'ON_SET_DATA';
const SET_DATA = 'SET_DATA';
const SET_LOADED = 'SET_LOADED';
const SET_DATA_FAILURE = 'SET_DATA_FAILURE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_SORT_BY = 'SET_SORT_BY';

const initialState = {
    isLoaded: false,
    data: [],
    error: null,
    currentPage: 1,
    perPage: 5,
    totalCount: 22,
    sortBy: 'id',
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


export default tableReducer;