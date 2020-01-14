<template>
    <div class=" Rcorners1 BackImage">
        <div class='row'><div class="col-1"></div><div class="col-4 Changepointer"><router-link to="/PFacilities/Toilets" tag="i" class="fa fa-arrow-left Backnavigation" aria-hidden="true"></router-link><router-link tag="span" to="/PFacilities/Toilets" class="headerText Backnavigation">Parental Facilities</router-link></div><div class="headerText col-5 Margincenetr">Toilets</div></div>

        <nav class="nav nav-pills nav-justified">

            <router-link to="/PFacilities/ToiletDetails/Directions" tag="a" class="nav-item nav-link  border">
                <i class="fa fa-directions"></i> <span class="Blackfont"><b>Directions</b></span>
            </router-link>

            <router-link tag="a" to="/PFacilities/ToiletDetails/Review" class="nav-item nav-link border">
                <i class="fa fa-comments"></i> <span class="Blackfont"><b>Reviews</b></span>
            </router-link>

            <router-link tag="a" to="/PFacilities/ToiletDetails/Photos" class="nav-item nav-link border">
                <i class="fa fa-image"></i> <span class="Blackfont"><b>Photos</b></span>
            </router-link>

        </nav>
        <router-view />

    </div>

</template>
<script>
    
  export default {
    name:"ToiletDetails",
    data() {
      return {

      }
        },
        methods: {


        }
    }
   



</script>
<style scoped>
    .Rcorners2 {
        border-radius: 11px;
        border: 2px solid #595959;
        padding: 20px;
        width: 100%;
        height: 187px;
        cursor: pointer;
    }


    .Rcorners1 {
        border-radius: 9px;
        border: 2px solid #595959;
        padding: 20px;
        width: 100%;
        height: 700px;
       
    }
    .BackImage {
        background-image: url("../assets/ReviewBack.jpeg") !important;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat,
    }

    .Rcorners2:hover {
        opacity: 0.4
    }
    .Blackfont {
        color:black;
    }
    a.router-link-active {
        color: #f66;
        background-color: #d6d6c2;
    }

    li.router-link-active a {
        color: #f66;
    }
</style>
