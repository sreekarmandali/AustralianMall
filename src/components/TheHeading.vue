<template>

    <div class='header Aligncenter'><span class="headerText">AUSTRAILIAN  MALL</span></div>





</template>
<script>
  export default {
    name:"TheHeading",
    data() {
      return {
        
      }
    }
  }



</script>
<style scoped>


    .header {
        overflow: hidden;
        background-color:#80D27B;
        ;
        padding: 20px 10px;
    }

    .headerText {
        font-size: 40px;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
        color: #c2c2a3;
        text-shadow: 2px 2px 4px #000000;
        font-family: 'Aclonica'
    }

    .Aligncenter {
        text-align: center;
    }

    .header a {
        float: left;
        color: black;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 18px;
        line-height: 25px;
        border-radius: 4px;
    }

        .header a.logo {
            font-size: 25px;
            font-weight: bold;
        }

        .header a:hover {
            background-color: #ddd;
            color: black;
        }

        .header a.active {
            background-color: #80D27B;
            color: white;
        }

    .header-right {
        float: right;
    }

</style>
