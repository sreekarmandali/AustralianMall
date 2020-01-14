import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.use(BootstrapVue)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
   component: () => import("@/views/Login")
    },
    {
        path: '/home',
        name: 'Landing',
        component: () => import("@/views/TheLanding.vue"),
    },
    {
        path: '/PFacilities',
        name: 'ParentalFacilities',
        component: () => import("@/views/ParentalFacilities.vue")
    },
    {
        path: '/PFacilities/Toilets',
        name: 'Toilets',
        component: () => import("@/views/Toilets.vue")
    },
    {
        path: '/PFacilities/ToiletDetails',
        name: 'ToiletDetails',
        component: () => import("@/views/ToiletDetails.vue"),
        children: [
            {
                path: 'Review',
                name: 'Review',
                component: () => import("@/views/Review.vue"),
                children: [
                    {
                        path: 'ProblemReview',
                        name: 'ProblemReview',
                        component: () => import("@/views/ProblemReview.vue")
                    },
                    {
                        path: 'RewardPoints',
                        name: 'RewardPoints',
                        component: () => import("@/views/RewardPoints.vue")
                    }

                ]
            },
            {
                path: 'Directions',
                name: 'Directions',
                component: () => import("@/views/Directions.vue"),
            },
            {
                path: 'Photos',
                name: 'Photos',
                component: () => import("@/views/Photos.vue"),
            }

        ]
    }

    

  
]

const router = new VueRouter({
  routes
})

export default router
