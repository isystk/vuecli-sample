<template>
  <Detail :post-id="$route.params.id"></Detail>
</template>

<script>
import Header from '../../components/Header.vue';

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
