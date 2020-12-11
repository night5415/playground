function entry() {
    var input = document.createElement('input');
    input.type = "file";

    if (input.files) {
        let file = input.files[0],
            type = fileType(file.type);

        switch (type) {
            case "image":
                checkImageFile();
                break;
            case "video":
                checkVideoFile();
                break;
            case "audio":
                checkAudioFile();
                break;
            default:
                break;
        }
    }

}

function fileType(file: string): string {
    return file.split('/')[0]
}

function checkVideoFile() {
//check to see if valid type.
}
function checkImageFile() {

}
function checkAudioFile() {

}