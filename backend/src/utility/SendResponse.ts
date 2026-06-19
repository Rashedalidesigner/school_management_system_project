export const sendResponse = (res: any, status: boolean, statusCode: number, message: string, data?: any, error?: any) => {
    // console.log(console.log(res));
    res.status(statusCode).json({
        status,
        message,
        data: data || null,
        error: error || null
    });
};