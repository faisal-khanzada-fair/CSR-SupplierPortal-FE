export class CsrApiResult<T> {

    constructor(success: boolean, msg: string | null, data: T | null, error:number){
        this.success = success;
        this.msg = msg;
        this.data = data;
        this.error = error;
    }

    success: boolean = false;
    msg: string | null = null;
    data: T | null = null;
    error: number = 0;
}