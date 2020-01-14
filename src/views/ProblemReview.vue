<template>
	<div class="container">
		<h3><b>Earn Points!</b></h3>

		<p><b>Please choose the area where to find the issue.You can call us or you can upload the photos.You will earn the points and redeems while your purchase for informing us</b></p>
        <div class="Aligncenter">
            <div class="btn-group">
                <button type="button" class="btn border Buttoncolor">Select area</button>
                <button type="button" class="btn border Buttoncolor">Upload Photos</button>


            </div>
            <ReviewPhotos />
            
        </div>
	</div>


</template>
<script>
 import ReviewPhotos from '@/components/ReviewPhotos';

 export default {
    name:"ProblemReview",
   components: { 
    ReviewPhotos
    
    },

  }



</script>
<style scoped>
    .Buttoncolor{
      background: #e6ac00
      }
</style>
