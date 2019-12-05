import Vue from 'vue';
import Router from 'vue-router';

import About from '../pages/About';
import DefinitionList from '../pages/DefinitionList';
import Home from '../pages/Home';

// import User from '../pages/Users/User'
import SingleUser from '../pages/Users/SingleUser';
import Users from '../pages/Users';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/search',
      name: 'Search',
      component: DefinitionList
    },
    // {
    //   path: '/users/:id',
    //   name: 'User',
    //   component: User
    // }
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/users/:id',
      name: 'SingleUser',
      component: SingleUser
    }
  ]
})