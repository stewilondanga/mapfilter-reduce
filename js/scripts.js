var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

/*---
              | Setup: Preparing stuff for later
              |----
              */
// salad: '🥗'
var ingredients = {
  apple: '🍎',
  pear: '🍐',
  tangerine: '🍊',
  lemon: '🍋',
  banana: '🍌',
  watermelon: '🍉',
  grapes: '🍇',
  strawberry: '🍓',
  melon: '🍈',
  pepper: '🌶️'


  /*---
                | Component: Code Example
                |----
                */
};
/*Vue.component('CodeExample', {
  props: {
    title: {
      type: String,
      default: '' } },


  template: '\n    <div class="c-code-example">\n      <div class="h5 bold mb1" v-if="title" v-text="title"></div>\n      <code :class="\'block p2 bg-slate-black white rounded\'">\n        <div class="pre"><slot /></div>\n      </code>\n    </div>\n  ' });









/*---
                                                                                                                                                                                                                                                                 | Component: Concept Explainer
                                                                                                                                                                                                                                                                 |----
                                                                                                                                                                                                                                                                 */
/*Vue.component('ConceptExplainer', {
  props: {
    title: {
      type: String,
      default: 'Title' },

    subtitle: {
      type: String,
      default: 'Subtitle' } },


  template: '\n    <div class="c-concept-explainer">\n      <header class="c-concept-explainer__header" :class="\'flex items-center justify-between py2 px3 bg-ghostwhite border border-silver rounded-top\'">\n        <section>\n          <div class="h5 mb0 gray" v-text="subtitle"></div>\n          <div class="h2 mt0 mb0" v-text="title"></div>\n        </section>\n        <slot name="right-of-title"/>\n      </header>\n      <section class="c-concept-explainer__body" :class="\'p3 border-left border-bottom border-right border-silver rounded-bottom\'">\n        <slot name="body" />\n      </section>\n    </div>\n  ' });















/*new Vue({
  el: '#app' });
