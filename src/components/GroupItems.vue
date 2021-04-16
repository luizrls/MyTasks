<template>
<div class='GroupItems'>
    <div class="groupItemHeader">
        {{titulo}}
    </div>
    <div class="groupItemBody">
        <Item titulo="Item1" />
        <Item titulo="Item2" />
        <Item titulo="Item3" />
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