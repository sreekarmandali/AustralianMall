<template>
    <div id="app">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href='https://fonts.googleapis.com/css?family=Aclonica' rel='stylesheet'>

        <TheHeading v-if="$router.currentRoute.path!='/'"></TheHeading>
        <router-view />
    </div>
</template>
<script>
  import TheHeading from '@/components/TheHeading'
  export default {
    name: 'App',
    components: { TheHeading }
    }
</script>
<style>
    body, html {
        padding: 0;
        margin: 0;
        width: 100%;
        min-height: 100vh;
        
    }
    body {
        font-family: Arial, Helvetica, sans-serif;
        
    }
    .container {
        height: 100%;
        align-content: center;
    } 
    .Aligncenter {
        text-align: center;
    }
    #app {

        background-repeat: no-repeat;
        width: 100%;
        background-position: center;
    }
    .Automargin {
        margin-right:auto !important;
        margin-left:auto !important;
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
        margin-top: 16px;
    }

    .Changepointer:hover {
        cursor: pointer;
        opacity: 0.5;
    }
    .Margincenetr {
        margin-left: 42px;
    }
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
</style>
