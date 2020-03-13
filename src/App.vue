<template>
  <v-app id="inspire" >    
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
          <v-list-item v-for="(item, i) in menu" :key="i" @click="() => { irA(item.ruta) }">
            <v-list-item-icon>
              <v-icon>{{ item.icono }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.titulo }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>    
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="indigo" dark>
      <v-toolbar-title style="width: 400px" class="ml-0 pl-4">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">Sabroson Restaurant</span>
        <span class="hidden-sm-and-down"> : </span>  
        <span>{{ entorno.meseroDef.nombre }}</span>
      </v-toolbar-title>
      <v-spacer/>
      <v-btn icon @click="() => { irA('/pedidos') }">
        <v-icon>mdi-playlist-edit</v-icon>
      </v-btn>
      <v-btn icon @click="() => { irA('/despachos') }">
        <v-icon>mdi-food-variant</v-icon>
      </v-btn>
      <!--<v-btn icon @click="() => { verPedido() }">
        <v-icon>mdi-cart</v-icon>
      </v-btn-->
      <v-menu right bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item key="0">
            <v-list-item-title>Cerrar sesion</v-list-item-title>
          </v-list-item>
          <!--v-list-item key="1" @click="() => { irA('/clave/cambiar') }">
            <v-list-item-title>Cambiar mi contraseña</v-list-item-title>
          </v-list-item>
          <v-list-item key="2" @click="logout">
            <v-list-item-title>Cerrar sesion</v-list-item-title>
          </v-list-item>
          <v-divider class="mx-4" inset/>
          <v-list-item key="3" @click="oscuro">
            <v-list-item-title>{{ tema_titulo }}</v-list-item-title>
          </v-list-item-->
        </v-list>
      </v-menu>

    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <router-view />
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; Novainser 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
      menu: [
        { icono: 'mdi-playlist-edit', titulo: 'PEDIDOS', ruta: '/pedidos' },
        { icono: 'mdi-food-variant', titulo: 'DESPACHOS', ruta: '/despachos' },
        { icono: 'mdi-food', titulo: 'PRODUCTOS', ruta: '/productos' },
        { icono: 'mdi-dice-4', titulo: 'MESAS', ruta: '/mesas' },
        { icono: 'mdi-account', titulo: 'COLABORADORES', ruta: '/meseros' },
      ]
    }),
    computed: {
      ...mapGetters(['entorno']),
    },
    methods: {
      ...mapActions([
        'ir',
      ]),
      irA: function (ruta) {
        this.ir(ruta);
      }
    }
  }
</script>