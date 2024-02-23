# Mission to Mars

Cadet, you've joined us at a critical point, and we need your help. A bit of background first perhaps...

Well... it's all a bit of a mess. The popularity of selfie-sticks, combined with the technological advances of AI, means that we have arrived at a critical point in human evolution - SENTIENT SELFIE STICKS! At first, it was all fine - better selfies brought world peace. But soon, taking selfies wasn't enough - these robotic parasites rose up and now are about to become our overlords! We need to leave this planet, now! Luckily, we we've been planning this escape for a while and have a fully kitted out, top of the line, pimped out spaceship. We need to launch it... pronto.

The only problem is that we can't figure out the launch codes for the ship. Somebody must have changed them and then forgotten about it... can you help us? Our ship is full of our crew including our trusty AI IT system (don't worry, it's one of the good ones). We need you to work out our launch codes, submit them to the system, and then (fingers crossed) get us out of here and heading to Mars... no sentient selfie sticks there.

Use the fetch protocol you learned at the academy to interact with our mission API, and refer to the information in this manual to navigate it.

You'll need to run this project using the ancient tecnology [Node.JS](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs). You can either install Node.JS (called Node for short) [directly](https://nodejs.org/en/download) or using a package manage like [nvm](https://nodejs.org/en/download/package-manager#nvm) or [nvs](https://nodejs.org/en/download/package-manager#nvs).

## Important Instruction

Do not, under any circumstances, look through these files until AFTER you've finished the challenge! It will mean you don't learn much and don't need to engage well with the problem if you sneak a peek.

Do you promise no to?

Ok, I believe you!

## Setting up the server

Clone down this project, and run it by following these steps:

- install all the necessary packages using `npm install`
- run the server by using `npm start`

Use the following api endpoint to try and help us: http://localhost:3000/api

Good luck cadet!

## Training documentation for new mission recruits:

Use the following endpoint URL:

http://localhost:3000/api

### GET request to /logs

Returns a list of all the logs.

### GET request to /personnel/:id

Returns the relevent personnel record matching the id passed in as a path parameter.

### GET request to /messages

This endpoint accepts the following query parameter:

- `to` - searches using which personnel id sent the message; returns all messages sent by the relevant person

### GET request to /hint

Returns pertinent information about sending the correct code.

### POST request to /codes

Accepts a JSON object in the body of the request with the correct property:

```js
{
    "enter": "codehere"
}
```
