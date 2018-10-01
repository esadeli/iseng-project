<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="#" style= "color: white">Cari Dokter</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#"> <span class="sr-only">(current)</span></a>
                </li>
                </ul>
                <span class="navbar-text">
                    <div class = "row">
                        <div class="col-md-3">
                            <div v-if= "token === '' || token === null || namelengkap === ''">
                               <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#registerModal">
                                    Register
                                </button>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-md-3">
                            <div v-if= "token === '' || token === null || namelengkap === ''">
                              <div id= "google-signin-button" class="g-signin2"></div>
                              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#loginModal">
                                 Login
                              </button>
                            </div>
                            <div v-else-if= "token !== '' || token !== null || namelengkap !== ''">
                              <button type="button" class="btn btn-info" v-on:click = "logout()">
                                Logout
                              </button>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                </span>
            </div>
        </nav>
        <!-- Modal -->
        <!-- Register-->
        <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="email" class="form-control" v-model= "regname" id="registername" aria-describedby="emailHelp" placeholder="Name">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Username</label>
                                <input type="text" class="form-control" v-model= "regusername" id="registerusername" placeholder="Username">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Email</label>
                                <input type="text" class="form-control" v-model= "regemail" id="registeremail" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" v-model= "regpassword" id="registerpassword" placeholder="Password">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" v-on:click = "registerUser()" >Register</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Login-->
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Email/Username</label>
                                <input type="text" class="form-control" v-model= "logininput" id="logininput" placeholder="Email/Username">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" v-model= "loginpassword" id="exampleInputPassword1" placeholder="Password">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" v-on:click = "loginUser()">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="https://apis.google.com/js/platform.js?onload=onLoadCallback" async defer></script>
<script>
export default {
  name: 'Navbar',
  mounted () {
    gapi.signin2.render('google-signin-button', {
      onsuccess: this.onSignIn
    })
  },//
  data () {
    return {
      logininput: '',
      loginpassword: '',
      regname: '',
      regusername: '',
      regemail: '',
      regpassword: '',
      googleSignInParams: {
        client_id: '742869772361-8bsmdes62f97gruqqiomk0qvjrlsdmdn.apps.googleusercontent.com'
      },
      googlename: '',
      googleemail: ''
    }
  },
  created (){
    gapi.signin2.render('google-signin-button', {
      onsuccess: this.onSignIn,
      onfailure: this.onSignInError
    })
  },
  methods: {
    registerUser () {
      let registerObj = {
        name: this.regname,
        username: this.regusername,
        email: this.regemail,
        password: this.regpassword
      }
      this.$store.dispatch('registerobj', registerObj)
      $('#registerModal').modal('hide')
    },
    loginUser () {
      let loginObj = {
        logininput: this.logininput,
        password: this.loginpassword
      }
      this.$store.dispatch('loginobj', loginObj)
      $('#loginModal').modal('hide')
    },
    logout () {
      localStorage.removeItem('token')
      this.$store.dispatch('logoutobj')
    },
    onSignIn(googleUser) {
        console.log('MASUK------------------------------------------->')
        const profile = googleUser.getBasicProfile();
        this.googlename = profile.getName()
        this.googleemail = profile.getEmail()
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        // location.reload()
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  },
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

<style>

</style>
