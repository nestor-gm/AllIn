<template>
  <div>
  <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="heads" v-model="eleccion">
          <label class="form-check-label" for="gridRadios1">
            Cara
          </label>
        </div>
    </div>
 <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="tails" v-model="eleccion">
          <label class="form-check-label" for="gridRadios1">
            Cruz
          </label>
        </div>
    </div>
  <a class="btn btn-primary text-white" @click="bet()">Apostar </a>
   <a class="btn btn-primary text-white" @click="update()">Update </a>
  </div>
</template>


<script>

    import mutation from '../mutations/getBet.js'
   
    export default {
        data() {
            return {
             eleccion: '',
             query: '',
            }
        },
        methods: {
            bet() {

                    this.$apollo.mutate({
                    mutation, 
                    variables: {
                    },
                     }).then((data) => {
                    if(self.eleccion == data.data.getBet.result) {
                        console.log("Acierto")
                        this.$store.commit('wonBet')
                    } else {
                        this.$store.commit('lostBet')
                        console.log("Perdiste")
                    }
                    }).catch((error) => {
                    console.error(error)
                })    
                
            }
        }
    }
</script>