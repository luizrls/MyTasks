<template>
<div class='Item'>
    <div class="itemHeader">
        <div class="itemTitulo">{{titulo}}</div>
        <div class="itemIdentificacao">
            <div class="itemTipo">TIR</div>#
            <div class="itemId"> XXXXXX</div>
        </div>
    </div>
    <div class="itemBody">
        <div>Descrição</div>
        <ul>
            <li>Atividade 1</li>
            <li>Atividade 2</li>
            <li>Atividade 3</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
name: 'Item',
props:{
    titulo: String
    }
}
</script>

<style scoped>
.Item{
    background: crimson;
    margin: 5px;
    padding: 10px;
}
.itemHeader{
    display: flex;
    justify-content: space-between;
    background: darkolivegreen;
}
.itemIdentificacao{
    display: flex;

}
</style>