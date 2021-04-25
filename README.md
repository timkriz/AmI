# AmI: To TUI or not to TUI



## Installation

1. SOCKET STREŽNIK:

V mapi Simulation/node_server zaženi ukaz:

```
node app.js
```
(zažene websocket strežnik za komuniciranje z unityem)

2. NODE-RED:

Zaženi node-red, importaj flow iz mape Flows, deploy.

3. APLIKACIJA SENSOR NODE FREE:

Najprej v STREAM / STREAM LIVE DATA (MQTT) nastavitvah nastavite:

Izberete željene spremenljivke (accelerometer, gyrosccope...) 
• podatke vašega MQTT brokerja, npr. : tcp://broker.hivemq.com:1883
• vaš Base Topic Name (unikaten !) : AMI_TO_TUI
in vključite Mqtt streaming.

4. UNITY:

Odpreš Unity, open, in izbereš mapo Simulation/AmI Simulation v kateri se nahaja cel
Unity projekt.
Zaženi simulacijo. Nagibaj telefon. V desno/levo povečuje/zmanjšuje intenziteto,
navzgor zamenja barvo, navzdol ugasne luč. Ko obrnjen na hrbtno stran preide v način upravljanja posameznih naprav, ki se jih izbira z vrtenjem v levo/desno.

## Simulation

Simulation Unity project  (200MB) : https://drive.google.com/drive/folders/1WFl5rDGeqKjDngxLF9Ril2OmdCuGUhRi?usp=sharing
