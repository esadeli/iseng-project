<template>
  <div>
    <form>
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model= "name" placeholder="Name">
        </div>
        <div class="form-group">
            <label>Skill</label>
            <input type="text" class="form-control" v-model= "skill"  placeholder="Skill">
        </div>
        <div class="form-group">
            <label>Schedule</label>
            <input type="text" class="form-control" v-model= "schedule" placeholder="Schedule">
        </div>
        <button type="button" v-on:click= "createdoctor()" class="btn btn-primary">Save</button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'AddDoctor',
  data () {
    return {
      name: '',
      skill: '',
      schedule: ''
    }
  },
  methods: {
    createdoctor () {
      let createdoctorobj = {
        token: this.token,
        name: this.name,
        skill: this.skill,
        schedule: this.schedule
      }
      this.$store.dispatch('createdoctor', createdoctorobj)
      this.$router.push({ path: '/doctor' })
    }
  },
  computed: {
    token () {
      return this.$store.state.token
    }
  }
}
</script>

<style>

</style>
