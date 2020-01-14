import { FETCH_TOILETS, GET_TOILETS_URL, SET_TOILETS, ADD_REVIEW, POST_REVIEW_URL, LOAD_REVIEWS, GET_REVIEWS_URL, SET_REVIEWS } from '../common/constants_type';
import api from '../common/api_service';


export default {
    async [FETCH_TOILETS]({ commit }) {
        await api
            .get(GET_TOILETS_URL)
            .then(toilets => {
                commit(SET_TOILETS, toilets)
            })
    },

    async [ADD_REVIEW]({ dispatch }, payload) {
        await api
            .post(POST_REVIEW_URL, payload)
            .then((data) => {
                if (data.message == 'Successfully added the review.')
                    dispatch(LOAD_REVIEWS)

            })
    },
    async [LOAD_REVIEWS]({ commit }) {
        await api
            .get(GET_REVIEWS_URL)
            .then(reviews => {
                commit(SET_REVIEWS, reviews)
            })
    },

}
