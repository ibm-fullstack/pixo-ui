export class UploadInfo {
    uploadFile: File;
    caption: string;

    constructor(uploadFile: File, caption: string) {
        this.uploadFile = uploadFile;
        this.caption = caption;
    }
}
