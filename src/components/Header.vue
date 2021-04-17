<template>
<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="logoContainer">
            <div class="logoImage">
                <img src="https://via.placeholder.com/50" alt="Logo">
            </div>
            <div class="appName">
                <h5>Task App</h5> 
            </div>
        </div>
        
        <div class="searchBox">
            <form class="form-inline my-2 my-lg-0" v-on:submit.prevent>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" aria-describedby="inputGroup-sizing-default" v-model="valor" @change="buscar">
            </form>
        </div>
        <div class="userPic">
            <img src="https://via.placeholder.com/50" alt="Logo">
        </div>
    </nav>
</header>
</template>

<script>
export default {
name: 'Header',
data:()=>{
    return {
        valor:''
    }
},
methods: {
    buscar(){
        this.$emit('valorBuscado',this.valor)
    }
},
}
</script>

<style scoped>
 nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
} 
.logoContainer{
    display: flex;
    justify-content: flex-start;
    align-content: center;
}

header {
  grid-area: header;
}

.searchBox > input{
    font-size: 1.5em;
    
}
.userPic > img{
    border-radius: 50%;
}

</style>