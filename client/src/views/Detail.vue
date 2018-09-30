<template>
    <div>
      <div class="card" style="width: 40rem;">
        <div class="card-body">
            <h1>Detail Information of Doctor</h1>
            <div class = "bg-secondary text-white">
                <h5 class="card-title"> {{ detaildoctor.name }}</h5>
                <hr>
            </div>
            <div class="row">
                <h5>Skill:</h5>
                <ul>
                    <li class= "listmargin" v-for= "(skill,index) in detaildoctor.skill" :key= "index">
                        {{ skill }}
                    </li>
                </ul>
            </div>
            <hr>
            <div class="row">
                <h5>Jadwal:</h5>
                <ul>
                    <li class= "listmargin" v-for= "(schedule,index) in detaildoctor.schedule" :key= "index">
                        {{ schedule }}
                    </li>
                </ul>
            </div>
            <hr>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Detail',
  computed: {
    detaildoctor () {
      return this.$store.state.detaildoctor
    }
  },
  //   created () {
  //     console.log('TEST---------------->', $route.params.id)
  //   },
  watch: {
    '$route.params.id': function (id) {
      console.log('ini id loh--->', id)
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
