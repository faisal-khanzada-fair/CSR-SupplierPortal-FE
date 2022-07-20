//Please do not update this file, and check the README.md file for more information on how to configure the componentLogger, 
//the intellisense error below can be ignored.
// import { componentLogger } from "appModuleDir/app.module";

export class SystemMessage {

    // private static write(messageType: SystemMessageType, componentName: string, message: string): void {
    //     if (componentLogger)
    //         componentLogger.write(messageType, "[" + componentName + "] " + message);
    // }

    // static invalidParameter(componentName: string, paramName: string, message: string): void {
    //     this.write(SystemMessageType.error, componentName, "Invalid parameter (" + paramName + ")" + (message && message.length > 0 ? (": " + message) : ""));
    // }

    // static invalidConfiguration(componentName: string): void {
    //     this.write(SystemMessageType.error, componentName, "Invalid configurations. Component will not be rendered. Please see component library for more information.");
    // }

    // static applicationError(componentName: string, message:string): void {
    //     this.write(SystemMessageType.error, componentName, message);
    // }

}

export enum SystemMessageType {
    debug = 0,
    info = 1,
    warn = 2,
    error = 3
}
