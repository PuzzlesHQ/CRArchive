async function main() {
    const file = Bun.file("versions.json");
    const text = await file.text();

    try {
        JSON.parse(text);
    } catch (error) {
        console.error("Invalid JSON file:");
        console.error(error);
    }
}

await main();
