export type MediaFile = {
    url: string;
    name: string;
}

export type MediaFileList = MediaFile[];

export class ApiClient {
    public getMediaList(): Promise<MediaFileList> {
        return new Promise((resolve) => {
            resolve([
                {
                    name: 'First',
                    url: 'http://localhost:3000/getFilesList'
                }
            ])
        })
    }
}
