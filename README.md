# AmI: To TUI or not to TUI



## Installation (TUI) 

1. SOCKET STREŽNIK:

V mapi Simulation/node_server zaženi ukaz:

```
node app.js
```
(zažene websocket strežnik za komuniciranje z unityem)

2. NODE-RED:

Zaženi node-red, importaj flow iz mape Flows, deploy.

![Tui](https://github.com/timkriz/AmI/blob/main/Images/tui.png)
TUI Node-red flow

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

![Simulation](https://github.com/timkriz/AmI/blob/main/Images/simulation2.png)


## Installation (GUI) 

Ob vstopu v aplikacijo dodamo novega odjemalca s klikom na gumb »+«, v zgornjem desnem kotu. Vnesemo podatke MQTT strežnika (ime, naslov, port in unikaten »topic«).
Po ustvarjenem odjemalcu, na prazno polje dodamo gumbe z ikonami.:
1.	ON/OFF… tipa switch/button, subtopic: AMI_TO_TUI/onoff,  payload: On: 1 in Off: 0
2.	CHANGE COLOR… tipa switch/button, subtopic: AMI_TO_TUI/color,  payload: On: 1 in Off: 0
3.	INC/DEC… tipa Multi choice, subtopic: AMI_TO_TUI/incdec (dodajanje opcij z »ADD OPTION«)  
  a.	OPTION1:  payload: 1, label: increase  
  b.	OPTION2:  payload: -1, label: decrease  
  c.	OPTION3:  payload: 0, label: stop  
4.	Device… tipa Multi choice, subtopic: AMI_TO_TUI/device  
  a.	OPTION1:  payload: LEFT_LIGHT, label: Left light  
  b.	OPTION2:  payload: RIGHT_LIGHT, label: Right light  
  c.	OPTION3:  payload: BLINDS, label: Blinds  
  d.	OPTION4:  payload: ALL_LIGHTS, label: All lights  


![Gui part](https://github.com/timkriz/AmI/blob/main/Images/GUI_image.png)


