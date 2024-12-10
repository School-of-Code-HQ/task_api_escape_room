// async function so that we can use the await keyword
async function submitCode() {
  try {
    // Your investigation code should go here
    // Leave your lines of code in when you find something out, so that you can always come back to it and see how you got there
    const response = await fetch("/api/codes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        enter: "ROVER",
      }),
    });
    const data = await response.json();
    console.log(data);
    document.getElementById("launch").src = data.img;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

submitCode(); // calls the function above to run your code
