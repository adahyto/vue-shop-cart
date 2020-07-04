export interface Result<I> {
    name: string;
    success: boolean;
    message?: string;
    errorCode?: number;
    version?: string;
    data: I;
}