<template>
    <div>
       <div v-for= "(doctor,index) in listdoctor" :key= "index">
          <div class="card" style="width: 30rem;">
            <div class="card-body">
                <h5 class="card-title">{{ doctor.name }}</h5>
                <hr>
                <div class="row">
                    <h5>Skill:</h5>
                    <ul>
                        <li class= "listmargin" v-for = "(skill,index2) in doctor.skill" :key= "index2">
                           {{ skill }}
                        </li>
                    </ul>
                </div>
                <hr>
                <div class="row">
                    <h5>Schedule:</h5>
                    <ul>
                        <li class= "listmargin" v-for= "(schedule, index3) in doctor.schedule" :key= "index3">
                           {{ schedule }}
                        </li>
                    </ul>
                    <hr>
                </div>
            </div>
          </div>
          <div class="row">
              <div class="col-md-9">
                  <p style= "color: white">...................</p>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ListDoctor',
  created () {
    this.$store.dispatch('getlistdoctor')
  },
  computed: {
    listdoctor () {
      return this.$store.state.listdoctor
    }
  }
}
</script>

<style>
.listmargin {
   text-align: left
}
</style>
