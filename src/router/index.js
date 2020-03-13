import Vue from 'vue'
import VueRouter from 'vue-router'
import VPedidos from '../views/Pedidos.vue'
import VDespachos from '../views/Despachos.vue'
import VProductos from '../views/Productos.vue'
import VMesas from '../views/Mesas.vue'
import VMeseros from '../views/Meseros.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: VPedidos
  },
  {
    path: '/despachos',
    name: 'Despachos',
    component: VDespachos
  },
  {
    path: '/productos',
    name: 'Productoos',
    component: VProductos
  },
  {
    path: '/mesas',
    name: 'Mesas',
    component: VMesas
  },
  {
    path: '/meseros',
    name: 'Meseros',
    component: VMeseros
  }
]

const router = new VueRouter({
  routes
})

export default router
