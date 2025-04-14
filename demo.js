const cds = require('@sap/cds')
// define the model
var model = {definitions:{
    Products: {kind:'entity', elements:{
        ID: {type:'Integer', key:true},
        title: {type:'String', length:11, localized:true},
        description: {type:'String', localized:true},
    }},
    Orders: {kind:'entity', elements:{
        product: {type:'Association', target:'Products'},
        quantity: {type:'Integer'},
    }},
}}

// do something with it
console.log (cds.compile.to.yaml (model))