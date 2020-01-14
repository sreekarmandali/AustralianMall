<template>
    <div>
        <ToiletHeader/>
       <div class="container">
            <div v-for="element in toilets">
                <router-link to="ToiletDetails" tag="div" class="Rcorners2">
                    <p>{{element.Distance}} min walk</p>
                    <br />

                    <span class="Rcorners1 border">Facility will be closed at {{element.closingTime}} </span>&nbsp;&nbsp;
                    &nbsp;&nbsp;<span class="Rcorners3 border">Facility will be cleaned at {{element.closingTime}} </span>

                    <br />
                    <br />
                    <p>Facilities availaible</p>

                </router-link>
        </div>
        </div>


    </div>

</template>
<script>
    import { mapMutations, mapState, mapActions } from "vuex";
    import { FETCH_TOILETS, SET_TOILETS, TOILETS } from '../common/constants_type';
    import ToiletHeader from '../components/ToiletsHeader';

  export default {
        name: "Toilets",
        components: { ToiletHeader},
    data() {
      return {

      }
        },
        methods: {
            ...mapMutations([SET_TOILETS]),
            ...mapActions([FETCH_TOILETS]),

        },
        computed: {
            ...mapState([
                TOILETS
            ]),
        },
        mounted() {
            this.$store.dispatch(FETCH_TOILETS);
        }

  }



</script>
<style scoped>
    .Rcorners2 {
        border-radius: 11px;
        border: 2px solid #595959;
        padding: 20px;
        width: 677px;
        height: 187px;
        cursor: pointer;
    }

    .container {
        margin-right: -116px;
     }

    .Rcorners1 {
        border-radius: 9px;
        background: #73AD21;
        padding: 20px;
        width: 200px;
        height: 150px;
    }
    .Rcorners3 {
        border-radius: 9px;
        background: #eb6734;
        padding: 20px;
        width: 200px;
        height: 150px;
    }
    
    .Rcorners2:hover {
        opacity: 0.4
    }
    .headerText {
        font-size: 35px;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
        color: #c2c2a3;
        text-shadow: 2px 2px 4px #000000;
    }
    .Backnavigation {
        font-size: 30px !important;
        margin-top:16px;
    }
    .Changepointer:hover {
        cursor: pointer;
        opacity:0.5;
    }

    
</style>
