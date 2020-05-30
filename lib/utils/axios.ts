import { AxiosError } from "axios"

export const defaultHeaders = {
  "Content-Type": "application/json"
}

export function authorizedHeader(hash: string) {
  if (!hash) {
    return {}
  }

  return { "Authorization": `${hash}` }
}

export function getErrorMessage(err: AxiosError): string {
  if (err.response) {
    if (err.response.data.message) {
      return err.response.data.message
    }
  }
  return err.message
}
