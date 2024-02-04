export type FormDataType = {
  id?: number
  name: string
  sectorIds: string
  isAgree: boolean
}

export type ErrorMessageType = {
  name: string
  sectorIds: string
  isAgree: string
}

export interface SectorResponseType extends FormDataType {
  id: number
  parentId: number
}
