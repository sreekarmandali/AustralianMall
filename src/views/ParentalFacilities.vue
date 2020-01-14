<template>
    <div>
       <PFacilitiesHeader/>
        <br />

        <div class="container">
            <div class="row">
                <div class="col-6">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item border">
                            <img class="Imagesize" :src="require('@/assets/ParentalFacilities/toilet.png')" />
                            Toilet
                            <label class="checkbox">
                                <input type="checkbox" />
                                <span class="success"></span>
                            </label>
                        </li>
                        <li class="list-group-item border">
                            <img class="Imagesize" :src="require('@/assets/ParentalFacilities/babyfeeding.png')" />
                            Baby Feeding
                            <label class="checkbox">
                                <input type="checkbox" />
                                <span class="success"></span>
                            </label>
                        </li>
                        <li class="list-group-item border">
                            <img class="Imagesize" :src="require('@/assets/ParentalFacilities/shower.jpg')" />
                            Shower
                            <label class="checkbox">
                                <input type="checkbox" />
                                <span class="success"></span>
                            </label>
                        </li>
                        <li class="list-group-item border">
                            <img class="Imagesize" :src="require('@/assets/ParentalFacilities/televison.jpg')" />
                            Televison
                            <label class="checkbox">
                                <input type="checkbox" />
                                <span class="success"></span>
                            </label>
                        </li>
                    </ul>




                </div>
                <div class="col-md-6">

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item border">
                            <img class="Imagesize" :src="require('@/assets/ParentalFacilities/microwave.png')" />
                            Microwave
                            <label class="checkbox">
                                <input type="checkbox" />
                                <span class="success"></span>
                            </label>
                        </li>
                        <li class="list-group-item border">
                            <img class="Imagesize" :src="require('@/assets/ParentalFacilities/babychangingtable.png')" />
                            Baby Changing Table
                            <label class="checkbox">
                                <input type="checkbox" />
                                <span class="success"></span>
                            </label>
                        </li>
                        <li class="list-group-item border">
                            <img class="Imagesize" :src="require('@/assets/ParentalFacilities/music.jpg')" />
                            Music
                            <label class="checkbox">
                                <input type="checkbox" />
                                <span class="success"></span>
                            </label>
                        </li>


                    </ul>


                </div>
            </div>
            <br>
            <div class=" Aligncenter">
                <router-link :to="{name: 'Toilets'}">
                    <button type="button" class="btn-lg btn-success">Search</button>
                </router-link>

            </div>
        </div>

    </div>



</template>
<script>
    import PFacilitiesHeader from '../components/PFacilitiesHeader';
  export default {
        name: "ParentalFacilities",
        components: { PFacilitiesHeader},
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
        height: 50px;
    }
  .checkbox {
        background-color: #fff;
        display: inline-block;
        height: 28px;
        margin: 0 .25em;
        width: 28px;
        border-radius: 4px;
        border: 1px solid #ccc;
        float: right
    }

        .checkbox span {
            display: block;
            height: 28px;
            position: relative;
            width: 28px;
            padding: 0
        }

            .checkbox span:after {
                -moz-transform: scaleX(-1) rotate(135deg);
                -ms-transform: scaleX(-1) rotate(135deg);
                -webkit-transform: scaleX(-1) rotate(135deg);
                transform: scaleX(-1) rotate(135deg);
                -moz-transform-origin: left top;
                -ms-transform-origin: left top;
                -webkit-transform-origin: left top;
                transform-origin: left top;
                border-right: 4px solid #fff;
                border-top: 4px solid #fff;
                content: '';
                display: block;
                height: 20px;
                left: 3px;
                position: absolute;
                top: 15px;
                width: 10px
            }

            .checkbox span:hover:after {
                border-color: #999
            }

        .checkbox input {
            display: none
        }

            .checkbox input:checked + span:after {
                -webkit-animation: check .8s;
                -moz-animation: check .8s;
                -o-animation: check .8s;
                animation: check .8s;
                border-color: #555
            }

            .checkbox input:checked + .default:after {
                border-color: #444
            }

            .checkbox input:checked + .primary:after {
                border-color: #2196F3
            }

            .checkbox input:checked + .success:after {
                border-color: #8bc34a
            }

            .checkbox input:checked + .info:after {
                border-color: #3de0f5
            }

            .checkbox input:checked + .warning:after {
                border-color: #FFC107
            }

            .checkbox input:checked + .danger:after {
                border-color: #f44336
            }

    .FeautureBlock {
        position: relative;
        text-align: center;
    }

    .Centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

   

   
</style>
