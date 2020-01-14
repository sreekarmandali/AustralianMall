import mutations from '@/store/mutations.js';
import actions from '@/store/actions.js';
import chai from 'chai';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import sinonChai from "sinon-chai";
let mock = new MockAdapter(axios);
chai.use(sinonChai);


var assert = chai.assert;
describe('SET TOILET MUTUATION', () => {
    const state = {
        toilets: []
    }
    it('SETS ToiletDetails AFTER FETCHING clicked', () => {
        const toilets = [{ "tableId": 1, "Distance": 4, "closingTime": "23:30:00", "cleaningTime": "12:30:00" }]
        mutations.SET_TOILETS(state, toilets)
        assert(state.toilets, toilets, "both r equal");

    })

})

describe("actions", () => {
    beforeEach(function () {
        mock.reset();
    });

    it("should process payload and commits mutation for successful GET for fetch toilet action", done => {
        let toilets = [{ "tableId": 1, "Distance": 4, "closingTime": "23:30:00", "cleaningTime": "12:30:00" }, { "tableId": 2, "Distance": 5, "closingTime": "12:30:00", "cleaningTime": "05:30:00" }, { "tableId": 3, "Distance": 6, "closingTime": "10:30:00", "cleaningTime": "06:30:00" }, { "tableId": 4, "Distance": 4, "closingTime": "23:30:00", "cleaningTime": "05:30:00" }];
        mock.onGet("http://localhost:8000/toilets").reply(200, toilets);
        let commit = (type, payload) => {
            assert(type, 'SET_TOILETS', "both r equal");
            assert(payload, toilets, "both r equal");
        };

        actions.fetchToilets({ commit });
        done();

    });
    it("should process payload and dispatch fetchReviews for successful Post for add review action", done => {
        let payload = { "userName": "SUBASH", "rating": 4, "reviewComment": "It was great" };
        mock.onPost("http://localhost:8000/ratings/addReview/", payload).reply(201, 1);
        let dispatch = (type) => {
            assert(type, 'loadReviews', "both r equal");

        };

        actions.addReview({ dispatch }, payload);
        done();

    });
    


});
