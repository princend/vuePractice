var data = {
    a: 1,
    rawHtml: '<span style="color:red">this is shuld be</span>',
    color: 'blue',
    isActive: true,
    type: 'A'
};


var beforeCreate = function () { console.log('beforeCreate'); }
var created = function () { console.log('created'); }
var beforeMount = function () { console.log('beforeMount'); }
var mounted = function () { console.log('mounted'); }
var beforeUpdate = function () { console.log('beforeUpdate'); }
var updated = function () { console.log('updated'); }
var click1 = function () { console.log('click1'); }
var click2 = function () { console.log('click2'); }
var vm = new Vue({
    el: '#app',
    data: data,
    methods: { click1: click1, click2: click2 },
    beforeCreate: beforeCreate,
    created: created,
    beforeMount: beforeMount,
    mounted: mounted,
    beforeUpdate: beforeUpdate,
    updated: updated,
},

)

vm.$watch('a', (newval, oldval) => {
    console.log(newval, oldval);
})
vm.$data.a = 'test';
setTimeout(() => {
    vm.a = 'change...'
}, 2000)


