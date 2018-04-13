<template>
  <div>
       <div class="row">
        <div class="col-sm-12">
            <h3>Apuestas ganadas</h3>
            <b-progress :value="(bets.wBets / bets.nBets) * 100 " :max="max" show-progress animated></b-progress>
        </div>
    </div>
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
  <a class="btn btn-success text-white" @click="bet()">Apostar </a>

  </div>
</template>


<script>

    import query         from '../queries/getBet.js'
    import getUserQuery  from '../queries/getUser.js'
    import update        from '../mutations/UpdateBets.js'


    export default {
        data() {
            return {
             eleccion: '',
             getbet: '',
             name: this.$store.getters.getUser.name,
             bets: {nBets: '', wBets: ''}
            }
        },
         apollo: {
                getbet: {
                    query: query,
                    update(data) {
                    return data.bet.result
                    }
                },
                getuserquery()  {
                    self = this 
                    return {
                        query: getUserQuery, 
                        variables: {
                            name: self.name
                        },
                        update(data) {
                            self.bets.nBets = data.getUser.nBets
                            self.bets.wBets = data.getUser.wBets
                            this.$store.commit('updateBets', self.bets)
                        }, 
                    }
                }
        },
        methods: {
            bet() {
                    self = this 
                    this.$apollo.queries.getbet.refetch()
                    if(this.eleccion == this.getbet) {
                        console.log("Acierto")
                        this.$store.commit('wonBet')
                    } else {
                        this.$store.commit('lostBet')
                        console.log("Perdiste")
                    }
            
                  this.$apollo.mutate({
                    mutation: update, 
                    variables: {
                        name: self.$store.getters.getUser.name,
                        nBets: self.$store.getters.getUser.nBets,
                        wBets: self.$store.getters.getUser.wBets
                    },
                     }).then((data) => {
                    }).catch((error) => {
                    console.error(error)
                })
                this.$apollo.queries.getuserquery.refetch()
            }
        }
    }
</script>