<template>
<div class='Item'>
    <div class="itemHeader">
        <div class="itemTitulo">{{atividade.titulo}}</div>
        <div class="itemIdentificacao">
            <div class="itemTipo">{{atividade.tipo}}</div>#
            <div class="itemId"> {{atividade.id}}</div>
        </div>
    </div>
    <div class="itemBody">
        <div>Descrição</div>
        <ul>
            <li v-for="(tarefa, index) in atividade.tarefas" :key="index">{{tarefa.nome}} - {{tarefa.status}}</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
name: 'Item',
props:{
    atividade: Object
    },
data: ()=>{
    return {

    }
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