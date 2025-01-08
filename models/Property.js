const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  tipoOperacion: {
    type: String,
    enum: ['compra', 'venta', 'alquiler', 'alquiler temporario'],
    required: true,
  },
  
  tipoPropiedad: {
    type: String,
    enum: ['casa', 'lote', 'departamento', 'local comercial', 'campo', 'barrio cerrado'],
    required: true,
  },
  cantidadAmbientes: {
    type: String,
    enum: ['1', '2', '3', '4', 'mas de 4'],
    required: true,
  },
  nombre_propietario: {type: String, required: true},
  email_propietario: {type: String, required: true},
  tel_propietario: {type: String, required: true},
  barrio: {type: String, required: true},
  ciudad: {type: String, required: true},
  imagen: {type: String},
  gallery: { type: [String], default: [] },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  expensas: { type: Number, default: 0.0 },
  amenities: { type: [String], default: [] },
  antiguedad: {type: Number, required: true},
  metrosTotales: { type: Number, required: true },
  fechaPublicacion: { type: Date, default: Date.now },
  estado: {
    type: String,
    enum: ['disponible', 'no disponible', 'reservado', 'vendido'],
    required: true,
  },
});

module.exports = mongoose.model('Property', propertySchema);
