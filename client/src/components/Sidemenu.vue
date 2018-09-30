<template>
<div>
    <!-- Sidebar -->
    <div class = "sidemenumargin" id="sidebar-wrapper">
        <div v-if = "token === '' || token === null || namelengkap === '' ">

        </div>
        <div class= "bg-primary text-white" v-else-if= "token !== '' || token !== null || namelengkap !== '' ">
          Hi! {{ namelengkap }}
        </div>
        <p>Search Doctor</p>

    </div>
</div>
</template>

<script>
export default {
  name: 'Sidemenu',
  computed: {
    namelengkap () {
      return this.$store.state.namelengkap
    },
    token () {
      return this.$store.state.token
    }
  }
}
</script>

<style scoped>
.sidemenumargin {
  margin-top: 20px;
}
</style>
