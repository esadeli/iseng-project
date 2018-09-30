<template>
  <div>
    <div class = "row">
      <div class="col-md-3">
        <div id= "sidemenucustom">
          <Sidemenu></Sidemenu>
        </div>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidemenu from '@/components/Sidemenu.vue'
import ListDoctor from '@/views/ListDoctor.vue'
export default {
  name: 'Doctor',
  components: {
    Sidemenu, ListDoctor
  },
  computed: {
    token () {
      return this.$store.state.token
    }
  }
}
</script>

<style scoped>
#sidemenucustom {
  margin-top: 20px;
}
</style>
