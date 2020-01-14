<template>
   
        <div class="d-flex justify-content-center BgImage">
            <div class="card">

                <form onsubmit="event.preventDefault();">
                    <div class="row Aligncenter Automargin">
                        <img class="Mallimage" :src="require('@/assets/mallimage.jpg')"  />

                        <h3>Welcome to Mall of Australia</h3>

                        <div class="row Automargin">

                            <a href="#" class="fb btn Btnwidth">
                                <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                            </a>
                            <a href="#" class="google btn Btnwidth">
                                <i class="fa fa-google fa-fw">
                                </i> Login with Google+
                            </a>
                        </div>

                        <div class="row Aligncenter Automargin">
                            <div>
                                <p>-----------------------or-----------------------------</p>
                                <h4 class="Bluefont">Sign-up with email</h4>
                            </div>
                            <input class="Btnwidth" type="text" v-model="name" placeholder="Username" required>
                            <input class="Btnwidth" type="password" v-model="password" placeholder="Password" required>
                            <input class="Btnwidth" type="submit" value="Login"  @click="loginSubmit()">
                        </div>
                    </div>
                </form>
            </div>
        </div>
   
</template>
<script lang="js">
    export default {
        name: "LoginUser",
        data() {
            return {
                name: "",
                password: ""
            }
        },
        methods: {
            loginSubmit: function () {
                if (this.name == 'sreekar' && this.password == "sreekar") {

                    this.$router.push({ name: 'Landing' })

                }
            }

        }
    }

</script>
<style scoped>
.BgImage { background-image: url("../assets/shoppingMallBG.jpg"); }
    .Logincard {
        margin-left: 480px;
        margin-top: 3px;
    }

    .Btnwidth {
        width: 380px !important;
    }

    .Bluefont {
        color: #00bfff;
    }

    .container {
        height: 100%;
        align-content: center;
    }
    .Aligncenter {
        text-align: center;
    }

    .Mallimage {
        width: 108px;
        margin:auto;
    }

    

    input,
    .btn {
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 4px;
        margin: 5px 0;
        opacity: 0.85;
        display: inline-block;
        font-size: 17px;
        line-height: 20px;
        text-decoration: none; /* remove underline from anchors */
    }

        input:hover,
        .btn:hover {
            opacity: 1;
        }

    /* add appropriate colors to fb, twitter and google buttons */
    .fb {
        background-color: #3B5998;
        color: white;
    }



    .google {
        background-color: #dd4b39;
        color: white;
    }

    /* style the submit button */
    input[type=submit] {
        background-color: #4CAF50;
        color: white;
        cursor: pointer;
    }

        input[type=submit]:hover {
            background-color: #45a049;
        }

    /* Two-column layout */
    .col {
        float: left;
        width: 50%;
        margin: auto;
        padding: 0 50px;
        margin-top: 6px;
    }




    .card {
        height: 600px;
        width: 387px;
        background-color: #BFC9CA;
        margin-top: auto;
        margin-bottom: auto;
        border-style: solid;
        border-color: #666666;
    }
    
</style>


