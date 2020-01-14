import { SET_TOILETS, SET_REVIEWS} from '../common/constants_type';

export default {
    [SET_TOILETS](state, toilets) {

        state.toilets = toilets;
    },
    [SET_REVIEWS](state, reviews) {

        state.reviews = reviews;
    }
}
