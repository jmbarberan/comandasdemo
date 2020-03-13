import Vue from 'vue'
import router from '@/router'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entorno: {
      mesero: 2,
      meseroDef: {id: 4, nombre: "Victoria M."},
    },
    tablas: {
      categorias: [
        { id: 0, denominacion: "TODOS" },
        { id: 1, denominacion: "+ Arroz c/Menestra" },
        { id: 2, denominacion: "+ Moro" },
        { id: 3, denominacion: "Cortes" },
        { id: 4, denominacion: "Bebidas" },
        { id: 5, denominacion: "Porciones" },
      ],
      productos: [
        { id: 1, nombre: 'Pollo Tradicional + Arroz c/menestra', precio: 4, color:"brown", categoria: 1, categoriaDef: { id: 1, denominacion: "+ Arroz c/Menestra" }},
        { id: 2, nombre: 'Pollo Tradicional + Moro', precio: 5, color:"yellow", categoria: 2, categoriaDef: { id: 2, denominacion: "+ Moro" }},
        { id: 3, nombre: 'Pollo Tradicional', precio: 3.25, color:"default", categoria: 3, categoriaDef: { id: 3, denominacion: "Cortes" } },
        { id: 4, nombre: 'Carne Tradicional + Arroz c/menestra', precio: 4, color:"brown", categoria: 1, categoriaDef: { id: 1, denominacion: "+ Arroz c/Menestra" } },
        { id: 5, nombre: 'Carne Tradicional + Moro', precio: 5, color:"yellow", categoria: 2, categoriaDef: { id: 2, denominacion: "+ Moro" } },
        { id: 6, nombre: 'Carne Tradicional', precio: 3.5, color:"default", categoria: 3, categoriaDef: { id: 3, denominacion: "Cortes" } },
        { id: 7, nombre: 'Lomo Asado + Arroz c/menestra', precio: 5, color:"brown", categoria: 1, categoriaDef: { id: 1, denominacion: "+ Arroz c/Menestra" } },
        { id: 8, nombre: 'Lomo Asado + Moro', precio: 6, color:"yellow", categoria: 2, categoriaDef: { id: 2, denominacion: "+ Moro" } },
        { id: 9, nombre: 'Lomo Asado', precio: 4.25, color:"default", categoria: 3, categoriaDef: { id: 3, denominacion: "Cortes" } },
        { id: 10, nombre: 'Lomo Fino Res 225gr. + arroz c/menestra', precio: 6.75, color:"brown", categoria: 1, categoriaDef: { id: 1, denominacion: "+ Arroz c/Menestra" } },
        { id: 11, nombre: 'Lomo Fino Res 225gr. + moro', precio: 8, color:"yellow", categoria: 2, categoriaDef: { id: 2, denominacion: "+ Moro" } },
        { id: 12, nombre: 'Lomo Fino Res 225gr.', precio: 5.75, color:"default", categoria: 3, categoriaDef: { id: 3, denominacion: "Cortes" } },
        { id: 13, nombre: 'Chuleta Tradicional + Arroz c/menestra', precio: 5, color:"brown", categoria: 1, categoriaDef: { id: 1, denominacion: "+ Arroz c/Menestra" } },
        { id: 14, nombre: 'Chuleta Tradicional + Moro', precio: 6, color:"yellow", categoria: 2, categoriaDef: { id: 2, denominacion: "+ Moro" } },
        { id: 15, nombre: 'Chuleta Tradicional', precio: 3.75, color:"default", categoria: 3, categoriaDef: { id: 3, denominacion: "Cortes" } },
        { id: 16, nombre: 'Chuleton Cerdo 450gr. + Arroz c/menestra', precio: 8, color:"brown", categoria: 1, categoriaDef: { id: 1, denominacion: "+ Arroz c/Menestra" } },
        { id: 17, nombre: 'Chuleton Cerdo 450gr. + Moro', precio: 9, color:"yelow", categoria: 2, categoriaDef: { id: 2, denominacion: "+ Moro" } },
        { id: 18, nombre: 'Chuleton Cerdo 450gr.', precio: 6.5, color:"default", categoria: 3, categoriaDef: { id: 3, denominacion: "Cortes" } },
        { id: 19, nombre: 'Costilla 450gr. + Arroz c/menestra', precio: 9, color:"brown", categoria: 1, categoriaDef: { id: 1, denominacion: "+ Arroz c/Menestra" } },
        { id: 20, nombre: 'Costilla 450gr. + Moro', precio: 10, color:"yellow", categoria: 2, categoriaDef: { id: 2, denominacion: "+ Moro" } },
        { id: 21, nombre: 'Costilla 450gr.', precio: 7.5, color:"default", categoria: 3, categoriaDef: { id: 3, denominacion: "Cortes" } },
        { id: 22, nombre: 'Costilla 225gr. + Arroz c/menestra', precio: 6.5, color:"brown", categoria: 1, categoriaDef: { id: 1, denominacion: "+ Arroz c/Menestra" } },
        { id: 23, nombre: 'Costilla 225gr. + Moro', precio: 8, color:"yellow", categoria: 2, categoriaDef: { id: 2, denominacion: "+ Moro" } },
        { id: 24, nombre: 'Costilla 225gr.', precio: 5.75, color:"default", categoria: 3, categoriaDef: { id: 3, denominacion: "Cortes" } },
        { id: 25, nombre: 'Jugo Natural Mora (Jarra)', precio: 5, color:"red darken-4", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 26, nombre: 'Jugo Natural Naranja (Jarra)', precio: 5, color:"orange", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 27, nombre: 'Jugo Natural Maracuya (Jarra)', precio: 5, color:"yellow", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 28, nombre: 'Jugo Natural Limon (Jarra)', precio: 5, color:"green", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 29, nombre: 'Jugo Natural Mora (Vaso)', precio: 1.5, color:"red darken-4", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 30, nombre: 'Jugo Natural Naranja (Vaso)', precio: 1.5, color:"orange", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 31, nombre: 'Jugo Natural Maracuya (Vaso)', precio: 1.5, color:"yellow", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 32, nombre: 'Jugo Natural Limon (Vaso)', precio: 1.5, color:"green", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 33, nombre: 'Cola 1.35 Litros', precio: 1.5, color:"pink", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 34, nombre: 'Cola Personal 300 ml', precio: 1.5, color:"red", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 35, nombre: 'Agua', precio: 0.5, color:"default", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 36, nombre: 'Pilsener Ligth', precio: 1.75, color:"yellow", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 37, nombre: 'Club Verde', precio: 1.75, color:"green", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 38, nombre: 'Corona', precio: 3, color:"blue", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 39, nombre: 'Sangria', precio: 15, color:"red darken-4", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 40, nombre: 'Sangria (Vaso)', precio: 3.5, color:"red", categoria: 4, categoriaDef: { id: 4, denominacion: "Bebidas" } },
        { id: 41, nombre: 'Arroz c/Menestra', precio: 1.5, color:"brown", categoria: 4, categoriaDef: { id: 1, denominacion: "+ Arroz c/Menestra" } },
        { id: 42, nombre: 'Moro', precio: 1.5, color:"yellow", cateoria: 4, categoriaDef: { id: 2, denominacion: "+ Moro" } },
        { id: 43, nombre: 'Ensalada (Porcion)', precio: 1.5, color:"purple", categoria: 5, categoriaDef: { id: 5, denominacion: "Porciones" } },
        { id: 44, nombre: 'Patacones (Porcion)', precio: 1.5, color:"yellow", categoria: 5, categoriaDef: { id: 5, denominacion: "Porciones" } },
        { id: 45, nombre: 'Papa Chaucha (Porcion)', precio: 1.5, color:"brown", categoria: 5, categoriaDef: { id: 5, denominacion: "Porciones" } },
        { id: 46, nombre: 'Papa frita (Porcion)', precio: 1.5, color:"orange", categoria: 5, categoriaDef: { id: 5, denominacion: "Porciones" } },
        { id: 47, nombre: 'Chorizo Parrillero (Porcion)', precio: 2, color:"red", categoria: 5, categoriaDef: { id: 5, denominacion: "Porciones" } },
      ],
      mesas: [
        {id: 1, denominacion: "Mesa 1"},
        {id: 2, denominacion: "Mesa 2"},
        {id: 3, denominacion: "Mesa 3"},
        {id: 4, denominacion: "Mesa 4"},
        {id: 5, denominacion: "Mesa 5"},
        {id: 6, denominacion: "Mesa 6"},
        {id: 7, denominacion: "Mesa 7"},
        {id: 8, denominacion: "Mesa 8"},
        {id: 9, denominacion: "Mesa 9"},
      ],
      meseros: [
        {id: 1, nombre: "Carlos A."},
        {id: 2, nombre: "Andres P."},
        {id: 3, nombre: "Felipe C."},
        {id: 4, nombre: "Victoria M."},
        {id: 5, nombre: "Mariela Y."},
      ],
      ordenes: [
        { id: 1, mesa: 4, status: 0, mesaDef: {id: 4, denominacion:"Mesa 4"}, fecha: new Date(), total: 23, espera: "",
          items: [
            { id: 1, pedido: 1, producto: 11, cantidad:1, productoDef: { id: 11, nombre: 'Lomo Fino Res 225gr. + moro', precio: 8, color:"yellow" }, hora: "2020-02-19 17:35:05", mesero: 4, meseroDef: {id: 4, nombre: "Victoria M."}, status: 0, estadoDef: { id:0, denominacion:"Pendiente", color: "red" } },
            { id: 2, pedido: 1, producto: 19, cantidad:1, productoDef: { id: 19, nombre: 'Costilla 450gr. + Arroz c/menestra', precio: 9, color:"brown" }, hora: "2020-02-19 17:35:15", mesero: 4, meseroDef: {id: 4, nombre: "Victoria M."}, status: 1, estadoDef: { id:1, denominacion:"Preparando", color: "orange" } },
            { id: 3, pedido: 1, producto: 45, cantidad:1, productoDef: { id: 45, nombre: 'Papa Chaucha (Porcion)', precio: 1.5, color:"brown" }, hora: "2020-02-19 17:35:25", mesero: 4, meseroDef: {id: 4, nombre: "Victoria M."}, status: 1, estadoDef: { id:1, denominacion:"Preparando", color: "orange" } },
            { id: 4, pedido: 1, producto: 44, cantidad:1, productoDef: { id: 44, nombre: 'Patacones (Porcion)', precio: 1.5, color:"yellow" }, hora: "2020-02-19 17:35:35", mesero: 2, meseroDef: {id: 2, nombre: "Andres P."}, status: 0, estadoDef: { id:0, denominacion:"Pendiente", color: "red" } },
            { id: 5, pedido: 1, producto: 29, cantidad:1, productoDef: { id: 29, nombre: 'Jugo Natural Mora (Vaso)', precio: 1.5, color:"wine" }, hora: "2020-02-19 17:35:45", mesero: 4, meseroDef: {id: 4, nombre: "Victoria M."}, status: 3, estadoDef: { id:3, denominacion:"Servido", color: "green" } },
            { id: 6, pedido: 1, producto: 31, cantidad:1, productoDef: { id: 31, nombre: 'Jugo Natural Maracuya (Vaso)', precio: 1.5, color:"yellow" }, hora: "2020-02-19 17:35:55", mesero: 4, meseroDef: {id: 4, nombre: "Victoria M."}, status: 3, estadoDef: { id:3, denominacion:"Servido", color: "green" } },
          ],
        }
      ],
      estados: [
        { id:0, denominacion:"Pendiente", color: "red" },
        { id:1, denominacion:"Preparando", color: "orange" },
        { id:2, denominacion:"Listo", color: "yellow" },
        { id:3, denominacion:"Servido", color: "green" }
      ]
    },
  },
  mutations: {
    agregarIten (state, payload) {
      let res = state.tablas.ordenes.filter(function (p) {
        return p.id == payload.orden;
      });
      if (res.length >= 1) {
        res = res[0];
        var idx = res.items.findIndex(i => i.producto === payload.prd.id);
        if (~idx)
        {
          res.items[idx].cantidad += 1;
        } else {
          let currentdate = new Date(); 
          let hr = currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();
          let item = {
            id: res.items.length + 1, 
            pedido: res.id, 
            producto: payload.prd.id, 
            productoDef: payload.prd, 
            hora: hr, 
            cantidad: 1,
            mesero: state.entorno.mesero, 
            meseroDef: state.entorno.meseroDef, 
            status: 0, 
            estadoDef: state.tablas.estados[0],
          };
          res.items.push(item);
        }
        res.total += payload.prd.precio;
      }
    },
    aumentarEstatus(state, payload) {
      let res = state.tablas.ordenes.filter(function (p) {
        return p.id == payload.orden;
      });
      if (res.length >= 1) {
        res = res[0];
        let idx = res.items.findIndex(i => i.id === payload.item);
        if (~idx)
        {
          res.items[idx].status += 1;
          let est = state.tablas.estados.filter(function (p) {
            return p.id == res.items[idx].status;
          });
          if (res.length >= 1) {
            est = res[0];
            res.items[idx].estadoDef = est
          }
        }
        let est = res.items.filter(function (p) {
          return p.status < 3;
        });
        if (est.length <= 0) {
          let idx = state.tablas.ordenes.findIndex(i => i.id === payload.orden);
          if (~idx)
          {
            state.tablas.ordenes[idx].status += 1;
          }
        }
      }
    },
  },
  actions: {
    ir({commit},ruta) {
      console.log(commit);
      router.push(ruta);
    },
  },
  modules: {

  },
  getters: {
    productos: state => { return state.tablas.productos},
    mesas: state => { return state.tablas.mesas},
    meseros: state => { return state.tablas.meseros},
    ordenes: state => { return state.tablas.ordenes},
    categorias: state => { return state.tablas.categorias},
    estados: state => { return state.tablas.estados},
    ordenesConteo: state => { return state.tablas.ordenes.length},
    entorno: state => { return state.entorno },
  }
})
