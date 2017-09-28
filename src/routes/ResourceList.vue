<template>
  <div>
    <h1>{{ resourceTitle($route.params.resource) }}</h1>
    <div v-for="instance in resourceInstances" v-bind:key="instance.id">
      <Resource v-bind:info="instance" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Resource from '@/components/Resource';
import server from '../fake-server';

export default {
  name: 'resource-list',
  data() {
    return {
      resourceInstances: server.resourceData[this.$route.params.resource].instances
    }
  },
  methods: {
    resourceTitle: resource =>
     resource
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  },
  watch: {
    '$route'(to, from) {
      Vue.set(
        this._data, 'resourceInstances', server.resourceData[this.$route.params.resource].instances
      );
    }
  },
  components: { Resource }
}
</script>

<style scoped></style>
