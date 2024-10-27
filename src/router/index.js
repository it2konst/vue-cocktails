import { createRouter, createWebHistory } from "vue-router";
import { ROUTES_PATCH } from "../constants/router";
import Home from "../pages/Home.vue";
import Cocktail from "../pages/Cocktail.vue";
import CocktailRandom from "../pages/CocktailRandom.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: ROUTES_PATCH.HOME,
            name: ROUTES_PATCH.HOME,
            component: Home,
        },
        {
            path: ROUTES_PATCH.COCKTAIL,
            name: ROUTES_PATCH.COCKTAIL,
            component: Cocktail,
        },
        {
            path: ROUTES_PATCH.COCKTAIL_RANDOM,
            name: ROUTES_PATCH.COCKTAIL_RANDOM,
            component: CocktailRandom,
        },
    ],
});

export default router;
