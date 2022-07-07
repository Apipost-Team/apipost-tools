// 失败结果对象
export const errorResult = (status: string, message: string) => {
  return {
    status: 'error',
    message
  }
}

export default errorResult;