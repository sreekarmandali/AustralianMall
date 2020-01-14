<template>
    <div class="container Scrollimage border">
        <div class="d-flex-col ">
            <div>
                <input type="checkbox" id="myCheckbox1" />
                <label for="myCheckbox1" class="FeautureBlock">
                    <img class="Imagesize" :src="require('@/assets/soapDispenser.jpg')">
                    <span class="Centered"><h4>Soap dispenser  was empty</h4></span>
                </label>
            </div>
            <div>
                <input type="checkbox" id="myCheckbox2" />
                <label for="myCheckbox2" class="FeautureBlock">
                    <img class="Imagesize" :src="require('@/assets/dustbinjpg.jpg')">
                    <span class="Centered"><h4>Trash can was full</h4></span>

                </label>
            </div>
            <div>
                <input type="checkbox" id="myCheckbox3" />
                <label for="myCheckbox3" class="FeautureBlock">
                    <img class="Imagesize" :src="require('@/assets/flush.jpg')">\
                    <span class="Centered"><h4>Flush not working</h4></span>
                </label>
            </div>
            <div>
                <input type="checkbox" id="myCheckbox3" />
                <label for="myCheckbox3" class="FeautureBlock">
                    <img class="Imagesize" :src="require('@/assets/commod.jpg')">\
                    <span class="Centered"><h4>Toilet not cleaned</h4></span>
                </label>
            </div>
            <div class="form-group shadow-textarea">
                <label for="exampleFormControlTextarea6" ><span class="Textcolor"><h4>Other problems</h4></span></label>
                <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Please describe the problem"></textarea>
            </div>
            <button type="button" class="btn btn-success">Submit</button>
        </div>
       
        </div>


</template>
<script>
    
    export default {
        name: "ReviewPhotos",
       
    data() {
      return {

      }
        },
        methods: {


        }
  }



</script>
<style scoped>
    label:before {
        content: url("https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/unchecked_checkbox.png");
        position: absolute;
        z-index: 100;
    }

    :checked + label:before {
        content: url("https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/checked_checkbox.png");
    }

    input[type=checkbox] {
        display: none;
    }
    /*pure cosmetics:*/
    img {
        width: 150px;
        height: 150px;
    }

    label {
        margin: 10px;
    }
    .FeautureBlock {
        position: relative;
        text-align: center;
        color: black;
    }

  

    .Centered {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-shadow: 2px 2px 4px #000000;
    }
    .Textcolor {
        color: white;
        text-shadow: 2px 2px 4px #000000;
    }

    .Alignleft {
        margin-right: 145px;
    }

    .Imagesize {
        width: 450px;
        height: 306px;
        
    }
    .Scrollimage {
        width: 100%;
        height: 340px;
        overflow: auto;
    }

</style>