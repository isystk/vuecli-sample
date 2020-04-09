<template>
  <Detail :post-id="$route.params.id"></Detail>
</template>

<script>
import Detail from '../../components/Detail.vue';

export default {
  components: {
    Detail
  },
  data () {
    return {
    }
  },
  methods: {
  },
}

</script>
