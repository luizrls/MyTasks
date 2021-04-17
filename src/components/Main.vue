<template>
<main>
  <!-- <slot /> -->
  <GroupItems titulo="Doing" :atividades="getAtividadesDoing(valor)" />
  <GroupItems titulo="Waiting" :atividades="getAtividadesWaiting(valor)" />
  <GroupItems titulo="Done" :atividades="getAtividadesDone(valor)" />
</main>
</template>

<script>
import GroupItems from './GroupItems.vue'
import {getAllTasks} from '@/service/taskService.js'
export default {
name: 'Main',
components:{
    GroupItems
},
props:{
  valor:String
},
// data: ()=> {
//     return {
//         valor: "1"
//     }
// },
methods: {
  getAtividadesDoing: (valor)=>{
    console.log("getAtividadesDoing")
    return getAllTasks("Doing", valor)
  },
  getAtividadesDone: (valor)=>{
    console.log("getAtividadesDone")
    return getAllTasks("Done", valor)
  },
  getAtividadesWaiting: (valor)=>{
    console.log("getAtividadesWaiting")
    return getAllTasks("Waiting", valor)
  }
},

}
</script>

<style scoped>
main {
  grid-area: main;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>