export type URLSearchParamsInit = ConstructorParameters<typeof URLSearchParams>[0]

export interface Request {
    path: string
    params?: URLSearchParamsInit
}