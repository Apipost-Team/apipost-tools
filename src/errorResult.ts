// 失败结果对象
export const errorResult = (message: string) => {
  return {
    status: 'error',
    message
  }
}

export default errorResult;