<template>
  <v-container fluid>
    <v-data-iterator :items="pendientes" hide-default-footer>
      <template v-slot:default="props">
        <v-row>
          <v-col v-for="orden in props.items" :key="orden.id" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ orden.mesaDef.denominacion }}</v-card-title>
              <v-card-subtitle>Esperando: {{ orden.espera }} - Desde: {{ orden.fecha.getHours() }}:{{ orden.fecha.getMinutes() }}</v-card-subtitle> 
              <v-divider></v-divider>
              <v-simple-table class="transparent" dense>
                <template v-slot:default>
                  <tbody>
                    <tr v-for="item in orden.items" :key="item.id">
                      <td><v-chip :color="item.estadoDef.color">{{ item.cantidad }}</v-chip></td>
                      <td>{{ item.productoDef.nombre }}</td>
                      <td class="text-center">
                        <v-btn x-small v-if="item.status === 0" color="orange" dark @click="aumentarEstatusItem(orden.id, item.id)">PRE</v-btn>
                        <v-btn x-small v-else-if="item.status === 1" color="yellow" @click="aumentarEstatusItem(orden.id, item.id)">LST</v-btn>
                        <v-btn x-small v-else-if="item.status === 2" color="green" dark @click="aumentarEstatusItem(orden.id, item.id)">SRV</v-btn>
                        <v-icon v-else color="green">mdi-check</v-icon>
                    </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>    
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  require('@/assets/numero.js');

  export default {
    data () {
      return {
        msecPerMinute: 1000 * 60,
        msecPerHour: (1000 * 60) * 60,
        intervalEvents: [],
        pendientes: [],
      }
    },
    computed: {
      ...mapGetters(['ordenes']),
    },
    methods: {
      ...mapMutations(['aumentarEstatus']),
      setTimers() {
        this.pendientes.map(orden => {
          const event = setInterval(() => {
            let interval = new Date(new Date().getTime() - orden.fecha.getTime());
              var horas = Math.floor(interval / this.msecPerHour );
              interval = interval - (horas * this.msecPerHour );
              var minutos = Math.floor(interval / this.msecPerMinute );
              interval = interval - (minutos * this.msecPerMinute );
              var segundos = Math.floor(interval / 1000 );
              orden.espera = horas + ":" + minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0');
          }, 1000);
          
          this.intervalEvents.push(event)
        });
      },
      aumentarEstatusItem(ordenId, itemId) {
        this.aumentarEstatus({orden: ordenId, item: itemId});
        this.cargarPendientes();
      },
      cargarPendientes() {
        this.pendientes = this.ordenes.filter(function (p) {
          return p.status === 0;
        });
      }
    },
    created() {
      this.cargarPendientes();
      this.setTimers();
    },
    beforeDestroy() {
      this.intervalEvents.map(intervalEvent => {
        clearInterval(intervalEvent)
      })
    },
  }
</script>