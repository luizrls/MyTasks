<template>
<main>
  <!-- <slot /> -->
  <GroupItems :titulo="titulo1" />
  <GroupItems :titulo="titulo2" />
  <GroupItems :titulo="titulo3" />
</main>
</template>

<script>
import GroupItems from './GroupItems.vue'
export default {
name: 'Main',
components:{
    GroupItems
},
data: ()=> {
    return {
        titulo1: "Doing",
        titulo2: "Waiting",
        titulo3: "Done"
    }
}

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