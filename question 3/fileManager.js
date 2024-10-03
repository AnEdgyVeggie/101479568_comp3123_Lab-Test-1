const filesystem = require("node:fs");

const logsDirPath = "./logs/"
const logFileContent = "Log File Created!"


try {
    // if directory does NOT exist
    if (!filesystem.existsSync(logsDirPath)) {
        filesystem.mkdirSync(logsDirPath)
        for (let fileCount = 0; fileCount < 10; fileCount++) {
            filesystem.writeFileSync(`${logsDirPath}log${fileCount + 1}.txt`, logFileContent, err =>{
                if(err === null) {
                    console.log()
                }
            })
        }
        let folderContents = filesystem.readdirSync(logsDirPath)
        console.log("CREATED ================")
        folderContents.forEach(file => {
            console.log("created: " + file)
        })
    }

    // If directory DOES exist
    else {
        let folderContents = filesystem.readdirSync(logsDirPath)
        console.log("DELETING ===============")
        folderContents.forEach(file => {
            console.log("delete: " + file)
            filesystem.unlink(`${logsDirPath}/${file}`, (err) => {
                if (err !== null) {
                    console.log("There was an issue deleting a file: " + err)
                }
            })
        });
        filesystem.rmdir(logsDirPath, err => {
            if (err) {
                console.log("An error occured in deleting the folder: " + logsDirPath)
                console.log("ERROR: " + err)
            }
        })
    }
} catch (e) {
    console.log(e)
}