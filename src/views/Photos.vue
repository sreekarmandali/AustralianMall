<template>
    <div class="container">
        <div class="d-flex flex-column Scrollimage">
            <div class="col"><img class="mr-100 Imagesize img-thumbnail" :src="require('@/assets/bathroombasin.jpg')" /></div>
            <div class="col"><img class="Imagesize img-thumbnail" :src="require('@/assets/bathroomFullView.jpg')" /></div>
            <div class="col">
                <img class="Imagesize img-thumbnail" :src="require('@/assets/bathroomshower.jpg')" />
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name:"Photos",
    data() {
      return {

      }
        },
        methods: {


        }
  }



</script>
<style scoped>
    .Imagesize {
        height:600px;
        width:70%;
        margin-left:150px
        
    }
    .Scrollimage {
        width: 100%;
        height: 450px;
        overflow:auto;
    }
</style>
