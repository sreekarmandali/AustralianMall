<template>
       <div class="container-fluid px-0 py-5 mx-auto Scrollimage">
           <div class="row justify-content-center mx-0 mx-md-auto">
                <div class="col-lg-10 col-md-11 px-1 px-sm-2">
                    
                    <div class="card border-0 px-3">
                        <p><h4>Review and Earn Reward Points</h4></p>
                        <span><b>Share tour experience for better improvement and earn reward points</b></span>
                        
                        <div class="row">

                            <div class="rate">
                                <input type="radio" id="star5" name="rate" v-model="review.rating" value="5" />
                                <label for="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" v-model="review.rating" />
                                <label for="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" v-model="review.rating" />
                                <label for="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" v-model="review.rating" />
                                <label for="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" v-model="review.rating" />
                                <label for="star1" title="text">1 star</label>
                            </div>
                        </div>

                        <div class="form-group shadow-textarea">

                            <textarea v-model="review.reviewComment" class="form-control z-depth-1 border" id="exampleFormControlTextarea6" rows="3" placeholder="Please share your experience..."></textarea>
                        </div>


                        <div class="row">
                            <button type="button" class="btn-lg btn-success" @click="addReviews(review);">Submit</button>
                        </div>
                        <!-- top row -->
                        <!-- middle row -->
                        <!-- Review by user -->
                        <div v-for="element in reviews">
                            <div class="review p-5">
                                <div class="row d-flex">
                                    <div class="profile-pic"><img :src="require('@/assets/profileIcon.png')" width="60px" height="60px"></div>
                                    <div class="d-flex flex-column pl-3">
                                        <h4>{{element.userName}}</h4>
                                        <p class="grey-text">30 min ago</p>
                                    </div>
                                </div>
                                <div class="row pb-3 d-inline-flex " v-for="r in element.rating">
                                    <div class="fa fa-circle green-dot my-auto rating-dot"></div>



                                </div>
                                
                                <div class="row pb-3">
                                    <p>{{element.reviewComment}}</p>
                                </div>
                                <div class="row ml-1">
                                    <div class="row bg-light via">
                                        <div class="px-2"><img src="https://i.imgur.com/8lJt6UN.png" width="18px" height="18px"></div>
                                        <p class="grey-text mb-0 px-3">via Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        



</template>
<script>
    import { mapMutations, mapState, mapActions } from "vuex";
    import { LOAD_REVIEWS, SET_REVIEWS, REVIEWS, ADD_REVIEW } from '../common/constants_type';
  export default {
        name: "RewardPoints",
        
    data() {
      return {
          review: {
              userName:"sreekar",
              rating: '',
              reviewComment:''
          }
      }
        },
        methods: {
            ...mapMutations([SET_REVIEWS]),
            ...mapActions([LOAD_REVIEWS, ADD_REVIEW]),
            resetReview: function () {
                this.review.rating = "";
                this.review.reviewComment = "";
            },
            addReviews: async function (payload) {
                await this.$store.dispatch(ADD_REVIEW, payload);
                this.resetReview();
                


            }
            
            

        },
        computed: {
            ...mapState([
                REVIEWS
            ]),
        },
        mounted() {
            this.$store.dispatch(LOAD_REVIEWS);
        }

  }

    

</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .rate {
        float: left;
        height: 46px;
        padding: 0 10px;
    }

        .rate:not(:checked) > input {
            position: absolute;
            top: -9999px;
        }

        .rate:not(:checked) > label {
            float: right;
            width: 1em;
            overflow: hidden;
            white-space: nowrap;
            cursor: pointer;
            font-size: 38px;
            color: #808080;
        }

            .rate:not(:checked) > label:before {
                content: '★ ';
            }

        .rate > input:checked ~ label {
            color: #ffc700;
        }

        .rate:not(:checked) > label:hover,
        .rate:not(:checked) > label:hover ~ label {
            color: #deb217;
        }

        .rate > input:checked + label:hover,
        .rate > input:checked + label:hover ~ label,
        .rate > input:checked ~ label:hover,
        .rate > input:checked ~ label:hover ~ label,
        .rate > label:hover ~ input:checked ~ label {
            color: #c59b08;
        }
    body {
        overflow-x: hidden
    }

    

    .sm-text {
        font-size: 10px;
        letter-spacing: 1px
    }

    .sm-text-1 {
        font-size: 14px
    }

    .green-tab {
        background-color: #00C853;
        color: #fff;
        border-radius: 5px;
        padding: 5px 3px 5px 3px
    }

    .btn-red {
        background-color: #E64A19;
        color: #fff;
        border-radius: 20px;
        border: none;
        outline: none
    }

        .btn-red:hover {
            background-color: #BF360C
        }

        .btn-red:focus {
            -moz-box-shadow: none !important;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
            outline-width: 0
        }

    .round-icon {
        font-size: 40px;
        padding-bottom: 10px
    }

    .fa-circle {
        font-size: 10px;
        color: #EEEEEF
    }

    .green-dot {
        color: #4CAF50
    }

    .red-dot {
        color: #E64A19
    }

    .yellow-dot {
        color: #FFD54F
    }

    .grey-text {
        color: #BDBDBD
    }

    .green-text {
        color: #4CAF50
    }
    .red-text {
        color:red;
    }
    .yellow-text {
        color:yellow;
    }

    .block {
        border-right: 1px solid #F5EEEE;
        border-top: 1px solid #F5EEEE;
        border-bottom: 1px solid #F5EEEE
    }

    .profile-pic img {
        border-radius: 50%
    }

    .rating-dot {
        letter-spacing: 5px
    }

    .via {
        border-radius: 20px;
        height: 28px
    }
    .Scrollimage {
        width: 100%;
        height: 550px;
        max-height:600px;
        overflow: auto;
    }
    
</style>
