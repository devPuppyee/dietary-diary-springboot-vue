import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Login',
		component: () => import('@/views/Login'),
    },
];


const router = new VueRouter({
	mode: 'history',
	routes: [ ...routes], 
});

export default router;
