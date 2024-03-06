import { createRouter, createWebHistory } from 'vue-router';
import GameSelection from './components/GameSelection.vue';

const routes = [
    {
        path: '/',
        name: 'GameSelection',
        component: GameSelection
    },
    // ChordGame
    {
        path: '/chord-game',
        name: 'ChordGame',
        component: () => import('./components/ChordGame.vue')
    },
    // StrummingPatternGame
    {
        path: '/strumming-pattern-game',
        name: 'StrummingPatternGame',
        component: () => import('./components/StrummingPatternGame.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;