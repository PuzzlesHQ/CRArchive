import jsonData from "./../versions.json";

function main() {
  try {
    JSON.parse(jsonData);
  } catch (err) {
    console.error("The JSON is invalid!", err);
  }
}

main();
