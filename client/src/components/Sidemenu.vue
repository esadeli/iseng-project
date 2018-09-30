<template>
<div>
    <!-- Sidebar -->
    <div class = "sidemenumargin" id="sidebar-wrapper">
        <div v-if = "token === '' || token === null || namelengkap === '' ">

        </div>
        <div class= "bg-primary text-white" v-else-if= "token !== '' || token !== null || namelengkap !== '' ">
          Hi! {{ namelengkap }}
          <br/>
          <button type="button" class= "btn btn-secondary">Tambah Dokter</button>
        </div>
        <div class= "row">
          <div class="col-md-9"></div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Search</span>
          </div>
          <input type="text" class="form-control" placeholder="Input name and type enter" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div v-for= "(doctor,index) in listdoctor" :key= "index" >
          <router-link :to="{name: 'id', params: { id: doctor._id }}">
            <label v-on:click= "detaildoctor(doctor._id)">{{ doctor.name }}</label>
          </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Sidemenu',
  methods: {
    detaildoctor (input) {
      this.$store.dispatch('getdetaildoctor', input)
    }
  },
  computed: {
    namelengkap () {
      return this.$store.state.namelengkap
    },
    token () {
      return this.$store.state.token
    },
    listdoctor () {
      return this.$store.state.listdoctor
    }
  }
}
</script>

<style scoped>
.sidemenumargin {
  margin-top: 20px;
}
</style>
