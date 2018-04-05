<template>
</template>

<script>
    
    import mutation from '../mutations/LogOut.js'
    export default {
           data() {
            return {
                user : { name: '', role:'' }
            }
        },
        created: function() {
                self = this
                this.$apollo.mutate({
                    mutation, 
                    variables: {
                     name: this.$store.getters.getUser.name
                    },
                     }).then((data) => {
                     this.$store.commit('changeUser', self.user)
                     this.$router.push('/')
                    }).catch((error) => {
                    console.error(error)
                })
            
        }
    }
</script>