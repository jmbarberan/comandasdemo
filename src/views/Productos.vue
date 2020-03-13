<template>
  <div class="stats">
    <h1>Productos</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-left">Nombres</th>
            <th class="text-right">Precio</th>
            <th class="text-left">Categoria</th>
            <th class="text-center">Color</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in productos" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.nombre }}</td>
            <td class="text-right">{{ parseFloat(item.precio).format(2) }}</td>
            <td>{{ item.categoriaDef.denominacion }}</td>
            <td>
              <v-chip class="ma-2" :color="item.color"></v-chip>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <p>Se han encontrado {{ productosConteo }} productos registrados</p>
  </div>
        
</template>

<script>
  import { /*mapState*/ mapGetters } from 'vuex';
  require('@/assets/numero.js');

  export default {
    data () {
      return {
        
      }
    },
    computed: {
      //...mapState(['tablas']),
      ...mapGetters(['productos']),
      productosConteo() {
        return this.productos.length;
      },
    },
  }
</script>
