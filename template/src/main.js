import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#isEnabled plugins 'vuex'}}
import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/isEnabled}}

/* eslint-disable no-new */
new Vue({
  el: 'body',
  {{#isEnabled plugins 'vuex'}}
  store,
  {{/isEnabled}}
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
