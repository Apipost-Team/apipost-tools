// 成功结果对象
export const successResult = (status: string, data: any) => {
  return {
    status: 'success',
    data
  }
}

export default successResult;