
export enum FormatType {
  Simplicity = 1,
  Complete = 2,
}

export interface IFileInfo {
  name: string,
  path: string,
  createTime: number,
  author: string,
  size: number
}
