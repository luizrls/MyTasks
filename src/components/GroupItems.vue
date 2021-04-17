<template>
<div class='GroupItems'>
    <div class="groupItemHeader">
        {{titulo}}
    </div>
    <div class="groupItemBody" v-for="(atividade, index) in atividades" :key="index">
        <Item :atividade="atividade" />
    </div>
</div>
</template>

<script>
import Item from './Item.vue'
export default {
name: 'GroupItems',
components:{
    Item
},
props:{
    atividades: Array,
    titulo: String
}

}

</script>

<style scoped>
.GroupItems{
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: darkmagenta;
    margin: 5px;
    width: 500px;
}
</style>