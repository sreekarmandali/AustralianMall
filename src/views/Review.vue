<template>
    <div class="container">
        <br />

        <div class="row" v-if="$router.currentRoute.path==='/PFacilities/ToiletDetails/Review'">
            <div class="col-2"></div>
            <div class="col-8">
                <div class="card border">
                    <div class="card-header">

                        <b>Did you find the facility clean and hygeine?</b>
                        <br />
                        <br />

                        <a href="#/PFacilities/ToiletDetails/Review/RewardPoints" class="btn-lg btn-success">Yes</a>&nbsp &nbsp &nbsp
                        <a href="#/PFacilities/ToiletDetails/Review/ProblemReview" class="btn-lg btn-success">No</a>




                    </div>
                    <div class="card-body">
                        <b> <u>Note</u>:Please click no to raise a concern</b>
                    </div>


                </div>



            </div>
            <div class="col-2"></div>
        </div>
        <div class="row"><router-view /></div>
        
    </div>
    
  
</template>
<script>
   
  export default {
        name: "Review",
       
        
      
    data() {
      return {
          
      }
        },
        methods: {


        }
        
  }



</script>
<style scoped>
    
</style>
