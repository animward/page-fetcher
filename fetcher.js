// install and use request library
const request = require('request');

// use Node's fs (file system)
const fs = require('fs');

// function to download URL to local directory

const args = process.argv.slice(2);
const url = args[0];
const filePath = args[1];

const downloadResource = (url, filePath) => {
    // make HTTP request
    request(url, (error, response, body) => {
        if (error) {
            console.error("Error occurred while making HTTP request", error);
            return;
        }

        if (response.statusCode !== 200) {
            console.error(`Failed to download resource. Status code: ${response.statusCode}`);
            return
        }

        fs.writeFile(filePath, body, (err) => {
            if (err) {
                console.error("Error occurred while writing to file:", err);
                return;
            }

            const fileSize = body.length;
            console.log(`Downloaded and saved ${fileSize}bytes to ${filePath}`);
        })
    })
};
    



downloadResource(url, filePath);