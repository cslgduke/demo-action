const express = require('express');
const util = require("util");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.put('/tenants/*',jsonParser, function (req, res) {
    console.log('Receive Provisioning body:\n ', JSON.stringify(req.body),'\n');
    console.log('Receive Provisioning params:\n ', JSON.stringify(req.params),'\n');
    console.log('Receive Provisioning query:\n ', JSON.stringify(req.query),'\n');
    console.log('requset headers:\n',JSON.stringify(req.headers),'\n');
    res.writeHead(200,"OK");
    // data = JSON.parse("{}");
    // data['applicationURL'] = 'https://rgp.rgm-dev.rgm-kyma-dev-live.rgm.eurekacloud.io/login?application=rgp';
    // res.write( JSON.stringify(data));
    res.write("Ok");
    res.end();
});

app.put('/tenants/sms/*',jsonParser, function (req, res) {
  console.log('Receive Provisioning body:\n ', JSON.stringify(req.body),'\n');
  console.log('Receive Provisioning params:\n ', JSON.stringify(req.params),'\n');
  console.log('Receive Provisioning query:\n ', JSON.stringify(req.query),'\n');
  console.log('requset headers:\n',JSON.stringify(req.headers),'\n');
  res.writeHead(200,"OK");
  data = JSON.parse("{}");
  data['applicationURL'] = 'https://rgp.rgm-dev.rgm-kyma-dev-live.rgm.eurekacloud.io/login?application=rgp';
  res.write( JSON.stringify(data));

  res.end();
});

app.delete('/tenants/*', function (req, res) {
  console.log('Receive Deleting body:\n ', JSON.stringify(req.body),'\n');
    console.log('Receive Deleting params:\n ', JSON.stringify(req.params),'\n');
    console.log('Receive Deleting query:\n ', JSON.stringify(req.query),'\n');
    console.log('requset headers:\n',JSON.stringify(req.headers),'\n');
  res.writeHead(200,"OK");
  res.write("Ok");
  res.end();
});


app.delete('/tenants/sms/*', function (req, res) {
  console.log('Receive Deleting body:\n ', JSON.stringify(req.body),'\n');
    console.log('Receive Deleting params:\n ', JSON.stringify(req.params),'\n');
    console.log('Receive Deleting query:\n ', JSON.stringify(req.query),'\n');
    console.log('requset headers:\n',JSON.stringify(req.headers),'\n');
  res.writeHead(200,"OK");
  res.write("Ok");
  res.end();
});

app.get('/dependency', function (req, res) {
  res.writeHead(200,{'Content-Type': 'application/json'});
  data = JSON.parse( "[]" );
  xsuaa = JSON.parse("{}");
  xsuaa['xsappname'] = 'dpi-enablement-inst!b7239|data-privacy-integration-service!b748';
  data[0] = xsuaa;

  xsuaa2 = JSON.parse( "{}" );
  xsuaa2['xsappname'] = '4afd3c4b-1c94-48fc-acb9-aca22bec6811!b7239|auditlog!b11';
  data[1] = xsuaa2;

  res.write( JSON.stringify(data));
  res.end();
});


app.get('/dependency/dpi', function (req, res) {
  res.writeHead(200,{'Content-Type': 'application/json'});
  data = JSON.parse( "[]" );
  xsuaa = JSON.parse("{}");
  xsuaa['xsappname'] = 'xsuaa-rgm!b8196|data-privacy-integration-service!b748';
  data[0] = xsuaa;

  res.write( JSON.stringify(data));
  res.end();
});

app.get('/dependency/dpi2', function (req, res) {
  res.writeHead(200,{'Content-Type': 'application/json'});
  data = JSON.parse( "[]" );
  xsuaa = JSON.parse("{}");
  xsuaa['xsappname'] = 'xsuaa-rgm-2!b8196|data-privacy-integration-service!b748';
  data[0] = xsuaa;

  res.write( JSON.stringify(data));
  res.end();
});

app.get('/dependency/rgm', function (req, res) {
  res.writeHead(200,{'Content-Type': 'application/json'});
  data = JSON.parse( "[]" );
  xsuaa = JSON.parse("{}");
  xsuaa['xsappname'] = 'rgmbroker!b7239|rgm!b7239';
  data[0] = xsuaa;

  xsuaa2 = JSON.parse( "{}" );
  xsuaa2['xsappname'] = 'dpi-enablement-inst!b7239|data-privacy-integration-service!b748';
  data[1] = xsuaa2;

  res.write( JSON.stringify(data));
  res.end();
});

app.get('/dependency/rgp-uat', function (req, res) {
  res.writeHead(200,{'Content-Type': 'application/json'});
  data = JSON.parse( "[]" );
  xsuaa = JSON.parse("{}");
  xsuaa['xsappname'] = 'rgmbroker!b7239|rgp-uat--rgp!b5173';
  data[0] = xsuaa;

  res.write( JSON.stringify(data));
  res.end();
});

app.get('/dependency/dpi-next-gen', function (req, res) {
  res.writeHead(200,{'Content-Type': 'application/json'});
  data = JSON.parse( "[]" );
  xsuaa = JSON.parse("{}");
  xsuaa['xsappname'] = 'xsuaa-rgm-ng-information!b368443|data-privacy-integration-service!b26568';
  data[0] = xsuaa;

  xsuaa2 = JSON.parse( "{}" );
  xsuaa2['xsappname'] = 'xsuaa-rgm-ng-retention!b368443|data-privacy-integration-service!b26568';
  data[1] = xsuaa2;

  res.write( JSON.stringify(data));
  res.end();
});

app.get('/dependency/sbpa', function (req, res) {
  res.writeHead(200,{'Content-Type': 'application/json'});
  data = JSON.parse( "[]" );
  xsuaa = JSON.parse("{}");
  xsuaa['xsappname'] = '27a5a289-f9b8-4756-98b3-bb20f527bf54!b368443|xsuaa!b120249';
  data[0] = xsuaa;

  res.write( JSON.stringify(data));
  res.end();
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});