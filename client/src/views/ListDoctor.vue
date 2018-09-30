<template>
    <div id= "listcustom">
       <div v-for= "(doctor,index) in listdoctor" :key= "index">
          <div class="card" style="width: 40rem;">
            <div class="card-body">
                <div class = "bg-secondary text-white">
                   <h5 class="card-title">{{ doctor.name }}</h5>
                   <hr>
                </div>
                <div class="row">
                    <h5>Skill:</h5>
                    <ul>
                        <li class= "listmargin" v-for = "(skill,index2) in doctor.skill" :key= "index2">
                           {{ skill }}
                        </li>
                    </ul>
                </div>
                <hr>
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
#listcustom {
  margin-top: 10px;
}
.listmargin {
   text-align: left
}
</style>
