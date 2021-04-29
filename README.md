# Mission to Mars

Our spaceship needs to leave Earth... pronto. The only problem is that we can't figure out the launch codes for the ship - can you help us? Use the fetch protocol you learned at the academy to navigate through the information, and refer to the information in this manual.

## Training documentation for new mission recruits:

Use the following endpoint URL:

http://localhost:3000/ <!-- TODO: CHANGE TO HOSTED ONE w/ /api/ -->

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
