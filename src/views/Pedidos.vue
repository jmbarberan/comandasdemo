<template>
  <v-row>
    <v-col md-6>
      <v-row>
        <v-col md-3>
          <h1>Productos</h1>
        </v-col>
        <v-col md-3>
          <v-combobox label="Seleccionar categoria:" v-model="categoriaSel" :items="categorias" item-text="denominacion" item-value="id" 
            @change="cargarCategoria"/>
        </v-col>
      </v-row>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">#</th>
              <th class="text-left">Nombres</th>
              <th class="text-right">Precio</th>
              <th class="text-center">Agregar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in prods" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.nombre }}</td>
              <td class="text-right">$ {{ parseFloat(item.precio).format(2) }}</td>
              <td class="text-right">
                <v-btn class="ma-2" :color="item.color" @click="agregarPrd(item)">
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
              </td>
              <!--  -->
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
    <v-col md-6>
      <v-card class="mx-auto">
        <v-card-title>
          <v-row>
            <v-col md-3>
              <h1>Orden</h1>
            </v-col>
            <v-col md-3>
              <v-combobox label="Seleccionar mesa:" v-model="mesaSel" :items="mesas" item-text="denominacion" item-value="id" 
                @change="cargarOrdenMesa"/>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-subtitle v-if="ordenSel.total > 0">
          Esperando: {{ horas }}:{{ minutos.toString().padStart(2, '0') }}:{{ segundos.toString().padStart(2, '0') }} - Desde: {{ ordenSel.fecha.getHours() }}:{{ ordenSel.fecha.getMinutes() }}
        </v-card-subtitle>
        <v-simple-table class="transparent" dense>
          <template v-slot:default>
            <tbody>
              <tr v-for="item in ordenSel.items" :key="item.id">
                <td>{{ item.cantidad }}</td>
                <td>{{ item.productoDef.nombre }}</td>
                <td>$ {{ parseFloat(item.productoDef.precio).format(2) }}</td>
                <td><v-chip :color="item.estadoDef.color"></v-chip></td>
                <td>
                  <v-btn icon>
                    <v-icon color="grey darken-1">mdi-minus-box</v-icon>
                  </v-btn>
              </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-divider/>
        <v-card-text>
          <v-row md-6>
            <v-col md-3>
              <h3>Total</h3>
            </v-col>
            <v-col md-3>
              <h3 class="text-right">$ {{ parseFloat(ordenSel.total).format(2) }}</h3>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider/>
        <v-card-actions> 
            <v-btn text>Guardar</v-btn>
        </v-card-actions>
      </v-card>  
    </v-col>
  </v-row>
</template>

<script>
  import { mapState, mapMutations, mapGetters } from 'vuex';
  require('@/assets/numero.js');

  export default {
    data () {
      return {
        mesaSel: null,
        categoriaSel: null,
        msecPerMinute: 1000 * 60,
        msecPerHour: (1000 * 60) * 60,
        horas: 0,
        minutos: 0,
        segundos: 0,
        multi: false,
        prods: [],
        ordenSel: { total: 0, items: [] },
        ...mapState(['entorno']),
        intervalEvents: [],
      }
    },
    computed: {
      ...mapGetters(['productos', 'categorias', 'mesas', 'ordenes', 'estados']),
    },
    methods: {
      ...mapMutations(['agregarIten']),
      cargarCategoria: function(e) {
        if (this.categoriaSel == null || this.categoriaSel.id == 0) {
          this.prods = this.productos;
        } else {
          this.prods = [];
          this.prods = this.productos.filter(function (p) {
            return p.categoria == e.id;
          });
        }
      },
      cargarOrdenMesa: function(e) {
        this.horas = 0;
        this.minutos = 0;
        this.segundos = 0;
        this.ordenSel = { total: 0, items: [] };
        let res = this.ordenes.filter(function (p) {
          return p.mesa == e.id &&
            p.status == 0;
        });
        if (res.length >= 1) {
          this.ordenSel = res[0];
        }
        this.setTimers();
      },
      agregarPrd(e) {
        let currentdate = new Date(); 
        let hr = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        if (this.ordenSel.total > 0) {
          var idx = this.ordenSel.items.findIndex(i => i.producto === e.id);
          if (~idx) {
            this.ordenSel.items[idx].cantidad += 1;
          } else {
            let i = { 
              id: this.ordenSel.items.length + 1, 
              pedido: this.ordenSel.id, 
              producto: e.id, 
              productoDef: e, 
              hora: hr, 
              cantidad: 1,
              mesero: this.entorno.mesero, 
              meseroDef: this.entorno.meseroDef, 
              status: 0, 
              estadoDef: this.estados[0],
            };
            this.ordenSel.items.push(i);
          }
          //this.agregarIten({prd: e, orden: this.ordenSel.id});
          this.ordenSel.total += parseFloat(e.precio);
        } else {
          let ord = { id: this.ordenes.length + 1, total: e.precio, mesa: this.mesaSel.id, status: 0, mesaDef: this.mesaSel, fecha: new Date(), espera: "",
            items: [{
              id: 1, 
              pedido: this.ordenes.length + 1, 
              producto: e.id, 
              productoDef: e, 
              hora: hr, 
              cantidad: 1,
              mesero: this.entorno.mesero, 
              meseroDef: this.entorno.meseroDef, 
              status: 0, 
              estadoDef: this.estados[0]},
            ],
          }
          this.ordenes.push(ord);
          this.ordenSel = ord;
        }
      },
      setTimers() {
          if (this.ordenSel.total > 0) {
            const event = setInterval(() => {
              let interval = new Date(new Date().getTime() - this.ordenSel.fecha.getTime());
              this.horas = Math.floor(interval / this.msecPerHour );
              interval = interval - (this.horas * this.msecPerHour );

              this.minutos = Math.floor(interval / this.msecPerMinute );
              interval = interval - (this.minutos * this.msecPerMinute );

              this.segundos = Math.floor(interval / 1000 );
            }, 1000);
            
            this.intervalEvents.push(event);
          }
      }
    },
    created() {
      this.prods = this.productos;
    },
    beforeDestroy() {
      this.intervalEvents.map(intervalEvent => {
        clearInterval(intervalEvent)
      })
    },
  }
</script>