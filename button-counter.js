Vue.component('button-counter', {
    props: ['title'],
    data: function () { return { count: 0 } },
    template: '<button v-on:click="clickfn">{{title}} You clicked me {{count}} times</button>',
    methods: { clickfn: function () { this.count++; this.$emit('clicknow', this.count) } }
})